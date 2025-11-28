export interface Service {
  id: string
  title: string
  description: string
  perfectFor: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: 'private-parties',
    title: 'Private Parties',
    description: 'Make your celebration unforgettable with our full-service boba bar. We bring the cart, the crew, and customizable desi-inspired drinks your guests will love.',
    perfectFor: ['Weddings', 'Mehndis', 'Birthday parties', 'Baby showers'],
    icon: '🎉',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Elevate your company gatherings with a unique, memorable experience. Our refreshing drinks are perfect for conferences, product launches, and team celebrations.',
    perfectFor: ['Conferences', 'Product launches', 'Company celebrations', 'Holiday parties'],
    icon: '🏢',
  },
  {
    id: 'corporate-lunches',
    title: 'Corporate Lunches',
    description: 'Treat your team to something special during lunch. We set up quickly and serve delicious bubble tea that keeps everyone energized for the afternoon.',
    perfectFor: ['Team lunches', 'Client meetings', 'Training sessions', 'Working lunches'],
    icon: '🍽️',
  },
  {
    id: 'office-celebrations',
    title: 'Office Celebrations',
    description: 'From work anniversaries to promotions, we make office milestones extra special with our cart bringing the party right to your workspace.',
    perfectFor: ['Work anniversaries', 'Promotions', 'Retirements', 'Team milestones'],
    icon: '🎊',
  },
  {
    id: 'food-fests',
    title: 'Food Fests',
    description: 'Stand out at food festivals and community events with our eye-catching cart and unique South Asian fusion drinks that draw crowds.',
    perfectFor: ['Food festivals', 'Community events', 'Cultural celebrations', 'Night markets'],
    icon: '🎪',
  },
]
