import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
  },
  link: {
    fontSize: '1rem',
    color: '#333',
    textDecoration: 'none',
    margin: '0 10px',
    '&:hover': {
      color: '#007BFF',
    },
  },
  divider: {
    color: '#333',
    margin: '0 5px',
  },
});
