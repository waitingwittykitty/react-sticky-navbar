import { Box, Container } from '@mui/material'
import StickyNavbar from 'react-sticky-navbar'

import GithubLink from './components/GithubLink/GithubLink'
import Settings from './components/Settings'
import { useSettingsStore } from './settings'
import logo from './logo.png'
import MockContent from './components/MockContent'
import MockNavbarContent from './components/MockNavbarContent'
import './App.css'

const githubURL = process.env.REACT_APP_GITHUB_URL as string
const packageName = process.env.REACT_APP_PACKAGE_NAME as string

const App = () => {
  const { showOnScrollDown, showOnScrollUp, showOnTop, stickyBackground, duration } =
    useSettingsStore()

  return (
    <div className="app">
      <StickyNavbar
        showOnScrollDown={showOnScrollDown}
        showOnScrollUp={showOnScrollUp}
        showOnTop={showOnTop}
        stickyBackground={stickyBackground}
        zIndex={200}
        duration={duration}
      >
        <MockNavbarContent />
      </StickyNavbar>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 100,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80vw',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a className="title" href={githubURL}>
          <img src={logo} alt="Fastest Coding Logo" />
          <h1>{packageName}</h1>
        </a>
        <Settings />
      </Box>
      <GithubLink url={githubURL} />
      <Container>
        <MockContent height={2048} />
      </Container>
    </div>
  )
}

export default App
