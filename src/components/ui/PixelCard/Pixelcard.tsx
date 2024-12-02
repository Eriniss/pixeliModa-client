import styled from 'styled-components';

type PixelCardType = {
  title: string;
  content: string;
};

const BlogContainer = styled.div`
  padding: 10px;
`;

export const PixelCard = ({ title, content }: PixelCardType): JSX.Element => {
  return (
    <BlogContainer>
      <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{content}</p>
      </div>
    </BlogContainer>
  );
};
