import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.link}>Home</Link>
      <span className={classes.divider}>|</span>
      <Link to="/products" className={classes.link}>Products</Link>
      <span className={classes.divider}>|</span>
      <Link to="/admin" className={classes.link}>Admin</Link>
    </div>
  );
};
