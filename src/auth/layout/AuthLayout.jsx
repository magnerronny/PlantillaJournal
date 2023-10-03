import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: "4",
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width:{ sm:"450px"},
          backgroundColor: "white", 
          padding: 3, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h5" sx={{ mt: 2 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
