import React from 'react';
import {Stack,CircularProgress} from '@mui/material';
import "./loading.css"

const Loading = () => {
  return (
    <div className='spinner'>
        <h3 className='loading'> Cargando ...</h3>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
        </Stack>
    </div>
  )
}

export default Loading;