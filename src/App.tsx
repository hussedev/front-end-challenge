import { useEffect, useState } from 'react';
import { PostList } from './views/PostList';
import { getPosts } from './services';
import { PostPage } from './views/PostPage';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const handleClick = (id: number) => {
    setSelectedPost(id);
  };

  return selectedPost ? (
    <PostPage id={selectedPost} goBack={() => setSelectedPost(null)} />
  ) : (
    <PostList list={posts} onClick={handleClick} />
  );
};

export default App;
