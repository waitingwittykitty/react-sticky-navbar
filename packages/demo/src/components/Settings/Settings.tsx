import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Chip, { ChipProps } from '@mui/material/Chip'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CirclePicker } from 'react-color'
import { useSettingsStore } from '../../settings'
import { ThemeProvider } from './theme'

import './Settings.css'

const ValueChip = (props: ChipProps) => {
  return <Chip {...props} sx={{ ml: 1 }} size="small" component="span" />
}

const colors = [
  'transparent',
  'black',
  '#dee4fd',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ff5722',
  '#795548',
  '#607d8b',
]

const Settings = () => {
  const settings = useSettingsStore()

  return (
    <ThemeProvider>
      <Paper className="settings-container">
        <Stack spacing={1}>
          <div>
            <Typography gutterBottom>
              Duration <ValueChip label={`${settings?.duration}ms`} />
            </Typography>
            <Slider
              value={settings.duration}
              min={0}
              max={1000}
              step={50}
              onChange={(_, value) => settings.update({ duration: value as number })}
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.showOnScrollDown}
                  onChange={(event) => settings.update({ showOnScrollDown: event.target.checked })}
                />
              }
              label="Show on Scroll Down"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.showOnScrollUp}
                  onChange={(event) => settings.update({ showOnScrollUp: event.target.checked })}
                />
              }
              label="Show on Scroll Up"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.showOnTop}
                  onChange={(event) => settings.update({ showOnTop: event.target.checked })}
                />
              }
              label="Show on Scroll Top"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={settings.showOnBottom}
                  onChange={(event) => settings.update({ showOnBottom: event.target.checked })}
                />
              }
              label="Show on Scroll Bottom"
            />
          </div>
          <Box my={2}>
            <Typography gutterBottom>
              Sticky Background Color <ValueChip label={settings.stickyBackground} />
            </Typography>
            <CirclePicker
              colors={colors}
              width="100%"
              color={settings.stickyBackground}
              onChangeComplete={(value) => settings.update({ stickyBackground: value.hex })}
            />
          </Box>
        </Stack>
      </Paper>
    </ThemeProvider>
  )
}

export default Settings
