import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

type PixelInputTypes = {
  value: string | number;
  type?: string;
  defaultValue?: string | number;
  label?: string;
  inputType?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  width?: string;
};

type PixelInputBoxType = { $width?: string };

const PixelInputBox = styled.input<PixelInputBoxType>`
  width: ${(props) => props.$width};
`;

export const PixelInput = (props: PixelInputTypes) => {
  const { value, type, inputType, label, placeholder, defaultValue, width, onChange } = props;

  return (
    <div className="nes-field">
      <label htmlFor="name_field">{label}</label>
      <PixelInputBox
        id="name_field"
        className={`nes-input is-${inputType}`}
        defaultValue={defaultValue}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        $width={width}
      />
    </div>
  );
};
