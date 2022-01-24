import MainLayout from '@/components/common/MainLayout'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme'
import { CssBaseline } from '@mui/material'
import { AppProps } from 'next/app'


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <ThemeProvider theme={theme}>{/* Emotionで定義したテーマを注入 */}
      <CssBaseline />{/* normarize.cssの代替 */}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}

