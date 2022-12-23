import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    lightgrey: {
      main: string
    }
    morelightgrey: {
      main: string
    }
    lightgreyTransparent: {
      main: string
    }
  }
  interface ThemeOptions {
    lightgrey?: {
      main?: string
    }
    morelightgrey?: {
      main?: string
    }
    lightgreyTransparent?: {
      main?: string
    }
  }
}

const theme = createTheme({
  lightgrey: {
    main: '#818181',
  },
  morelightgrey: {
    main: '#DDDDDD',
  },
  lightgreyTransparent: {
    main: 'rgba(150,150,150,.2)',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#17aae3',
      contrastText: 'white',
    },
    secondary: {
      main: '#dd4291',
      contrastText: 'white',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FFC107',
    },
  },
})

export default theme
