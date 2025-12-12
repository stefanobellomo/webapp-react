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

                    <div className="col d-flex" key={movies.id}>
                        <div className="card">
                            <img src={`https://placehold.co/200x200?text=${movies.title}`} alt="cover" className="card-img-top " />
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
                    <h1 className="my-4">Reviews</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {reviews.map(review => (
                            <div className="col d-flex" key={review.id}>
                                <div className="card p-2">
                                    <h4>Author: {review.name}</h4>
                                    <p>{review.text}</p>
                                    <h6>Vote: <span className={review.vote > 3 ? 'text-success' : 'text-danger'}>{review.vote}</span></h6>
                                    {/* <h6>Create at: {review.created_at}</h6>
                                    <h6>Updated at: {review.updated_at}</h6> */}
                                </div>
                            </div>
                        ))}

                        <button className="btn btn-dark" onClick={() => (navigate(-1))}>Torna indietro</button>
                    </div>
                </section>

                <section>
                    <div>
                        <h3>Leave your review</h3>
                        <form>

                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Vote</label>
                                <select
                                    className="form-select"
                                    name="rating"
                                    id="rating"
                                >
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Review</label>
                                <textarea className="form-control" name="review" id="review" rows="5" placeholder="add your review"></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-dark">
                                Submit
                            </button>

                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}

