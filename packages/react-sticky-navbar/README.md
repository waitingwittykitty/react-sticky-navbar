![Sticky Navbar Demo](./packages/demo/assets/react-sticky-navbar-demo-clip.gif)

# React Sticky Navbar

StickyNavbar is a React component that provides a customizable sticky navigation bar for websites. It allows for smooth scrolling and dynamic behavior based on the user's scroll position.

[Demo](https://react-sticky-navbar-demo.vercel.app/)

## Installation

To install StickyNavbar, use npm or yarn:

```bash
npm install react-sticky-navbar
# or
yarn add react-sticky-navbar
```

## Usage

```jsx
import React from "react";
import StickyNavbar from "react-sticky-navbar";

const App = () => {
  return (
    <div>
      <StickyNavbar>
        {/* Navigation links or other content */}
      </StickyNavbar>
      {/* Your other components */}
    </div>
  );
};

export default App;
```

StickyNavbar takes various props to customize its behavior, including `showOnTop`, `showOnScrollDown`, `showOnScrollUp`, `zIndex`, `duration`, and `stickyBackground`. You can also pass `classNames` to customize the CSS classes for different scroll positions.

## Props

- `children`: React nodes to be rendered inside the sticky navbar.
- `classNames`: Custom CSS class names for different scroll positions.
  - `scrollTop`: Custom CSS class name for the navbar when the user is at the top of the page.
  - `scrollMiddle`: Custom CSS class name for the navbar when the user is at the middle of the page.
  - `scrollBottom`: Custom CSS class name for the navbar when the user is at the bottom of the page.
  - `scrollUp`: Custom CSS class name for the navbar when the user scrolled up the page.
  - `scrollDown`: Custom CSS class name for the navbar when the user scrolled down the page.
- `showOnTop`: Whether to show the navbar when the user is at the top of the page.
- `showOnBottom`: Whether to show the navbar when the user is at the bottom of the page.
- `showOnScrollDown`: Whether to show the navbar when the user is scrolling down.
- `showOnScrollUp`: Whether to show the navbar when the user is scrolling up.
- `zIndex`: The z-index of the navbar.
- `duration`: Transition duration in milliseconds.
- `stickyBackground`: Background color of the sticky navbar.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## Support

For support, please open an issue on the GitHub repository.
