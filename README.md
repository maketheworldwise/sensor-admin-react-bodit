# sensor-admin-react-bodit

> 바딧 감지 센서 관리 프로그램 프로젝트입니다.

## 🚀 프로젝트 실행 방법

[배포주소](https://maketheworldwise.github.io/sensor-admin-react-bodit/)

**Repository 클론시:**

```shell
npm start
```

## 🚀 프로젝트 구조

- `public/mocks`: Mock 데이터 관리 폴더
- `src/Assets`: 에셋 관리 폴더
- `src/Components`: 컴포넌트 관리 폴더
- `src/Pages`: 컴포넌트들을 조합한 페이지 폴더
- `src/Styles`: 전역 스타일 관리 폴더

## 🚀 구현 기능에 대한 소개

반응형, export, zoom-in, zoom-out 기능까지 구현하지는 못했지만, 최대한 다양한 라이브러리를 활용하여 표현하고자 했습니다.

첫 번째 화면의 경우, 데이터들을 테이블 형태로 출력하고, 각 데이터들의 정렬과 필터링 기능을 구현했습니다.

![](/docs/result1.png)

두 번째 화면의 경우, 선택한 날짜에 대한 기온, 습도, 기압 데이터를 그래프 형태로 출력되도록 구현했습니다.

![](/docs/result2.png)

## 🚀 기타 소개하고 싶은 내용들

**팀원 및 역할:**

- 안승섭: 테이블 UI 및 정렬 기능 구현
- 천찬영: 테이블 필터링 기능 구현
- 이고운: 달력 기능 구현
- 양미옥: 기온 그래프 구현
- 임지영: 습도 그래프 구현
- 정예원: 기압 그래프 구현

**라이브러리:**

- sass
- styled-components
- styled-reset
- react-table
- react-moment
- react-calendar
- react-chartjs-2
- react-icons
