import {
  AppBar,
  Toolbar,
  Typography
} from '@mui/material'

export default function Header() {
  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Typography variant="h6" color="black" noWrap>
          {"山登る記"}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}