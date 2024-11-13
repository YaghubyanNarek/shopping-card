import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  basketContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxHeight: "500px",
    overflowY: "scroll",
  },
  itemCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px",
    borderBottom: "1px solid #eee",
  },
  itemImage: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemDetails: {
    flex: 1,
    marginLeft: "16px",
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  itemDescription: {
    color: "#777",
    fontSize: "14px",
    margin: "4px 0",
  },
  itemPrice: {
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "8px",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#f1f1f1",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
    margin: "0 8px",
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  quantity: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
  },
});
