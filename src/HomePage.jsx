import { useQuery } from '@tanstack/react-query';
import { getPostsByUsername } from './api';

function HomePage() {
  const username = 'jennie';

  const {
    data: postsDataByUsername,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['posts', username],
    queryFn: () => getPostsByUsername(username),
    retry: 0,
  });

  if (isPending) return '로딩 중입니다...';
  if (isError) return '에러가 발생했습니다.';

  console.log(postsDataByUsername);

  return <div>StudyLog</div>;
}

export default HomePage;
