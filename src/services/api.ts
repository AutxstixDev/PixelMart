import axios from 'axios';

const RAWG_API_KEY = '2d4e3f7c4f7e4d8b9f6c8e2b7a9d5f3c'; // Replace with your actual API key
const BASE_URL = 'https://api.rawg.io/api';

export const fetchRetroGames = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      params: {
        key: RAWG_API_KEY,
        dates: '1980-01-01,1995-12-31',
        ordering: '-rating',
        page_size: 40
      }
    });

    return response.data.results.map((game: any) => ({
      id: game.id,
      title: game.name,
      price: 29.99, // Set a default price for retro games
      imageUrl: game.background_image || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
      platform: game.platforms?.map((p: any) => p.platform.name).join(', ') || 'Classic Console',
      genre: game.genres?.[0]?.name || 'Retro',
      rating: game.rating || 4.5,
      releaseYear: new Date(game.released).getFullYear() || 1990,
      description: game.description_raw || 'A classic retro game that defined a generation of gaming.'
    }));
  } catch (error) {
    console.error('Error fetching retro games:', error);
    return [];
  }
};