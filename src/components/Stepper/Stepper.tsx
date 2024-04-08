import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import { blue, orange } from '@mui/material/colors';

export function MatrixStepper({ props } : any) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  return (
    <Box sx={{ width: '100%', margin: 'auto', flexGrow: 1 }} component={'div'}>
      <Paper
        square
        elevation={10}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: blue[800],
          color: orange[50],
        }}
      >
        <Typography>{props[activeStep].description}</Typography>
      </Paper>

      <Box 
        sx={{ width: '100%', margin: 'auto', flexGrow: 1, backgroundColor: orange[50] }} 
        component={ReactMarkdown} 
        children={props[activeStep].content} 
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]} 
      />

      <MobileStepper
        sx={{ 
          width: '100%', 
          // maxWidth: '60%', 
          margin: 'auto', 
          flexGrow: 1,
          bgcolor: orange[200],
          // color: 'white',
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            下一步
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            上一步
          </Button>
        }
      />
    </Box>
  );
}