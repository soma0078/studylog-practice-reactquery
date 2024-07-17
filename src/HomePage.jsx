import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api';

function HomePage() {
  const result = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  console.log(result);

  return <div>StudyLog</div>;
}

export default HomePage;
