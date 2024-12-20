import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

type SignInIdPwTypes = {
  email: string;
  password: string;
};

export const getSignIn = async (props: SignInIdPwTypes): Promise<AxiosResponse<any>> => {
  const { email, password } = props;

  const apiUrl = `${process.env.REACT_APP_API_URL}/users/sign-in`; //|| 'http://localhost:8080';
  const timeout = Number(process.env.REACT_APP_API_TIMEOUT) || 10000;

  const config: AxiosRequestConfig = {
    url: apiUrl,
    method: 'post',
    timeout: timeout,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      email,
      password,
    }),
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};
