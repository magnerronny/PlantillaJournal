import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types"

export const Sidebar = ({drawerWidth = 240}) => {
  return (
    <Box
      component={'nav'}
      sx={{ width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >
      <Drawer
        variant="permanent"
        open={true}
        sx={{
          display: {xs:'block'},
          '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={'div'}>Rommys Magio</Typography>
        </Toolbar>
        <Divider/>
        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
              <ListItem key = {text}>
                <ListItemButton>
                  <ListItemIcon color="error">
                    <TurnedInNot/>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText sx={{}} primary = {text}/>
                  </Grid>
                </ListItemButton>
              </ListItem>
              ))
          }
        </List>
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  drawerWidth: PropTypes.number
}
