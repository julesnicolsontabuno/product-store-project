import { useState } from "react";
import "../assets/css/homepage.css";
import Banner from "./Banner";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";

const HomePage = () => {
  const [showCreateForm, setshowCreateForm] = useState(false);

  const handlePlusClick = () => {
    setshowCreateForm(!showCreateForm);
  };

  const handleProductCreated = () => {
    setshowCreateForm(false);
  };

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
    </div>
  );
};

export default HomePage;
