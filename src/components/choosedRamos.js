import '../App.css';
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { colorBackground } from '../constants/constants';

export function ChoosedRamos( {ramos, setRamos, checked, setChecked} ) {
    const handleDelete = (value) => () => {
      const currentIndex = checked.indexOf(value.id);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value.id);
        setRamos([].concat(ramos, value))
      } else {
        newChecked.splice(currentIndex, 1);
        const erasedRamos = ramos.filter( (r) => (value.id !== r.id))
        setRamos(erasedRamos)
      }

      setChecked(newChecked);
    };

    return (
    <List dense sx={{ width: '100%', bgcolor: colorBackground }}>
      {ramos.map((value, index) => {
        return (
          <ListItem
            sx={{ backgroundColor: value.color}}
            key={value.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={value.name + " (Par." + value.number + ")"} secondary={value.teacher}/>
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
            <ListItemText class='hour' primary={value.credits+ " creditos"}/>
            <IconButton aria-label="delete" onClick={handleDelete(value)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ChoosedRamos;