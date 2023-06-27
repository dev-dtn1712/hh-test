import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AuthContext } from '@/contexts/AuthContext'
import { themeUtils } from '@/theme/themeUtils'

const TopNav = () => {
  const { logout, name, login } = useContext(AuthContext)
  const router = useRouter();

  const handleLogin = () => {
    if (name) {
      logout()
    } else {
      login(name)
    }
  }

  const goHome = () => {
    router.push('/')
  }

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: themeUtils.spacing(2, 5),
        width: "100%",
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'divider',
        backgroundColor: (theme) => theme.palette.background.light,
        zIndex: 9
      }}
    >
      <Image
        onClick={goHome}
        alt="logo"
        src="/logo.svg"
        width={100}
        height={40}
      />
      <Box>
        {name &&
          <Link href="/posts" passHref>
            <Button variant="text" color="primary">Posts</Button>
          </Link>
        }
        <Link href="/login" onClick={handleLogin} passHref>
          <Button variant="text" color="primary">{name ? "Logout" : "Login"}</Button>
        </Link>
      </Box>
    </Box>
  )
}

export default TopNav