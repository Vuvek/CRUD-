import { Card, Snackbar, Typography } from "@mui/material";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { Button } from "@mui/material";
import { Plus } from "mdi-material-ui";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import axios from "axios";
import { nanoid } from "nanoid";
const AddEmp = () => {
  const handleSubmit = (val) => {
    console.log(val.projectName);
    axios.post(" https://x8ki-letl-twmt.n7.xano.io/api:eZ_A48ek/employee", {
      EmpID: val.empID,
      User: val.empName,
      Email: val.empEmail,
      Title: val.empTitle,
      project_name: [val.projectName],
    });
    alert("Submitted");
  };
  const validationSchema = Yup.object().shape({
    empName: Yup.string().required("Name is required!"),
    empID: Yup.string()
      .min(3, "Should be atleast 3 characters long!")
      .required("Employee Id is required!"),
    empEmail: Yup.string()
      .email("Invalid Email Format!")
      .required("Email is required!"),
    // projectName: Yup.required("Projects are required")
  });
  return (
    <Card
      style={{
        justifyContent: "center",
        width: "50%",
        marginLeft: window.innerWidth / 4,
        marginTop: 100,
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
      ></Snackbar>
      <h1 className="mx-12 pt-4 md:pt-8 text-xl text-center md:text-left md:text-3xl font-medium">
        Add New Employee
      </h1>
      <Formik
        enableReinitialize={true}
        validationSchema={validationSchema}
        initialValues={{
          empID: "",
          empName: "",
          empEmail: "",
          empTitle: "",
          projectName: [{ proID: "", proName: "" }],
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        {(formik) => {
          return (
            <>
              <Form>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: (12, 12), margin: (12, 12) }}
                  >
                    <Typography>
                      <label style={{ padding: (12, 12), margin: (12, 12) }}>
                        Employee id
                      </label>
                      <Field name="empID" placeholder="Employee ID " />
                      <ErrorMessage name="empID">
                        {(msg) => (
                          <Typography className="text-red-600 absolute text-xs">
                            {msg}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: (12, 12), margin: (12, 12) }}
                  >
                    <Typography>
                      <label style={{ padding: (12, 12), margin: (12, 12) }}>
                        Employee Name{" "}
                      </label>
                      <Field name="empName" placeholder="Employee Name " />
                      <ErrorMessage name="empName">
                        {(msg) => (
                          <Typography className="text-red-600 absolute text-xs">
                            {msg}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: (12, 12), margin: (12, 12) }}
                  >
                    <Typography>
                      <label style={{ padding: (12, 12), margin: (12, 12) }}>
                        Employee Email
                      </label>
                      <Field name="empEmail" placeholder="Employee Email " />
                      <ErrorMessage name="empEmail">
                        {(msg) => (
                          <Typography className="text-red-600 absolute text-xs">
                            {msg}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: (12, 12), margin: (12, 12) }}
                  >
                    <Typography>
                      <label style={{ padding: (12, 12), margin: (12, 12) }}>
                        Employee Title
                      </label>
                      <Field name="empTitle" placeholder="Employee Title " />
                      <ErrorMessage name="empTitle">
                        {(msg) => (
                          <Typography className="text-red-600 absolute text-xs">
                            {msg}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ padding: (12, 12), margin: (12, 12) }}
                  >
                    <FieldArray
                      name="projectName"
                      render={(nestedHelper) => {
                        return (
                          <Typography>
                            {formik.values.projectName.map((project, index) => (
                              <>
                                <div
                                  key={index}
                                  style={{
                                    padding: (12, 12),
                                    margin: (12, 12),
                                  }}
                                >
                                  <label
                                    style={{
                                      padding: (12, 12),
                                      margin: (12, 12),
                                    }}
                                  >
                                    Project Name
                                  </label>
                                  <Field
                                    name={`projectName.${index}.proName`}
                                    placeholder="Project Name"
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name={`projectName.${index}.proName`}
                                    component="div"
                                    className="field-error"
                                  />
                                </div>
                                {formik.values.projectName.length > 1 && (
                                  <Grid item xs={12}>
                                    <Button
                                      onClick={() => nestedHelper.remove(index)}
                                    >
                                      Delte the project feild
                                    </Button>
                                  </Grid>
                                )}{" "}
                              </>
                            ))}
                            <Button
                              onClick={() =>
                                nestedHelper.push({
                                  proID: nanoid(),
                                  proName: "",
                                })
                              }
                            >
                              Add More Project
                            </Button>
                          </Typography>
                        );
                      }}
                    />
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        style={{ margin: (12, 12) }}
                        sx={{
                          borderRadius: "24px",
                          marginBottom: "65px",
                        }}
                      >
                        <Plus sx={{ marginRight: 1 }} />
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </>
          );
        }}
      </Formik>
    </Card>
  );
};
export default AddEmp;
