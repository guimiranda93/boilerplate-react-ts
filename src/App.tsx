import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './config/theme'
import RoutesComponent from './routes'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <RoutesComponent />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
