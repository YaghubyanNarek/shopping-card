import React, { useState } from 'react';
import { useAddProductMutation } from '../../features/products/product.api'; 
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

export const AdminAdd: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | string>('');
  const navigate = useNavigate();

  const defaultImageUrl = 'https://via.placeholder.com/150';

  const [addProduct, { isLoading, isError }] = useAddProductMutation();

  const classes = useStyles();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;

    if (isNaN(parsedPrice)) {
      console.error('Invalid price');
      return;
    }

    const newProduct = {
      title,
      description,
      price: parsedPrice,
      image: defaultImageUrl, 
    };

    try {
      await addProduct(newProduct).unwrap();
      console.log('Product added successfully');
      setPrice('');
      setDescription('');
      setTitle('');
      navigate(-1);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="title" className={classes.label}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="description" className={classes.label}>Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={classes.textarea}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="price" className={classes.label}>Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={classes.input}
          />
        </div>
        <button type="submit" disabled={isLoading} className={classes.button}>
          {isLoading ? 'Adding...' : 'Add Product'}
        </button>
        {isError && <p className={classes.errorMessage}>Failed to add product.</p>}
      </form>
    </div>
  );
};
