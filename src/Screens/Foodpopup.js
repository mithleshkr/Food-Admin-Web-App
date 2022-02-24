import * as React from "react";
import { Button } from "@material-ui/core";

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";
import Foodpopform from "./Foodpopform";

export default function Foodpopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",position:"relative"}}>
      <Button  variant="contained" color="primary" onClick={handleClickOpen}>
        Add Food
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Food Details</DialogTitle>
        <DialogContent>
            <Foodpopform />
        </DialogContent>
      </Dialog>
    </div>
  );
}
