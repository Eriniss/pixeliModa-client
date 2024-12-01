# PixeliModa - Server

## History

| 날짜           | 내용                                  | 설명                                             |
| -------------- | ------------------------------------- | ------------------------------------------------ |
| 2024.11.17(일) | 블로그 페이지의 카드 섹션 스타일 정의 | NES.CSS를 사용하여 블로그의 카드섹션 스타일 정의 |
| 2024.12.01(일) | 블로그 페이지 카드 섹션 스타일 모듈화 | NES.CSS를 사용하여 블로그의 카드섹션 스타일 정의 |

## Considerations and decisions

| 날짜           | 고민 사항                        | 결정 사항              |
| -------------- | -------------------------------- | ---------------------- |
| 2024.11.18(월) | 회원가입 페이지 기능 구현해야 함 | 필수 기능, 우선 나중에 |

## Memo

- 현재 Blog쪽 페이지의 라우팅 처리 규칙이 없음. 규칙을 정하고 라우팅을 정의할 필요가 있음. 한번 검사하고 수정 해야할듯.
- React Query를 사용해야 할 것 같음. User 정보의 경우 React Query에 담아도 되지 않을까
- 현재 로그인 후의 처리가 깔끔하지 않음. 로그인을 하면 Sign in 버튼과 Sign up 버튼을 숨김 처리 해야함.
- 비밀번호 입력 후 focus가 제대로 처리되지 않아 Enter를 눌러도 로그인이 되지 않음.
- 로딩페이지 구현이 필요함. 또한, Private Tag에 좀 더 스타일을 입혀야 함.
- 404페이지도 꾸미고 싶음.
