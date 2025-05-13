import { Hero } from '@/components/layouts/hero'
import { BlogList } from '@/features/blogs/blog-list'

export default function Home() {
  return (
    <>
      <div className="space-y-5 my-20">
        <Hero />
        <BlogList />
      </div>
    </>
  )
}
