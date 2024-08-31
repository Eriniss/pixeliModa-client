import styled from 'styled-components';

type PixelButtonTypes = {
  label: string | number;
  type?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  width?: string;
  disabled?: boolean;
  onClick?: (e: any) => any;
};

const PixelInputBox = styled.button<PixelButtonWidthType>`
  width: ${(props) => props.$width};
`;

type PixelButtonWidthType = { $width?: string };

export const PixelButton = (props: PixelButtonTypes) => {
  const { label, type, htmlType, width, disabled, onClick } = props;

  return (
    <PixelInputBox
      type={htmlType}
      className={`nes-btn is-${type}`}
      $width={width}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </PixelInputBox>
  );
};
