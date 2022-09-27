import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Button,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
const ViewEmployee = () => {
  const [employee, setEmployee] = useState([]);
  const [del, setDel] = useState(false);
  const getData = async () => {
    const res = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:eZ_A48ek/employee"
    );
    setEmployee(res.data);
  };
  // useEffect(() => {
  //   getData();
  // }, [employee.length]);
  useEffect(() => {
    getData();
  }, [del]);
  const handleDelte = async (id) => {
    await axios.delete(
      `https://x8ki-letl-twmt.n7.xano.io/api:eZ_A48ek/employee/${id}`
    );
    setDel((prv) => !prv);
  };
  return (
    <>
      <div className="md:mx-8 p-8 flex flex-wrap relative">
        <div className="input-group relative flex-col md:flex-row flex flex-wrap items-center md:items-stretch md:w-1/2 mx-auto mb-4  mt-2 "></div>
        <>
          <TableContainer className="m-4">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <span className="font-bold text-lg">EmpId</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-lg">Name</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-lg">Title</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="font-bold text-lg">Email</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="font-bold text-lg">Project</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-white p-4">
                {employee?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <span className="text-neutral-600">{row?.EmpID}</span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-neutral-600">{row?.User}</span>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <span className="text-neutral-600">{row?.Title}</span>
                    </TableCell>
                    <TableCell align="center">
                      <span className="text-stone-700">{row?.Email}</span>
                    </TableCell>
                    <TableCell align="center">
                      <span className="text-stone-700 italic">
                        {row?.project_name?.map((val, index) => (
                          <Fragment key={val.proID}>
                            <Typography>{val[index].proName}</Typography>
                            {val.length - 1 == 0
                              ? null
                              : `${val.length - 1}more project`}
                          </Fragment>
                        ))}
                      </span>
                    </TableCell>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ margin: (12, 12) }}
                      sx={{
                        borderRadius: "24px",
                        marginBottom: "65px",
                      }}
                    >
                      <Link to={`/view/${row.id}`}>View</Link>
                    </Button>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ margin: (12, 12) }}
                      sx={{
                        borderRadius: "24px",
                        marginBottom: "65px",
                      }}
                      onClick={() => handleDelte(row.id)}
                    >
                      Delete
                    </Button>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </div>
    </>
  );
};
export default ViewEmployee;
