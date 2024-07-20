import Image from "next/image";
import React from "react";
import useAgents from "@/hooks/useAgents";

const AgentInfo = ({ selectedAgent }: any) => {
  const { loading, error } = useAgents();


  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition-all bg-val">
        <h1 className="font-val text-[120px] text-white">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition-all bg-val">
        <h1 className="font-val text-[120px] text-white">{error}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col z-50">
      <div className="flex flex-col">
        <span className="text-[#EAEEB2] uppercase ">
          {selectedAgent.role.displayName}
        </span>
        <span className="font-tungsten text-[#EAEEB2] uppercase text-[120px] leading-[90px]">
          {selectedAgent.displayName}
        </span>
      </div>

      <div className="flex gap-1 h-[100px]">
        <div className="flex flex-col justify-center items-center glass-effect w-24 gap-2">
          <h1 className="glass-effect-button text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            INFO
          </h1>
          <div className="h-12 w-12">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.role.displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center glass-effect w-24 gap-2">
          <h1 className="glass-effect-button text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            C
          </h1>
          <div className="h-12 w-12">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[0].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center glass-effect w-24 gap-2">
          <h1 className="glass-effect-button text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            Q
          </h1>
          <div className="h-12 w-12">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[1].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center glass-effect w-24 gap-2">
          <h1 className="glass-effect-button text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            E
          </h1>
          <div className="h-12 w-12">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[2].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center glass-effect w-24 gap-2">
          <h1 className="glass-effect-button text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            X
          </h1>
          <div className="h-12 w-12">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[3].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[450px] gap-4 pt-4">
        <p className="font-bold text-[#EAEEB2]">{selectedAgent.description}</p>

        <div className="flex flex-col">
          <span className="text-[#EAEEB2] font-bold text-2xl uppercase ">
            {selectedAgent.role.displayName}
          </span>
          <span className="text-white">{selectedAgent.role.description}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
