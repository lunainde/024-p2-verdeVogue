import React from 'react';
import Typography from '@mui/material/Typography';

const MainTitle = ({ children }) => {
  return (
    <Typography
      sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'PT Sans Caption, sans-serif',
        fontWeight: 'bold',
        fontSize: '4rem',
        color: 'black',
        mt: 4,
        mb: 4,
        opacity: 0.1,
        '& span': {
          color: 'green',
          opacity: 1,
        }
      }}
    >
      {children}
    </Typography>
  );
};

export default MainTitle;