'use client'

import { useState } from 'react'
import { Beach } from '../data/beaches'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface BeachStatusProps {
  beach: Beach
}

export default function BeachStatus({ beach }: BeachStatusProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isStatusOutdated = new Date().getTime() - new Date(beach.lastUpdated).getTime() > 12 * 60 * 60 * 1000

  return (
    <Card className={`${isStatusOutdated ? 'bg-gray-100' : ''} overflow-hidden max-w-2xl mx-auto`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 py-3 px-4">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-lg font-bold">{beach.name}</CardTitle>
          <div className={`px-2 py-1 rounded-full text-white text-xs ${beach.status === 'Open' ? 'bg-green-500' : 'bg-red-500'}`}>
            {beach.status}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="p-0 h-8 flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm mr-1">{isExpanded ? 'Hide Details' : 'Show Details'}</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CardHeader>
      <CardContent className="pt-0 pb-3 px-4">
        {isExpanded && (
          <div className="mt-2 space-y-1 text-sm">
            <p>{beach.details}</p>
            <p className="text-xs text-gray-500">
              Last updated: {new Date(beach.lastUpdated).toLocaleString()}
            </p>
            <a href={`/beaches/${beach.id}`} className="text-blue-500 hover:underline block">
              More information about {beach.name}
            </a>
            {isStatusOutdated && (
              <p className="text-yellow-600 font-semibold text-xs">Status may be outdated</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

