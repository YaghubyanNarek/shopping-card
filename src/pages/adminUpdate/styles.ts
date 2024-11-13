import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  itemTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  itemDescription: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  itemPrice: {
    fontSize: '16px',
    color: '#007BFF',
    marginBottom: '10px',
  },
  itemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  updateButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e53935',
    },
  },
  noItemsMessage: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#888',
  },
  button: {
    backgroundColor: '#4CAF50', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none',
        borderRadius: '5px', 
        fontSize: '16px', 
        cursor: 'pointer', 
        transition: 'background-color 0.3s', 

        '&:hover': {
            backgroundColor: '#45a049', 
        },
  }
});

export default useStyles;
