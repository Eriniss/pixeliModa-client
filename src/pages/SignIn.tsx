import styled from 'styled-components';

const EmailInput = styled.input`
  width: 380px;
  height: 48px;

  &:focus {
    outline: none;
  }
`;

export const SignIn = () => {
  return (
    <div>
      <div>SignIn</div>
      <div className="nes-field">
        <label htmlFor="name_field">Your name</label>
        <EmailInput id="name_field" className="nes-input" />
      </div>
    </div>
  );
};
