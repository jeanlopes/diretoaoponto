import "../../dpstyle.css";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DPAppBar from "./appBar";
import "../../styles.css";
import { createMuiTheme } from "@material-ui/core/styles";


export const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export default props => {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <DPAppBar />
          </Grid>
        </Grid>
        {props.children}
      </div>
    );
}