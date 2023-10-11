

import React, { useState } from 'react';
import { Typography, Button, Container, TextField  } from '@mui/material';

function HardwareSet(props) {
  const [availability1, setAvailability1] = useState(props.usedSet1);
  const [availability2, setAvailability2] = useState(props.usedSet2);
  const [capacity, setCapacity] = useState(props.capacity);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // check it stuff
  const handleCheckIn1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 + quantityToAdd <= props.capacity) {
        setAvailability1(availability1 + quantityToAdd)
      }
  };

  const handleCheckIn2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 + quantityToAdd <= props.capacity) {
        setAvailability2(availability2 + quantityToAdd)
      }
  };
  // check out stuff
  const handleCheckOut1 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability1 - quantityToAdd >= 0) {
        setAvailability1(availability1 - quantityToAdd)
      }
  };

  const handleCheckOut2 = () => {
    const quantityToAdd = parseInt(inputValue, 10);
    if (!isNaN(quantityToAdd) && availability2 - quantityToAdd >= 0) {
        setAvailability2(availability2 - quantityToAdd)
        
      }
  };
  return (
    <Container sx={{
        display: 'flex',
        alignItems: 'center'
    }}>
        <Container>
            <Typography>
                HWSet1: {availability1}/{props.capacity}
            </Typography>
            <Typography>
                HWSet2: {availability2}/{props.capacity}
            </Typography>
        </Container>
            <Container>
                <TextField id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange}/>
                <TextField id="outlined-basic" label="Enter Qty" variant="outlined" onChange={handleInputChange}/>
            </Container>
            <Container sx={{
                display: 'flex'
            }}>
                <Container>
                    <Button sx={{
                        height: '49%'
                    }} variant="contained"
                    onClick={handleCheckIn1}>Check In.
                    </Button>
                    <Button sx={{
                        height: '49%',
                        marginTop: '2%'
                    }} variant="contained"
                    onClick={handleCheckIn2}>Check In.
                    
                    </Button>
                </Container>
                <Container>
                    <Button sx={{
                        height: '49%'
                    }}variant="contained"
                    onClick={handleCheckOut1}>Check Out</Button>
                    <Button sx={{
                        height: '49%',
                        marginTop: '2%'
                    }} variant="contained"
                    onClick={handleCheckOut2}>Check Out</Button>
                </Container>
            </Container>
    </Container>






    
    // <div>
    //    This is a name component. 
    //    Capacity: capacity, Available: availability
    //    <button onClick={handleClick}>+</button>
    //  </div>
    // // <div>
    // //   This is a {props.name} component. 
    // //   Capacity: {capacity}, Available: {availability}
    // //   <button onClick={handleClick}>+</button>
    // // </div>
  );
}

export default HardwareSet;