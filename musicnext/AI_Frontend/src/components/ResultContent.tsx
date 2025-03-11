// "use client";

// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Loader2 } from "lucide-react";

// export default function ResultContent() {
//   const searchParams = useSearchParams();
//   const originalImage = searchParams.get("original");
//   const dehazedImage = searchParams.get("dehazed");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader2 className="w-8 h-8 animate-spin" />
//       </div>
//     );
//   }

//   if (!originalImage || !dehazedImage) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <span>No Image Found</span>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center gap-20 mt-20 w-full max-w-4xl mx-auto h-[29rem]">
//       <div className="text-center">
//         <h2 className="text-lg font-semibold mb-2">Original Image</h2>
//         <img
//           src={originalImage}
//           alt="Selected"
//           className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       <div className="text-center">
//         <h2 className="text-lg font-semibold mb-2">Dehazed Image</h2>
//         <img
//           src={dehazedImage}
//           alt="Dehazed"
//           className="w-[250px] h-[250px] object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Image from "next/image";

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
    <div className="flex justify-center items-center gap-20 mt-20 w-full max-w-4xl mx-auto h-[29rem]">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Original Image</h2>
        <Image
          src={originalImage}
          alt="Selected"
          width={250} 
          height={250}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Dehazed Image</h2>
        <Image
          src={dehazedImage}
          alt="Dehazed"
          width={250} 
          height={250} 
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

