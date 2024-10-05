import { useState } from "react";
import "../assets/css/homepage.css";
import Banner from "./Banner";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import { IconButton, Snackbar, SnackbarCloseReason } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const HomePage = () => {
  const [showCreateForm, setshowCreateForm] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePlusClick = () => {
    setshowCreateForm(!showCreateForm);
  };

  const handleProductCreated = () => {
    setshowCreateForm(false);
    setOpen(true);
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
      <Banner onPlusClick={handlePlusClick} />
      <div className="homepage-display">
        {showCreateForm ? (
          <CreateProduct onProductCreated={handleProductCreated} />
        ) : (
          <ProductList />
        )}
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Product successfully added"
          action={action}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor: "green", // Green background color
              color: "white", // White text color
            },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Align bottom-right
        />
      </div>
    </div>
  );
};

export default HomePage;
