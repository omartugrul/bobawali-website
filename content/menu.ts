export interface Drink {
  id: string
  name: string
  description: string
  tag?: 'Best Seller' | 'Desi Classic' | 'Refresher' | 'New'
}

export const featuredDrinks: Drink[] = [
  {
    id: 'mango-lassi',
    name: 'Mango Lassi Boba',
    description: 'Creamy mango lassi with tapioca pearls',
    tag: 'Best Seller',
  },
  {
    id: 'rooh-afza',
    name: 'Rooh Afza Lemonade Boba',
    description: 'Rose-flavored refresher with a citrus twist',
    tag: 'Desi Classic',
  },
  {
    id: 'falooda',
    name: 'Falooda Milk Tea',
    description: 'Classic falooda flavors in milk tea form',
    tag: 'Desi Classic',
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun Milk Tea',
    description: 'Sweet cardamom-rose milk tea inspired by gulab jamun',
    tag: 'Best Seller',
  },
  {
    id: 'rose-lemonade',
    name: 'Rose Lemonade',
    description: 'Floral and refreshing lemonade with rose syrup',
    tag: 'Refresher',
  },
  {
    id: 'masala-chai',
    name: 'Masala Chai Boba',
    description: 'Spiced chai with tapioca pearls',
    tag: 'Desi Classic',
  },
]

export const menuConfig = {
  menuPosterUrl: '/our-drinks.png',
  fullMenuPdfUrl: '#', // Placeholder - update with actual menu PDF link
}
