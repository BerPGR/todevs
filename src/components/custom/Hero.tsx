import React from "react";
import heroImage from "../../../public/undraw_engineering-team_13ax.svg";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex items-center container mx-auto">
      <div className="flex flex-col gap-10">
        <h1 className="text-white text-6xl pr-40 font-semibold">Construa projetos incríveis juntos!</h1>
        <p className="text-white font-light text-2xl pr-20">Crie um projeto, procure colaboradores e expanda seu portfólio</p>
        <div className="flex items-center gap-10">
          <Button className="p-6 text-md" variant="default">Criar Projeto</Button>
          <Button className="p-6 text-md bg-transparent text-white" variant="outline">Explorar Projetos</Button>
        </div>
      </div>
      <img src={heroImage} width={726} className="object-contain"/>
    </div>
  );
};

export default Hero;
