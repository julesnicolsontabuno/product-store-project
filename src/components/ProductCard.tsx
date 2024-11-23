import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "../assets/css/productcard.css";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ProductCard({
  name,
  price,
  imageUrl,
  id,
  onProductDeleted,
}: {
  name: any;
  price: number;
  imageUrl: any;
  id: any;
  onProductDeleted: any;
}) {
  const [values, setValues] = useState({
    id: id,
    productName: name,
    productPrice: price,
    imageUrl: imageUrl,
  });
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // Handle update form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ensure price is a number before sending to the API
    const updatedValues = { ...values, price: Number(values.productPrice) };
    axios
      .put(`http://localhost:3000/products/${id}`, updatedValues)
      .then((res) => {
        console.log("Updated product:", res.data);
        toggleModal(); // Close modal on success
      })
      .catch((err) => console.log(err));
  };

  function deleteProduct(id: string) {
    axios
      .delete("http://localhost:3000/products/" + id)
      .then(() => {
        console.log("delete");
        onProductDeleted();
      })
      .catch((err) => console.log(err));
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          sx={{
            height: 140,
            objectFit: "contain",
            marginTop: 1,
          }}
          image={imageUrl}
          title={name}
        />
        <CardContent style={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {new Intl.NumberFormat("en-PH", {
              style: "currency",
              currency: "PHP",
            }).format(price)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <FaEdit style={{ fontSize: "24px" }} onClick={toggleModal} />
          </Button>
          <Button>
            <MdDelete
              style={{ fontSize: "24px" }}
              onClick={() => deleteProduct(id)}
            />
          </Button>
        </CardActions>
      </Card>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div>
              <div className="create-product-form-title">
                <h1>Update Product</h1>
              </div>
              <form className="create-product-form" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="product-name"
                    id="productName"
                    placeholder="Product Name"
                    value={values.productName}
                    onChange={(e) =>
                      setValues({ ...values, productName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="product-price"
                    id="productPrice"
                    placeholder="Price"
                    value={values.productPrice}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        productPrice: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <input
                    type="url"
                    name="product-image-url"
                    id="productImageUrl"
                    placeholder="Image URL"
                    value={values.imageUrl}
                    onChange={(e) =>
                      setValues({ ...values, imageUrl: e.target.value })
                    }
                  />
                </div>
                <div>
                  <button type="submit">Update Product</button>
                </div>
              </form>
            </div>
            <Button className="close-modal" onClick={toggleModal}>
              <IoIosCloseCircleOutline style={{ fontSize: "24px" }} />
            </Button>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
