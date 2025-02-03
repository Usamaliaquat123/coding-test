'use client'
import Image from "next/image";
import React, { useState } from "react";
import { Search, ChevronDown } from 'lucide-react';

export default function Home() {

  const [isBedsOpen, setIsBedsOpen] = useState(false);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [selectedBaths, setSelectedBaths] = useState(null);
  return (
    <div className="w-full">
    {/* Hero Section with Background */}
    <div className="relative h-[500px] w-full bg-gradient-to-b from-green-800/50 to-green-900/50">
      <img 
        src="/api/placeholder/1920/500"
        alt="Hero background" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {/* Title */}
        <div className="mb-8 rounded-xl bg-red-500 p-8 text-white">
          <h1 className="text-4xl font-bold">A villa</h1>
          <p className="text-3xl">for every life</p>
        </div>

        {/* Search Container */}
        <div className="w-full max-w-5xl space-y-4">
          {/* Tabs */}
          <div className="flex justify-center rounded-full bg-white p-1">
            <button className="rounded-full bg-purple-100 px-8 py-2 font-medium text-purple-700">Rent</button>
            <button className="px-8 py-2 font-medium text-gray-600 hover:text-gray-800">Buy</button>
            <button className="flex items-center px-8 py-2 font-medium text-gray-600 hover:text-gray-800">
              New projects
              <span className="ml-2 rounded bg-blue-600 px-1.5 py-0.5 text-xs text-white">NEW</span>
            </button>
            <button className="px-8 py-2 font-medium text-gray-600 hover:text-gray-800">Commercial</button>
          </div>

          {/* Search Bar */}
          <div className="flex items-stretch gap-2 rounded-lg bg-white p-2">
            {/* Location Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="City, community or building"
                className="h-full w-full rounded-md border-0 pl-10 text-sm outline-none ring-0 placeholder:text-gray-400 focus:ring-0"
              />
            </div>

            {/* Property Type Dropdown */}
            <div className="relative">
              <button className="flex h-full items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Property type
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Beds & Baths Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsBedsOpen(!isBedsOpen)}
                className="flex h-full items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                Beds & Baths
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Beds & Baths Dropdown Content */}
              {isBedsOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-lg border bg-white p-4 shadow-lg">
                  {/* Bedrooms */}
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-medium text-gray-700">Bedrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Studio', '1', '2', '3', '4', '5', '6', '7', '7+'].map((bed) => (
                        <button
                          key={bed}
                          onClick={() => setSelectedBeds(bed)}
                          className={`rounded-full px-4 py-1 text-sm ${
                            selectedBeds === bed
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {bed}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <h3 className="mb-2 text-sm font-medium text-gray-700">Bathrooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {['1', '2', '3', '4', '5', '6', '7', '7+'].map((bath) => (
                        <button
                          key={bath}
                          onClick={() => setSelectedBaths(bath)}
                          className={`rounded-full px-4 py-1 text-sm ${
                            selectedBaths === bath
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {bath}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="rounded-lg bg-red-500 px-8 py-2 font-medium text-white hover:bg-red-600">
              Search
            </button>
          </div>

          {/* Popular Locations */}
          <div className="rounded-lg bg-white p-4">
            <h3 className="mb-2 font-medium text-gray-700">Popular locations</h3>
            <div className="space-y-2">
              {['Dubai Marina', 'Downtown Dubai', 'Business Bay'].map((location) => (
                <div key={location} className="flex items-center gap-2 rounded-lg p-2 hover:bg-gray-50">
                  <div className="rounded-full bg-gray-100 p-2">
                    <Search className="h-4 w-4 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">{location}</p>
                    <p className="text-xs text-gray-500">Dubai</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
