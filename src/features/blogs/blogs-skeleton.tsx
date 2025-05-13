import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/cn'

export interface Props extends React.ComponentProps<'div'> {
  num?: number
}
export const BlogsSkeleton = ({ num = 4, className, ...props }: Props) => (
  <div
    className={cn(`grid gap-3 grid-cols-2 md:grid-cols-4`, className)}
    {...props}
  >
    {Array(num)
      .fill(0)
      .map((_, i) => (
        <Skeleton key={i} className="h-full min-h-32 w-full rounded" />
      ))}
  </div>
)
