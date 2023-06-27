import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface LoadingErrorProps {
  loading: boolean
  error: Error | null
}

const LoadingError: React.FC<LoadingErrorProps> = ({ loading, error }) => {
  return <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    py={40}
  >
    {loading && <CircularProgress />}
    {error &&
      <Typography
        variant="h3"
        component="h4"
        color="error"
      >
        Error: {error.message}
      </Typography>}
  </Box>
}

export default LoadingError