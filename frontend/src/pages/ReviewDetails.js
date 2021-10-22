import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function ReviewDetailsReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:3000/reviews/' + id)

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  return (
    <div className = "review-card">
      <div className = "rating"> {data.rating} </div>
      <h2> {data.title} </h2>
      <p> {data.body} </p>
    </div>
  )
}
