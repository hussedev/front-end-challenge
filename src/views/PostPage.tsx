import { useEffect, useLayoutEffect, useState } from 'react';
import { getPost } from '../services';

interface PostPageProps {
  id: number;
  goBack: () => void;
}
export const PostPage: React.FC<PostPageProps> = ({ id, goBack }) => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    setIsLoading(false);
    getPost(id).then((data) => {
      setPost(data);
      setIsLoading(false);
    });
  });

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
