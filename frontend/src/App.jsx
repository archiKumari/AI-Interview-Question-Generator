import { CssBaseline, Grid } from "@mui/material";
import JobForm from "./components/JobForm";

function App() {
  const handleGenerate = async (formData) => {
    setMetaData(formData);
    console.log("Button Clicked");
  };
  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction="column"
        mt={5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          size={8}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <JobForm onSubmit={handleGenerate} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
