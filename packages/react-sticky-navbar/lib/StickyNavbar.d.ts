import React from "react";
import "./styles.css";
export interface StickyNavbarProps {
    children?: React.ReactNode;
    classNames?: {
        scrollTop?: string;
        scrollMiddle?: string;
        scrollUp?: string;
        scrollDown?: string;
    };
    showOnTop?: boolean;
    showOnScrollDown?: boolean;
    showOnScrollUp?: boolean;
    zIndex?: number;
    duration?: number;
    stickyBackground?: string;
}
declare const StickyNavbar: ({ children, classNames, showOnTop, showOnScrollUp, showOnScrollDown, zIndex, stickyBackground, duration, }: StickyNavbarProps) => JSX.Element;
export default StickyNavbar;
