import React from 'react';
import clsx from 'clsx';
import FontAwesome from "react-fontawesome";
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const showSlider = () => {
	document.querySelector("h1").classList.toggle("hide");
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div 
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List onClick={showSlider}>
        {['Home', 'MakeSchool', 'NewsY', 'YComb'].map((text) => (
          <ListItem button key={text}>
            <NavLink 
              exact 
              activeClassName='active' 
              to={text === 'Home' ? "/" : `/${text.toLowerCase()}`}>
							<ListItemText className='nav-link' primary={text} />
						</NavLink>
            
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['left'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
						<FontAwesome onClick={showSlider} style={{color:'#fff'}} name='dove' size='4x'/>
					</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}