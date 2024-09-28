import "../assets/css/createproduct.css";

export default function CreateProduct() {
  return (
    <div>
      <div className="create-product-form-title">
        <h1>Create New Product</h1>
      </div>
      <div className="create-product-form">
        <div>
          <input
            type="text"
            name="product-name"
            id="productName"
            placeholder="Product Name"
          />
        </div>
        <div>
          <input
            type="number"
            name="product-price"
            id="productPrice"
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="url"
            name="product-image-url"
            id="productImageUrl"
            placeholder="Image URL"
          />
        </div>
        <div>
          <button>Add Product</button>
        </div>
      </div>
    </div>
  );
}
