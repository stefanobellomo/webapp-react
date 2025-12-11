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
        <Outlet>
            <section>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        { }
                        <div className="col">
                            <div className="card">
                                <img src="" alt="cover" className="card-img-top" />
                            </div>
                            <div>
                                <h1></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Outlet>
    )
}