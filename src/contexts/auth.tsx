/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useEffect, ReactNode, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/services/api';
import { UserProps } from '../config/types/userProps';
import * as Auth from '../services/auth';

interface SignInProps {
  email: string;
  password: string;
}

interface ContextProps {
  user: UserProps | null;
  signIn: ({ email, password }: SignInProps) => Promise<unknown>;
  signOut: () => void;
}

const storage = sessionStorage;

const AuthContext = createContext<ContextProps>({
  user: null,
  signIn: async () => {},
  signOut: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const history = useNavigate();

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = storage.getItem('@Auth:user');

      if (storagedUser) {
        const userJson: UserProps = JSON.parse(storagedUser);
        api.defaults.headers.common = {
          Authorization: `${userJson.tokenType} ${userJson.accessToken}`,
        };
        setUser(userJson);
      }
    }

    loadStorageData();
  }, []);

  const signIn = async ({ email, password }: SignInProps) => {
    return new Promise((_resolve, reject) => {
      Auth.signIn({ email, password })
        .then((response) => {
          api.defaults.headers.common = {
            Authorization: `${response.user.tokenType} ${response.user.accessToken}`,
          };

          setUser(response.user);
          storage.setItem('@Auth:user', JSON.stringify(response.user));
          storage.setItem('@Auth:admin', 'true');
        })
        .catch((err) => {
          if (err?.response?.data?.code) {
            reject({ code: err?.response?.data?.code, message: err?.response?.data?.message });
          } else {
            reject({ code: 0, message: 'Unknow error, contact the administrator.' });
          }
        });
    });
  };

  const signOut = async () => {
    storage.clear();
    setUser(null);
    history('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
