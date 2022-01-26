import {
  AppBar,
  Toolbar
} from '@mui/material'
import BaseLink from '@/components/common/BaseLink'

export default function Header() {
  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <BaseLink
          href="/"
          text="山登る記"
          variant="h6"
          underline="none"
          color="black"
        />
      </Toolbar>
    </AppBar>
  )
}