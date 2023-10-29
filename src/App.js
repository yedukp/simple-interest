import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  //jscode
  const [principle,setPrinciple]=useState(0)//principle amount
  const [rate,setRate]= useState(0)//rate
  const [year,setYear]=useState(0)//year
  const [interest,setInterest] = useState(0)//simple interest

  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isRate,setIsRate]=useState(true)
  const [isYear,setIsYear]=useState(true)

const validateData = (e)=>{
  const{name , value} = e.target
/*   console.log(name , value);
 */  /* console.log(!!value.match(/^[0-9]+$/)); */ //!! - to convert into boolean
 if(!!value.match(/^[0-9]*.?[0-9]+$/)){
   if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(true)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
 }
 else{
  if(name==='principle'){
    setPrinciple(value)
    setIsPrinciple(false)
    }
    else if(name==='rate'){
      setRate(value)
      setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
 }
  
}

const handleCalculate = (e)=>{
  e.preventDefault()
  if(!principle || !rate || !year){
    alert('Please fill the form completely')
  }
  else{
    /* alert('submitted') */
    setInterest(principle*rate*year/100)
  }
}

const handleReset = (e)=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
}

  return (
    <div style={{height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"} } className='w-100 bg-dark' >
      <div className='bg-light p-5 rounded' style={{width:"500px"}}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>

        <div style={{height:'150px', backgroundColor:"yellow"}} className=' mt-5 d-flex justify-content-center align-items-center rounded flex-column'>
          <h1>₹ {' '} {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className='mb-3'>
          <TextField name="principle" value={principle ||""} onChange={(e)=>validateData(e)} id="outlined-basic" className='w-100' label="₹ Principle Amount" variant="outlined" />
          </div>
          { !isPrinciple &&

            <div><p className='text-danger fw-bolder'>*Invalid input</p></div>
          }
          <div className='mb-3'>
          <TextField name="rate" value={rate ||""} onChange={(e)=>validateData(e)} id="outlined-basic" className='w-100' label="Rate of Interest (p.a) %" variant="outlined" />
          </div>
          { !isRate &&

<div><p className='text-danger fw-bolder'>*Invalid input</p></div>
}
          <div className='mb-3'>
          <TextField name="year" value={year ||""} onChange={(e)=>validateData(e)} id="outlined-basic" className='w-100' label="Year (Yr)" variant="outlined" />
          </div>
          { !isYear &&

<div><p className='text-danger fw-bolder'>*Invalid input</p></div>
}
        
        <div className='mt-4'>
          <Stack direction="row" spacing={2} >
          <Button disabled={isPrinciple && isRate && isYear?false:true} variant="contained" style={{height:"60px", width:"200px"}} className='bg-success' type='submit'>Calculate</Button>
          <Button onClick={handleReset} variant="outlined" style={{height:"60px", width:"200px"}}>Reset</Button>
          </Stack>
        </div>
        </form>
      </div>
   </div>
  );
  }

export default App;
