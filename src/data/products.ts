import type { Product } from '../types/index';

export const products: Product[] = [
  {
    id: '1',
    name: 'Капучино',
    description: 'Классический итальянский кофе с молочной пенкой',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    price: 150,
    category: 'drinks',
    sizes: {
      small: 120,
      medium: 150,
      large: 180
    }
  },
  {
    id: '2',
    name: 'Латте',
    description: 'Нежный кофе с большим количеством молока',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop',
    price: 160,
    category: 'drinks',
    sizes: {
      small: 130,
      medium: 160,
      large: 190
    }
  },
  {
    id: '3',
    name: 'Американо',
    description: 'Черный кофе с добавлением горячей воды',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    price: 100,
    category: 'drinks',
    sizes: {
      small: 80,
      medium: 100,
      large: 120
    }
  },
  {
    id: '4',
    name: 'Круассан с шоколадом',
    description: 'Свежий круассан с начинкой из темного шоколада',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
    price: 120,
    category: 'food'
  },
  {
    id: '5',
    name: 'Тирамису',
    description: 'Классический итальянский десерт с кофе и маскарпоне',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
    price: 180,
    category: 'desserts'
  },
  {
    id: '6',
    name: 'Чизкейк',
    description: 'Нежный чизкейк с ягодным соусом',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
    price: 160,
    category: 'desserts'
  }
];
