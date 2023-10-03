import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

import {Link as RouterLink} from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title = "Register">
      <Box component={'form'} >
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              id="nombre"
              label="Nombre completo"
              type="text"
              placeholder="rommos"
              fullWidth
            />
          </Grid>

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
            justifyContent={"center"}
          >
            <Grid item xs={12} >
              <Button variant="contained" fullWidth >Register</Button>
            </Grid>
            
          </Grid>

          <Grid 
            container 
            direction={'row'}
            justifyContent={"end"} 
            sx={{mt:1}}
          >
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link color={"inherit"} component={RouterLink} to={"/auth/register "}>
              ingresar
            </Link>
          </Grid>
        </Grid> 
        </Box>
    </AuthLayout>
  )
}
