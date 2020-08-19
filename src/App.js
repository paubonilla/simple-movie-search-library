import React, { useState } from 'react';
// import movies from './movies.json'
// import Movie from './components/Movie'
import './App.css';
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #41444B;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Appinner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 40px;
  }
`

export const Content = styled.div`
  display: flex;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > input {
    width: 270px;
    margin: 2rem;
    background: #F6F4E6;
    color: #51575D;
  }
`

export const ResultsList = styled.ul`
  list-style: none;
  li {
    border-radius: 10px;
    margin: 10px 0;
    padding: 20px;
    background: #CBEAED;
    color: #41444B;
  }
`

export const apiFetchResults = (search) => {
  if (!search) return [];
  return fetch(`https://imdb8.p.rapidapi.com/title/auto-complete?q=${encodeURI(search)}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "4885009b84msh56e6eec84419885p1a1e7bjsn5e701e6e5846"
    }
  })
    .then(response => response.json())
    .catch(err => {
      console.log(err)
    })
}

function App() {
  // const [movieIndex, setMovieIndex] = useState(0)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value)
    fetchResults(value)
  }

  const fetchResults = async (search) => {
    const results = await apiFetchResults(search);
    console.log(results)
    setSearchResults(results.d)
  }

  return (
    <AppContainer>
      <Appinner>
        <h1>Your Movie Library</h1>
        <SearchBar>
          <input
            type="text"
            placeholder="Search a movie title, actor, etc..."
            value={search}
            onChange={handleChange}
          />
          <ResultsList>
            {(searchResults || []).map(item => (
              <li>
                <span>{item.l} {item.s}</span>
              </li>
            ))}
          </ResultsList>
        </SearchBar>
        <Content>
          {/* <Movie
            movieIndex={movieIndex}
            movies={movies}
          /> */}
        </Content>
      </Appinner>
    </AppContainer>
  );
}

export default App;
