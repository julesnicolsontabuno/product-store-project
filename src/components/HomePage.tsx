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

  return (
    <div>
      <Banner onPlusClick={handlePlusClick} />
      <div className="homepage-display">
        {showCreateForm ? <CreateProduct /> : <ProductList />}
      </div>
    </div>
  );
};

export default HomePage;
