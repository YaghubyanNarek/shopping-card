import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useStyles } from "./styles";
import { removeFromBasket, incrementQuantity, decrementQuantity } from "../../features/basket/basketSlice";

export const Basket: React.FC = () => {
  const classes = useStyles();
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromBasket({ id }));
  };

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity({ id }));
  };

  return (
    <div className={classes.basketContainer}>
      {items.length === 0 && <p>Basket is empty</p>}
      {items.map((item) => (
        <div key={item.product.id} className={classes.itemCard}>
          <img
            src={item.product.image}
            alt={item.product.title}
            className={classes.itemImage}
          />
          <div className={classes.itemDetails}>
            <div className={classes.itemTitle}>{item.product.title}</div>
            <div className={classes.itemDescription}>{item.product.description}</div>
            <div className={classes.itemPrice}>${(item.product.price * item.quantity).toFixed(2)}</div>
          </div>
          <div className={classes.quantityControls}>
            <button
              className={classes.quantityButton}
              onClick={() => handleDecrement(item.product.id)}
            >
              -
            </button>
            <span className={classes.quantity}>{item.quantity}</span>
            <button
              className={classes.quantityButton}
              onClick={() => handleIncrement(item.product.id)}
            >
              +
            </button>
          </div>
          <button
            className={classes.removeButton}
            onClick={() => handleRemove(item.product.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
