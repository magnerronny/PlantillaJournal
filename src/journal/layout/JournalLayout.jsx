import { Box, Toolbar } from "@mui/material"
import PropTypes from "prop-types"
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  
  return (
    <Box sx={{display:"flex"}}>
       {/* Navbar */}
       <Navbar drawerWidth = {drawerWidth} />

       {/* Sidebar */}
       <Sidebar drawerWidth = {drawerWidth}/>

        <Box 
          component={"main"}
          sx={{flexGrow:1, p:3}}
        >
          {/* Toolbar */}
          <Toolbar></Toolbar>
          {children}
        </Box>

    </Box>
  )
}


JournalLayout.propTypes = {
  children: PropTypes.node
}