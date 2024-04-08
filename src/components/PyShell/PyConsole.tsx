import { useRef, useState } from "react";

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { blueGrey } from "@mui/material/colors";


interface ConsoleLog {
  input: any;
  output: any;
}

export default function PyConsole() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  const [consoleLog, setConsoleLog] = useState<ConsoleLog[]>([]);

  const handleConsoleInput = (e: any) => {
    // e.preventDefault();

    if (e.keyCode === 13) { // Enter key === 13

      setConsoleLog((consoleLog) => {
        const consoleInput = e.target.value;
        window.electron.pyBackend.send('py-console', consoleInput);

        let newLog: ConsoleLog = { input: consoleInput, output: 'test' };
        window.electron.pyBackend.on('py-console', (arg) => {
          console.log('get the reply', arg);
          newLog = { input: consoleInput, output: arg };
        });

        e.target.value = '';
        return [...consoleLog, newLog];
      });
      
    }
  }

  return (
    <Box sx={{ height: 180 }} component={'div'}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Python Console"
        sx={{ fontFamily: 'Weibei SC', fontSize: 20, color: blueGrey[700] }}
      />
      <Box sx={{ display: 'flex' }} component={'div'}>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Paper sx={{ width: 200, height: 200 }} component={'div'}>
            {consoleLog.map((log, idx) => {
              return (
                <pre key={idx}><code>{'>>> ' + log.input + '\n' + log.output[0]}</code></pre>
              );
            })}
            <pre>
              <code>{'>>> '}</code> 
              <input name='py-input' type="text" onKeyDown={handleConsoleInput} />
            </pre>
          </Paper>
        </Grow>
      </Box>
    </Box>
  );
}