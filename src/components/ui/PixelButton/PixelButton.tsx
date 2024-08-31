import styled from 'styled-components';

type PixelButtonTypes = {
  label: string | number;
  type?: string;
  width?: string;
};

const PixelInputBox = styled.button<PixelButtonWidthType>`
  width: ${(props) => props.$width};
`;

type PixelButtonWidthType = { $width?: string };

export const PixelButton = (props: PixelButtonTypes) => {
  const { label, type, width } = props;

  return (
    <PixelInputBox type="button" className={`nes-btn is-${type}`} $width={width}>
      {label}
    </PixelInputBox>
  );
};
