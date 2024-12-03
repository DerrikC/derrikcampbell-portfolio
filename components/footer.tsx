"use client";

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="w-full flex items-center justify-left py-3 ml-6 text-white">
      <p>&copy; derrikdesign {currentYear}  </p>
    </footer>
  );
};

export default Footer;