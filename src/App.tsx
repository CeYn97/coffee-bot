import { useState } from 'react';
import StartPage from './pages/StartPage';
import MainPage from './pages/MainPage';
import type { Product, CartItem } from './types/index';
import { products } from './data/products';
import './App.css';

type Page = 'start' | 'main';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('start');
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleViewMenu = () => {
    setCurrentPage('main');
  };

  const handleBackToStart = () => {
    setCurrentPage('start');
  };

  const handleAddToCart = (product: Product, size: 'small' | 'medium' | 'large', quantity: number) => {
    const existingItem = cart.find(
      item => item.product.id === product.id && item.size === size
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.product.id === product.id && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { product, size, quantity }]);
    }

    // Показываем уведомление (в реальном приложении можно использовать toast)
    alert(`${product.name} добавлен в корзину!`);
  };

  return (
    <div className="app">
      {currentPage === 'start' && (
        <StartPage onViewMenu={handleViewMenu} />
      )}
      {currentPage === 'main' && (
        <MainPage 
          products={products}
          onBack={handleBackToStart}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App
