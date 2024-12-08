// "use client";

// import React from 'react';

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear(); // Get the current year

//   return (
//     <div>
//       {/* Divider */}
//       <div className="border-t border-gray-900 my-4" /> {/* Divider line above the footer */}

//       <footer className="w-[1212px] mx-auto flex flex-col md:flex-row items-start justify-between p-6 text-white">
//         {/* Derrikdesign Text on the Left */}
//         <p className="mt-4 text-left md:text-center w-full md:w-auto">&copy; derrikdesign {currentYear}</p>

//         {/* Navigation Columns */}
//         <div className="flex flex-col md:flex-row md:space-x-8"> {/* Added space-x-8 for horizontal spacing */}
//           <div className="flex flex-col mr-4"> {/* Adjusted margin */}
           
//             <ul className="mt-2 space-y-2"> {/* Added space-y-2 for vertical spacing */}
//               <li><a href="/" className="text-white hover:underline">Home</a></li>
//               <li><a href="/about" className="text-white hover:underline">About</a></li>
//               <li><a href="/projects" className="text-white hover:underline">Projects</a></li>
//               <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
//             </ul>
//           </div>

//           <div className="flex flex-col"> {/* Removed margin to balance with the first column */}
      
//             <ul className="mt-2 space-y-2"> {/* Added space-y-2 for vertical spacing */}
//               <li><a href="https://twitter.com" className="text-white hover:underline">Twitter</a></li>
//               <li><a href="https://facebook.com" className="text-white hover:underline">Facebook</a></li>
//               <li><a href="https://instagram.com" className="text-white hover:underline">Instagram</a></li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


"use client";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
      {/* Divider */}
      <div className="border-t border-gray-800 my-4" /> {/* Divider line above the footer */}

      <footer className="max-w-[1212px] mx-auto flex flex-col md:flex-row items-start justify-between p-6 text-white">
        {/* Derrikdesign Text on the Left */}
        <p className="mt-4 text-left md:text-center w-full md:w-auto">&copy; derrikdesign {currentYear}</p>

        {/* Navigation Columns */}
        <div className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
          {/* First column */}
          <div className="flex flex-col mb-4 md:mb-0"> {/* Adjusted margin for mobile */}
            <ul className="space-y-2"> {/* Added space-y-2 for vertical spacing */}
              <li><a href="/" className="text-white hover:underline">Home</a></li>
              <li><a href="/about" className="text-white hover:underline">About me</a></li>
              <li><a href="/projects" className="text-white hover:underline">Projects</a></li>
              <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Second column */}
          <div className="flex flex-col">
            <ul className="space-y-2"> {/* Added space-y-2 for vertical spacing */}
              <li><a href="https://www.linkedin.com/in/derrikcampbell/" className="text-white hover:underline">Linkedin</a></li>
              <li><a href="https://dribbble.com/derrikcampbell" className="text-white hover:underline">Dribbble</a></li>
              <li><a href="https://github.com/DerrikC" className="text-white hover:underline">Github</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
