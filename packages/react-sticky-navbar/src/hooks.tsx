import { useLayoutEffect, useState } from "react";

export function useStickyNavbarStatus() {
  const [isScrollTop, setScrollTop] = useState(true);
  const [isScrollUp, setScrollUp] = useState(true);
  const [isScrollBottom, setScrollBottom] = useState(false);

  useLayoutEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      let scrollableHeight = 0;
      if (target instanceof Document) {
        scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      } else {
        scrollableHeight = target?.scrollHeight - target?.offsetHeight;
      }
      setScrollTop(window.scrollY <= 0);
      setScrollUp(window.scrollY < prevScrollY);
      setScrollBottom(window.scrollY >= scrollableHeight);
      prevScrollY = window.scrollY;
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScrollTop, isScrollUp, isScrollBottom };
}
