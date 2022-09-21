import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import UseFetch from '../hooks/UseFetch';
import {Link} from 'react-router-dom'
import { useQuery,gql } from '@apollo/client'

const REVIEWS = gql`query GetReviews ($id: ID!){
    review(id:$id){
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

function ReviewDetails() {
    const { id }  = useParams(); 
    const [review , setreview ] = useState(null);

    // const {loading , error , data } = UseFetch('http://localhost:1337/api/reviews/'+id)
    const {loading , error , data } = useQuery(REVIEWS,{variables:{
        id:id
    }});
    console.log(data);

 React.useEffect(() => {
    if(!loading)
    if(!error)
    setreview(data.review.data);

 }, [loading])

 
    if(loading) return <p> Loading... </p>
   if(error) return <p> Error : </p>

  return (
    <div>
           {review &&   <div key={review.id} className='review-card' > 
                    <div className='rating'>{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    <small>console List</small>
                    <p>{review.attributes.body}</p>
                   
                </div>}
    </div>
  )
}

export default ReviewDetails
