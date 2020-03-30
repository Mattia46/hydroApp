import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor: "#f3f3f3"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div style={{display: "flex"}}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" component={Link} to="/homePage" icon={<HomeIcon />} />
        <BottomNavigationAction label="Orders" component={Link} to="/orders" icon={<ListIcon />} />
        <BottomNavigationAction label="News" component={Link} to="/news" icon={<NewReleasesIcon />} />
        <BottomNavigationAction label="Offerte" component={Link} to="/promotions" icon={<LocalOfferIcon />} />
      </BottomNavigation>
    </div>
  );
}
