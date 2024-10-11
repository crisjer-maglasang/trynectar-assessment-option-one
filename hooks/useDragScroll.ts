import { useRef } from "react";

const useDragScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const startX = e.pageX - ref.current.offsetLeft;
    const scrollLeft = ref.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - ref.current!.offsetLeft;
      const walk = (x - startX) * 2;
      ref.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return { ref, handleMouseDown };
};

export default useDragScroll;
