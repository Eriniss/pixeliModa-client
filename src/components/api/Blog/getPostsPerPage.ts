import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { PostsResponseTypes } from '../../type/Blog';

type GetPostsPerPageTypes = Partial<{
  currentPage: number;
  perPage: number;
}>;

export const getPostsPerPage = async ({ currentPage = 1, perPage = 10 }: GetPostsPerPageTypes = {}): Promise<
  AxiosResponse<PostsResponseTypes>
> => {
  const apiUrl = `${process.env.REACT_APP_API_URL}/blog/posts`;
  const timeout = Number(process.env.REACT_APP_API_TIMEOUT) || 10000;

  const config: AxiosRequestConfig = {
    url: apiUrl,
    method: 'get',
    timeout: timeout,
    params: {
      page: currentPage,
      limit: perPage,
    },
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error('Error during load posts:', error);
    throw error;
  }
};
