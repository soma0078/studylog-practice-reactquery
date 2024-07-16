import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './HomePage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// QueryClient 인스턴스 생성
// 애플리케이션의 모든 쿼리와 뮤테이션 관리
const queryClient = new QueryClient();

function App() {
  return (
    // 쿼리 클라이언트를 제공하는 QueryClientProvider를 설정
    // -> 모든 하위 컴포넌트에서 리액트 쿼리 기능 사용 가능
    <QueryClientProvider client={queryClient}>
      <HomePage />

      {/* ReactQueryDevtools 추가해 개발 중 쿼리 상태 모니터링과 디버깅 가능 */}
      {/* 리액트 쿼리 개발자 도구가 처음에는 닫혀 있음 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
