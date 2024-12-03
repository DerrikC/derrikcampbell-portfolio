"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import { subtitle } from "@/components/primitives";
import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

const projects = [
  { id: 1, title: "Project 1", category: "all", imageUrl: "/images/project1.jpg" },
  { id: 2, title: "Project 2", category: "ui", imageUrl: "/images/project2.jpg" },
  { id: 3, title: "Project 3", category: "ux", imageUrl: "/images/project3.jpg" },
  { id: 4, title: "Project 4", category: "branding", imageUrl: "/images/project4.jpg" },
  // Add more projects as needed
];

const ProjectFilter = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (category: string) => {
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <span className={subtitle()}>Selected work</span>
      </div>

      <div className="flex justify-center mb-4"> 
        <div className="flex gap-4"> 
          {/* Black buttons with white outline and full radius */}
          <Button 
            color="success" // Black color
            variant="bordered" // Bordered style
            radius="full" // Full radius for pill shape
            onClick={() => filterProjects("all")}
          >
            All
          </Button>
          <Button 
            color="default" 
            variant="bordered" 
            radius="full" // Full radius for pill shape
            onClick={() => filterProjects("ui")}
          >
            UI
          </Button>
          <Button 
            color="default" 
            variant="bordered" 
            radius="full" // Full radius for pill shape
            onClick={() => filterProjects("ux")}
          >
            UX
          </Button>
          <Button 
            color="default" 
            variant="bordered" 
            radius="full" // Full radius for pill shape
            onClick={() => filterProjects("branding")}
          >
            Branding
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {filteredProjects.map(project => (
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7" key={project.id}>
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">{project.title}</p>
              <h4 className="text-white/90 font-medium text-xl">{project.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={project.title}
              className="z-0 w-full h-full object-cover"
              src={project.imageUrl}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="App icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">App Name</p>
                  <p className="text-tiny text-white/60">App description.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Get App</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;