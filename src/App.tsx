import {
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={3} style={{ position: "relative" }}>
                <img src="/pokemon/images/001.png" className="App-logo" alt="pokemon" />
                <canvas
                  style={{
                    position: "absolute",
                    width: "40vmin",
                    height: "40vmin",
                    left: "0px",
                    top: "0px",
                  }}
                ></canvas>
              </Grid>
            </Grid>
            <p>ポケモンの名前当てゲームができる予定</p>
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" fullWidth sx={{ height: "100%" }}>
              送信
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
