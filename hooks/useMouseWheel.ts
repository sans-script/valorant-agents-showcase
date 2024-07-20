import { useCallback } from "react";

const useMouseWheel = (onWheel: (event: React.WheelEvent<HTMLDivElement>) => void) => {
  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      onWheel(event);
    },
    [onWheel]
  );

  return handleWheel;
};

export default useMouseWheel;
