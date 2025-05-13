import type { User } from '../../payload-types'
import type { Access } from 'payload'

export const isAdmin: Access<User> = ({ req: { user } }): boolean => {
  return user?.role === 'admin'
}
