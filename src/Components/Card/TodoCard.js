import React, {useState} from 'react'
import './TodoCard.css'
import { Card, CardActions, CardContent, Typography , IconButton, Tooltip } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit'
import EditTask from '../EditTask/EditTask';

const TodoCard = ({index, deleteTask, updateListArray, taskObj}) => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false);
  }

  const palette = [{
      primayColor: '#FFD56F' //yellow
    },
    {
      primayColor: '#EFA3C8' //pink
    },
    {
      primayColor: '#AEE2FF' //blue
    },
    {
      primayColor: '#97DECE' //mint
    },
    {
      primayColor: '#FFB26B' //orange
    },
    {
      primayColor: '#D09CFA' //purple
    },
    {
      primayColor: '#B6E388' //green
    }
]

  const handleDelete = index => {
    deleteTask(index)
  }

  const editTask = obj => {
    updateListArray(obj, index)
  }

  return (
    <div>
    <div className='card-wrapper'>
      <Card sx={{maxWidth: 340, backgroundColor: palette[index%7].primayColor, borderRadius: 4.5, borderStyle: 'solid', textTransform: 'capitalize'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>
                    {taskObj.Title}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h7" component='div'>
                    {taskObj.Description}
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title='Complete task'>
                    <IconButton variant='contained' color='success' sx={{cursor:'pointer'}} onClick={handleDelete}> 
                        <CheckCircleOutlineIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit Todo" >
                    <IconButton variant='contained' color='primary' sx={{cursor:'pointer'}} onClick={() => setOpen(true)}> 
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
      </Card>
    </div>
    <EditTask open={open} handleClick={handleClick} editTask={editTask} taskObj={taskObj}/>
  </div> 
  )
}

export default TodoCard