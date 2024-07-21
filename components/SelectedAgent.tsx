import useAgents from "@/hooks/useAgents";
import Image from "next/image";
import React from "react";

const SelectedAgent = ({ selectedAgent }: any) => {
  const { loading, error } = useAgents();

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <div>
      <div className="flex absolute h-[900px] left-8 bottom-1 -top-14 opacity-30 transition-all">
        <Image
          key={selectedAgent.uuid}
          src={selectedAgent?.background}
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
    </div>
  );
};

export default SelectedAgent;
