// import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const fontMono = FontMono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });


import { Fira_Code as FontMono, Red_Hat_Display as FontSans } from "next/font/google";

// Replace Inter with Red Hat Display
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",  // Custom variable to apply Red Hat Display font
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",  // Keep Fira Code for monospace
});
