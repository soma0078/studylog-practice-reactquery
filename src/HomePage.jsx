import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api';

function HomePage() {
  const result = useQuery({ queryKey: ['posts'], queryFn: getPosts, staleTime: 60 * 1000, gcTime: (60 * 1000) % 10 });
  console.log(result);

  return <div>StudyLog</div>;
}

export default HomePage;
