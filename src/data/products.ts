import type { Product } from "../types/index";

export const products: Product[] = [
  {
    id: "1",
    name: "Капучино",
    description: "Классический итальянский кофе с молочной пенкой",
    image: "public/test-img/capuchino.webp",
    price: 150,
    category: "drinks",
    sizes: {
      small: 180,
      medium: 220,
      large: 260,
    },
  },
  {
    id: "2",
    name: "Латте",
    description: "Нежный кофе с большим количеством молока",
    image: "public/test-img/latte.jpg",
    price: 160,
    category: "drinks",
    sizes: {
      small: 180,
      medium: 220,
      large: 260,
    },
  },
  {
    id: "3",
    name: "Американо",
    description: "Черный кофе с добавлением горячей воды",
    image: "public/test-img/americano.webp",
    price: 100,
    category: "drinks",
    sizes: {
      small: 180,
      medium: 220,
      large: 260,
    },
  },
  {
    id: "4",
    name: "Круассан с шоколадом",
    description: "Свежий круассан с начинкой из темного шоколада",
    image: "public/test-img/kryassan.png",
    price: 120,
    category: "food",
  },
  {
    id: "5",
    name: "Тирамису",
    description: "Классический итальянский десерт с кофе и маскарпоне",
    image: "public/test-img/desert_tiramisu.jpg",
    price: 180,
    category: "desserts",
  },
  {
    id: "6",
    name: "Чизкейк",
    description: "Нежный чизкейк с ягодным соусом",
    image: "public/test-img/Cheesecake.webp",
    price: 160,
    category: "desserts",
  },
];
