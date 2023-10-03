import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, veritatis laudantium pariatur unde molestiae molestias quia tempora consectetur dignissimos quis omnis expedita, adipisci deleniti. Earum aspernatur eum exercitationem ratione minus?</Typography> */}
      
      <IconButton
        size="large"
        sx={{
          color:'#fff',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor:'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom: 50
        }}
      >
        <AddOutlined fontSize="30"/>
      </IconButton>
      <NothingSelectedView/>
      {/* <NoteView/> */}
    </JournalLayout>
  )
}
