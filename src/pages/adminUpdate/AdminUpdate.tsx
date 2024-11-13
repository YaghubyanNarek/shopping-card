import { useState } from "react";
import { useDeleteProductMutation, useGetProductsQuery } from "../../features/products/product.api";
import useStyles from "./styles";
import { Modal } from "../../components/modal/Modal";
import { Link } from "react-router-dom";

export const AdminUpdate = () => {
    const { data: items, isLoading } = useGetProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [modalOpen, setModalOpen] = useState<boolean | string>(false);

    const classes = useStyles();
    return (
        <div className={classes.container}>
        <h1 className={classes.title}>Admin Update</h1>
  
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <div>
            {items && items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className={classes.itemContainer}>
                  <h2 className={classes.itemTitle}>{item.title}</h2>
                  <p className={classes.itemDescription}>{item.description}</p>
                  <p className={classes.itemPrice}>${item.price}</p>
                  <img src={item.image} alt={item.title} className={classes.itemImage} />
                  <div className={classes.buttonContainer}>
                    <button
                      className={classes.updateButton}
                      onClick={() => setModalOpen(item.id)}
                    >
                      Update
                    </button>
                    <button
                      className={classes.deleteButton}
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className={classes.noItemsMessage}>No products available.</p>
            )}
            <Link to={'/admin/add'}>
                <button className={classes.button}>
                    Add Product
                </button>
            </Link>
          </div>
        )}
        {
            modalOpen && <Modal id={modalOpen} onClose={setModalOpen}/>
        }
      </div>
    )
}