import { Google } from "@mui/icons-material"
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import {Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <Box component={'form'} >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              id="correo"
              label="correo@gmail.com"
              type="email"
              // placeholder="ingrese correo electronico"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="contraseña"
              type="password"
              label="contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{mt:2}} 
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth >login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth >
                <Google/>
                <Typography sx={{ml:1}} >Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid 
            container 
            direction={'row'}
            justifyContent={"end"} 
            sx={{mt:1}}
          >
            <Link color={"inherit"} component={RouterLink} to={"/auth/register "}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid> 
        </Box>
    </AuthLayout>

  )
}
