import { Game } from '../types';

export const fallbackGames: Game[] = [
  {
    id: 1,
    title: "Super Mario Bros.",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platform: "NES",
    genre: "Platformer",
    rating: 4.9,
    releaseYear: 1985,
    description: "The classic platformer that defined a generation. Guide Mario through the Mushroom Kingdom to rescue Princess Peach."
  },
  {
    id: 2,
    title: "The Legend of Zelda",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platform: "NES",
    genre: "Action-Adventure",
    rating: 4.8,
    releaseYear: 1986,
    description: "Embark on an epic quest as Link to defeat Ganon and save Princess Zelda in this groundbreaking action-adventure game."
  },
  {
    id: 3,
    title: "Sonic the Hedgehog",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1566577739415-d71d56123711?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    platform: "Sega Genesis",
    genre: "Platformer",
    rating: 4.7,
    releaseYear: 1991,
    description: "Speed through levels as Sonic the Hedgehog in this fast-paced platformer that rivaled Mario in the 16-bit era."
  }
];