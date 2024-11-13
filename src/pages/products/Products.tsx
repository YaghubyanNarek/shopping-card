import React from 'react';
import { useGetProductsQuery } from '../../features/products/product.api';
import { Basket } from '../../components/basket/Basket';
import { useStyles } from './style';
import { IProduct } from '../../utils/types';
import { useAppDispatch } from '../../app/hooks';
import { addToBasket } from '../../features/basket/basketSlice';
import { Link } from 'react-router-dom';

export const Products: React.FC = () => {
  const classes = useStyles();
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useAppDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const handleAdd = (item: IProduct) => {
    dispatch(addToBasket(item));
  };

  return (
    <div className={classes.container}>
      <div className={classes.productListContainer}>
        <h1 className={classes.pageTitle}>Products</h1>
        <div className={classes.productList}>
          {products?.map((product) => (
            <div key={product.id} className={classes.productCard}>
              <Link 
                to={`/products/${product.id}`}
                state={{id: product.id, title: product.title, description: product.description, image: product.image, price: product.price}}
                >
              <img
                src={product.image}
                alt={product.title}
                className={classes.productImage}
              />
              </Link>
              <div className={classes.productDetails}>
                <h2 className={classes.productTitle}>{product.title}</h2>
                <p className={classes.productDescription}>{product.description}</p>
                <p className={classes.productPrice}>Price: ${product.price}</p>
                <button
                  onClick={() => handleAdd(product)}
                  className={classes.actionButton}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={classes.cartContainer}>
        <h2 className={classes.cartTitle}>Cart</h2>
        <Basket />
      </div>
    </div>
  );
};
