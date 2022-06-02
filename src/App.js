import { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class App extends Component {
  render() {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Video"
          variant="outlined"
        />
      </Box>
    );
  }
}

export default App;
