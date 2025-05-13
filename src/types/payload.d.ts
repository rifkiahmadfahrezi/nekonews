import type { Blog, Media, Category } from '@/payload-types'

export type PayloadResponse<T> = {
  docs: T
  hasNextPage: boolean
  hasPrevPage: boolean
  limit: number
  nextPage: null | number
  prevPage: null | number
  page: number
  totalDocs: number
  totalPages: number
}

export type PopulatedBlog = Omit<Blog, 'banner' | 'categories'> & {
  banner: Media
  categories: Category[]
}
