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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ProductCard({
  name,
  price,
  imageUrl,
}: {
  name: any;
  price: any;
  imageUrl: any;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 345 }} className="card">
        <CardMedia
          component="img"
          sx={{
            height: 140,
            objectFit: "contain",
          }}
          image={imageUrl}
          title="green iguana"
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
            <MdDelete style={{ fontSize: "24px" }} />
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
