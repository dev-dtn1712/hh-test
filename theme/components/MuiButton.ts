import { Components } from '@mui/material/styles'
import { themeUtils } from '@/theme/themeUtils'
import { Colors } from '../palette'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true
    light: true
  }

  interface ButtonPropsColorOverrides {
    black: true
    blue: true
    light: true
  }
}

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true
  },
  styleOverrides: {
    sizeLarge: {
      height: 48,
      minWidth: 140,
      paddingLeft: themeUtils.spacing(5),
      paddingRight: themeUtils.spacing(5)
    },
    sizeSmall: {
      fontSize: 14
    }
  },
  variants: [
    {
      props: {
        variant: 'gradient'
      },
      style: {
        color: Colors.background,
        background: `linear-gradient(-84.45deg, ${Colors.primary}, ${Colors.tint})`
      }
    },
    {
      props: {
        variant: 'light'
      },
      style: {
        background: Colors.buttonGrey
      }
    }
  ]
}
