import React from 'react';
import products from '../Data/productDetails';

const ProductDescription = ({ productId, setAddedProducts, addedProducts }) => {
    const product = products.find((elem) => {
        return elem.id === productId;
    });

    const addToCart = () => {
        setAddedProducts([...addedProducts, product.id]);
    };

    return (
        <div className="details-container">
            <div className="main-product-details">
                <span className="product-name">{product.name}</span>
                <span className="product-price">${product.price}</span>
                <span className="product-size">size: {product.size}</span>
            </div>
            <button
                className="add-to-cart"
                disabled={product.sold}
                onClick={addToCart}
            >
                {product.sold ? 'Sold Out' : 'Add to Cart'}
            </button>
            <div className="secondary-product-details-container">
                <strong>Product Details: </strong>
                <span> {product.description}</span>
                <strong>Condition: </strong> <span> {product.condition}</span>
                <strong>Color: </strong> <span>{product.color}</span>
            </div>
        </div>
    );
};

export default ProductDescription;
