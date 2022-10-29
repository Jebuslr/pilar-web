import React, {useEffect} from "react";
import {
Grid,
Paper,
Box,
Card,
CardContent,
CardMedia,
Button,
CardActionArea,
CardActions,
Typography
} from '@mui/material';
import imagenes from '../../assets/images/imagenes';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';

const FetchList = () => {
const dispatch = useDispatch ()

  useEffect(()=>{
    dispatch(appActions.setPageTitle('LISTAS'))

  },[])

return (
<Grid container spacing={3}>
    <Grid item md={12} xs={12}>
    <Paper sx={{p: 2}}>
    <Box>
    FetchList
    </Box>
    </Paper>
    </Grid>


    <Grid item md={4}>
          <Card1/>
          </Grid>

          <Grid item md={4}>
          <Card2/>
          </Grid>

  </Grid>  

    );
};



function Card1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagenes.img3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Dashboard
          </Typography>
          <Typography variant="body2" color="text.primary">
            Esta card te redireccionara a Dashboard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/" variant="contained" size="medium" color="primary" >
          Share
        </Button>
      </CardActions>
    </Card>

  );


}




function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagenes.img2}
          alt="todolist"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Todo
          </Typography>
          <Typography variant="body2" color="text.primary">
            Esta card te redireccionara a Todo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/todo" variant="contained" size="medium" color="primary" >
          Share
        </Button>
      </CardActions>
    </Card>

  );
}


export default FetchList;