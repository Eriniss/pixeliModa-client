import base64 from 'base-64';

type JwtPayload = {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export const jwtDecode = (jwt: string) => {
  if (!jwt) {
    console.error('JWT token not found');
    return null;
  }

  const tokenParts = jwt.split('.');

  if (tokenParts.length !== 3) {
    console.error('Invalid JWT token');
    return null;
  }

  const base64Payload = tokenParts[1];

  // Base64 패딩 처리
  const paddedBase64 = base64Payload.padEnd(base64Payload.length + ((4 - (base64Payload.length % 4)) % 4), '=');

  const decodedPayload = base64.decode(paddedBase64);

  try {
    const payload: JwtPayload = JSON.parse(decodedPayload);
    const { id, email, role, iat, exp } = payload;
    return { id, email, role, iat, exp };
  } catch (error) {
    console.error('Error parsing JWT payload', error);
    return null;
  }
};
