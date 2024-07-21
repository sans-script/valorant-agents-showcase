import Image from "next/image";
import React, { useEffect, useState } from "react";
import useAgents from "@/hooks/useAgents";

const AgentInfo = ({ selectedAgent }: any) => {
  const { loading, error } = useAgents();
  const [description, setDescription] = useState();

  useEffect(() => {
    setDescription(selectedAgent?.description);
  }, [selectedAgent]);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  function handleAgentDescription() {
    setDescription(selectedAgent.description);
  }

  function handleDescriptionAbilities0() {
    setDescription(selectedAgent.abilities[0].description);
  }
  function handleDescriptionAbilities1() {
    setDescription(selectedAgent.abilities[1].description);
  }

  function handleDescriptionAbilities2() {
    setDescription(selectedAgent.abilities[2].description);
  }
  function handleDescriptionAbilities3() {
    setDescription(selectedAgent.abilities[3].description);
  }

  return (
    <div className="flex flex-col z-50 gap-1">
      <div className="flex flex-col pb-8">
        <span className="text-[#EAEEB2] uppercase ">
          {selectedAgent.role.displayName}
        </span>
        <span className="font-tungsten text-[#EAEEB2] uppercase text-[120px] leading-[90px]">
          {selectedAgent.displayName}
        </span>
      </div>

      <div className="flex gap-[2px] h-[90px]">
        <div
          className="flex flex-col justify-center items-center glass-effect w-24 gap-2 cursor-pointer"
          onClick={handleAgentDescription}
        >
          <h1 className="glass-effect-button-abilities text-white font-bold w-[90%] h-[35px] flex items-center justify-center">
            INFO
          </h1>
          <div className="h-8 w-8">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.role.displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center glass-effect w-24 gap-2 cursor-pointer"
          onClick={handleDescriptionAbilities0}
        >
          <h1 className="glass-effect-button-abilities text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            C
          </h1>
          <div className="h-8 w-8">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[0].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center glass-effect w-24 gap-2 cursor-pointer"
          onClick={handleDescriptionAbilities1}
        >
          <h1 className="glass-effect-button-abilities text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            Q
          </h1>
          <div className="h-8 w-8">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[1].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center glass-effect w-24 gap-2 cursor-pointer"
          onClick={handleDescriptionAbilities2}
        >
          <h1 className="glass-effect-button-abilities text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            E
          </h1>
          <div className="h-8 w-8">
            <Image
              key={selectedAgent.uuid}
              src={selectedAgent.abilities[2].displayIcon}
              width={1000}
              height={1000}
              alt={selectedAgent.displayName}
            />
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center glass-effect w-24 gap-2 cursor-pointer"
          onClick={handleDescriptionAbilities3}
        >
          <h1 className="glass-effect-button-abilities text-white font-bold w-[90px] h-[35px] flex items-center justify-center">
            X
          </h1>
          <div className="h-8 w-8">
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
        <p className="font-bold text-[#EAEEB2]">
          {description || selectedAgent.description}
        </p>

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
