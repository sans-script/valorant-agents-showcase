"use client";

import { createGradient } from "@/utils/gradient";
import Image from "next/image";
import React from "react";
import useAgents from "@/hooks/useAgents";
import useAgentNavigation from "@/hooks/useAgentNavigation";
import useMouseWheel from "@/hooks/useMouseWheel";
import AgentInfo from "./AgentInfo";
import SelectedAgent from "./SelectedAgent";

function AgentSlider() {
  const { agents, loading, error } = useAgents();
  const { selectedAgentIndex, handlePrev, handleNext, startIndex } =
    useAgentNavigation(agents);

  const handleWheel = useMouseWheel((event) => {
    if (event.deltaY < 0) {
      handlePrev();
    } else {
      handleNext();
    }
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition-all bg-val">
        <h1 className="font-val text-[10px] lg:text-[120px] text-white">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition-all bg-val">
        <h1 className="font-val text-[10px] lg:text-[120px] text-white">
          {error}
        </h1>
      </div>
    );
  }

  const selectedAgent = agents[selectedAgentIndex];

  return (
    <div
      className="flex items-center justify-center transition-colors w-screen h-screen overflow-hidden"
      style={{
        background: `linear-gradient(150deg, ${createGradient(
          selectedAgent.backgroundGradientColors
        )})`,
      }}
    >
      <div className="hidden lg:flex absolute -top-10 lg:top-8 lg:right-4  z-50">
        <AgentInfo selectedAgent={selectedAgent} />
      </div>


      <SelectedAgent selectedAgent={selectedAgent} />

      <div
        className="hidden absolute bottom-20 lg:flex gap-1 z-20"
        onWheel={handleWheel}
      >
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

      <div className="z-50 absolute bottom-2 lg:bottom-0 h-full flex items-end">
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
