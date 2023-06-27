import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import { AuthProvider } from '../contexts/AuthContext'

import theme from '../config/theme'
import createEmotionCache from '../config/createEmotionCache'
import Layout from '@/containers/Layout/Layout'

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </AuthProvider>
  )
}
