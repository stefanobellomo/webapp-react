import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DetailsCard from "../Components/DetailsCard";
import ReviewCard from "../Components/ReviewCard";

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

                    <DetailsCard movies={movies} />

                </section>

                <section className="review">
                    <h1 className="my-4">Reviews</h1>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {reviews.map(review => (
                            <ReviewCard review={review} />
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

