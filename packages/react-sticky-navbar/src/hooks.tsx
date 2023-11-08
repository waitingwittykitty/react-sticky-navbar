import { useLayoutEffect, useState } from "react";

export function useStickyNavbarStatus() {
  const [isScrollTop, setScrollTop] = useState(true);
  const [isScrollUp, setScrollUp] = useState(true);

  useLayoutEffect(() => {
    const handleMouseWheel = (event: WheelEvent) => {
      setScrollUp(event.deltaY < 0);
    };

    const handleScroll = () => {
      setScrollTop(window.scrollY <= 0);
    };

    document.addEventListener("wheel", handleMouseWheel);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleMouseWheel);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrollTop, isScrollUp };
}
