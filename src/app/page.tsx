"use client";

import { useState } from "react";
import { PropertySearch } from "./components/Filters";
import { PropertyCard } from "./components/PropertyCard";
import { Properties, Property } from "../../types/property";
import { properties } from "../../lib/data";

export default function HomePage() {
  const [filteredProperties, setFilteredProperties] =
    useState<Properties>(properties);

  const handleFilterChange = (filters: {
    bedrooms: number;
    priceRange: number;
  }) => {
    let filtered = properties;

    if (filters.bedrooms > 0) {
      filtered = filtered.filter((p) => p.bedroom >= filters.bedrooms);
    }

    if (filters.priceRange > 0) {
      filtered = filtered.filter((p) => p.price >= filters.priceRange);
    }

    setFilteredProperties(filtered);
  };

  const handleSortChange = (sort: string) => {
    const sorted = [...filteredProperties].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "recent":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "name":
          return a.property.localeCompare(b.property);
        default:
          return 0;
      }
    });
    setFilteredProperties(sorted);
  };

  return (
    <main className="  bg-[#F7F7FC]">
      <div className="min-h-screen bg-[#F7F7FC]">
        {/* Hero Section with Background */}
        <div className="relative h-[300px] mb-8">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/background.jpg')`,
            }}
          />

          {/* Content Overlay */}
          <div className="relative container mx-auto px-4 pt-8">
            {/* Main Content */}
            <div className="mt-10">
              {/* Filters Section */}
              <div className="mt-16">
                <PropertySearch
                  onFilterChange={handleFilterChange}
                  onSortChange={handleSortChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid Section */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Discover the latest projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property: Property) => (
              <PropertyCard key={property.id} data={property} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
