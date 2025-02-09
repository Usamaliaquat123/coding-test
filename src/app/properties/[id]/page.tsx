"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { properties } from "../../../../lib/data";
import {
  Building2,
  MapPin,
  BedDouble,
  Bath,
  Calendar,
  Square,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Share2,
  CheckCircle2,
} from "lucide-react";
import PropertyNotFound from "@/app/components/NotFound";

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p?.id === params?.id);

  if (!property) return <PropertyNotFound />;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full bg-black">
        <Image
          src={property.image}
          alt={property.property}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {/* Property Type Badge */}
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
            {property.type === "rent" ? "For Rent" : "For Sale"}
          </span>
        </div>

        {/* Image Count */}
        <div className="absolute bottom-6 right-6 bg-white/90 px-3 py-1 rounded-lg">
          <span className="text-sm font-medium">20 Photos</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-24 relative">
        <motion.div className="bg-white rounded-xl shadow-xl p-8" {...fadeIn}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-600">
                {property.property}
              </h1>
              <div className="flex items-center text-gray-600 gap-2">
                <MapPin className="w-4 h-4" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary mb-2 text-gray-600">
                AED {property.price.toLocaleString()}
                {property.type === "rent" && (
                  <span className="text-base font-normal text-gray-600">
                    /year
                  </span>
                )}
              </div>
              <div className="flex gap-2 justify-end">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Details */}
            <div className="lg:col-span-2">
              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <BedDouble className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-medium text-gray-500">
                    {property.bedroom} Beds
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Bath className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-medium text-gray-500">
                    {property.washroom} Baths
                  </span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Square className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-medium text-gray-500">1,127 sqft</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg">
                  <Building2 className="w-6 h-6 text-gray-400 mb-2" />
                  <span className="font-medium text-gray-500">
                    {property.type === "rent" ? "Apartment" : "Villa"}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Building2 className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Developer</p>
                      <p className="font-medium text-gray-400">
                        {property.developer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Community</p>
                      <p className="font-medium text-gray-400">
                        {property.community}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Listed</p>
                      <p className="font-medium text-gray-400">
                        {property.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">
                  Description
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Agent Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 bg-white rounded-xl border p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src={property.agent.image}
                      alt={property.agent.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    {property.agent.verified && (
                      <CheckCircle2 className="w-5 h-5 text-blue-500 absolute -bottom-1 -right-1 bg-white rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-600">
                      {property.agent.name}
                    </h3>
                    <p className="text-sm text-gray-500">Property Consultant</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className=" cursor-pointer w-full flex items-center justify-center gap-2 bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors bg-red-500">
                    <Phone className="w-5 h-5" />
                    Call
                  </button>
                  <button className="hover:border-red-500 cursor-pointer w-full flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary p-3 rounded-lg hover:bg-primary/5 transition-colors border-red-300">
                    <Mail className="w-5 h-5 text-red-400" />
                    <p className="text-md text-red-400 font-bold">Email</p>
                  </button>
                  <button className="cursor-pointer w-full flex items-center justify-center gap-2 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
