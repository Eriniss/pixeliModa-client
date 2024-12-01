// Author 정보 타입
export type AuthorTypes = {
  userEmail: string; // 작성자 이메일
  userNickname: string; // 작성자 닉네임
};

// 단일 포스트 정보 타입
export type PostTypes = {
  _id: string; // 포스트 고유 ID (MongoDB ObjectId)
  title: string; // 포스트 제목
  content: string; // 포스트 내용 (nullable)
  author: AuthorTypes; // 작성자 정보
  tags?: string[] | null; // 태그 배열 (nullable, optional)
  createdAt: string; // 포스트 생성 날짜 (ISO 8601 포맷)
  updatedAt: string | null; // 포스트 수정 날짜 (nullable)
  __v: number; // MongoDB의 버전 키
};

// API 결과 전체 구조 타입
export type PostsResponseTypes = {
  page: number; // 현재 페이지
  limit: number; // 페이지당 포스트 수
  totalPosts: number; // 전체 포스트 수
  totalPages: number; // 전체 페이지 수
  posts: PostTypes[]; // 포스트 배열
};
