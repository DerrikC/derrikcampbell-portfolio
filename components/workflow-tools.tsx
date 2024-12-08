"use client";
import { subtitle } from "@/components/primitives";
const logos = [
  { id: 1, src: "/images/Figma.png", alt: "Company 1" },
  { id: 2, src: "/images/Notion.png", alt: "Company 2" },
  { id: 3, src: "/images/ChatGpt.png", alt: "Company 3" },
  { id: 3, src: "/images/Cursor.png", alt: "Company 4" },
  // Only three logos are included
];

const WorkflowTools = () => {
  return (
    <div className="flex flex-col items-center mb-32">
      <div className="my-8 text-center">
        <span className={subtitle()}>Tools I use daily</span>
      </div>
      <div className="flex justify-center gap-6">
        {logos.map(logo => (
          <div key={logo.id} className="flex items-center">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-14 w-14 object-contain"
            /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowTools;