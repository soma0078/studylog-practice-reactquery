import { useMutation, useQuery } from '@tanstack/react-query';
import { getPostsByUsername, uploadPost } from './api';
import { useState } from 'react';

function HomePage() {
  const [content, setContent] = useState('');
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

  console.log(postsDataByUsername);

  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
  });

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { username: 'codeit', content };
    uploadPostMutation.mutate(newPost);
    setContent('');
  };

  if (isPending) return '로딩 중입니다...';
  if (isError) return '에러가 발생했습니다.';

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea name="content" value={content} onChange={handleInputChange} />
          <button disabled={!content}>업로드</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
