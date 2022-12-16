import '../App.css';
import React, { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Pagination  from '@mui/material/Pagination';
import Checkbox from '@mui/material/Checkbox';
import schedule from '../schedule/schedule';

function Opciones({ramosPage, ramos, setRamos}) {
  const [checked, setChecked] = React.useState([]);

  function equalRamo(r, v) {
    const a = r.name === v.name;
    const b = r.number === v.number;
    return (a && b)
  }

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value.id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value.id);
      setRamos([].concat(ramos, value))
    } else {
      newChecked.splice(currentIndex, 1);
      const erasedRamos = ramos.filter( (r) => (!equalRamo(r, value)))
      setRamos(erasedRamos)
    }

    setChecked(newChecked);
  };

  return ramosPage.map((value, index) => {
    const labelId = `checkbox-list-secondary-label-${value.name}`;
    return (
      <ListItem
        sx={{ backgroundColor: value.color}}
        key={value.id}
        secondaryAction={
          <Checkbox
            edge="end"
            checked={checked.indexOf(value.id) !== -1}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        }
        onClick={handleToggle(value, index)}
        disablePadding
      >
        <ListItemButton>
          <ListItemText id={labelId} primary={value.name + " (Par." + value.number + ")"} secondary={value.teacher}/>
          <div class="hour">
          { 
            value.hours.map((h) => 
            <div>
              {h.day+" "+h.block} 
              <br />
            </div>)
          }
          </div>
        </ListItemButton>
      </ListItem>
    );
  })
}

export function ChooseHorario( {ramos, setRamos}) {
  const rowPerPages = 5
  const numberPages = Math.ceil(schedule.length / rowPerPages)
  const [page, setPage] = React.useState(1);
  const [ramosPage, setRamosPage] = React.useState(schedule.slice(0,rowPerPages))

  useEffect(() => {
    const newOptions = schedule.slice((page-1)*rowPerPages,page*rowPerPages)
    setRamosPage(newOptions)
  }, [page])
  
  return (
    <List dense sx={{ margin: '5%', width: '100%', bgcolor: 'background.paper' }}>
      <Opciones ramosPage={ramosPage} setRamosPage={setRamosPage} ramos={ramos} setRamos={setRamos} />
      <Pagination count={numberPages} page={page} onChange={(e, value) => setPage(value)} />
    </List>
  );
}

export default ChooseHorario;