import { useState } from "react";
import "../assets/css/createproduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/products", product)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

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
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
}
