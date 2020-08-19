import React from 'react'
import styled from 'styled-components'

export const MovieContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Movie({ movieIndex, movies }) {
  const currentMovie = movies[movieIndex]
  return (
    <MovieContainer>
      <h1>{currentMovie.title}</h1>
      <MovieDescription>
        <span>year: {currentMovie.year}</span>
        <span>genre: {currentMovie.genre}</span>
        <span>type: {currentMovie.type}</span>
        <span>summary:
          <br />
          {currentMovie.about}</span>
      </MovieDescription>
    </MovieContainer>
  )
}
