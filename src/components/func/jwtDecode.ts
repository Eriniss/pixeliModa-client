import base64 from 'base-64';

type JwtPayload = {
  [key: string]: any;
};

export const jwtDecode = () => {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    console.error('JWT token not found in localStorage');
    return null;
  }

  const tokenParts = token.split('.');

  const base64Payload = tokenParts[1];
  const decodedPayload = base64.decode(base64Payload);

  try {
    const payload: JwtPayload = JSON.parse(decodedPayload);
    return payload;
  } catch (error) {
    console.error('Error parsing JWT payload', error);
    return null;
  }
};
