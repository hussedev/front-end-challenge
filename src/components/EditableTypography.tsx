import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface EditableTypographyProps {
  value: string;
  onChange: (value: string) => void;
}
export const EditableTypography = ({ value, onChange }: EditableTypographyProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
    onChange(value);
  };

  return (
    <>
      {isFocused ? (
        <TextField
          autoFocus
          variant='standard'
          fullWidth={true}
          value={text}
          onChange={handleChange}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <Typography onClick={() => setIsFocused(true)}>{text}</Typography>
      )}
    </>
  );
};
