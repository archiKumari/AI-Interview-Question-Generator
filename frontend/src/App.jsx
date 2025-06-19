import React, { useState } from "react";
import { CssBaseline, Box, Grid, CircularProgress, Alert } from "@mui/material";
import JobForm from "./components/JobForm";
import QuestionResults from "./components/QuestionResults";
import { generateQuestions } from "./api";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [metaData, setMetaData] = useState(null);

  const handleGenerate = async (formData) => {
    setMetaData(formData);
    setLoading(true);
    setError(null);
    console.log("Button Clicked");
    try {
      const result = await generateQuestions(formData);
      setQuestions(result.questions || []);
    } catch (err) {
      console.error(err);
      setError("Failed to generate questions");
    } finally {
      setLoading(false);
    }
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
          <JobForm onSubmit={handleGenerate} loading={loading} />
          <Box sx={{ textAlign: "center" }}>
            {loading && <CircularProgress size="8rem" sx={{ mx: "auto" }} />}
          </Box>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <QuestionResults metaData={metaData} questions={questions} />
        </Grid>
      </Grid>
    </>
  );
}
