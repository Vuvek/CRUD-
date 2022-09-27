import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  Card,
} from "@mui/material";
export const ViewParticularEmployee = () => {
  const param = useParams();
  const [edit, setEdit] = useState(false);
  const [emp, setEmp] = useState([]);
  const [updateInfo, setUpdateInfo] = useState({
    EmpID: "",
    User: "",
    Title: "",
    Email: "",
  });
  const getData = async () => {
    console.log("ewfs", param);
    const res = await axios.get(
      `        https://x8ki-letl-twmt.n7.xano.io/api:eZ_A48ek/employee/${param.id}`
    );
    setEmp(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSave = async () => {
    setEdit((prv) => !prv);
    // console.log("d");
    console.log("sdefs", updateInfo.User);
    await axios.post(
      `https://x8ki-letl-twmt.n7.xano.io/api:eZ_A48ek/employee/${param.id}`,
      {
        EmpID: emp.EmpID,
        User: updateInfo.User,
        Email: updateInfo.Email,
        Title: updateInfo.Title,
        project_name: emp.project_name,
      }
    );
    getData();
  };
  return (
    <Card
      style={{
        width: "50%",
        marginLeft: window.innerWidth / 4,
        marginTop: 200,
      }}
    >
      <Grid container>
        <Grid item xs={12} style={{ fontSize: 44 }}>
          Particular Employee
        </Grid>
        <Grid item xs={12} style={{ padding: (12, 12), margin: (12, 12) }}>
          <Typography>
            {" "}
            Employee ID : <strong>{emp.EmpID}</strong>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            widht: 400,
            height: 20,
            padding: (12, 12),
            margin: 20,
          }}
        >
          {!edit ? (
            <Typography>
              {" "}
              Employee Name :<strong>{emp.User}</strong>
            </Typography>
          ) : (
            <TextField
              placeholder={`${emp.User}`}
              onChange={(e) =>
                setUpdateInfo({
                  User: e.target.value,
                  Title: emp.Title,
                  Email: emp.Email,
                })
              }
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: (12, 12),
            margin: 20,
            widht: 400,
            height: 20,
          }}
        >
          {!edit ? (
            <Typography>
              {" "}
              Employee Email : <strong>{emp.Email}</strong>
            </Typography>
          ) : (
            <TextField
              placeholder={`${emp.Email}`}
              onChange={(e) =>
                setUpdateInfo({
                  User: emp.User,
                  Title: emp.Title,
                  Email: e.target.value,
                })
              }
            />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: (12, 12),
            margin: 20,
            widht: 400,
            height: 20,
          }}
        >
          {!edit ? (
            <Typography>
              {" "}
              Employee Title :<strong>{emp.Title}</strong>
            </Typography>
          ) : (
            <TextField
              placeholder={`${emp.Title}`}
              onChange={(e) =>
                setUpdateInfo({
                  User: emp.User,
                  Title: e.target.value,
                  Email: emp.Email,
                })
              }
            />
          )}
        </Grid>
        <Grid item xs={12} style={{ padding: (12, 12), margin: (22, 22) }}>
          <Typography>Projects</Typography>
          {emp.project_name?.map((val) =>
            val.map((v) => (
              <Paper style={{ padding: (12, 12), margin: (12, 12) }}>
                <strong>{v.proName} </strong>
              </Paper>
            ))
          )}
        </Grid>
        <Grid item xs={12} style={{ padding: (12, 12), margin: (12, 12) }}>
          {!edit ? (
            <Button onClick={() => setEdit((prv) => !prv)}>Edit</Button>
          ) : (
            <Button onClick={handleSave}>Save</Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};
