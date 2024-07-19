import { useQuery } from '@tanstack/react-query';
import { getPostsByUsername } from './api';

function HomePage() {
  const username = 'jennie';

  const { data: postsDataByUsername } = useQuery({
    queryKey: ['posts', username],
    queryFn: () => getPostsByUsername(username),
  });

  console.log(postsDataByUsername);

  return <div>StudyLog</div>;
}

export default HomePage;
