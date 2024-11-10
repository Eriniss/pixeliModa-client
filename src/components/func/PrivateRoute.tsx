import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: React.ReactNode | null;
};

export const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element | null => {
  const jwt = localStorage.getItem('jwtToken');

  return jwt ? <>{children}</> : <Navigate to="/signIn" />;
};
