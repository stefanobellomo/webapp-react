import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import HomepageCard from "../Components/HomepageCard"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3007/api/movies')
            .then(res => {
                setMovies(res.data.movies)
            })
    }, [])

    const navigate = useNavigate()

    return (
        <section>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {movies.map(movie => (
                        <HomepageCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    )
}