export interface Game {
  id: number;
  title: string;
  price: number;
  discountedPrice?: number; // ✅ Make it optional to avoid errors
  imageUrl: string;
  platform: string;
  genre: string;
  rating: number;
  releaseYear: number;
  description: string;
}

export interface CartItem {
  game: Game;
  quantity: number;
}
