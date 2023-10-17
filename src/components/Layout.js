// import React from 'react';
// import './Layout.css';
// function layout() {
//   return (
//     <div className="layout">
//       <h2>layout</h2>
//       <p>We are a company that does amazing things.</p>
//     </div>
//   );
// }

// export default layout;
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { blueGrey, lightBlue } from '@mui/material/colors';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        m: 'auto',
        width: 'fit-content',
        bgcolor: 'background.paper',
        // boxShadow: 40,
        borderRadius: 3,
        p: 2,
        minWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // backgroundPosition: 'center 40%',
        // display: 'inline',
       
       }}>

      Try 2D
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional selection</DialogTitle>
        <DialogContent>
          <DialogContentText>
                you can select Tables and chairs          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color:'',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 8, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">select</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="Table">Table</MenuItem>
                <MenuItem value="Chair">Chair</MenuItem>
               
              </Select>
            </FormControl>
            {/* <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            /> */}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}