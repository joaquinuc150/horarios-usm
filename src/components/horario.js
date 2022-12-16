import '../App.css';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from '@mui/material';
import { RamosMock, Tope } from '../constants/constants';
import { useState, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Header = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const bloques = [
    {
        "name": "-",
        "alias": "1-2",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "3-4",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "5-6",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "7-8",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "9-10",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "11-12",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "13-14",
        "color": "#ffffff"
    },
    {
        "name": "-",
        "alias": "15-16",
        "color": "#ffffff"
    },
]


function Columna({name, size, items}) {
    return (
    <Grid xs={size}>
        <Header sx={{ fontWeight: 'bolder'}}>{name}</Header>
        {
            items.map((i) => {
            return <Item sx={{ color: '#000000', backgroundColor: i.color, fontWeight: 'bold'}}>{i.alias}</Item>
        }
        )
        }
    </Grid>
    )
}

export function Horario({ramos, setRamos}) {
    const [lunes, setLunes] = useState(RamosMock);
    const [martes, setMartes] = useState(RamosMock);
    const [miercoles, setMiercoles] = useState(RamosMock);
    const [jueves, setJueves] = useState(RamosMock);
    const [viernes, setViernes] = useState(RamosMock);

    function checkTope(r, x) {
        return x.name !== "-" ? Tope : r;
    }

    useEffect(() => {
        const checkShedule= (ramos) => {
            let newLunes = RamosMock
            let newMartes = RamosMock
            let newMiercoles = RamosMock
            let newJueves = RamosMock
            let newViernes = RamosMock
            if (ramos) {
                ramos.map((r) => {
                    const hours = r.hours;
                    hours.map((h) => {
                        const splitedH = h.block.split("-")
                        const b = parseInt(splitedH[1])
                        const i = (b / 2) - 1
                        switch(h.day) {
                            case "Lunes":
                                newLunes = newLunes.map((x, index) => index === i ? checkTope(r,x) : x);
                                break;
                            case "Martes":
                                newMartes = newMartes.map((x, index) => index === i ? checkTope(r,x) : x)
                                break;
                            case "Miercoles":
                                newMiercoles = newMiercoles.map((x, index) => index === i ? checkTope(r,x) : x)
                                break;
                            case "Jueves":
                                newJueves = newJueves.map((x, index) => index === i ? checkTope(r,x) : x)
                                break;
                            case "Viernes":
                                newViernes = newViernes.map((x, index) => index === i ? checkTope(r,x) : x)
                                break;
                            default:
                                break;
                        }
                        return h
                    })
                    return r
                    })
            }
            setLunes(newLunes)
            setMartes(newMartes)
            setMiercoles(newMiercoles)
            setJueves(newJueves)
            setViernes(newViernes)
        }
        
        checkShedule(ramos);
    }, [ramos]);

    
    return (
    <Box sx={{ marginLeft: '10%', marginTop: '5%'}}>
      <Grid container spacing={2}>
        <Columna name="Bloques" size={1} items={bloques}/>
        <Columna name="Lunes" size={2} items={lunes}/>
        <Columna name="Martes" size={2} items={martes}/>
        <Columna name="Miercoles" size={2} items={miercoles}/>
        <Columna name="Jueves" size={2} items={jueves}/>
        <Columna name="Viernes" size={2} items={viernes}/>
      </Grid>
    </Box>
  );
}

export default Horario;
