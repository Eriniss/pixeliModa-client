type PixelButtonTypes = {
  label: string | number;
  type?: string;
};

export const PixelButton = (props: PixelButtonTypes) => {
  const { label, type } = props;

  return (
    <button type="button" className={`nes-btn is-${type}`}>
      {label}
    </button>
  );
};
