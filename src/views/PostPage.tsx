import { useEffect, useState } from 'react';
import { getPost } from '../services';

interface PostPageProps {
  id: number;
  goBack: () => void;
}
export const PostPage: React.FC<PostPageProps> = ({ id, goBack }) => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(false);
    getPost(id).then((data) => {
      setPost(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <></>
  ) : (
    <div onClick={() => goBack()}>
      <p>{`id: ${post?.id} - user id: ${post?.userId}`}</p>
      <p>{`title: ${post?.title}`}</p>
      <p>{`body: ${post?.body}`}</p>
    </div>
  );
};
