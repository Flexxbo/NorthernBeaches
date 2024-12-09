import { beaches } from '../data/beaches'
import BeachStatus from '../components/BeachStatus'

export default function BeachStatusDashboard() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Northern Beaches Live Status</h1>
      <div className="space-y-2">
        {beaches.map((beach) => (
          <BeachStatus key={beach.id} beach={beach} />
        ))}
      </div>
    </div>
  )
}

