import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export default function Departments() {
  let [control1, setControl1] = useState<boolean[]>([false, true, false]);
  let [control2, setControl2] = useState<boolean[]>([
    false,
    true,
    false,
    false,
  ]);
  // Checkbox Control Logic 2
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl1([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl1([control1[0], event.target.checked, control1[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setControl1([control1[0], control1[1], event.target.checked]);
  };

  // Checkbox Control Logic 2
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl2([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl2([control2[0], event.target.checked, control2[2], control2[3]]);
  };

  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl2([control2[0], control2[1], event.target.checked, control2[3]]);
  };
  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setControl2([control2[0], control2[1], control2[2], event.target.checked]);
  };

  const children1 = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        ml: 3,
      }}
    >
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={control1[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Customer Success"
        control={<Checkbox checked={control1[2]} onChange={handleChange3} />}
      />
    </Box>
  );

  const children2 = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        ml: 3,
      }}
    >
      <FormControlLabel
        label="Graphic Desgin"
        control={<Checkbox checked={control2[1]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="Product Design"
        control={<Checkbox checked={control2[2]} onChange={handleChange6} />}
      />
      <FormControlLabel
        label="Web Design"
        control={<Checkbox checked={control2[3]} onChange={handleChange7} />}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        padding: 15,
        background: "#f1f3f5",
        minHeight: 500,
        borderRadius: 20,
      }}
    >
      <Typography variant="h3" color="#343a40" sx={{ mb: 5 }}>
        Choose Department
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormControlLabel
            label="Customer Service"
            control={
              <Checkbox
                checked={
                  (control1[1] && control1[2]) ||
                  (control1[0] && control1[1] && control1[2])
                }
                indeterminate={control1[1] !== control1[2]}
                onChange={handleChange1}
              />
            }
          />
        </AccordionSummary>
        <AccordionDetails>{children1}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <FormControlLabel
              label="Design"
              control={
                <Checkbox
                  checked={
                    (control2[1] && control2[2] && control2[3]) ||
                    (control2[0] && control2[1] && control2[2] && control2[3])
                  }
                  indeterminate={
                    control2[1] !== control2[2] ||
                    control2[2] !== control2[3] ||
                    control2[3] !== control2[1]
                  }
                  onChange={handleChange4}
                />
              }
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children2}</AccordionDetails>
      </Accordion>
    </Box>
  );
}
