import {React, useState} from 'react'
import { Dialog , DialogActions , DialogContent, DialogTitle, TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

const TodoInput = ({open, handleClick, save}) => {

  const [taskName, setTaskName] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = (e) => {
      const {name, value} = e.target;

      if(name === 'taskName'){
        setTaskName(value);
      }
      else{
        setDescription(value)
      }
  }

  const handleSave = () => {
    let taskObj = {}
    taskObj["Title"] = taskName;
    taskObj["Description"]  = description;
    save(taskObj);
    setTaskName('')
    setDescription('')
  }

  return (
    <div>
        <Dialog open={open} onClose={handleClick}>
        <DialogTitle>Add a task</DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            name="taskName"
            value={taskName}
            label='Title'
            placeholder='Title'
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="Description"
            value={description}
            label='Description'
            placeholder='Description (optional)'
            multiline
            rows={5}
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleSave} startIcon={<AddIcon />} variant='contained' >Create task</Button>
          <Button onClick={handleClick} startIcon={<ClearIcon />}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TodoInput
