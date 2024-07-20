import { useState, useEffect } from "react";

const useAgentNavigation = (agents: any[], initialIndex = 0) => {
  const [selectedAgentIndex, setSelectedAgentIndex] = useState<number>(initialIndex);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    if (agents.length > 0) {
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

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + agents.length) % agents.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % agents.length);
  };

  return { selectedAgentIndex, handlePrev, handleNext, startIndex, setStartIndex };
};

export default useAgentNavigation;
