import { StickyNavbarProps } from 'react-sticky-navbar'
import create from 'zustand'

export interface StickyNavbarSettings extends StickyNavbarProps {
  update: (settings: Partial<StickyNavbarProps>) => void
}

export const useSettingsStore = create<StickyNavbarSettings>((set, get) => ({
  showOnTop: true,
  showOnBottom: true,
  showOnScrollDown: false,
  showOnScrollUp: true,
  position: "top",
  animation: "fade",
  stickyBackground: "black",
  duration: 500,
  update: (changes) => set(changes),
}))
