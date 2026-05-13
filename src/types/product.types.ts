export type Discount = {
  amount: number;
  percentage: number;
};

// export type Product = {
//   id: number;
//   title: string;
//   srcUrl: string;
//   gallery?: string[];
//   category?: string;
//   subCategory?: string ;
//   price: number;
//   discount: Discount;
//   rating: number;
// };

export type Product = {
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  category?: string;
  subCategory?: string ;
  price: number;
  discount?: Discount;
  rating: number;
};