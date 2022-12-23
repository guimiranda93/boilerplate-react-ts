import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const RoutesComponent = () => {
  const isSigned = false

  if (isSigned) {
    return <AppRoutes />
  } else {
    return <AuthRoutes />
  }
}

export default RoutesComponent
