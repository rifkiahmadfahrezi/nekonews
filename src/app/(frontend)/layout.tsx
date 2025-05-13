import React from 'react'
import './styles.css'
import { Geist } from 'next/font/google'
import { AllProviders } from '@/components/providers/all'
import { siteConfig } from '@/config/site'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${geist.className} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  )
}
