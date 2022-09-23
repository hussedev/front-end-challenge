import React, { useEffect, useState } from 'react';
import { getPost, getPosts } from './services';

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const handleClick = (id: number) => {
    getPost(id).then((data) => setSelectedPost(data));
  };

  return (
    <>
      {selectedPost && (
        <>
          <h3>Selected Post</h3>
          <p>{`id: ${selectedPost.id} - user id: ${selectedPost.userId}`}</p>
          <p>{`title: ${selectedPost.title}`}</p>
          <p>{`body: ${selectedPost.body}`}</p>
        </>
      )}
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handleClick(post.id)}>
            <p>{`id: ${post.id} - user id: ${post.userId}`}</p>
            <p>{`title: ${post.title}`}</p>
            <p>{`body: ${post.body}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
