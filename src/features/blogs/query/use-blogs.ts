'use client'

import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api'
import type { PayloadResponse, PopulatedBlog } from '@/types/payload'

export const useBlogs = () => {
  return useQuery({
    queryKey: ['all-blogs'],
    queryFn: async () =>
      await api<PayloadResponse<PopulatedBlog[]>>('/blogs?depth=1&draft=false'),
  })
}
