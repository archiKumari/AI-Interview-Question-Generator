import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';

export default function QuestionResults({ questions, metaData }) {
  if (!questions || questions.length === 0) return null;

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
        <CardHeader title={`Questions for ${metaData.experienceLevel} ${metaData.jobTitle} role`} />
        <CardContent>
          <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Skill Area</TableCell>
                  <TableCell>Question</TableCell>
                  <TableCell>Evaluation Criteria</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questions.map((q, idx) => (
                  <TableRow key={idx} hover>
                    <TableCell>{q.skillArea}</TableCell>
                    <TableCell>{q.question}</TableCell>
                    <TableCell>
                      <ul style={{ margin: 0, paddingLeft: 16 }}>
                        {q.evaluationCriteria.map((crit, i) => (
                          <li key={i}>{crit}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}