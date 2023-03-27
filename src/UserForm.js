import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../src/UseForm.css'
import Show from './Show';

export default function UserForm() {
    const navi = useNavigate();
    const [alldata,setAllData] = useState({});

    const Submit = () =>{
        console.log(alldata);
        navi('/show');
    }
    const View = () =>{
      
    }
   return (
    <div className='parent'>
      <h1>User Form</h1>
         <TextField 
         label='enter the firstname'
         name='firstname'
         onChange={(e) =>alldata.firstname = e.target.value}
         />

         <br />

        <TextField 
        label='enter the lastname'
        name='lastname'
        onChange={(e) =>alldata.lastname = e.target.value}
        />

        <br />

        <TextField 
        label='enter the mail'
        name='mail'
        onChange={(e) =>alldata.mail = e.target.value}
        />
        
        <br />

        <TextField 
        label='enter the phone number'
        name='phonenumber'
        onChange={(e) =>alldata.phonenumber = e.target.value}
        />

       <br />

        <TextField 
        label='enter your district'
        name='district'
        onChange={(e) =>alldata.district = e.target.value}
        />

        <br />

        <TextField 
        label='enter your state'
        name='state'
        onChange={(e) =>alldata.state = e.target.value}
        />

       <br />

        <Button onClick={Submit}>Submit</Button>

        <Button onClick={View}>View Details</Button>

        <Show alldata="sdfghj" />
    </div>
  )
}
