import axios from "axios"
import { useState, useEffect } from "react"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3007/api/movies')
            .then(res => {
                setMovies(res)
            })
    }, [])

    return (
        <main>

        </main>
    )
}