import { useState } from 'react';
import type { Product } from '../types/index';
import './Card.css';

interface CardProps {
  product: Product;
  onAddToCart: (product: Product, size: 'small' | 'medium' | 'large', quantity: number) => void;
}

const Card: React.FC<CardProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
  };

  const getPrice = () => {
    if (product.sizes) {
      return product.sizes[selectedSize] || product.price;
    }
    return product.price;
  };

  const availableSizes = product.sizes ? Object.keys(product.sizes) as ('small' | 'medium' | 'large')[] : [];

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {availableSizes.length > 0 && (
          <div className="size-selector">
            <label>Размер:</label>
            <div className="size-options">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size === 'small' ? 'S' : size === 'medium' ? 'M' : 'L'}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="product-footer">
          <div className="price">₽{getPrice()}</div>
          <div className="quantity-controls">
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default Card;
