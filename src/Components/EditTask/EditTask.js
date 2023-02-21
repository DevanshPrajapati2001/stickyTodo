import React , { useState, useEffect } from 'react'
import { Dialog , DialogActions , DialogContent, DialogTitle, TextField, Button } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';
import ClearIcon from '@mui/icons-material/Clear'

const EditTask = ({open, handleClick, editTask, taskObj}) => {

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

  useEffect(() => {
    setTaskName(taskObj.Title)
    setDescription(taskObj.Description)
  }, [taskObj.Title, taskObj.Description])

  const handleEdit = (e) => {
    e.preventDefault()
    let taskObj = {}
    taskObj['Title']= taskName;
    taskObj['Description']  = description;
    editTask(taskObj);
    setTaskName('')
    setDescription('')
  }

  return (
        <div>
            <Dialog open={open} onClose={handleClick}>
                <DialogTitle>Edit task</DialogTitle>
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
                        <Button onClick={handleEdit} startIcon={<UpdateIcon />} variant='contained'>Update</Button>
                        <Button onClick={handleClick} startIcon={<ClearIcon />}>Cancel</Button>
                    </DialogActions>
            </Dialog>
    </div>
    )
}

export default EditTask