import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"} 
      justifyContent={"center"}
      sx={{minHeight: 'calc(100vh - 110px) ', backgroundColor: 'primary.main', padding:4, borderRadius:2}}
    >
      <Grid item xs={12}>
        <StarOutline sx={{fontSize:100, color:"#fff" }}/>
      </Grid>

      <Grid item xs={12}>
        <Typography color={"#fff"} >Seleccione o crea una entrada</Typography>
      </Grid>

      
    </Grid>
  )
}
