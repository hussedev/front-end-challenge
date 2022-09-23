import { Typography } from '@mui/material';

interface FooterProps {
  style?: React.CSSProperties;
}

export const Footer = ({ style }: FooterProps) => (
  <footer style={style}>
    <Typography variant='h3'>Dev Challenges</Typography>
    <Typography>Contact: devchalleng@happycode.com</Typography>
    <Typography variant='subtitle2'>Copyright © 2022 Coding in the Beach</Typography>
  </footer>
);
