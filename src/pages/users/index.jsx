
import Container from '@mui/material/Container';
import CreateUser from '@components/molecules/Users/CreateUser/CreateUser';
import ListUser from '@components/molecules/Users/ListUser/ListUser';
import { useState } from 'react';
import DeleteUser from '@components/molecules/Users/DeleteUser/DeleteUser';
import UpdateUser from '@components/molecules/Users/UpdateUser/UpdateUser';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../lib/slice/counterSlice'
import { useNavigate } from 'react-router-dom';

export default function Users() {

    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [idUpdate, setIdUpdate] = useState('');
    const user = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.loading);

    if (loading) {
      return <>Cargando...</>;
    }

    if (!user) {
      return navigate("/login");
    }

    // const count = useSelector((state) => state.counter.value)
    // const dispatch = useDispatch()

  return (
    <>
    {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}
    <Container maxWidth="lg" sx={{ mt: 5 }}>
        <CreateUser load={load} setLoad={setLoad} />
        <ListUser load={load} setIdDelete={setIdDelete} setIdUpdate={setIdUpdate} /> 
        <DeleteUser idDelete={idDelete} load={load} setLoad={setLoad} />
        <UpdateUser idUpdate={idUpdate} load={load} setLoad={setLoad} />       
    </Container>
    </>
  );
}