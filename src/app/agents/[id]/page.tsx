"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Award,
  Phone,
  Mail,
  MessageCircle,
  Share2,
  MapPin,
  CheckCircle2,
  Star,
  ChevronRight,
  Building,
} from "lucide-react";
import { handleContact } from "@/app/utils";
import { properties } from "../../../../lib/data";
import { Agent } from "../../../../types/property";

export default function AgentProfile() {
  const {
    email,
    image,
    languages,
    name,
    description,
    phone,
    specialization,
    verified,
    stats,
  }: Agent | undefined = properties[0].agent;

  const contactInfo = {
    phone,
    email,
    name,
    message: `Hi ${name}, I'm interested in working with you.`,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 h-48" />
        <div className="px-8 pb-8">
          {/* Profile Info */}
          <div className="flex flex-col md:flex-row gap-8 -mt-16">
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={name}
                  width={150}
                  height={150}
                  className="rounded-xl shadow-lg border-4 border-white object-cover"
                />
                {verified && (
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                )}
              </motion.div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h1 className="text-2xl font-bold flex items-center gap-2">
                    {name}
                    {stats?.rating > 4.5 && (
                      <span className="bg-amber-100 text-amber-700 text-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        Top Agent
                      </span>
                    )}
                  </h1>
                  <p className="text-gray-600">{name}</p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-2">
                  <button
                    onClick={() => handleContact("phone", contactInfo)}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleContact("email", contactInfo)}
                    className="px-4 py-2 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleContact("whatsapp", contactInfo)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-xl">
                    {stats.totalDeals}
                  </div>
                  <div className="text-sm text-gray-600">Total Deals</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-xl">
                    {stats.experience}+ Years
                  </div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-xl flex items-center gap-1">
                    {stats.rating}
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div className="text-sm text-gray-600">
                    {stats.reviews} Reviews
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-xl">
                    {stats?.propertiesSold + stats.propertiesRented}
                  </div>
                  <div className="text-sm text-gray-600">Active Listings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">About {name}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>

            {/* Specialization */}
            <div className="mt-6">
              <h3 className="font-medium mb-3">Specialization</h3>
              <div className="flex flex-wrap gap-2">
                {specialization.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6">
              <h3 className="font-medium mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Properties */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Recent Properties</h2>
              <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                View All
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* {recentProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={property.image}
                      alt={"title"}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <span
                        className={`
                        px-2 py-1 rounded text-sm font-medium
                        ${
                          property.type === "sale"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }
                      `}
                      >
                        For {property.type === "sale" ? "Sale" : "Rent"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{property.price}</h3>
                    <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.address}
                    </div>
                    <div className="font-semibold">
                      AED {property.price.toLocaleString()}
                      {property.type === "rent" && (
                        <span className="text-sm text-gray-600">/year</span>
                      )}
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>

        {/* Right Column - Awards & Achievements */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Awards & Achievements
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-8 h-8 text-amber-500" />
                <div>
                  <div className="font-medium">Top Producer 2024</div>
                  <div className="text-sm text-gray-600">
                    Highest sales volume in Dubai Marina
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-8 h-8 text-blue-500" />
                <div>
                  <div className="font-medium">Luxury Specialist</div>
                  <div className="text-sm text-gray-600">
                    Certified luxury property expert
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building className="w-8 h-8 text-green-500" />
                <div>
                  <div className="font-medium">
                    Property Consultant of the Year
                  </div>
                  <div className="text-sm text-gray-600">
                    2023 Excellence Awards
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Operation */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Areas of Operation</h2>
            <div className="space-y-3">
              {["Dubai Marina", "Palm Jumeirah", "Downtown Dubai", "JBR"].map(
                (area) => (
                  <div
                    key={area}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{area}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
