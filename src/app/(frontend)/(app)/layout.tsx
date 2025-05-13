import { Navbar } from '@/components/layouts/navbar'
import { Footer } from '@/components/layouts/footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-svh">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
