import '../App.css';
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function ChoosedRamos( {ramos} ) {
    return (
    <List dense sx={{ margin: '5%', width: '100%', bgcolor: 'background.paper' }}>
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
          </ListItem>
        );
      })}
    </List>
  );
}

export default ChoosedRamos;