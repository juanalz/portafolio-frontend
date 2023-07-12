import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function CreateUser({load, setLoad}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear Usuario
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <Formik
        initialValues={{ 
            names: '', 
            email: '',
            password: '',
            age: ''
        }}
        validationSchema={Yup.object({
          names: Yup.string()
            .required('Este campo es obligario'),
          email: Yup.string().email('Dirección de email invalida').required('Este campo es obligario'),
          password: Yup.string()
            .min(8, 'La contraseña debe ser mínimo de 8 caracteres')
            .required('Este campo es obligario'),
          age: Yup.number()
            .required('Este campo es obligario')
        })}
        onSubmit={async(values, { setSubmitting }) => {

            const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/users/saveUser`, values);
            console.log(response);
            setLoad(!load);
            setOpen(false);
        }}
       >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>        
            <DialogTitle id="alert-dialog-title">
            {"Crear un nuevo usuario"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">

                <TextField
                    sx={{ mt: 1 }}
                    fullWidth
                    id="outlined-basic"
                    name='names'
                    label="Nombres" 
                    variant="outlined"
                    onChange={handleChange}
                    value={values.names}
                    error={errors.names}
                    helperText={errors.names}
                />

                <TextField
                    sx={{ mt: 3 }}
                    fullWidth
                    id="outlined-basic"
                    name='email'
                    label="Email" 
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                    error={errors.email}
                    helperText={errors.email}
                />

                <TextField 
                  sx={{mt: 3}}
                  fullWidth
                  id="outlined-basic"
                  name='password'
                  label="Contraseña" 
                  variant="outlined"
                  onChange={handleChange}
                  value={values.password}
                  error={errors.password}
                  helperText={errors.password}
                />

                <TextField 
                  sx={{mt: 3}}
                  fullWidth
                  id="outlined-basic"
                  name='age'
                  label="Edad"
                  type="number"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.age}
                  error={errors.age}
                  helperText={errors.age}
                />

            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button type='submit'>
                Crear
            </Button>
            </DialogActions>
        </form>
        )}
        </Formik>
      </Dialog>
    </div>
  );
}