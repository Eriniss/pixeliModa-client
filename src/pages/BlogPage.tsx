import styled from "styled-components";

const BlogContainer = styled.div`
  padding: 40px;
`

export const BlogPage = () => {
  return (
    <BlogContainer>
      <div className="nes-container with-title is-centered">
      <p className="title">테스트용 컨테이너</p>
      <p>블로그글을 테스트하기 위한 테스트용 컨테이너 입니다!! 😎👍</p>
      </div>
    </BlogContainer>
  );
};
