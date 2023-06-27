import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { AuthContext } from '@/contexts/AuthContext'

const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext)
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(name)
    router.push('/posts')
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={40}
    >
      <h2>Login With Your Name</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            width: '100%',
          }}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="outlined"
          required
        />
        <Button
          sx={{
            width: '100%',
            marginTop: 2
          }}
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default LoginPage
