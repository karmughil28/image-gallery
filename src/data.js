export const categories = ['All', 'Landscape', 'Portrait', 'Architecture', 'Lifestyle'];

export const images = [
  { id: 1, title: 'Quiet Fairway', category: 'Landscape', price: 4800, image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=85' },
  { id: 2, title: 'The Players', category: 'Portrait', price: 6200, image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, title: 'Clubhouse Morning', category: 'Architecture', price: 5500, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { id: 4, title: 'First Light', category: 'Landscape', price: 7200, image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { id: 5, title: 'Quiet Company', category: 'Lifestyle', price: 5900, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85' },
  { id: 6, title: 'Green Room', category: 'Architecture', price: 5100, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
  { id: 7, title: 'After The Round', category: 'Lifestyle', price: 6400, image: 'https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=1200&q=85' },
  { id: 8, title: 'Still Waters', category: 'Landscape', price: 4600, image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85' }
];

export const money = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
