import React, { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

// Types
type PropertyType = "Apartment" | "Villa" | "Townhouse" | "Penthouse";
type ListingType = "Rent" | "Buy" | "New projects" | "Commercial";

interface Location {
  name: string;
  address: string;
}

interface PropertySearchProps {
  onFilterChange: Function;
  onSortChange: Function;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  onFilterChange,
  onSortChange,
}) => {
  const [selectedListing, setSelectedListing] = useState<ListingType>("Rent");
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [showBedsBaths, setShowBedsBaths] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [searchText, setSearchText] = useState("");

  const listingTypes: ListingType[] = [
    "Rent",
    "Buy",
    "New projects",
    "Commercial",
  ];
  const propertyTypes: PropertyType[] = [
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
  ];
  const recentLocations: Location[] = [
    { name: "Ghalia", address: "Dubai, Jumeirah Village Circle, District 18" },
    { name: "Elite Downtown Residence", address: "Dubai, Downtown Dubai" },
    {
      name: "Sydney Villas",
      address: "Dubai, Jumeirah Village Circle, District 18",
    },
  ];

  const handleTabChange = (type: ListingType) => {
    setSelectedListing(type);
    // onTabChange?.(type);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Listing Type Tabs */}
      <div className="flex bg-white rounded-full mb-4 p-1 w-fit">
        {listingTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedListing(type)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedListing === type
                ? "bg-purple-600 text-white"
                : "text-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-white rounded-full shadow-lg">
        <div className="relative flex-1">
          <div className="flex items-center pl-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="City, community or building"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowLocations(true)}
              className="w-full p-4 pl-2 rounded-l-full focus:outline-none text-black"
            />
          </div>

          {/* Recent Locations Dropdown */}
          {showLocations && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg p-4 z-50">
              <h3 className="text-gray-700 font-medium mb-3">
                Recent locations
              </h3>
              {recentLocations.map((location) => (
                <div
                  key={location.name}
                  className="flex items-start gap-2 py-2 cursor-pointer hover:bg-gray-50"
                >
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-500">
                      {location.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {location.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Property Type Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowPropertyTypes(!showPropertyTypes)}
            className="flex items-center gap-1 px-4 py-4 border-l border-gray-200"
          >
            <span className="text-gray-700">Property type</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showPropertyTypes ? "rotate-180" : ""
              }`}
            />
          </button>

          {showPropertyTypes && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              {propertyTypes.map((type) => (
                <div
                  key={type}
                  onClick={() => setShowPropertyTypes(!showPropertyTypes)}
                  className="px-4 py-2 text-gray-500 hover:bg-gray-50 cursor-pointer"
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Beds & Baths Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowBedsBaths(!showBedsBaths)}
            className="flex items-center gap-1 px-4 py-4 border-l border-gray-200"
          >
            <span className="text-gray-700">Beds & Baths</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform  ${
                showBedsBaths ? "rotate-180" : ""
              }`}
            />
          </button>

          {showBedsBaths && (
            <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50">
              <div className="mb-4">
                <h3 className="text-gray-700 font-medium mb-2">Bedrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Studio", "1", "2", "3", "4", "5", "6", "7", "7+"].map(
                    (num) => (
                      <button
                        key={num}
                        onClick={() => setShowBedsBaths(!showBedsBaths)}
                        className="px-4 py-1 cursor-pointer rounded-full border text-gray-500 border-gray-500 text-sm hover:border-purple-600 hover:text-purple-600"
                      >
                        {num}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium mb-2">Bathrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {["1", "2", "3", "4", "5", "6", "7", "7+"].map((num) => (
                    <button
                      key={num}
                      className="px-4 py-1 cursor-pointer rounded-full border text-gray-500 border-gray-text-gray-500 text-sm hover:border-purple-600 hover:text-purple-600"
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="bg-red-500 text-white px-8 py-4 rounded-r-full hover:bg-red-600 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};
