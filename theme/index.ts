import { createTheme } from '@mui/material'
import {
  indigo,
  red,
  green,
  grey
} from '@mui/material/colors'

// MUIのテーマに追加したプロパティは型を拡張する
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    tablet: true
  }
}

// TODO 文字の大きさをTypographyで管理したい
export const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'tablet'],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      tablet: 768
    }
  },
  palette: {
    primary: {
      main: indigo[700]
    },
    error: {
      main: red[600]
    },
    success: {
      main: green[600]
    },
    background: {
      default: grey[200]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%'
        },
        body: {
          margin: 0,
          height: '100%',
          width: '100%'
        },
        '#__next': {
          height: '100%',
          width: '100%'
        },
        main: {
          height: '100%',
          backgroundColor: 'white'
        },
        footer: {
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }
      }
    }
  }
})