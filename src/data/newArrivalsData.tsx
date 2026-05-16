import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: 'Custom Heart Acrylic LED Lamp',
    srcUrl: '/images/gifts/gift-3.jpg',
    gallery: [
      '/images/gifts/heart-led-1.png', 
      '/images/gifts/heart-led-detail-1.png', 
      '/images/gifts/heart-led-detail-2.png'
    ],
    price: 499,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Personalized Photo Print LED Frame',
    srcUrl: '/images/gifts/gift-2.webp',
    gallery: ['/images/gifts/gift-2.webp', '/images/gifts/photo-led-detail-1.png', '/images/gifts/photo-led-detail-2.png'],
    price: 699,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: 'Romantic Couple Illustration Standee',
    srcUrl: '/images/gifts/gift-3.jpg',
    gallery: ['/images/gifts/gift-3.jpg'],
    price: 399,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: 'Customized Silhouette Acrylic Trophy',
    srcUrl: '/images/meru/image3.jpeg',
    gallery: [
      '/images/meru/image2.jpg', 
      '/images/meru/image1.jpg', 
      '/images/meru/image4.jpg'
    ],
    price: 599,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: 'Vertical Striped Shirt',
    srcUrl: '/images/pic5.png',
    gallery: ['/images/pic5.png', '/images/pic10.png', '/images/pic11.png'],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: 'Courage Graphic T-shirt',
    srcUrl: '/images/pic6.png',
    gallery: ['/images/pic6.png', '/images/pic10.png', '/images/pic11.png'],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: 'Loose Fit Bermuda Shorts',
    srcUrl: '/images/pic7.jpg',
    gallery: ['/images/pic7.jpg'],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: 'Faded Skinny Jeans',
    srcUrl: '/images/pic8.png',
    gallery: ['/images/pic8.png'],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: 'Polo with Contrast Trims',
    srcUrl: '/images/pic12.png',
    gallery: ['/images/pic12.png', '/images/pic10.png', '/images/pic11.png'],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: 'Gradient Graphic T-shirt',
    srcUrl: '/images/pic13.png',
    gallery: ['/images/pic13.png', '/images/pic10.png', '/images/pic11.png'],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: 'Polo with Tipping Details',
    srcUrl: '/images/pic14.png',
    gallery: ['/images/pic14.png'],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: 'Black Striped T-shirt',
    srcUrl: '/images/pic15.png',
    gallery: ['/images/pic15.png'],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: 'Karthi K.',
    content:
      '"Finding personalized gifts that truly capture a special milestone used to be a challenge until I discovered this shop. Their range of custom acrylic LED lamps and frames is truly remarkable, catering perfectly to anniversaries and special occasions."',
    rating: 5,
    date: 'March 14, 2025',
  },
  {
    id: 2,
    user: 'Sarah M.',
    content: `"I'm blown away by the clarity and quality of the photo frame I received. The UV print is vibrant, and the illuminated base creates a beautiful warm glow. It completely exceeded my expectations as a wedding keepsake!"`,
    rating: 5,
    date: 'May 15, 2025',
  },
  {
    id: 3,
    user: 'Raja R.',
    content: `"This acrylic couple trophy is a must-have for anyone looking for a unique anniversary gift. The minimalistic laser-engraved lettering is crisp, the wooden base feels premium, and you can see the craftsmanship in every single detail."`,
    rating: 5,
    date: 'August 16, 2025',
  },
  {
    id: 4,
    user: 'John P.',
    content: `"As someone who values clean, modern design, I absolutely love their customized frames. The heart-shaped acrylic is beautifully cut, flawless, and stands out as a unique piece of art on our bedside table."`,
    rating: 5,
    date: 'August 17, 2025',
  },
  {
    id: 5,
    user: 'Liam K.',
    content: `"A perfect fusion of custom photography and elegant decor. The wooden base feels highly durable, and the illuminated silhouette design brings our favorite memories back to life every single night."`,
    rating: 5,
    date: 'Jan 26, 2026',
  },
  {
    id: 6,
    user: 'Samantha D.',
    content: `"I absolutely love this customized LED award frame! The script font looks elegant and the clear acrylic finish is incredibly smooth. I gifted it to my best friend for her wedding, and it instantly became her favorite keepsake."`,
    rating: 5,
    date: 'March 19, 2026',
  },
];

export const products: Product[] = [
  // TROPHY
  {
    id: 1,
    title: "Metal Trophy Cup",
    srcUrl: "/images/trophy1.png",
    price: 120,
    rating: 4.5,
    category: "trophy",
    subCategory: "metal",
  },

  {
    id: 2,
    title: "Wooden Shield Trophy",
    srcUrl: "/images/trophy2.png",
    price: 180,
    rating: 5,
    category: "trophy",
    subCategory: "wooden",
  },

  {
    id: 3,
    title: "Corporate Award",
    srcUrl: "/images/trophy3.png",
    price: 250,
    rating: 4,
    category: "trophy",
    subCategory: "corporate",
  },

  {
    id: 4,
    title: "Sports Cup",
    srcUrl: "/images/trophy4.png",
    price: 90,
    rating: 4.8,
    category: "trophy",
    subCategory: "sports",
  },

  // FRAMES
  {
    id: 5,
    title: "Photo Frame Gold",
    srcUrl: "/images/frame1.png",
    price: 150,
    rating: 4,
    category: "frames",
    subCategory: "photo",
  },

  // GIFTS
  {
    id: 6,
    title: "Birthday Gift Box",
    srcUrl: "/images/gift1.png",
    price: 200,
    rating: 5,
    category: "gifts",
    subCategory: "birthday",
  },
];