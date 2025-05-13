'use client'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { cn } from '@/lib/cn'

interface Props extends React.ComponentProps<'div'> {
  data: SerializedEditorState
}
export const BlogRenderer = ({ data, className, ...props }: Props) => {
  const html = convertLexicalToHTML({ data })

  return (
    <div
      className={cn('prose dark:prose-invert ', className)}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
