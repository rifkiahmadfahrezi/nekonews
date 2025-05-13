'use client'

import { ThemeProvider } from './theme-provider'
import { QueryProvider } from './query-provider'

export const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  </>
)
