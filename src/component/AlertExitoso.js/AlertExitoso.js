import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const AlertExitoso = ({ ordenPedidoID, mostrarFallo }) => {
    const [mostrarAlert, setMostrarAlert] = useState(true);
    

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMostrarAlert(false);
        }, 5000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {mostrarAlert && (
                <Alert variant="filled" severity="success">
                    <p>Su Orden fue registrada con el ID: {ordenPedidoID}</p>
                    <p>Muchas Gracias Por SU COMPRA!!!</p>
                </Alert>
            )}
            {mostrarFallo && (
                <Alert variant="filled" severity="error">
                    <p>¡Hubo un fallo al procesar su orden con el ID: {ordenPedidoID}!</p>
                    <p>Por favor, inténtelo nuevamente más tarde.</p>
                </Alert>
            )}
        </Stack>
    );
}

export default AlertExitoso;