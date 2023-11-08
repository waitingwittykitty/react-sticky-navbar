import cx from "classnames";
import React from "react";

import { useStickyNavbarStatus } from "./hooks";
import "./styles.css";

export interface StickyNavbarProps {
  children?: React.ReactNode;
  classNames?: {
    scrollTop?: string;
    scrollMiddle?: string;
    // scrollBottom?: string;
    scrollUp?: string;
    scrollDown?: string;
  };
  showOnTop?: boolean;
  // showOnBottom?: boolean;
  showOnScrollDown?: boolean;
  showOnScrollUp?: boolean;
  // position?: "top";
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
  showOnScrollUp = true,
  showOnScrollDown = false,
  zIndex = 100,
  stickyBackground = "transparent",
  duration = 500,
}: StickyNavbarProps): JSX.Element => {
  const { isScrollTop, isScrollUp } = useStickyNavbarStatus();

  return (
    <nav
      className={cx(
        "sticky-navbar-nav",
        {
          "sticky-navbar-middle": !isScrollTop,
          "sticky-navbar-hidden":
            (!showOnTop && isScrollTop) ||
            (!(showOnTop && isScrollTop) && ((!isScrollUp && !showOnScrollDown) || (isScrollUp && !showOnScrollUp))),
        },
        isScrollTop && classNames?.scrollTop,
        !isScrollTop && classNames?.scrollMiddle,
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
