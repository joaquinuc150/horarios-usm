import '../App.css';
import { useState, useEffect } from 'react'
import { FormControl, Select, MenuItem, Checkbox, Pagination, ListItemText, ListItemButton, ListItem, List } from '@mui/material';
import { scheduleInf, scheduleQuimica } from '../schedule/schedule';

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

function Opciones({ramosPage, ramos, setRamos, checked, setChecked}) {
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
        sx={{ backgroundColor: value.color, borderStyle: 'inset'}}
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

export function ChooseHorario( {ramos, setRamos, checked, setChecked}) {
  const rowPerPages = 5
  const [schedule, setSchedule] = useState(scheduleInf)
  const [numberPages, setNumberPages] = useState(Math.ceil(schedule.length / rowPerPages))
  const [sortSchedule, setSortSchedule] = useState(schedule.sort(compare))
  const [page, setPage] = useState(1);
  const [ramosPage, setRamosPage] = useState(sortSchedule.slice(0,rowPerPages))

  useEffect(() => {
    const newOptions = sortSchedule.slice((page-1)*rowPerPages,page*rowPerPages)
    setRamosPage(newOptions)
  }, [page, sortSchedule])

  useEffect(() => {
    setNumberPages(Math.ceil(schedule.length / rowPerPages))
    setSortSchedule(schedule.sort(compare))
    setPage(1)
  }, [schedule])

  const handleChange = (event) => {
    setSchedule(event.target.value);
  };
  
  return (
    <List dense sx={{ width: '100%' }}>
      <FormControl>
        <Select
          sx={{ backgroundColor: '#fff000'}}
          labelId="demo-simple-select-label"
          id="select-departament"
          value={schedule}
          label="Departamento"
          onChange={handleChange}
        >
            <MenuItem disabled value="">
              <em>Departamento</em>
            </MenuItem>
            <MenuItem value={scheduleInf}>Informatica</MenuItem>
            <MenuItem value={scheduleQuimica}>Quimica</MenuItem>
        </Select>
      </FormControl>
      <Opciones ramosPage={ramosPage} setRamosPage={setRamosPage} ramos={ramos} setRamos={setRamos} checked={checked} setChecked={setChecked} />
      <Pagination color='primary' count={numberPages} page={page} onChange={(e, value) => setPage(value)} />
    </List>
  );
}

export default ChooseHorario;