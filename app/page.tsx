import { Link } from "@nextui-org/link";
import ProjectFilter from "@/components/project-filter";
import { button as buttonStyles } from "@nextui-org/theme";
import CompanyLogos from "@/components/company-logos";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="max-w-4xl text-left">
        {/* this is causing issues with theme */}
        <span className={title()}>Hi I&apos;m &nbsp;</span>
        <span className={title({ color: "green" })}>Derrik Campbell</span>
        <br />
        <span className={title()}>
          I design products, brands & practical interactions
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Designer & Developer @ TVDSB <br />
          Aspiring Full-time Product Designer <br />
          Based in London, Canada
        </div>
      </div>
      <div className="flex flex-col items-center">
        <ProjectFilter />
        <CompanyLogos />
      </div>
    </section>
  );
}