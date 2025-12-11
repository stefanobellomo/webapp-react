import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3007/api/movies')
            .then(res => {
                setMovies(res.data.movies)
            })
    }, [])

    const navigate = useNavigate()

    function handleClick(movie) {
        navigate(`/DetailsPage/${movie}`)
    }

    console.log(movies);

    return (
        <section>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card">
                                <img src={`https://placehold.co/200x200?text=${movie.title}`} alt="cover" className="card-img-top" />
                            </div>
                            <div className="card-body p-2">
                                <h1>{movie.title}</h1>
                                <h6>{movie.director}</h6>
                                <h6>{movie.genre}</h6>
                                <button className="btn btn-dark" onClick={() => handleClick(movie.id)}>Details film</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}