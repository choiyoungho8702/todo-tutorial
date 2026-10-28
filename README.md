# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의의 실습용 저장소입니다. Next.js 와 shadcn/ui 로 시작하는 작은 Todo 앱을 단계별로 발전시키며 Claude Code 사용법을 익힙니다.

## 프로젝트 소개

브라우저에서 동작하는 할일 관리 앱입니다. 데이터는 서버가 아닌 브라우저의 `localStorage` 에 저장되므로 별도의 백엔드나 데이터베이스 설정이 필요 없습니다.

주요 기능:

- 할일 추가 · 편집 · 삭제 · 완료 처리 (빈 내용으로 편집하면 삭제)
- 우선순위 지정: 높음 / 보통 / 낮음
- 마감일 지정
- 카테고리 태그: 업무 / 개인 / 쇼핑
- 상태 필터 (전체 / 진행중 / 완료) 와 카테고리 필터
- 텍스트 검색
- 정렬: 생성일순 / 이름순 / 마감일순
- 다크 모드: 키보드 `d` 키로 전환

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 사전 요구사항

- [bun](https://bun.sh) 1.3 이상 (`bun --version` 으로 확인)
- Git

### 실행 방법

1. 저장소를 복제하고 디렉토리로 이동합니다.

   ```bash
   git clone https://github.com/choiyoungho8702/todo-tutorial.git
   cd todo-tutorial
   ```

2. 의존성을 설치합니다.

   ```bash
   bun install
   ```

3. 개발 서버를 실행합니다.

   ```bash
   bun dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

프로덕션 빌드로 실행하려면 다음 명령을 차례로 실행합니다.

```bash
bun run build
bun run start
```

자주 쓰는 스크립트:

```bash
bun dev            # 개발 서버 실행
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행
bun run lint       # ESLint
bun run typecheck  # tsc --noEmit
bun run format     # Prettier 포맷팅
bun run test       # Vitest 테스트 1회 실행
bun run test:watch # Vitest 감시 모드
```

## 챕터별 시작 브랜치

각 레슨은 시작 시점의 코드 상태를 브랜치로 제공합니다. 레슨 본문에서 안내하는 브랜치로 전환한 뒤 따라가시면 됩니다.

```shell
git checkout ch02-03
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button";
```

## Contributors

- 토이크레인 - Frontend Developer
