import { trimBody } from '../utils/trimmer';

interface PostsListItemProps {
  post: IPost;
  onClick: (id: number) => void;
}
export const PostListItem: React.FC<PostsListItemProps> = ({ post, onClick }) => {
  const { id, userId, title, body } = post;
  return (
    <li key={id} onClick={() => onClick(id)}>
      <p>{`id: ${id} - user id: ${userId}`}</p>
      <p>{`title: ${title}`}</p>
      <p>{`body: ${trimBody(body)}`}</p>
    </li>
  );
};
