"use client"
import { useState , useEffect  } from "react";
import axios from "axios";
import { Button } from "./ui/moving-border";
import { useRouter } from "next/navigation"
import { toast } from "sonner"
export default function UploadForm()
 {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("checking...");
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    async function healthCheck() {
      try {
        const response = await axios.get("https://flask-backend-ulna.onrender.com/health");
        console.log("Backend is healthy", response.data);
        setStatus(response?.data.status);
      } catch (error) {
        setTimeout(
          async ()=>{
            try{
                const retryResponse = await axios.get("https://flask-backend-ulna.onrender.com/health");
                setStatus(retryResponse?.data.status)
            }catch(error){
              console.log("health check error =>" , error.message)
              setStatus("error");
            }
          } , 5000
        )
      }
    }

    healthCheck();
  }, []);



  const handleUpload = async () => {
    if (!selectedFile){
      return toast("No File Selected", {
        description: "Please upload a file before proceeding",
      });
    }; 
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      console.log("status =>" , status)
      const response = await axios.post("https://flask-backend-ulna.onrender.com/dehaze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      

      const dehazedImageUrl = response.data.imageUrl;
      const originalImageUrl = URL.createObjectURL(selectedFile);
      
      router.push(`/result?original=${encodeURIComponent(originalImageUrl)}&dehazed=${encodeURIComponent(dehazedImageUrl)}`);

    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input
        type="file"
        onChange={handleFileChange}
        className="p-2 file:border-transparent px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-white file:bg-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg font-bold bg-clip-text file:cursor-pointer mb-5 hover:file:scale-105 file:transition-all file:duration-450 file:ease-in-out"
      />
       <Button
      onClick={handleUpload}
      disabled={loading}
      className="dark:bg-black dark:border-slate-800 dark:text-white 
        px-4 py-3 rounded-lg border border-neutral-600 text-white bg-gray-900 
        hover:bg-gray-800 hover:border-gray-700 hover:text-gray-300 
        hover:scale-105 transition-all duration-300 ease-in-out"
      borderRadius="1.75rem"
      >
         
        {loading ? (
          <div className="flex items-center gap-2">
            <span>Please Wait</span>
          </div>
        ) : (
          "Upload & Dehaze"
        )}
        
      </Button>

    </div>
  );
}
