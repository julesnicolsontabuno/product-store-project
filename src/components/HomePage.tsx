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
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false); // State to control the icon

  const handlePlusClick = () => {
    setshowCreateForm(!showCreateForm);
    setChangeIcon(!changeIcon); // Toggle icon state on click
  };

  const handleProductCreated = () => {
    setshowCreateForm(false);
    setSnackbarMessage("Product successfully added");
    setOpen(true);
    setChangeIcon(false); // Reset icon after product is created
  };

  const handleProductDeleted = () => {
    setSnackbarMessage("Product successfully deleted");
    setOpen(true);
  };

  const handleProductEdited = () => {
    setSnackbarMessage("Product successfully updated"); // New message for edit
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
      <Banner onPlusClick={handlePlusClick} changeIcon={changeIcon} />
      <div className="homepage-display">
        {showCreateForm ? (
          <CreateProduct onProductCreated={handleProductCreated} />
        ) : (
          <ProductList
            onProductDeleted={handleProductDeleted}
            onProductEdited={handleProductEdited}
          />
        )}
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarMessage}
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
