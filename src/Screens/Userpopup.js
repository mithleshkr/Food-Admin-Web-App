import * as React from "react";
import { Button } from "@material-ui/core";

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";
import Userpopform from "./Userpopform";


export default function Userpopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:600,position:"relative",marginLeft:-600}}>
      <Button  variant="contained" color="primary" onClick={handleClickOpen}>
        Add User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
            <Userpopform />
        </DialogContent>
      </Dialog>
    </div>
  );
}
