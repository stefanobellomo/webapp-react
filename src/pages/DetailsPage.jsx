import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import DetailsCard from "../Components/DetailsCard";
import ReviewCard from "../Components/ReviewCard";

export default function DetailsPage() {

    const { id } = useParams();

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewerName, setReviewerName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [reviewerVote, setReviewerVote] = useState(1)
    const [toggle, setToggle] = useState(true)
    const [textToggle, setTextToggle] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:3007/api/movies/${id}`)
            .then(res => {
                setMovies(res.data)
                setReviews(res.data.reviews)
            })
    }, [])

    // console.log(movies, reviews);
    const navigate = useNavigate()

    function handleChange(e) {
        e.preventDefault()

        if (reviewerName.length === 0) {
            setToggle(false)
            return
        } else {
            setToggle(true)
        }

        if (reviewText.length === 0) {
            setTextToggle(false)
            return
        } else {
            setTextToggle(true)
        }

        setReviews([...reviews, {
            id: reviews[reviews.length - 1].id + 1,
            name: reviewerName,
            text: reviewText,
            vote: reviewerVote
        }])
        console.log(reviews);


        setReviewerName("")
        setReviewText("")
        setReviewerVote(1)

    }

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
                            <ReviewCard key={review.id} review={review} />
                        ))}

                        <button className="btn btn-dark" onClick={() => (navigate("/"))}>Torna indietro</button>

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
                                    value={reviewerVote}
                                    onChange={(e) => setReviewerVote(e.target.value)}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input className="form-control" type="text" name="name" value={reviewerName} id="name" placeholder="add your name" onChange={(e) => setReviewerName(e.target.value)}>
                                </input>
                                <span className={toggle ? 'd-none' : 'text-danger'}>Campo obbligatorio...</span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">Review</label>
                                <textarea className="form-control" name="review" value={reviewText} id="review" rows="5" placeholder="add your review" onChange={(e) => setReviewText(e.target.value)}></textarea>
                                <span className={textToggle ? 'd-none' : 'text-danger'}>Campo obbligatorio...</span>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-dark"
                                onClick={handleChange}>
                                Submit
                            </button>

                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}

