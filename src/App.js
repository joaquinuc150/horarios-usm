import './App.css';
import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Horario from './components/horario'
import ChooseHorario from './components/chooseHorario';
import ChoosedRamos from './components/choosedRamos';

function App() {
  const [checked, setChecked] = useState([]);
  const [ramos, setRamos] = useState([]);
  const [actualCredits, setActualCredits] = useState(0)

  useEffect(() =>{
      function getSum(total, value) {
          return total + value.credits;
      }
      const calculateSCT = (ramos) => {
          return ramos.reduce(getSum,0)
      }
      setActualCredits(calculateSCT(ramos))
  }, [ramos])

  return (
    <div>
      <Typography className="title" variant="h3" gutterBottom>
        SIGAN'T
      </Typography>
      <Box>
        <Grid container>
          <Grid sx={{ padding: '1%' }} md={12} lg={4}>
            <Typography className="subtitle" variant="h5" gutterBottom>
              Horarios 2023-1
            </Typography>
            <ChooseHorario ramos={ramos} setRamos={setRamos} checked={checked} setChecked={setChecked}/>
            <Typography className="subtitle" variant="h5" gutterBottom>
              Ramos Seleccionados
            </Typography>
            <Typography className="subtitle" variant="h6" gutterBottom>
              {actualCredits+" creditos"}
            </Typography>
            <ChoosedRamos ramos={ramos} setRamos={setRamos} checked={checked} setChecked={setChecked}/>
          </Grid>
          <Grid md={12} lg={8}>
            <Horario ramos={ramos} setRamos={setRamos}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
