import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

type SignInIdPwTypes = {
  email: string;
  password: string;
};

export const getSignIn = async (
  props: SignInIdPwTypes
): Promise<AxiosResponse<any>> => {
  const { email, password } = props;

  const apiUrl = 'http://localhost:3030/users/sign-in';
  const timeout = Number(process.env.API_TIMEOUT) || 10000;

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
    console.log('Response Data:', response.data); // 응답 데이터 확인
    return response;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};
