import React from 'react'
import { useLocation } from 'react-router-dom'
import { Basket } from '../../components/basket/Basket';
import { useStyles } from './styles';
import { useAppDispatch } from '../../app/hooks';
import { addToBasket } from '../../features/basket/basketSlice';

export const ProductItem: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const classes = useStyles();

  if (!state) return <div>No product data found</div>;

  const { id ,title, description, image, price } = state;

  const dispatch = useAppDispatch();

  return (
    <div className={classes.productContainer}>
        <div>
            <h1 className={classes.productTitle}>{title}</h1>
            <img src={image} alt={title} className={classes.productImage} />
            <p className={classes.productDescription}>{description}</p>
            <p className={classes.productPrice}>${price.toFixed(2)}</p>
            <div className={classes.basketContainer}>
            <button 
                className={classes.basketButton}
                onClick={() => dispatch(addToBasket({ title, description, price, id, image }))}
            >Add to Basket</button>
      </div>
        </div>
      <Basket />
    </div>
  );
};
