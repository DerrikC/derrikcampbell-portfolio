"use client";
import { title, subtitle } from "@/components/primitives";
import { useTheme } from "next-themes";
const logos = [
  { id: 1, src: "/images/logo1.png", alt: "Company 1" },
  { id: 2, src: "/images/logo2.png", alt: "Company 2" },
  { id: 3, src: "/images/logo3.png", alt: "Company 3" },
  // Only three logos are included
];

const CompanyLogos = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="mb-4 text-center">
        <span className={subtitle()}>Organizations I&apos;ve worked with</span>
      </div>
      <div className="flex justify-center gap-6">
        {logos.map(logo => (
          <div key={logo.id} className="flex items-center">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-36 w-36 object-contain"
            /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;