import './App.css';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Box, Grid, Typography } from '@mui/material';
import Horario from './components/horario'
import ChooseHorario from './components/chooseHorario';
import ChoosedRamos from './components/choosedRamos';
import AddRamo from './components/addRamo';

function App() {
  const [cookies, setCookies] = useCookies([]);
  const [checked, setChecked] = useState(cookies.checked || []);
  const [ramos, setRamos] = useState(cookies.ramos || []);
  const [actualCredits, setActualCredits] = useState(0);

  useEffect(() =>{
      function getSum(total, value) {
          return total + value.credits;
      }
      const calculateSCT = (ramos) => {
          return ramos.reduce(getSum,0)
      }
      setActualCredits(calculateSCT(ramos))
  }, [ramos])

  useEffect(() =>{
    setCookies('checked', checked);
    setCookies('ramos', ramos);
  }, [ramos, checked, setCookies])

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
            <ChoosedRamos ramos={ramos} setRamos={setRamos} checked={checked} setChecked={setChecked} setCookies={setCookies}/>
          </Grid>
          <Grid md={12} lg={8}>
            <Typography className="subtitle" variant="h5" gutterBottom>
              Horario Ideal
            </Typography>
            <Horario ramos={ramos} setRamos={setRamos}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
