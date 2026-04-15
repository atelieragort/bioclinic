'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Award, Building2, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The conference brings together leaders in healthcare innovation and biotechnology.
          </p>
        </div>

        {/* Serve */}
        <div className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Services</h2>
              <p className="text-gray-400 mb-4">
                The app helps you track your symptoms and stay on top of your healthcare needs.
              </p>
              <p className="text-gray-400 mb-4">
                She received excellent healthcare from the nursing staff during her recovery.
              </p>
              <p className="text-gray-400">
                Without insurance, a single visit to the emergency room can result in crushing healthcare debt.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Building2,
              stat: "$192M+",
              label: "Property Value"
            },
            {
              icon: Users,
              stat: "35,000+",
              label: "Active Reaserchers"
            },
            {
              icon: Award,
              stat: "105+",
              label: "Properties"
            }
          ].map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 text-center">
                <item.icon className="h-12 w-12 text-[#3B82F6] mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2 text-white">{item.stat}</div>
                <div className="text-gray-400">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="mb-16">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Research</h2>
              <p className="text-gray-400">
                I chose this job specifically because it offers comprehensive healthcare benefits.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-white">Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jack",
                role: "CEO & Co-Founder",
                image: "/blog/Jack.jpg"
              },
              {
                name: "Mike",
                role: "Investor",
                image: "/blog/Mike.jpg"
              },
              {
                name: "Harry",
                role: "CGO & Co-Founder",
                image: "/blog/Harry.jpg"
              },
              
            ].map((member, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1 text-white">{member.name}</h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 