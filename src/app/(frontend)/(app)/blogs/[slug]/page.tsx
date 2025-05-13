import { BlogRenderer } from '@/features/blogs/blog-renderer'
import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getSingleBlog } from '@/features/blogs/services/blog'
import { notFound } from 'next/navigation'

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const res = await getSingleBlog(slug)

  if (!res) notFound()

  return (
    <>
      <article className="isolate">
        <figure className="relative w-full max-h-68 overflow-hidden after:content-[''] -z-10 after:inset-0 after:absolute after:bg-gradient-to-t after:to-transparent after:from-background">
          <Image
            priority
            className="w-full h-full object-cover"
            src={res.banner.url || ''}
            alt={res.title}
            width={700}
            height={500}
          />
        </figure>

        <div className="max-w-screen-xl mx-auto px-3 -mt-28 p-10">
          <time
            className="text-xs my-2 text-muted-foreground"
            dateTime={new Date(res.createdAt).toLocaleDateString()}
          >
            {new Date(res.createdAt).toLocaleDateString()}
          </time>
          <div className="mt-2 flex flex-wrap items-center gap-1 my-10">
            {res.categories.map((c) => (
              <span
                className="py-0.5 px-1 rounded text-xs bg-primary/10 text-primary"
                key={c.id}
              >
                {c.name}
              </span>
            ))}
          </div>

          <header className="mb-20">
            <h1 className="text-3xl md:text-5xl font-semibold">{res.title}</h1>
          </header>

          <BlogRenderer className="max-w-screen-lg" data={res.content} />
        </div>
      </article>
    </>
  )
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const res = await getSingleBlog(slug)

  return {
    title: res.title,
    openGraph: {
      type: 'website',
      url: siteConfig.title,
      title: res.title,
      description: res.title,
      siteName: siteConfig.title,
      images: [{ url: res.banner.url || '' }],
    },
  }
}
