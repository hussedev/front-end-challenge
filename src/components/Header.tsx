import { Typography } from '@mui/material';

interface HeaderProps {
  style?: React.CSSProperties;
}

export const Header = ({ style }: HeaderProps) => (
  <nav style={style}>
    <Typography variant='h4'>Prueba técnica frontend</Typography>
  </nav>
);
