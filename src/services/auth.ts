// import api from '../config/services/api';
import api from '../config/services/api';
import { UserProps } from '../config/types/userProps';

interface SignInProps {
  email: string;
  password: string;
}

interface LoginResponseAdmin {
  user: UserProps;
}

export const signIn = ({ email, password }: SignInProps) => {
  return new Promise<LoginResponseAdmin>((resolve, reject) => {
    api
      .post('/login', { email, password })
      .then((res) => {
        resolve({
          user: {
            data: {
              name: res.data.name,
              email: res.data.email,
            },
            tokenType: 'Bearer',
            accessToken: res.data.token,
          },
        });
      })
      .catch((err: unknown) => {
        reject(err);
      });
  });
};
