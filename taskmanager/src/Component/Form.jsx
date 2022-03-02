import { useState, useRef } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from "@mui/material";
import styles from "./Form.module.css"



export default function Form({ onTaskCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const imageRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskCreate && onTaskCreate(formData);
    setFormData("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Box className={styles.box} >
        <TextField 
            className={styles.input}
            label={'Title"'} 
            type="text"
            placeholder="Title"
            name="name"
            value={formData.name}
            onChange={handleChange} />
        <TextareaAutosize
            label={'Description'} 
            minRows={3}
            style={{ width: 540 }}
            type="text"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange} />
        <TextField 
            type="date"
            name="date"
            value={formData.date}
            onChange={()=>handleChange()} />
            <Button type="submit" >Submit</Button>
        </Box>
        
      </form>
    </div>
  );
}
