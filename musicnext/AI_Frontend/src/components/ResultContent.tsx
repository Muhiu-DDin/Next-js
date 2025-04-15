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
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-white">Original Image</h2>
          <img
            src={originalImage}
            alt="Selected"
            className="w-full max-w-[250px] aspect-square object-cover rounded-lg shadow-lg"
          />
        </div>
  
        <div className="text-center flex flex-col items-center">
          <h2 className="text-base sm:text-lg font-semibold mb-4 text-white">Dehazed Image</h2>
          <img
            src={dehazedImage}
            alt="Dehazed"
            className="w-full max-w-[250px] aspect-square object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
  
  
}


