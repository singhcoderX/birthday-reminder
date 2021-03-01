import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import View from "./View";
import AddPerson from "./AddPerson";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function App() {
  const [reload, setReload] = useState(0);
  const classes = useStyles();
  let history = useHistory();

  /* States */
  const isAuthenticated = useSelector((state) =>
    state.auth.token ? true : false
  );
  console.log("IS Authenticated", isAuthenticated);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Happy Birthday
          </Typography>

          {!isAuthenticated ? (
            <Button
              color="inherit"
              onClick={() => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          ) : (
            <Button color="inherit">Logout</Button>
          )}
        </Toolbar>
      </AppBar>
      <Grid container direction="column" spacing={10} justify="center">
        <Grid sm item></Grid>
        <Grid item style={{ backgroundColor: "white" }}>
          <View reload={reload} />
        </Grid>
        <Grid item style={{ backgroundColor: "white" }}>
          <Grid container justify="center">
            <AddPerson setreload={setReload} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
