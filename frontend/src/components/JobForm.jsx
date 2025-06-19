import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  TextField,
  Autocomplete,
  Chip,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box,
} from "@mui/material";

const skillOptions = [];

export default function JobForm({ onSubmit, loading }) {
  const [jobTitle, setJobTitle] = useState("");
  const [requiredExperience, setRequiredExperience] = useState("");
  const [skills, setSkills] = useState([]); // [{ name, years }]
  const [experienceLevel, setExperienceLevel] = useState("Junior");
  const [jobDescription, setJobDescription] = useState("");

  const handleSkillsChange = (_, newValues) => {
    const normalized = newValues.map((val) => {
      const name = typeof val === "string" ? val : val.name;
      return {
        name,
        years: requiredExperience || "",
      };
    });
    setSkills(normalized);
  };

  const handleSkillYearsChange = (index, years) => {
    setSkills((prev) => {
      const clone = [...prev];
      clone[index] = { ...clone[index], years };
      return clone;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      jobTitle,
      requiredExperience,
      skills,
      experienceLevel,
      jobDescription,
    });
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        {" "}
        AI Interview Question Generator
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              width: 500,
            }}
          >
            <CardHeader title="Job Description" sx={{ textAlign: "center" }} />
            <CardContent>
              <TextField
                multiline
                rows={10}
                sx={{ width: 450 }}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste job description here (Optional)"
              />
            </CardContent>
          </Card>
          <Card
            sx={{
              mb: 4,
              borderRadius: 2,
              boxShadow: 3,
              width: 500,
              mx: "auto",
            }}
          >
            <CardHeader title="Job Requirements" sx={{ textAlign: "center" }} />
            <CardContent>
              <Stack spacing={3} sx={{ width: "100%" }}>
                <TextField
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  required
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />

                <TextField
                  label="Required Experience (years)"
                  variant="outlined"
                  fullWidth
                  required
                  type="number"
                  value={requiredExperience}
                  inputProps={{ min: 0 }}
                  onChange={(e) => setRequiredExperience(e.target.value)}
                />

                <FormControl component="fieldset" required fullWidth>
                  <FormLabel>Seniority Level</FormLabel>
                  <RadioGroup
                    row
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                  >
                    {["Junior", "Mid", "Senior"].map((level) => (
                      <FormControlLabel
                        key={level}
                        value={level}
                        control={<Radio />}
                        label={level}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <Autocomplete
                  multiple
                  freeSolo
                  options={skillOptions}
                  getOptionLabel={(opt) =>
                    typeof opt === "string" ? opt : opt.name
                  }
                  value={skills}
                  onChange={handleSkillsChange}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Required Skills"
                      placeholder="Type skills and press Enter"
                      variant="outlined"
                    />
                  )}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((opt, idx) => (
                        <Chip
                          key={idx}
                          label={typeof opt === "string" ? opt : opt.name}
                        />
                      ))}
                    </Box>
                  )}
                />

                {skills.length > 0 && (
                  <Box sx={{ width: "100%" }}>
                    <Typography variant="subtitle1" align="center">
                      Skill Experience Details
                    </Typography>
                    <Stack spacing={2} sx={{ pl: 1 }}>
                      {skills.map((skill, idx) => (
                        <Stack
                          key={idx}
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Typography sx={{ minWidth: 120 }}>
                            {skill.name}
                          </Typography>
                          <TextField
                            label="Years"
                            type="number"
                            value={skill.years}
                            inputProps={{ min: 0 }}
                            onChange={(e) =>
                              handleSkillYearsChange(idx, e.target.value)
                            }
                            sx={{ maxWidth: 120 }}
                          />
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            sx={{ px: 4 }}
          >
            {loading ? "Generating..." : "Generate Questions"}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
