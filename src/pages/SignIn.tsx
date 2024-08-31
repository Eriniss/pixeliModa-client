import { useState } from 'react';
import styled from 'styled-components';
import { PixelInput, PixelButton } from '../components/ui';

const SignInWrraper = styled.div`
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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SignInWrraper>
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
        <SignInContainer>
          <SignInButtonContainer>
            <SignInButton label="Sign In" width="480px" />
          </SignInButtonContainer>
          <SignInButtonContainer>
            <SignInButton label="Sign Up" type="primary" width="480px" />
          </SignInButtonContainer>
        </SignInContainer>
      </SignInContainer>
    </SignInWrraper>
  );
};
