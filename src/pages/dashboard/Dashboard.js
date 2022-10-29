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
Typography,
CardHeader,
Stack,
Checkbox,



} from '@mui/material';
import imagenes from '../../assets/images/imagenes';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';

const Dashboard = () => {

  const todo = useSelector(appSelector.todo)

  const handleChecked = (e, id)=>{
    dispatch(appActions.setCompletedTodo({id, completed: e.target.checked}))
  }


  const delTask = (id)=>{

    dispatch(appActions.deleteTodo(id))
    
    }

  const dispatch = useDispatch ()
  useEffect(()=>{
    dispatch(appActions.setPageTitle('TABLERO'))

  },[])

return (
  
<Grid container spacing={3} >
    <Grid item md={12} xs={12} >
    <Paper sx={{p: 2}}>
    <Box>
    Dashboard
    </Box>

    

    
  <Card>
<CardHeader title="Tareas Completadas" />
<CardContent>
{todo.filter((t) => t.completed).length}
{todo.map((t, index)=>
(
<Stack key={t.id} sx={{justifyContent:'space-between'}} direction='row'>
<Grid item md={9} sx={{pt: 1}}>
</Grid>
<Grid item md={2}>
</Grid>
</Stack>
)
)}
</CardContent>
</Card>

    <Grid item md={12} xs={12} >
  <Card>
<CardHeader title="Tareas pendientes" />
<CardContent>
{todo.filter((t) => !t.completed).length}
{todo.map((t, index)=>
(
<Stack key={t.id} sx={{justifyContent:'space-between'}} direction='row'>
<Grid item md={2}>

</Grid>
</Stack>
)
)}
</CardContent>
</Card>



</Grid>



    
    
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
          image={imagenes.img2}
          alt="todolist"/>
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




function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagenes.img1}
          alt="react"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            FetchList
          </Typography>
          <Typography variant="body2" color="text.primary">
            Esta card te redireccionara a fetchList
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href="/fetch-list" variant="contained" size="medium" color="primary" >
          Share
        </Button>
      </CardActions>
    </Card>

  );
}














export default Dashboard