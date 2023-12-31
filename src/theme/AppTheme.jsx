import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { theme } from "./theme"
import PropTypes from "prop-types"
export const AppTheme = ({children}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </>
  )
}

AppTheme.propTypes = {
  children: PropTypes.node
}
