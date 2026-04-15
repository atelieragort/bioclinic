'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { properties, type Property } from '@/lib/properties-data'
import Image from 'next/image'
import { FractionalOwnershipSlider } from '@/components/fractional-ownership-slider'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function PropertyDetailClient({ id }: { id: string }) {
  const router = useRouter()
  const property = properties.find((p: Property) => p.id === parseInt(id))

  if (!property) {
    return <div className="min-h-screen bg-[#0B1120] text-gray-100 p-8">
      <h1 className="text-2xl font-bold">Property not found</h1>
    </div>
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-[#3B82F6] hover:text-[#2563EB] mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Properties
        </button>
        
        <Card className="overflow-hidden bg-gray-700/50 border-gray-600">
          <div className="relative h-96">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div> 
        </Card>
      </div>
    </div>
  )
} 