import { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/css/createproduct.css";
import axios from "axios";
import React from "react";

export default function CreateProduct({
  onProductCreated,
}: {
  onProductCreated: () => void;
}) {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });

  const [open, setOpen] = useState(false);

  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/products", product)
      .then((res) => {
        console.log(res);
        onProductCreated();
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className="create-product-form-title">
        <h1>Create New Product</h1>
      </div>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="product-name"
            id="productName"
            placeholder="Product Name"
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="number"
            name="product-price"
            id="productPrice"
            placeholder="Price"
            onChange={(e) =>
              setProduct({ ...product, productPrice: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="url"
            name="product-image-url"
            id="productImageUrl"
            placeholder="Image URL"
            onChange={(e) =>
              setProduct({ ...product, imageUrl: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </div>
    </div>
  );
}
