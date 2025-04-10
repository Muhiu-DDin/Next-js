import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 justify-center gap-8 px-10">
    
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Our project focuses on deep learning techniques for image dehazing,
            utilizing AOD-Net to enhance visibility in hazy images through
            advanced neural network architectures.
          </p>
        </div>

       

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li>
              <a href="https://github.com/Muhiu-DDin" className="hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="/RESEARCH_PAPER_AI_PROJECT_2025.pdf" className="hover:underline">
                Research Paper
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>AI Research Lab, Karachi University</p>
          <p>(UBIT)</p>
          <p>
            Email:{" "}
            <a href="mailto:info@aodnetproject.com" className="hover:underline">
              muhiuddin554433@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        &copy; 2025 AOD-Net Research. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
