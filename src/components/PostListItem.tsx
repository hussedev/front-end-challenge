import { ListItem, ListItemText, Typography } from '@mui/material';
import { trimBody } from '../utils/trimmer';

interface PostsListItemProps {
  post: IPost;
  onClick: (id: number) => void;
}
export const PostListItem: React.FC<PostsListItemProps> = ({ post, onClick }) => {
  const { id, userId, title, body } = post;
  return (
    <ListItem alignItems='flex-start' onClick={() => onClick(id)}>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {`ID: ${id} — UserID: ${userId} — `}
            </Typography>
            {trimBody(body)}
          </>
        }
      />
    </ListItem>
  );
};
