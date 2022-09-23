import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { SortTypes } from '../utils/sort';

interface SelectSortProps {
  value?: SortTypes;
  onChange: (value: SortTypes) => void;
}

export const SelectSort = ({ value = 'default', onChange }: SelectSortProps) => {
  const [selectedSort, setSelectedSort] = useState<SortTypes>(value);

  const handleChange = (event: SelectChangeEvent<SortTypes>) => {
    const newValue = event.target.value as SortTypes;
    setSelectedSort(newValue);
    onChange(newValue);
  };
  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='sort-label'>Sort by:</InputLabel>
      <Select
        labelId='sort-label'
        id='sort'
        value={selectedSort}
        onChange={handleChange}
        label='Sort'
      >
        <MenuItem value='default'>
          <em>None</em>
        </MenuItem>
        <MenuItem value='userAsc'>User &uarr;</MenuItem>
        <MenuItem value='userDesc'>User &darr;</MenuItem>
        <MenuItem value='titleAsc'>Title &uarr;</MenuItem>
        <MenuItem value='titleDesc'>Title &darr;</MenuItem>
      </Select>
    </FormControl>
  );
};
