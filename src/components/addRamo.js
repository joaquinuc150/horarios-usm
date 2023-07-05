import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import { Grid } from '@mui/material';
import { HorarioMock } from '../constants/constants';


export default function AddRamo() {
    const obj = {}

    HorarioMock.forEach((elem) => {
        obj[elem.id] = false
    })

    function handleChange(event) {
        setState({ ...state, [event.target.name]: event.target.checked });
    }
    

    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState(obj);

    const checkboxList = HorarioMock.map((checkbox) => (
        <Checkbox item xs={2}
            checked={state[checkbox.name]}
            onChange={handleChange}
            name={checkbox.name}
            id={checkbox.id}
            />
        ))

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen}>
            Agregar ramo manual
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Agregar ramo</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Puedes agregar un ramo indicando todas las opciones que se indican a continuacion:
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombre"
                fullWidth
                variant="standard"
            />
            <TextField
                margin="dense"
                id="prof"
                label="Profesor"
                fullWidth
                variant="standard"
            />
            <TextField
                margin="dense"
                id="cred"
                label="Creditos"
                type="number"
                fullWidth
                variant="standard"
            />
            <Grid>
            {checkboxList}
            </Grid>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}