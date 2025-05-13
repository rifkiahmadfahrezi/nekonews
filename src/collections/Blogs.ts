import type { CollectionConfig } from 'payload'
import { isAdmin } from './access/helper'
import { slugify } from '@/lib/helper'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    delete: isAdmin,
    create: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: 'banner',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      hidden: true,
      defaultValue: ({ req: { user } }) => {
        return user?.id
      },
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'Generated from title',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => (!value && data?.title ? slugify(data.title) : slugify(value)),
        ],
      },
    },
  ],
}
