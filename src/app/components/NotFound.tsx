import Link from "next/link";
import { Home, Search, ArrowLeft, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center"
              >
                <Building2 className="w-12 h-12 text-red-500" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-2 -right-2"
              >
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">?</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldnt find the property youre looking for. It might have been
            removed, sold, or the link may be incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary bg-red-500  text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>

            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Properties
            </Link>
          </div>

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer mt-8 inline-flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          {/* Suggestions */}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
              You might be interested in
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Dubai Marina", "Palm Jumeirah", "Downtown Dubai", "JBR"].map(
                (area) => (
                  <Link
                    key={area}
                    href={`/search?area=${area}`}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                  >
                    <div className="font-medium text-gray-900">{area}</div>
                    <div className="text-sm text-gray-500">View properties</div>
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
