import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        sx={{mb:1}}
        alignItems={"center"}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight={"semi-bold"} >28 de agosto, 2023</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{padding:2}}>
            <SaveOutlined sx={{fontSize:30, mr:1}} />
            Guardar
          </Button>
        </Grid>
        <Grid
          container
          spacing={1}
        >
          <TextField
            id="name"
            type="text"
            label="titulo"
            placeholder="Ingrese un titulo"
            fullWidth
            sx={{border:'none', mt:1}}
          />

          <TextField
            id="name"
            type="text"
            multiline
            variant="filled"
            placeholder="¿Qué sucedio el dia de hoy?"
            fullWidth
            minRows={5}
          />
        </Grid>
        
        {/* Image Gallery */}
        <ImageGallery/>


      </Grid>
    </>
  )
}
