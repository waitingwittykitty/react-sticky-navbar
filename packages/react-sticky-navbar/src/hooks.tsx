import { useLayoutEffect, useState } from "react";

export function useStickyNavbarStatus() {
  const [isScrollTop, setScrollTop] = useState(true);
  const [isScrollUp, setScrollUp] = useState(true);

  useLayoutEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      setScrollTop(window.scrollY <= 0);
      setScrollUp(window.scrollY < prevScrollY);
      prevScrollY = window.scrollY;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrollTop, isScrollUp };
}
