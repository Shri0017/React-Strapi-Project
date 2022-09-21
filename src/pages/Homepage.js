
import UseFetch from '../hooks/UseFetch'
import {Link} from 'react-router-dom' 
import React, {useState} from 'react' 
import { useQuery,gql } from '@apollo/client'


const REVIEWS = gql`query GetReviews{
    reviews{
          data{
        id
        attributes{  
          title,
          rating,
          body
        }
      }
    }
  }
`;

export default function Homepage() {
  const [reviewData, setReviewData] = useState(null)
  
//  const {loading , error , data } = UseFetch("http://localhost:1337/api/reviews")
const {loading , error , data } = useQuery(REVIEWS);
console.log(data);

React.useEffect(() => {
    if (!loading) {
        if (!error) {
            setReviewData(data.reviews.data)
            console.log(reviewData);
        }
    }
}, [loading])
if(loading) return <p> Loading... </p>
if(error) return <p> Error : </p>

    return (
    <div>
       
            { reviewData && reviewData.length > 0 ? reviewData.map(review => (
                <div key={review.id} className='review-card' > 
                    <div className='rating'>{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    <small>console List</small>
                    <p>{review.attributes.body.substring(0,200)}</p>
                    <Link to={`/details/${review.id}`}> Read More </Link>
                </div>
            )) 
            : ''
            }
    </div>
  )
}
