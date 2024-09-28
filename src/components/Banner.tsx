import { useState } from "react";
import "../assets/css/banner.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";

const Banner = ({ onPlusClick }: { onPlusClick: any }) => {
  const [changeIcon, setchangeIcon] = useState(false);

  const handleClick = () => {
    setchangeIcon(!changeIcon);
    onPlusClick();
  };

  return (
    <div className="body-banner">
      <div className="product-title">
        <h1>
          PRODUCT STORE <FaShoppingCart />
        </h1>
      </div>
      <div className="icons-add-light-dark">
        <h1 className="plus-square-button" onClick={handleClick}>
          {changeIcon ? <FaRectangleList /> : <FaPlusSquare />}
        </h1>
        <h1 className="light-dark-mode-button">
          <MdLightMode />
        </h1>
      </div>
    </div>
  );
};

export default Banner;
