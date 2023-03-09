import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './config/theme';
import { AuthProvider } from './contexts/auth';
import RoutesComponent from './routes';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <AuthProvider>
            <RoutesComponent />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
