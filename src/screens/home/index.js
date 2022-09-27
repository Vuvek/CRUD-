import { Grid, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <Typography style={{ fontSize: 42 }}>Employee CRUD App</Typography>
      <Card
        style={{
          width: "50%",
          pading: (100, 100),
          height: window.innerHeight / 2,
          marginTop: window.innerWidth / 9,
          marginLeft: window.innerHeight / 2,
        }}
      >
        <Grid container>
          <Grid item xs={5}>
            <Link to="/add">
              <Button>ADD Employee</Button>
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Link to="/view">
              <Button>View Employee</Button>
            </Link>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
