import React, { useState } from 'react';
import useStyles from './styles';
import { useUpdateProductMutation } from '../../features/products/product.api';

interface Props {
    onClose: (arg: boolean) => void;
    id: string | boolean,
}

export const Modal: React.FC<Props> = ({ onClose, id }) => {
    const classes = useStyles();
    const [updateProduct] = useUpdateProductMutation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number | string>('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrice(value === '' ? '' : Number(value));
    };

    const handleSaveUpdate = () => {
        const updatedProduct = {
            id: String(id),
            title,
            description,
            image: 'https://via.placeholder.com/150',
            price: Number(price), 
        };

        updateProduct(updatedProduct);
        onClose(false);
    };

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modalContent}>
                <h2>Update Product</h2>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Title"
                    className={classes.input}
                />
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Description"
                    className={classes.input}
                />
                <input
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="Price"
                    className={classes.input}
                />
                <button
                    className={classes.updateButton}
                    onClick={handleSaveUpdate} 
                >
                    Save Update
                </button>
                <button
                    className={classes.cancelButton}
                    onClick={() => onClose(false)} 
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
