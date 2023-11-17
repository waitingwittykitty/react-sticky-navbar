import cx from "classnames";
import React from "react";

import { useStickyNavbarStatus } from "./hooks";
import "./styles.css";

export interface StickyNavbarProps {
  children?: React.ReactNode;
  classNames?: {
    scrollTop?: string;
    scrollMiddle?: string;
    scrollBottom?: string;
    scrollUp?: string;
    scrollDown?: string;
  };
  showOnTop?: boolean;
  showOnBottom?: boolean;
  showOnScrollDown?: boolean;
  showOnScrollUp?: boolean;
  position?: "top";
  // animation?: "fade";
  zIndex?: number;
  duration?: number;
  // background?: string;
  stickyBackground?: string;
}

const StickyNavbar = ({
  children,
  classNames,
  showOnTop = true,
  showOnBottom = true,
  showOnScrollUp = true,
  showOnScrollDown = false,
  zIndex = 100,
  stickyBackground = "transparent",
  duration = 500,
}: StickyNavbarProps): JSX.Element => {
  const { isScrollTop, isScrollUp, isScrollBottom } = useStickyNavbarStatus();

  return (
    <nav
      className={cx(
        "sticky-navbar-nav",
        {
          "sticky-navbar-middle": !isScrollTop && !isScrollBottom,
          "sticky-navbar-hidden":
            (!showOnTop && isScrollTop) ||
            (!(showOnTop && isScrollTop) &&
              !(showOnBottom && isScrollBottom) &&
              ((!isScrollUp && !showOnScrollDown) || (isScrollUp && !showOnScrollUp))) ||
            (!(showOnTop && isScrollTop) && !showOnBottom && isScrollBottom),
        },
        isScrollTop && classNames?.scrollTop,
        !isScrollTop && !isScrollBottom && classNames?.scrollMiddle,
        isScrollBottom && classNames?.scrollBottom,
        isScrollUp && classNames?.scrollUp,
        !isScrollUp && classNames?.scrollDown,
      )}
      style={{
        zIndex,
        background: !isScrollTop ? stickyBackground : "transparent",
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </nav>
  );
};

export default StickyNavbar;
