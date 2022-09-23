import { Divider, Grid, List, Pagination } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { InputFilter } from '../components/InputFilter';
import { PostListItem } from '../components/PostListItem';
import { SelectSort } from '../components/SelectSort';
import { POSTS_PER_PAGE } from '../components/settings';
import { orderFunctions, SortTypes } from '../utils/sort';

interface PostsListProps {
  list: TPostArray;
  onClick: (id: number) => void;
  filter: (id: string) => void;
}
export const PostList: React.FC<PostsListProps> = ({ list, onClick, filter }) => {
  const nPages = useMemo(() => list.length / POSTS_PER_PAGE, [list]);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortTypes>('default');
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '100%', maxWidth: 720, margin: 'auto', bgcolor: 'background.paper' }}
    >
      <Grid container item direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
          <InputFilter filter={filter} />
        </Grid>
        <Grid item>
          <SelectSort onChange={(value: SortTypes) => setSortBy(value)} />
        </Grid>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <List>
          {list
            .sort(orderFunctions[sortBy])
            .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
            .map((post, index) => (
              <React.Fragment key={post.id}>
                {index > 0 && list.length > 1 ? <Divider variant='middle' component='li' /> : <></>}
                <PostListItem post={post} onClick={onClick} />
              </React.Fragment>
            ))}
        </List>
      </Grid>
      <Grid item>
        <Pagination count={nPages} page={page} onChange={handlePageChange} />
      </Grid>
    </Grid>
  );
};
