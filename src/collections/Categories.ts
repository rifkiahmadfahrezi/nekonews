import type { CollectionConfig } from 'payload'
import { isAdmin } from './access/helper'
import { slugify } from '@/lib/helper'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
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
          ({ value, data }) =>
            !value && data?.name ? slugify(data.name) : slugify(value),
        ],
      },
    },
  ],
}
