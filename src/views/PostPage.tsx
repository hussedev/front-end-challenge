import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { EditableTypography } from '../components/EditableTypography';
import { getPost, patchPost } from '../services';

interface PostPageProps {
  id: number;
  goBack: () => void;
}
export const PostPage: React.FC<PostPageProps> = ({ id, goBack }) => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
      setTitle(data.title);
      setBody(data.body);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (title === post?.title && body === post?.body) setDisabled(false);
    else setDisabled(true);
  }, []);

  const handleSubmit = async () => {
    if (title !== post?.title || body !== post?.body) {
      const newPost: IPostPatch = { title, body };
      patchPost(id, newPost).then((status) => {
        if (status === 200) alert('Post edited succesfully');
      });
    }
  };

  return isLoading ? (
    <></>
  ) : (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '100%', maxWidth: 720, margin: 'auto', bgcolor: 'background.paper' }}
    >
      <Grid item>
        <Typography>{`id: ${post?.id} - user id: ${post?.userId}`}</Typography>
      </Grid>
      <Grid item>
        <EditableTypography value={title} onChange={(value) => setTitle(value)} />
      </Grid>
      <Grid item>
        <EditableTypography value={body} onChange={(value) => setBody(value)} />
      </Grid>
      <Grid item>
        <Button onClick={goBack}>Return</Button>
        <Button onClick={handleSubmit} disabled={disabled}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
