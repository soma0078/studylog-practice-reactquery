import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPosts, uploadPost } from './api';
import { useState } from 'react';

function HomePage() {
  const [content, setContent] = useState('');

  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    retry: 0,
  });

  const queryClient = useQueryClient();

  const uploadPostMutation = useMutation({
    mutationFn: (newPost) => uploadPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { username: 'codeit', content };
    uploadPostMutation.mutate(newPost, {
      onSuccess: () => {
        console.log('포스트가 성공적으로 업로드 되었습니다.');
      },
    });
    setContent('');
  };

  if (isPending) return '로딩 중입니다...';
  if (isError) return '에러가 발생했습니다.';

  const posts = postsData?.results ?? [];

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea name="content" value={content} onChange={handleInputChange} />
          <button disabled={uploadPostMutation.isPending || !content}>업로드</button>
        </form>
      </div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.user.name}: {post.content}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
