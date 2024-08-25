import { useState } from 'react';
import styled from 'styled-components';
import { PixelInput } from '../components/ui';

const SignInWrraper = styled.div`
  width: 100%;
`;

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SignInput = styled(PixelInput)`
  height: 48px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SignInWrraper>
      <SignInContainer>
        <div>Sign in</div>
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
      </SignInContainer>
    </SignInWrraper>
  );
};
