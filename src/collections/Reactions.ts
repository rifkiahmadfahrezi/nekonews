import type { CollectionConfig } from 'payload'

export const Reactions: CollectionConfig = {
  slug: 'reactions',
  access: {
    read: () => true,
    create: ({ req: { user } }) => ({
      createdBy: {
        equals: user?.id,
      },
    }),
    update: ({ req: { user } }) => ({
      createdBy: {
        equals: user?.id,
      },
    }),
    delete: ({ req: { user } }) => ({
      createdBy: {
        equals: user?.id,
      },
    }),
  },
  fields: [
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        readOnly: true,
      },
      defaultValue: ({ user }) => user?.id,
    },
    {
      name: 'relatedTo',
      type: 'relationship',
      relationTo: 'blogs',
      required: true,
    },
  ],
}
