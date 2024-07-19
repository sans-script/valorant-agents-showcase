"use client";

import { fetchAgents } from "@/lib/fetchAgents";
import { createGradient } from "@/utils/gradient";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function AgentSlider() {
  const [agents, setAgents] = useState<any[]>([]);
  const [selectedAgentIndex, setSelectedAgentIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState(0);
  const selectedAgent = agents[selectedAgentIndex];

  useEffect(() => {
    const loadAgents = async () => {
      try {
        const agentsData = await fetchAgents();
        setAgents(agentsData);
      } catch (error) {
        console.error("Failed to fetch agents:", error);
      }
    };

    loadAgents();
  }, []);

  useEffect(() => {
    if (agents.length > 0) {
      fetchAgents().then(setAgents);
      const agentsToShow = agents
        .slice(startIndex, startIndex + 13)
        .concat(
          startIndex + 13 > agents.length
            ? agents.slice(0, (startIndex + 13) % agents.length)
            : []
        );
      const middleIndex = Math.floor(agentsToShow.length / 2);
      setSelectedAgentIndex((startIndex + middleIndex) % agents.length);
    }
  }, [startIndex, agents]);

  if (agents.length === 0 || !selectedAgent) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition-all bg-val">
        <h1 className="font-val text-[120px] text-white">Loading...</h1>
      </div>
    );
  }

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + agents.length) % agents.length
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % agents.length);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY < 0) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  return (
    <div
      className="flex items-center justify-center w-screen h-screen transition-colors overflow-hidden"
      style={{
        background: `linear-gradient(150deg, ${createGradient(
          selectedAgent.backgroundGradientColors
        )})`,
      }}
    >
      <div className="scale-50 -top-10 absolute lg:top-20 lg:right-6 lg:scale-100 gap-2 transition-colors z-50">
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
          <p className="font-bold text-[#EAEEB2]">
            {selectedAgent.description}
          </p>

          <div className="flex flex-col">
            <span className="text-[#EAEEB2] font-bold text-2xl uppercase ">
              {selectedAgent.role.displayName}
            </span>
            <span className="text-white">{selectedAgent.role.description}</span>
          </div>
        </div>
      </div>

      <div className="flex absolute h-[900px] left-8 bottom-1 -top-14 opacity-50">
        <Image
          key={selectedAgent.uuid}
          src={selectedAgent.background}
          width={1000}
          height={1000}
          alt={selectedAgent.displayName}
        />
      </div>

      <div className="flex pt-[150px] z-10">
        <Image
          key={selectedAgent.uuid}
          src={selectedAgent.fullPortrait}
          width={1200}
          height={1200}
          alt={selectedAgent.displayName}
          className="transition-fast"
        />
      </div>

      <div className="hidden lg:flex absolute bottom-28 gap-1 z-20" onWheel={handleWheel}>
        {agents
          .slice(startIndex, startIndex + 13)
          .concat(
            startIndex + 13 > agents.length
              ? agents.slice(0, (startIndex + 13) % agents.length)
              : []
          )
          .map((agent, index) => {
            const isMiddleAgent =
              (startIndex + index) % agents.length === selectedAgentIndex;

            return (
              <div
                key={agent.uuid}
                className={`border-2 ${
                  isMiddleAgent
                    ? "border-white opacity-100"
                    : "border-transparent opacity-70"
                } hover:border-white p-[2px]`}
              >
                <div className="border-2 border-[#0FF] p-[2px]">
                  <Image
                    src={agent.displayIcon}
                    width={80}
                    height={80}
                    alt={agent.displayName}
                    className="bg-[#5d9790]"
                  />
                </div>
              </div>
            );
          })}
      </div>
      

      <div className="z-50 absolute h-full flex items-end">
        <div className="flex">
          <button
            className="cursor-pointer w-12 h-12 text-white glass-effect-button flex items-center justify-center"
            onClick={handlePrev}
          >
            Prev
          </button>

          <div className="text-white tracking-wide flex items-center justify-center w-24 glass-effect">
            <span>
              {selectedAgentIndex + 1} / {agents.length}
            </span>
          </div>

          <button
            className="cursor-pointer w-12 h-12 text-white glass-effect-button flex items-center justify-center"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentSlider;