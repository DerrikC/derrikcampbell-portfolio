// "use client";
// import { title, subtitle } from "@/components/primitives";
// import { useTheme } from "next-themes";
// const logos = [
//   { id: 1, src: "/images/logo1.png", alt: "Company 1" },
//   { id: 2, src: "/images/logo2.png", alt: "Company 2" },
//   { id: 3, src: "/images/logo3.png", alt: "Company 3" },
//   // Only three logos are included
// ];

// const CompanyLogos = () => {
//   return (
//     <div className="flex flex-col items-center mt-32 ">
//       <div className=" text-center">
//         <span className={subtitle()}>Organizations I&apos;ve worked with</span>
//       </div>
//       <div className="flex justify-center gap-6">
//         {logos.map(logo => (
//           <div key={logo.id} className="flex items-center">
//             <img 
//               src={logo.src} 
//               alt={logo.alt} 
//               className="h-36 w-36 object-contain"
//             /> 
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompanyLogos;

"use client";
import { title, subtitle } from "@/components/primitives";
import { useTheme } from "next-themes";

// Logos array with 3 logos
const logos = [
  { id: 1, src: "/images/logo1.svg", alt: "Company 1" },
  { id: 2, src: "/images/logo2.svg", alt: "Company 2" },
  { id: 3, src: "/images/logo3.svg", alt: "Company 3" },
  // Add more logos as needed
];

const CompanyLogos = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="text-center">
        <span className={subtitle()}>Organizations I&apos;ve worked with</span>
      </div>

      {/* Flex container for logos */}
      <div className="flex flex-wrap justify-center gap-14 mt-4"> {/* Increased gap here */}
        {logos.map((logo) => (
          <div key={logo.id} className="flex items-center justify-center">
            {/* Image styling with responsive size */}
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
