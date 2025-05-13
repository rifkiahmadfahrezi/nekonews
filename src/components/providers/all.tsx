'use client'

import { ThemeProvider } from './theme-provider'

export const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  </>
)
