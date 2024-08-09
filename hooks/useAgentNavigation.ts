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
    setStartIndex((nextIndex) => (nextIndex + 1) % agents.length);
  };

  const handleAgentClick = (clickedIndex: number) => {
    const middleIndex = 6; // O índice do agente do meio
    const steps = clickedIndex - middleIndex;
  
    // Função auxiliar para animar os passos
    const animateSteps = (steps: number, direction: 'prev' | 'next') => {
      if (steps <= 0) return; // Se não houver mais passos, sair
  
      // Chamar a função apropriada (handlePrev ou handleNext)
      if (direction === 'prev') {
        handlePrev();
      } else {
        handleNext();
      }
  
      // Chamar animateSteps novamente após um delay
      setTimeout(() => {
        animateSteps(steps - 1, direction);
      }, 100); // Ajuste o tempo aqui conforme necessário
    };
  
    // Iniciar a animação
    if (steps < 0) {
      animateSteps(Math.abs(steps), 'prev');
    } else if (steps > 0) {
      animateSteps(steps, 'next');
    }
  };

  return { selectedAgentIndex, handlePrev, handleNext, startIndex, setStartIndex, handleAgentClick };
};

export default useAgentNavigation;
