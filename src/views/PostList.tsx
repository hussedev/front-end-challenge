import { PostListItem } from '../components/PostListItem';

interface PostsListProps {
  list: TPostArray;
  onClick: (id: number) => void;
}
export const PostList: React.FC<PostsListProps> = ({ list, onClick }) => {
  return (
    <ul>
      {list.map((post) => (
        <PostListItem key={post.id} post={post} onClick={onClick} />
      ))}
    </ul>
  );
};
