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
  { id: '24-hour-pickle', name: '24 Hour Pickle', logo: '/clients/24hourpicklelogo.png' },
  { id: 'uh-psa', name: 'UH PSA', logo: '/clients/psauhlogo.png' },
  { id: 'uh-msa', name: 'UH MSA', logo: '/clients/uhmsalogo.png' },
  { id: 'cars-n-chai', name: 'Cars N Chai', logo: '/clients/carsnchailogo.png' },
  { id: 'plus1', name: 'Plus1', logo: '/clients/plus1logo.png' },
  { id: 'live-hydration', name: 'Live Hydration Spa', logo: '/clients/livehydrationspa.png' },
  { id: 'texas-halal-fest', name: 'Texas Halal Fest', logo: '/clients/texashalalfestlogo.png' },
  { id: 'qs-deli', name: "Q's Deli", logo: '/clients/qsdelilogo.png' },
]
