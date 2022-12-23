import api from '../config/services/api'

interface SignInProps {
  email: string
  password: string
}

export const signInAdmin = ({ email, password }: SignInProps) => {
  return new Promise<void>((resolve, reject) => {
    api
      .post('/login', { email, password })
      .then(() => {
        resolve()
      })
      .catch((err: unknown) => {
        reject(err)
      })
  })
}
