import React from "react";
import NavBar from "../../components/custom/NavBar";
import Hero from "../../components/custom/Hero";
import { BsLightningChargeFill, BsSearch } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] p-10">
      <NavBar />
      <Hero />
      <div className="container mx-auto mt-30">
        <h2 className="text-4xl font-semibold text-white pb-10">
          Como funciona
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div className="rounded-full h-10 w-10 bg-[#6aa17f]/10 flex items-center justify-center">
              <BsLightningChargeFill color="#6aa17f" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-2xl font-medium">
                Crie seu projeto
              </h3>
              <p className="text-white font-light">
                Compartilhe sua ideia e as funções que você precisa
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="rounded-full h-10 w-10 bg-[#6aa17f]/10 flex items-center justify-center">
              <BsSearch color="#6aa17f" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-2xl font-medium">
                Conecte-se com talentos
              </h3>
              <p className="text-white font-light">
                Procure e ache desenvolvedores e designers
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="rounded-full h-10 w-10 bg-[#6aa17f]/10 flex items-center justify-center">
              <FaHandsHelping color="#6aa17f" />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-2xl font-medium">
                Colabore e crie
              </h3>
              <p className="text-white font-light">
                Trabalhem juntos para trazer vida a sua ideia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
