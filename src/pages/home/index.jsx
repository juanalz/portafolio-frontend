import { useSelector } from "react-redux";

const Home = () => {
    const count = useSelector((state) => state.counter.value)

    return (
        <>
            Bienvenidos
            <span>{count}</span>
        </>
    )
}

export default Home;