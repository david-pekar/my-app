import React from 'react'
import { Typography, Button, Container, TextField  } from '@mui/material';
import HardwareSet from './HardwareSet';

const Project = (props) => {
    return (
        <Container sx={{
            display: 'flex',
            bgcolor: 'gray',
            width: '100%',
            alignItems: 'center',
            marginTop: '1rem',
            padding: 0
        }}>
            <Typography variant='h5' sx={{

            }}>
                Project Name {props.name}
            </Typography>
            <Typography sx={{
                marginRight: '4rem'
            }}>
                {props.users}
            </Typography>
            <HardwareSet usedSet1={props.usedSet1} usedSet2={props.usedSet2} capacity={props.capacity}/>
        </Container>
    );
};

export default Project;
