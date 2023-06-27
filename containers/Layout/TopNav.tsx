import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AuthContext } from '../../contexts/AuthContext'

const TopNav = () => {
  const { logout, name, login } = useContext(AuthContext)

  const handleLogin = () => {
    if (name) {
      logout()
    } else {
      login(name)
    }
  }
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 40px",
        width: "100%",
        borderBottom: "1px solid #c2c2c2",
        backgroundColor: "white",
        zIndex: 9
      }}
    >
      <Link
        className="center"
        href="/"
        passHref
      >
        <Image
          alt="logo"
          src="/logo.svg"
          width={100}
          height={40}
        />
      </Link>
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