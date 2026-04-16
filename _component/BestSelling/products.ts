export interface Product {
  id: number
  title: string
  image: string
  price: number
  oldPrice?: number
  discount?: string
  url: string
  outOfStock?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    title: "Elegance Stylish coord set with Dupatta",
    image: "/p1.jpg",
    price: 2299,
    oldPrice: 2599,
    discount: "-12%",
    url: "/p1.jpg",
  },
  {
    id: 2,
    title: "Mul Chanderi 3 piece Suit",
    image: "/p2.jpg",
    price: 2299,
    oldPrice: 2499,
    discount: "-8%",
    outOfStock: true,
    url: "/p2.jpg", // ✅ fixed
  },
  {
    id: 3,
    title: "Pure Cotton Ajrakh Anarkali 3 piece suit",
    image: "/p3.jpg",
    price: 1695,
    oldPrice: 2499,
    discount: "-32%",
    url: "/p3.jpg",
  },
  {
    id: 4,
    title: "Appliqué Work Straight Cut Suit",
    image: "/p4.jpg",
    price: 3299,
    url: "/p4.jpg",
  },
  {
    id: 5,
    title: "Style in Full Bloom – 2-Piece Cotton Vibes",
    image: "/p5.jpg",
    price: 1395,
    url: "/p5.jpg",
  }
]

export const trendingProducts: Product[] = [
  {
    id: 1,
    title: "Elegance Stylish Coord Set with Dupatta",
    image: "/p17.jpg",
    price: 2299,
    oldPrice: 2599,
    discount: "-12%",
    url: "/p17.jpg",
  },
  {
    id: 2,
    title: "Mul Chanderi 3 Piece Suit",
    image: "/p18.jpg",
    price: 2299,
    oldPrice: 2499,
    discount: "-8%",
    outOfStock: true,
    url: "/p18.jpg",
  },
  {
    id: 3,
    title: "Pure Cotton Ajrakh Anarkali Suit",
    image: "/p19.jpg", // ✅ fixed
    price: 1695,
    oldPrice: 2499,
    discount: "-32%",
    url: "/p19.jpg",
  }
]
