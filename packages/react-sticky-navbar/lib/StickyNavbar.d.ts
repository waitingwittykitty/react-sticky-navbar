import React from "react";
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
    zIndex?: number;
    duration?: number;
    stickyBackground?: string;
}
declare const StickyNavbar: ({ children, classNames, showOnTop, showOnBottom, showOnScrollUp, showOnScrollDown, zIndex, stickyBackground, duration, }: StickyNavbarProps) => JSX.Element;
export default StickyNavbar;
