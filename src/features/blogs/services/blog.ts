import type { PayloadResponse, PopulatedBlog } from '@/types/payload'
import { notFound } from 'next/navigation'
import { api } from '@/lib/api'

export const getSingleBlog = async (slug: string): Promise<PopulatedBlog> => {
  try {
    const res = await api<PayloadResponse<PopulatedBlog[]>>(
      `/blogs?depth=1&draft=false&where%5Bslug%5D%5Bequals%5D=${slug}`,
    )
    if (!res || res.docs?.length === 0) notFound()
    console.log(res)

    return res.docs[0]
  } catch (error) {
    console.error(error)
    throw error
  }
}
