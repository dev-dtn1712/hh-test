import { createTheme } from '@mui/material/styles'
import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

const theme = createTheme({
  palette,
  typography,
  spacing: 4,
  shape: {
    borderRadius: 10
  },
  components
})

export default theme
