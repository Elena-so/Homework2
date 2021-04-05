import React, { useState,useEffect } from "react";
import { UserInput } from "./inputHook";
import { useColors } from "./ColorProvider";
import styled from "styled-components";
import styles from "./styles/App.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import "./styles/App.css";


export default function AddColorForm() {
  
  const [titleProps, resetTitle] = UserInput("");
  const [colorProps, resetColor] = UserInput("");
  const { addColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetColor("");
    resetTitle("");
    alert("增加一个color")
    
  };
  useEffect(()=>{
    
       
 },[addColor])
  
 
  
  return (
    <form className={styles.form} >   
      <TextField
        id="outlined-basic"
        style={{marginLeft:10}}
        className={styles.input}
        {...titleProps}
        type="text"
        placeholder="color title"
        required
      ></TextField>
      <TextField
        id="outlined-basic"
        className={styles.input}
        style={{ width:30}}
        {...colorProps}
        type="color"
        required
      ></TextField>
      <div>
      <Button 
      variant="contained" 
      color="primary" 
      style={{marginLeft:20}}
      onClick={submit}
      >ADD</Button>
      </div>
    </form>
  );
}
