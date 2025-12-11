import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function DetailsPage() {

    const { id } = useParams();

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3007/api/movies/${id}`)
            .then(res => {
                setMovies(res.data)
                setReviews(res.data.reviews)
            })
    }, [])

    console.log(movies, reviews);
    const navigate = useNavigate()

    return (
        <>
            <div className="container my-4">
                <section className="movie">

                    <div className="col" key={movies.id}>
                        <div className="card">
                            <img src={`https://placehold.co/200x200?text=${movies.title}`} alt="cover" className="card-img-top" />
                        </div>
                        <div className="card-body p-2">
                            <h1>Title: {movies.title}</h1>
                            <h6>Director: {movies.director}</h6>
                            <h6>Genre: {movies.genre}</h6>
                            <h6>Relase year: {movies.release_year}</h6>
                            <h6>Plot: {movies.abstract}</h6>
                        </div>
                    </div>

                </section>

                <section className="review">

                    {reviews.map(review => (
                        <div className="col" key={review.id}>
                            <div className="card-body p-2">
                                <h3>Author: {review.name}</h3>
                                <h6>Vote: <span className={review.vote > 3 ? 'text-success' : 'text-danger'}>{review.vote}</span></h6>
                                <h6>Text: {review.text}</h6>
                                <h6>Create at: {review.created_at}</h6>
                                <h6>Updated at: {review.updated_at}</h6>
                            </div>
                        </div>
                    ))}

                    <button className="btn btn-dark" onClick={() => (navigate(-1))}>Torna indietro</button>

                </section>
            </div>

        </>
    )
}

