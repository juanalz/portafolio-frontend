import { useSelector } from "react-redux"

const Projects = () => {

    const count = useSelector((state) => state.counter.value)

     return (
        <>
            <h3>Proyectos</h3>
            <span>{count}</span>
        </>
     )
}

export default Projects