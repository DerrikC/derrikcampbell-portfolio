// import ProjectFilter from "@/components/project-filter";
// import CompanyLogos from "@/components/company-logos";
// import WorkflowTools from "@/components/workflow-tools";
// import { title, subtitle } from "@/components/primitives";

// export default function Home() {
//   return (
//     <section className="flex flex-col items-center justify-center gap-4  py-8 md:py-10 ">
//       <div className="w-full max-w-[1212px] mx-auto mt-48 mb-48 ml-0 mr-0 text-left">
//         {/* this is causing issues with theme */}
//         <span className={title()}>Hi I&apos;m&nbsp;</span>
//         <span className={title({ color: "green" })}>Derrik Campbell</span>
//         <br />
//         <span className={title()}>
//           I design products, brands & practical interactions
//         </span>
//         <div className={subtitle({ class: "mt-14" })}>
//           Designer & Developer @ TVDSB <br />
//           Aspiring Full-time Product Designer <br />
//           Based in London, Canada <br/>
       
//         </div>
       
// <div className="mt-14 text-sm"> {/* Added text-sm for smaller text */}
//   ↓ scroll down to view my work
// </div>
//       </div>
//       <div className="flex flex-col items-center">
//         <ProjectFilter />
//         <CompanyLogos />
//         <WorkflowTools />
//       </div>
//     </section>
//   );
// }


import ProjectFilter from "@/components/project-filter";
import CompanyLogos from "@/components/company-logos";
import WorkflowTools from "@/components/workflow-tools";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-full max-w-[1212px] mx-auto mt-48 mb-48 ml-0 mr-0 text-left">
        <span className={title()}>Hi I&apos;m&nbsp;</span>
        <span className={title({ color: "green" })}>Derrik Campbell</span>
        <br />
        <span className={title()}>
          I design products, brands & practical interactions
        </span>
        <div className={subtitle({ class: "mt-14" })}>
          Designer & Developer @ TVDSB <br />
          Aspiring Full-time Product Designer <br />
          Based in London, Canada <br />
        </div>

        {/* Scroll down link */}
        <div className="mt-14 text-sm cursor-pointer">
          <a href="#projects-section">↓ scroll down to view my work</a>
        </div>
      </div>

      {/* Add an ID here to target the ProjectFilter section */}
      <div id="projects-section" className="flex flex-col items-center">
        <ProjectFilter />
        <CompanyLogos />
        <WorkflowTools />
      </div>
    </section>
  );
}
