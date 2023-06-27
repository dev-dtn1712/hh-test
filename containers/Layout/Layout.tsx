import Container from '@mui/material/Container'
import TopNav from './TopNav'

export interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopNav />
      <Container
        maxWidth="lg"
        sx={{ maxHeight: "100vh", paddingTop: "56px" }}
      >
        {children}
      </Container>
    </>
  )
}

export default Layout
