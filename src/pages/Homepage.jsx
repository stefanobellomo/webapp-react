import axios from "axios"
import { useState, useEffect } from "react"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3007/api/movies')
            .then(res => {
                setMovies(res.data.movies)
            })
    }, [])

    console.log(movies);

    return (
        <section>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map(movie => (
                        <div className="col" key={movie.id}>
                            <div className="card">
                                <img src={`https://placehold.co/200x200?text=${movie.title}`} alt="cover" className="card-img-top" />
                                <h1>{movie.title}</h1>
                                <p>{movie.director}</p>
                                <p>{movie.genre}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}