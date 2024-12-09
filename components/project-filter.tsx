


// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);

//   const filterProjects = (category: string) => {
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14"> 
//         <div className="flex gap-4"> 
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color="success" 
//             variant="bordered" 
//             radius="full" 
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and Edit Icon */}
//           <Button 
//             color="default" 
//             variant="bordered" 
//             radius="full" 
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and Search Icon */}
//           <Button 
//             color="default" 
//             variant="bordered" 
//             radius="full" 
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Filter Icon */}
//           <Button 
//             color="default" 
//             variant="bordered" 
//             radius="full" 
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
//               <CardHeader className="absolute z-10 top-1 flex-col items-start">
//                 <p className="text-tiny text-white/60 uppercase font-bold">{project.title}</p>
//                 <h4 className="text-white/90 font-medium text-xl">{project.title}</h4>
//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt={project.title}
//                 className="z-0 w-full h-full object-cover"
//                 src={project.imageUrl}
//               />
//               <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
//                 <div className="flex flex-grow gap-2 items-center">
//                   <Image
//                     alt="App icon"
//                     className="rounded-full w-10 h-11 bg-black"
//                     src="https://nextui.org/images/breathing-app-icon.jpeg"
//                   />
//                   <div className="flex flex-col">
//                     <p className="text-tiny text-white/60">App Name</p>
//                     <p className="text-tiny text-white/60">App description.</p>
//                   </div>
//                 </div>
//                 <Button radius="full" size="sm">Get App</Button>
//               </CardFooter>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;


// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
//               <CardHeader className="absolute z-10 top-1 flex-col items-start">
//                 <p className="text-tiny text-white/60 uppercase font-bold">{project.title}</p>
//                 <h4 className="text-white/90 font-medium text-xl">{project.title}</h4>
//               </CardHeader>
//               <Image
//                 removeWrapper
//                 alt={project.title}
//                 className="z-0 w-full h-full object-cover"
//                 src={project.imageUrl}
//               />
//                {/* <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100"> */}
//               <CardFooter className="">
//                 {/* <div className="flex flex-grow gap-2 items-center">
//                   <Image
//                     alt="App icon"
//                     className="rounded-full w-10 h-11 bg-black"
//                     src="https://nextui.org/images/breathing-app-icon.jpeg"
//                   />
//                   <div className="flex flex-col">
//                     <p className="text-tiny text-white/60">App Name</p>
//                     <p className="text-tiny text-white/60">App description.</p>
//                   </div>
//                 </div> */}
//                 <Button radius="full" size="sm">View project →</Button>
//               </CardFooter>
              
//             </Card>
            
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;


// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full h-[300px]">
//               {/* Image and Card */}
//               <Card isFooterBlurred className="w-full h-full">
//                 <Image
//                   removeWrapper
//                   alt={project.title}
//                   className="z-0 w-full h-full object-cover"
//                   src={project.imageUrl}
//                 />
//                 <CardFooter className="absolute bottom-0 z-10 w-full bg-black/40 text-white p-4">
//                   <Button radius="full" size="sm">View project →</Button>
//                 </CardFooter>
//               </Card>

//               {/* Title under the card */}
//               <div className="mt-2 text-center">
//                 <h4 className="text-xl font-medium">{project.title}</h4>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;

// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full h-[300px]">
//               {/* Image and Card */}
//               <Card isFooterBlurred className="w-full h-full">
//                 <Image
//                   removeWrapper
//                   alt={project.title}
//                   className="z-0 w-full h-full object-cover"
//                   src={project.imageUrl}
//                 />
//                 <CardFooter className="absolute bottom-0 z-10 w-full bg-black/40 text-white p-4">
//                   <Button radius="full" size="sm">View project →</Button>
//                 </CardFooter>
//               </Card>

//               {/* Title under the card */}
//               <div className="mt-2 text-center">
//                 <h4 className="text-xl font-medium">{project.title}</h4>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;

// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1", subtitle: "A brief description" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2", subtitle: "UI design project" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3", subtitle: "UX research and design" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4", subtitle: "Brand identity development" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full">
//               {/* Card container with title */}
//               <Card isFooterBlurred className="w-full flex flex-col h-auto">
//                 <Image
//                   removeWrapper
//                   alt={project.title}
//                   className="z-0 w-full object-cover"
//                   src={project.imageUrl}
//                 />
                
//                 {/* Title and Subtitle inside the card */}
//                 <div className="p-4">
//                   <h4 className="text-xl font-medium text-left">{project.title}</h4>
//                   <p className="text-sm text-left text-white/70 mt-1">{project.subtitle}</p>
//                 </div>

//                 <CardFooter className="w-full p-4">
//                   <Button radius="full" size="sm">View project →</Button>
//                 </CardFooter>
//               </Card>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;

// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import { Card, CardFooter, Image } from "@nextui-org/react";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1", subtitle: "A brief description" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2", subtitle: "UI design project" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3", subtitle: "UX research and design" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4", subtitle: "Brand identity development" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full">
//               {/* Card container with title */}
//               <Card isFooterBlurred className="w-full flex flex-col h-auto border-none bg-transparent">
//                 <Image
//                   removeWrapper
//                   alt={project.title}
//                   className="z-0 w-full object-cover"
//                   src={project.imageUrl}
//                 />
                
//                 {/* Title and Subtitle inside the card */}
//                 <div className="p-4">
//                   <h4 className="text-xl font-medium text-left">{project.title}</h4>
//                   <p className="text-sm text-left text-white/70 mt-1">{project.subtitle}</p>
//                 </div>

//                 <CardFooter className="w-full p-4 bg-transparent">
//                   <Button radius="full" size="sm">View project →</Button>
//                 </CardFooter>
//               </Card>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;

// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1", subtitle: "A brief description" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2", subtitle: "UI design project" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3", subtitle: "UX research and design" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4", subtitle: "Brand identity development" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full">
//               {/* Image with border-radius only */}
//               <div className="w-full">
//                 <img 
//                   alt={project.title}
//                   className="w-full h-[300px] object-cover rounded-lg"
//                   src={project.imageUrl}
//                 />
//               </div>
              
//               {/* Title and Subtitle below the image */}
//               <div className="mt-2 px-4">
//                 <h4 className="text-xl font-medium text-left">{project.title}</h4>
//                 <p className="text-sm text-left text-white/70 mt-1">{project.subtitle}</p>
//               </div>

//               {/* Button */}
//               {/* <div className="mt-2 px-4">
//                 <Button radius="full" size="sm">View project →</Button>
//               </div> */}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;

// "use client";

// import { useState } from "react";
// import { Button } from "@nextui-org/button";
// import { subtitle } from "@/components/primitives";
// import Link from 'next/link';

// // Importing icons from feather-icons-react
// import { Grid, File, PenTool, Tag } from 'react-feather';

// const projects = [
//   { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1", subtitle: "A brief description" },
//   { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2", subtitle: "UI design project" },
//   { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3", subtitle: "UX research and design" },
//   { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4", subtitle: "Brand identity development" },
//   // Add more projects as needed
// ];

// const ProjectFilter = () => {
//   const [filteredProjects, setFilteredProjects] = useState(projects);
//   const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

//   const filterProjects = (category: string) => {
//     setActiveFilter(category);  // Update active filter
//     if (category === "all") {
//       setFilteredProjects(projects);
//     } else {
//       const filtered = projects.filter(project => project.category === category);
//       setFilteredProjects(filtered);
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mb-8">
//         <span className={subtitle()}>Selected work</span>
//       </div>

//       <div className="flex justify-center mb-14">
//         <div className="flex gap-4">
//           {/* Button with All category and Grid Icon */}
//           <Button 
//             color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
//             variant="bordered"  // Always bordered for outline effect
//             radius="full" 
//             className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
//             onClick={() => filterProjects("all")}
//           >
//             <Grid size={20} className="mr-2" /> All
//           </Button>

//           {/* Button with UI category and PenTool Icon */}
//           <Button 
//             color={activeFilter === "ui" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ui" ? "border-success" : ""}
//             onClick={() => filterProjects("ui")}
//           >
//             <PenTool size={20} className="mr-2" /> UI
//           </Button>

//           {/* Button with UX category and File Icon */}
//           <Button 
//             color={activeFilter === "ux" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "ux" ? "border-success" : ""}
//             onClick={() => filterProjects("ux")}
//           >
//             <File size={20} className="mr-2" /> UX
//           </Button>

//           {/* Button with Branding category and Tag Icon */}
//           <Button 
//             color={activeFilter === "branding" ? "success" : "default"} 
//             variant="bordered"
//             radius="full" 
//             className={activeFilter === "branding" ? "border-success" : ""}
//             onClick={() => filterProjects("branding")}
//           >
//             <Tag size={20} className="mr-2" /> Branding
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//         {filteredProjects.map(project => (
//           <Link href={`/${project.slug}`} key={project.id}>
//             <div className="w-full">
//               {/* Image with padding around it */}
//               <div className="w-full p-4">
//                 <img 
//                   alt={project.title}
//                   className="w-full h-[300px] object-cover rounded-lg"
//                   src={project.imageUrl}
//                 />
//               </div>
              
//               {/* Title and Subtitle below the image */}
//               <div className="mt-2 px-4">
//                 <h4 className="text-xl font-medium text-left">{project.title}</h4>
//                 <p className="text-sm text-left text-white/70 mt-1">{project.subtitle}</p>
//               </div>

//               {/* Button */}
//               {/* <div className="mt-2 px-4">
//                 <Button radius="full" size="sm">View project →</Button>
//               </div> */}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectFilter;


"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { subtitle } from "@/components/primitives";
import Link from 'next/link';

// Importing icons from feather-icons-react
import { Grid, File, PenTool, Tag } from 'react-feather';

const projects = [
  { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg", slug: "project1", subtitle: "A brief description" },
  { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg", slug: "project2", subtitle: "UI design project" },
  { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg", slug: "project3", subtitle: "UX research and design" },
  { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg", slug: "project4", subtitle: "Brand identity development" },
  // Add more projects as needed
];

const ProjectFilter = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("all");  // Track the active filter

  const filterProjects = (category: string) => {
    setActiveFilter(category);  // Update active filter
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-full sm:max-w-[90%] md:max-w-[85%] mx-auto">
      <div className="text-center mb-8">
        <span className={subtitle()}>Selected work</span>
      </div>

      <div className="flex justify-center mb-14">
        <div className="flex gap-4">
          {/* Button with All category and Grid Icon */}
          <Button 
            color={activeFilter === "all" ? "success" : "default"}  // Apply green outline if active
            variant="bordered"  // Always bordered for outline effect
            radius="full" 
            className={activeFilter === "all" ? "border-success" : ""}  // Apply green border when active
            onClick={() => filterProjects("all")}
          >
            <Grid size={20} className="mr-2" /> All
          </Button>

          {/* Button with UI category and PenTool Icon */}
          <Button 
            color={activeFilter === "ui" ? "success" : "default"} 
            variant="bordered"
            radius="full" 
            className={activeFilter === "ui" ? "border-success" : ""}
            onClick={() => filterProjects("ui")}
          >
            <PenTool size={20} className="mr-2" /> UI
          </Button>

          {/* Button with UX category and File Icon */}
          <Button 
            color={activeFilter === "ux" ? "success" : "default"} 
            variant="bordered"
            radius="full" 
            className={activeFilter === "ux" ? "border-success" : ""}
            onClick={() => filterProjects("ux")}
          >
            <File size={20} className="mr-2" /> UX
          </Button>

          {/* Button with Branding category and Tag Icon */}
          <Button 
            color={activeFilter === "branding" ? "success" : "default"} 
            variant="bordered"
            radius="full" 
            className={activeFilter === "branding" ? "border-success" : ""}
            onClick={() => filterProjects("branding")}
          >
            <Tag size={20} className="mr-2" /> Branding
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <Link href={`/${project.slug}`} key={project.id}>
            <div className="w-full">
              {/* Image with padding around it */}
              <div className="w-full p-4">
                <img 
                  alt={project.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                  src={project.imageUrl}
                />
              </div>
              
              {/* Title and Subtitle below the image */}
              <div className="mt-2 px-4">
                <h4 className="text-xl font-medium text-left">{project.title}</h4>
                <p className="text-sm text-left text-white/70 mt-1">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
