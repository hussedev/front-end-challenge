import React, { useEffect, useState } from 'react';
import { getPost, getPosts } from './services';

const MAX_BODY_SIZE = 20;

const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  const handleClick = (id: number) => {
    getPost(id).then((data) => setSelectedPost(data));
  };

  const trimBody = (body: string) => (body.length > 20 ? `${body.slice(0, 20)}...` : body);

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
        {posts.map(({ id, userId, title, body }) => (
          <li key={id} onClick={() => handleClick(id)}>
            <p>{`id: ${id} - user id: ${userId}`}</p>
            <p>{`title: ${title}`}</p>
            <p>{`body: ${trimBody(body)}`}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
