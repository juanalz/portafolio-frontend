import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Cookies from 'js-cookie';

export default function ListUser({load, setIdUpdate, setIdDelete}) {

    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log(Cookies.get('token'));
            const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}api/users/consultUsers`, {}, {
                headers: {
                    'x-token': Cookies.get('token')
                }
            });
            console.log(response.data.users);
            setRows(response.data.users);
        }
        fetchData();
    }, [load])

    const handleUpdate = async (id) => {
        setIdUpdate(id);
    }

    const handleDelete = async (id) => {
        setIdDelete(id);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Foto</TableCell>
                    <TableCell>Nombres</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Rol</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        <img width={100} src={`${import.meta.env.VITE_URL_SERVER}uploads/${row.photo}`}></img>
                    </TableCell>
                    <TableCell>{row.names}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.Role.description}</TableCell>
                    <TableCell>
                        <IconButton color="primary" aria-label="Editar" onClick={() => {handleUpdate(row.id)}}>
                            <EditIcon />
                        </IconButton>
                        <IconButton color="primary" aria-label="Eliminar" onClick={() => {handleDelete(row.id)}}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}