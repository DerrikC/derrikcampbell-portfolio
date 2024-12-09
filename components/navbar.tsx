// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";


// export const Navbar = () => {
  

//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
         
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden lg:flex gap-4 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
      
//           {/* <ThemeSwitch /> */}
//         </NavbarItem>
 
//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       {/* Left Section - Brand */}
//       <NavbarContent className="basis-1/3 sm:basis-1/5" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Center Section - Nav items */}
//       <NavbarContent className="hidden lg:flex justify-center basis-1/3">
//         <ul className="flex gap-4 justify-center w-full">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       {/* Right Section - Theme Switch (or other items) */}
//       <NavbarContent className="basis-1/3 sm:basis-1/5" justify="end">
//         <NavbarItem className="hidden sm:flex gap-2">
//           {/* <ThemeSwitch /> */}
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Toggle */}
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   return (
//     <NextUINavbar maxWidth="xl" position="sticky">
//       {/* Left Section - Brand */}
//       <NavbarContent className="basis-1/4" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Second Section - "Works" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/works"
//           >
//             Works
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Third Section - "About Me" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/about"
//           >
//             About Me
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Fourth Section - "Contact" */}
//       <NavbarContent className="basis-1/4" justify="end">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/contact"
//           >
//             Contact
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Toggle */}
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   return (
//     <NextUINavbar
//       maxWidth="xl"
//       className="w-full bg-black "
//     >
//       {/* Left Section - Brand */}
//       <NavbarContent className="basis-1/4" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Second Section - "Works" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/"
//           >
//             Works
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Third Section - "About Me" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/about"
//           >
//             About me
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Fourth Section - "Contact" */}
//       <NavbarContent className="basis-1/4" justify="end">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/docs"
//           >
//             Contact
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Toggle */}
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   return (
//     <NextUINavbar maxWidth="xl" className="w-full bg-black">
//       {/* Left Section - Brand */}
//       <NavbarContent className="basis-1/4" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Second Section - "Works" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/"
//           >
//             Works
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Third Section - "About Me" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/about"
//           >
//             About me
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Fourth Section - "Contact" */}
//       <NavbarContent className="basis-1/4" justify="end">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="mailto:derrikdesign@gmail.com" // Replace with your email
//           >
//             Contact
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Toggle */}
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                     ? "danger"
//                     : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };


// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@nextui-org/navbar";
// import { Link } from "@nextui-org/link";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// // import { ThemeSwitch } from "@/components/theme-switch";

// export const Navbar = () => {
//   return (
//     <NextUINavbar maxWidth="xl" className="w-full bg-black">
//       {/* Left Section - Brand */}
//       <NavbarContent className="basis-1/4" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <p className="font-bold text-inherit">derrikdesign</p>
//           </NextLink>
//         </NavbarBrand>
//       </NavbarContent>

//       {/* Second Section - "Works" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/"
//           >
//             Works
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Third Section - "About Me" */}
//       <NavbarContent className="basis-1/4" justify="center">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="/about"
//           >
//             About me
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Fourth Section - "Contact" */}
//       <NavbarContent className="basis-1/4" justify="end">
//         <NavbarItem>
//           <NextLink
//             className={clsx(
//               linkStyles({ color: "foreground" }),
//               "data-[active=true]:text-primary data-[active=true]:font-medium",
//             )}
//             color="foreground"
//             href="mailto:derrikdesign@gmail.com" // Replace with your email
//           >
//             Contact
//           </NextLink>
//         </NavbarItem>
//       </NavbarContent>

//       {/* Mobile Toggle */}
//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         {/* <ThemeSwitch /> */}
//         <NavbarMenuToggle />
//       </NavbarContent>

//       {/* Mobile Menu Items */}
//       <NavbarMenu>
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={index}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 href={item.href} // Now correctly links to the `href` from `siteConfig`
//                 passHref
//               >
//                 <Link
//                   color={
//                     index === 2
//                       ? "success"
//                       : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                   }
//                   size="lg"
//                 >
//                   {item.label}
//                 </Link>
//               </NextLink>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </NextUINavbar>
//   );
// };

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site"; // Assuming this contains your menu items

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" className="w-full bg-black">
      {/* Left Section - Brand */}
      <NavbarContent className="basis-1/4" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">derrikdesign</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav Menu (visible only on desktop) */}
      <div className="hidden sm:flex flex-grow justify-center">
        <NavbarContent className="basis-1/4" justify="center">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/"
            >
              Works
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1/4" justify="center">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="/about"
            >
              About me
            </NextLink>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="basis-1/4" justify="end">
          <NavbarItem>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href="mailto:derrikdesign@gmail.com"
            >
              Contact
            </NextLink>
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* Mobile Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* Menu toggle button for mobile */}
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href} // Correctly linking the href from siteConfig
                passHref
              >
                <Link
                  color={
                    index === 2
                      ? "success"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  size="lg"
                >
                  {item.label}
                </Link>
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
