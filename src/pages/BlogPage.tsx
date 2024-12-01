import { useState, useEffect } from 'react';

import { PixelCard } from '../components/ui';
import { getPostsPerPage } from '../components/api/Blog/getPostsPerPage';
import { PostTypes } from '../components/type/Blog';

export const BlogPage = () => {
  const [posts, setPosts] = useState<PostTypes[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPostsPerPage();
        setPosts(response.data.posts);
        console.log(response);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <PixelCard key={post._id} title={post.title} content={post.content}></PixelCard> // 포스트 제목을 렌더링
        ))}
      </ul>
    </div>
  );
};
