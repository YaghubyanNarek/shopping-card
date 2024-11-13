import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '24px',
    backgroundColor: '#f8f8f8',
  },
  productListContainer: {
    width: '70%',
    paddingRight: '20px',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '24px',
  },
  productList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    },
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  productDetails: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '200px',
  },
  productTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  productDescription: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '8px',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '16px',
  },
  actionButton: {
    padding: '8px 16px',
    backgroundColor: '#27ae60',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      backgroundColor: '#2ecc71',
      transform: 'scale(1.05)',
    },
    '&:active': {
      backgroundColor: '#27ae60',
    },
  },
  cartContainer: {
    width: '28%',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  cartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '16px',
  },
});
