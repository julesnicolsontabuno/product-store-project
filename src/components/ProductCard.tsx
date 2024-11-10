import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "../assets/css/productcard.css";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";

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
  price: any;
  imageUrl: any;
  id: any;
  onProductDeleted: any;
}) {
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
            <FaEdit style={{ fontSize: "24px" }} />
          </Button>
          <Button>
            <MdDelete
              style={{ fontSize: "24px" }}
              onClick={() => deleteProduct(id)}
            />
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
