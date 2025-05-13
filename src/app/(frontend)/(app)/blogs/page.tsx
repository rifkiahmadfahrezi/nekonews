import { BlogList } from '@/features/blogs/blog-list'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
}

export default function BlogsPage() {
  return <BlogList />
}
