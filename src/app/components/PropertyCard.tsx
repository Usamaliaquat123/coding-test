import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  MoreVertical,
  BedDouble,
  Bath,
  Square,
} from "lucide-react";
import { motion } from "framer-motion";
import { Property } from "../../../types/property";
import moment from "moment";
import Link from "next/link";
import { handleEmail, handlePhoneCall, handleWhatsApp } from "../utils";
import Image from "next/image";

interface PropertyCardProps {
  data?: Property;
  loading?: boolean;
}

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} AED/year`;
};

export const PropertyCard: React.FC<PropertyCardProps> = ({
  data,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className=" bg-white rounded-lg overflow-hidden shadow-lg animate-pulse">
        <div className="relative">
          <div className="h-72 bg-gray-200" />
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="h-6 w-20 bg-gray-300 rounded-full" />
            <div className="h-6 w-24 bg-gray-300 rounded-full" />
          </div>
          <div className="absolute top-4 right-4">
            <div className="h-8 w-20 bg-gray-300 rounded-lg" />
          </div>
        </div>
        <div className="p-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded mb-2" />
          <div className="h-8 w-1/2 bg-gray-300 rounded mb-4" />
          <div className="h-4 w-full bg-gray-200 rounded mb-4" />
          <div className="flex gap-4 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-20 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <motion.div
      className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/properties/${data.id}`}>
        <div className="relative">
          <div className="relative h-56">
            <img
              src={data.image}
              alt={data.property}
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 px-2 py-1 rounded">
              <span className="font-medium text-sm">20</span>
            </div>
          </div>

          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            {/* Agent Verified Badge */}
            {data.agent.verified && (
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full" />
                VERIFIED
              </span>
            )}
            {/* SuperAgent Badge */}
            {data.agent.superAgent && (
              <span className="bg-indigo-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full" />
                SUPERAGENT
              </span>
            )}
          </div>

          {/* Premium Badge */}
          {data.premium && (
            <div className="absolute top-4 right-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded text-sm font-medium">
                PREMIUM
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        {/* Property Type & Price */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-gray-600">
            {data.type === "rent" ? "Apartment / Rent" : "Sale"}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {formatPrice(data.price)}
        </h2>

        {/* Features */}
        <p className="text-gray-600 mb-4">
          Spacious | Fully Furnished | Well Maintained
        </p>

        {/* Location */}
        <div className="flex items-start gap-2 mb-4">
          <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
          <span className="text-gray-600">{data.address}</span>
        </div>

        {/* Specs */}
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">{data.bedroom}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">{data.washroom}</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">1,127 sqft</span>
          </div>
        </div>

        {/* Agent Info & Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <Link href={"/agents/2"}>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={data.agent.image}
                  alt="agent"
                  className="w-10 h-10 object-cover"
                />
              </div>
            </Link>
          </div>
          <div className="text-sm text-gray-500 ml-2">
            Listed {moment(data.createdAt).fromNow()}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handlePhoneCall(data.agent.phone)}
              className="p-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                handleEmail({
                  email: data.agent.email,
                  name: data.agent.name,
                })
              }
              className="p-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                handleWhatsApp({
                  phone: data.agent.phone,
                  name: data.agent.name,
                })
              }
              className="p-2 text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
