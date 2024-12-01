import styled from 'styled-components';

type PixelContainerType = {
  title: string;
  content: string;
};

const BlogContainer = styled.div`
  padding: 40px;
`;

export const PixelContainer = ({ title, content }: PixelContainerType): JSX.Element => {
  return (
    <BlogContainer>
      <div className="nes-container with-title is-centered">
        <p className="title">{title}</p>
        <p>{content}</p>
      </div>
    </BlogContainer>
  );
};
