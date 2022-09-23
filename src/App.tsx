import { useEffect, useState } from 'react';
import { PostList } from './views/PostList';
import { getPosts, getPostsByUser } from './services';
import { PostPage } from './views/PostPage';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [lastFilter, setLastFilter] = useState<string>('');
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    getPosts().then((data) => setPosts(data));
  };

  const fetchFilteredPosts = async (id: number) => {
    try {
      getPostsByUser(id).then((data) => {
        console.log(data);
        setPosts(data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id: number) => {
    setSelectedPost(id);
  };

  const handleFilter = async (id: string) => {
    if (lastFilter !== id) {
      if (id === '') {
        await fetchPosts();
      } else {
        await fetchFilteredPosts(parseInt(id));
      }
      setLastFilter(id);
    }
  };

  return selectedPost ? (
    <PostPage id={selectedPost} goBack={() => setSelectedPost(null)} />
  ) : (
    <PostList list={posts} onClick={handleClick} filter={handleFilter} />
  );
};

export default App;
