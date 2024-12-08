// import { subtitle } from "@/components/primitives";

// export default function AboutPage() {
//   return (
//     <div className="text-left">
//       <h1 className= {subtitle()}>About me</h1>
      
//       <p className="text-left mt-12 text-[32px]">I combine my social science knowledge and design background and apply it to the world of empathetic user-centered design. Over the years my passion for design and technology has motivated me to create refined and practical design experiences. Want to work on a project, or get to know me? Just contact me at derrikdesign@gmail.com, connect on LinkedIn and feel free to check out my Dribbble!</p>
      
//     </div>
//   );
// }

import { subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="text-left">
      <h1 className={subtitle()}>About me</h1>
      <div className="mt-8 flex justify-left">
        <img 
          src="./images/derrik.png" 
          alt="derrik" 
          className="w-24 h-24 "
        />
      </div>
      <p className="text-left mt-12 text-[32px]">
        I'm Derrik Campbell, a product designer who is passionate about crafting products. Over the years my passion for design and technology has motivated me to create refined and practical design experiences. Want to work on a project, or get to know me? Just contact me at derrikdesign@gmail.com, connect on LinkedIn and feel free to check out my Dribbble!
      </p>
    
  
    </div>
  );
}
