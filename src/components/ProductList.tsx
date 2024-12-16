import { IoRocketSharp } from "react-icons/io5";
import "../assets/css/productlist.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProductListProps {
  onProductDeleted: () => void;
  onProductEdited: () => void;
}

export default function ProductList({
  onProductDeleted,
  onProductEdited,
}: ProductListProps) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div>
      <h2 className="product-list-title">
        Current Products <IoRocketSharp />
      </h2>
      <div className="product-list-body">
        <div></div>
        <div className="product-cards">
          {data.length > 0 ? (
            data.map((product) => (
              <ProductCard
                key={product.id}
                name={product.productName}
                price={product.productPrice}
                imageUrl={product.imageUrl}
                id={product.id}
                onProductDeleted={onProductDeleted}
                onProductUpdated={onProductEdited}
              />
            ))
          ) : (
            <h1>No Products Available</h1>
          )}
        </div>
      </div>
    </div>
  );
}
