export const Footer = () => {
  return (
    <>
      <footer className="bg-background p-4">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}
        </span>
      </footer>
    </>
  )
}
