import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PixelInput, PixelButton } from '../components/ui';
import { getSignIn } from '../components/api/getSignIn';

const SignInWrapper = styled.div`
  width: 100%;
`;

const SignInTitle = styled.div`
  margin: 48px;
  font-size: 48px;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 28px;
  width: 100%;
`;

const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 14px;
  width: 100%;
`;

const SignInput = styled(PixelInput)`
  height: 48px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const SignInButton = styled(PixelButton)``;

export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClickSignIn = async (): Promise<void> => {
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await getSignIn({ email, password });
      const token = response.data.token;

      if (token) {
        localStorage.setItem('jwtToken', token);
        navigate('/blog');
      }
    } catch (error) {
      setError('Failed to sign in. Please try again.');
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignInWrapper>
      <SignInContainer>
        <SignInTitle>Sign in</SignInTitle>
        <SignInContainer className="nes-field">
          <SignInput value={email} onChange={(e) => setEmail(e.target.value)} label="Email" width="480px" />
        </SignInContainer>
        <SignInContainer className="nes-field">
          <SignInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            width="480px"
          />
        </SignInContainer>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <SignInContainer>
          <SignInButtonContainer>
            <SignInButton type="button" label="Sign In" width="480px" onClick={handleClickSignIn} disabled={loading} />
          </SignInButtonContainer>
          <SignInButtonContainer>
            <SignInButton htmlType="button" label="Sign Up" type="primary" width="480px" />
          </SignInButtonContainer>
        </SignInContainer>
      </SignInContainer>
    </SignInWrapper>
  );
};
