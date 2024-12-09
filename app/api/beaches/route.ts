import { NextResponse } from 'next/server'
import { Beach } from '../../../data/beaches'

// This is where you'd typically fetch data from a database or external API
const getBeachData = async (): Promise<Beach[]> => {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    {
      id: '1',
      name: 'Machans Beach',
      status: 'Open',
      details: 'Calm waters, perfect for swimming.',
      lastUpdated: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Holloways Beach',
      status: 'Open',
      details: 'Mild waves, suitable for all skill levels.',
      lastUpdated: new Date().toISOString(),
    },
    // ... add the rest of the beaches here
  ]
}

export async function GET() {
  try {
    const beaches = await getBeachData()
    return NextResponse.json(beaches)
  } catch (error) {
    console.error('Error fetching beach data:', error)
    return NextResponse.json({ error: 'Failed to fetch beach data' }, { status: 500 })
  }
}

