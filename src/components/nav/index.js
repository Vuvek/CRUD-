import { Grid, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <Button
            onClick={() => navigate("/")}
            style={{
              margin: (12, 12),
              padding: (12, 12),
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Employee App
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => navigate("/view")}
            style={{ margin: (12, 12), padding: (12, 12) }}
          >
            View Employee
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => navigate("/add")}
            style={{ margin: (12, 12), padding: (12, 12) }}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
