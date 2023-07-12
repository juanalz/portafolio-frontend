
import Container from '@mui/material/Container';
import CreateUser from '@components/molecules/Users/CreateUser/CreateUser';
import ListUser from '@components/molecules/Users/ListUser/ListUser';
import { useState } from 'react';
import DeleteUser from '@components/molecules/Users/DeleteUser/DeleteUser';
import UpdateUser from '@components/molecules/Users/UpdateUser/UpdateUser';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../lib/slice/counterSlice'

export default function Users() {

    const [load, setLoad] = useState(false);
    const [idDelete, setIdDelete] = useState('');
    const [idUpdate, setIdUpdate] = useState('');

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