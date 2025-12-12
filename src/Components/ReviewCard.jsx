export default function ReviewCard({ review }) {

    return (
        <div className="col d-flex" key={review.id}>
            <div className="card p-2">
                <h4>Author: {review.name}</h4>
                <p>{review.text}</p>
                <h6>Vote: <span className={review.vote > 3 ? 'text-success' : 'text-danger'}>{review.vote}</span></h6>
            </div>
        </div>
    )
}