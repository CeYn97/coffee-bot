import Header from '../components/Header';
import Card from '../components/Card';
import type { Product } from '../types/index';
import './MainPage.css';

interface MainPageProps {
  products: Product[];
  onBack: () => void;
  onAddToCart: (product: Product, size: 'small' | 'medium' | 'large', quantity: number) => void;
}

const MainPage: React.FC<MainPageProps> = ({ products, onBack, onAddToCart }) => {
  return (
    <div className="main-page">
      <Header onBackClick={onBack} showBackButton={true} />
      <div className="main-content">
        <div className="page-title">
          <h2>Наше меню</h2>
          <p>Выберите понравившиеся позиции</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
