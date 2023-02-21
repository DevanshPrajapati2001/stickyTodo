import React, { useState, useEffect } from 'react'
import { Paper, Button, Grid } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TodoInput from '../TodoInput/TodoInput';
import TodoCard from '../Card/TodoCard'
import './List.css'

const List = () => {

  const btStyle = { cursor: 'pointer', backgroundColor: "#FFBD35", color: 'white' }
  const [open, setOpen] = useState(false)
  const[taskList, setTaskList] = useState([])

  useEffect(() => {
    let data = localStorage.getItem("Data")
    if(data){
    setTaskList(JSON.parse(data))
    }
  }, [])
  

  const handleClick = () => {
    setOpen(false);
  }

  const saveTask = (taskObj) => {
    let items = taskList
    items.push(taskObj)
    setTaskList(items)
    localStorage.setItem('Data', JSON.stringify(items))
    setOpen(false)
  }

  const deleteTask = (index) => {
    let items = taskList
    items.splice(index, 1)
    setTaskList(items)
    localStorage.setItem('Data' , JSON.stringify(items))
    window.location.reload()
  }

  const updateListArray = (obj, index) =>{
    let items = taskList
    items[index] = obj
    localStorage.setItem('Data' , JSON.stringify(items))
    setTaskList(taskList)
    window.location.reload()
  }

  return (
    <>
    <div className='header-container'>
      <Paper elevation={1} sx={{
        "& > *": {
          padding: '12px',
          justifyContent: 'center',
          width: '100%',
          height: '200px',
          overflow: 'hidden',
          backgroundColor: "#0F6292",
        }
      }}>
        <Grid align='center'>
          <h1 style={{color: 'white'}}>To-Do List</h1>
          <Button variant='contained' startIcon={<AddCircleOutlineIcon />} style={btStyle} onClick={() => setOpen(true)}>Create Task</Button>
        </Grid>
      </Paper>
    </div>
    <div className = 'output-container'>
      <div className= 'card-list'>
        {taskList && taskList.map((obj, index) => <TodoCard taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
      </div>
    </div>
    <TodoInput open = {open} handleClick={handleClick} save={saveTask}/>
    </>
  )
}

export default List
