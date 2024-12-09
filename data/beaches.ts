export interface Beach {
  id: string;
  name: string;
  status: 'Open' | 'Closed';
  details: string;
  lastUpdated: string;
}

export const beaches: Beach[] = [
  {
    id: '1',
    name: 'Machans Beach',
    status: 'Open',
    details: 'Calm waters, perfect for swimming.',
    lastUpdated: '2024-03-09T10:00:00Z',
  },
  {
    id: '2',
    name: 'Holloways Beach',
    status: 'Open',
    details: 'Mild waves, suitable for all skill levels.',
    lastUpdated: '2024-03-09T09:30:00Z',
  },
  {
    id: '3',
    name: 'Yorkeys Knob',
    status: 'Closed',
    details: 'Strong currents, swimming not advised.',
    lastUpdated: '2024-03-09T08:45:00Z',
  },
  {
    id: '4',
    name: 'Trinity Beach',
    status: 'Open',
    details: 'Beautiful day, perfect beach conditions.',
    lastUpdated: '2024-03-09T11:15:00Z',
  },
  {
    id: '5',
    name: 'Kewarra Beach',
    status: 'Open',
    details: 'Slight breeze, great for beach activities.',
    lastUpdated: '2024-03-09T10:45:00Z',
  },
  {
    id: '6',
    name: 'Clifton Beach',
    status: 'Open',
    details: 'Clear waters, ideal for snorkeling.',
    lastUpdated: '2024-03-09T09:00:00Z',
  },
  {
    id: '7',
    name: 'Palm Cove',
    status: 'Open',
    details: 'Picturesque views, calm waters.',
    lastUpdated: '2024-03-09T11:30:00Z',
  },
  {
    id: '8',
    name: 'Ellis Beach',
    status: 'Closed',
    details: 'High tide, beach access limited.',
    lastUpdated: '2024-03-09T08:00:00Z',
  }
];

