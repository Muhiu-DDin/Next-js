import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
    
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Our project focuses on deep learning techniques for image dehazing,
            utilizing AOD-Net to enhance visibility in hazy images through
            advanced neural network architectures.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AOD-Net Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Training Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dehazing Results
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ResearchGate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>AI Research Lab, XYZ University</p>
          <p>123 AI Research Center</p>
          <p>
            Email:{" "}
            <a href="mailto:info@aodnetproject.com" className="hover:underline">
              info@aodnetproject.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              (123) 456-7890
            </a>
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        &copy; 2024 AOD-Net Research. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
