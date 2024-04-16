//theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme ({

    palette: {
        primary: {
            light: '#E5F1D5',
            main: '#3D6C00', 
            dark: '#294800',
            contrastText: '#fefefe',
        },
        secondary: {
            light: '#FFF5DB',
            main: '#E5A505',
            dark: '#B28104',
        },
        error: {
            light: '#FFE6DB',
            main: '#BA3D08',  
        },
        common: {
            black: '#222',
            white: '#fefefe',
        }
    },
    
    typography: {
        fontFamily: 'Roboto, sans-serif',
        body1: {
            fontFamily: 'Roboto, sans-serif',
            color: '#222',
        },
          body2: {
            fontFamily: 'Roboto, sans-serif',
            color: '#fefefe',
        },
        h1: {
            fontFamily: 'PT Sans Caption, sans-serif',
            color: '#222',  
        },
    }
})
theme.typography.h2 = { ...theme.typography.h1 };
theme.typography.h3 = { ...theme.typography.h1 };
theme.typography.h4 = { ...theme.typography.h1 };
theme.typography.h5 = { ...theme.typography.h1 };
theme.typography.h6 = { ...theme.typography.h1 };

export default theme;