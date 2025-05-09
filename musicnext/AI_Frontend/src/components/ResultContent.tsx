"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function ResultContent() {
  const searchParams = useSearchParams();
  const originalImage = searchParams.get("original");
  const dehazedImage = searchParams.get("dehazed");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!originalImage || !dehazedImage) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span>No Image Found</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl py-8">
        <div className="text-center flex flex-col items-center">
          <img
            src={originalImage}
            alt="Selected"
            className="h-[250px] w-[250px] object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-base mt-3 sm:text-lg font-semibold mb-4 text-white hidden md:block">Original Image</h2>
        </div>

        <div className="text-center flex flex-col items-center">
          <img
            src={dehazedImage}
            alt="Dehazed"
            className="h-[250px] w-[250px] object-cover rounded-lg shadow-lg"
          />
          <h2 className="text-base mt-3 sm:text-lg font-semibold mb-4 text-white hidden md:block">Dehazed Image</h2>
        </div>
      </div>
    </div>
  );
}
