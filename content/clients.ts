export interface Client {
  id: string
  name: string
  logo?: string
}

export const clients: Client[] = [
  { id: 'google', name: 'Google', logo: '/clients/googlelogo.png' },
  { id: 'kendra-scott', name: 'Kendra Scott', logo: '/clients/kendrascottlogo.png' },
  { id: 'urban-skillet', name: 'Urban Skillet', logo: '/clients/urbanskilletlogo.png' },
  { id: 'halal-social', name: 'The Halal Social', logo: '/clients/thehalalsociallogo.png' },
  { id: 'uh-psa', name: 'UH PSA', logo: '/clients/psauhlogo.png' },
  { id: 'uh-msa', name: 'UH MSA', logo: '/clients/uhmsalogo.png' },
  { id: 'core-labs', name: 'Core Labs Pilates' },
  { id: 'cars-n-chai', name: 'Cars N Chai', logo: '/clients/carsnchailogo.png' },
  { id: 'plus1', name: 'Plus1', logo: '/clients/plus1logo.png' },
  { id: 'live-hydration', name: 'Live Hydration Spa' },
  { id: 'texas-halal-fest', name: 'Texas Halal Fest', logo: '/clients/texashalalfestlogo.png' },
]
