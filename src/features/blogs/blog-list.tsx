'use client'

import { useBlogs } from './query/use-blogs'
import { Card, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { BlogsSkeleton } from './blogs-skeleton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/cn'

export const BlogList = () => {
  const { data, isLoading } = useBlogs()

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-medium">Blog list</h3>
          <Button variant={'link'} asChild>
            <Link href={'/blogs'}>View more</Link>
          </Button>
        </div>
        {isLoading ? (
          <BlogsSkeleton />
        ) : (
          <>
            <div className={cn(`grid gap-3 grid-cols-2 md:grid-cols-4 mt-8`)}>
              {data?.docs.map((blog) => (
                <Card
                  key={blog.id}
                  className="p-1 hover:-translate-y-0.5 transition duration-150"
                >
                  <figure className="aspect-video rounded-xl border overflow-hidden">
                    <Link href={`/blogs/${blog.slug}`}>
                      <Image
                        src={blog.banner.url || ''}
                        alt={blog.title}
                        width={300}
                        height={300}
                        className="w-full"
                      />
                    </Link>
                  </figure>

                  <header className="pt-0 p-2">
                    <time
                      className="text-xs my-2 text-muted-foreground"
                      dateTime={new Date(blog.createdAt).toLocaleDateString()}
                    >
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </time>

                    <CardTitle>
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </CardTitle>

                    <div className="mt-2 flex flex-wrap items-center gap-1">
                      {blog.categories.map((c) => (
                        <span
                          className="py-0.5 px-1 rounded text-xs bg-primary/10 text-primary"
                          key={c.name}
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </header>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
