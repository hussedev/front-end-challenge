import { Grid, IconButton, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface InputFilterProps {
  filter: (id: string) => void;
}

export const InputFilter = ({ filter }: InputFilterProps) => {
  const [filterByUser, setFilterByUser] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFilterByUser(value);
    if (value !== '' && !value.match(/^\d+$/)) {
      setError(true);
      setHelperText('UserID must be a number');
    } else {
      setError(false);
      setHelperText('');
    }
  };
  return (
    <Grid container item>
      <Grid item>
        <TextField
          size='small'
          label='Filter by userID:'
          variant='standard'
          value={filterByUser}
          error={error}
          helperText={helperText}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <IconButton
          size='small'
          style={{ marginTop: '15px' }}
          disabled={error}
          onClick={() => filter(filterByUser)}
        >
          <FilterAltIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
