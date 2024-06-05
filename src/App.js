import './App.css';

import { movies, headings } from './data';
import { useEffect, useState } from 'react';
import { useDebounce } from './hooks';

function App() {
  const [input, setInput] = useState("")
  const query = useDebounce(input, 500)



  return (
    <div className="App">
    <form 
      style={{display: 'flex', flexDirection:"column", justifyContent: "center", alignItems:"center", rowGap:"10px", padding:"20px"}}
    >
      <label htmlFor="queryInput">Query Movies:</label>
      <input 
        id="queryInput"
        placeholder="Search by Title, Director, Genre or Actor/Actress" style={{width: "70%"}}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>

      <table style={{display:"grid", gridTemplateColumns:"6", alignItems:"center", justifyContent: "center"}}>
        <thead>
          <tr>
            <th style={{width:"140px", textDecorationLine: "underline"}}>Title</th>
            <th style={{width:"140px", textDecorationLine: "underline"}}>Director</th>
            <th style={{width:"140px", textDecorationLine: "underline"}}>Year</th>
            <th style={{width:"140px", textDecorationLine: "underline"}}>Genre</th>
            <th style={{width:"170px", textDecorationLine: "underline"}}>Cast</th>
            <th style={{width:"140px", textDecorationLine: "underline"}}>Average Rating</th>
          </tr>
        </thead>
        {movies.map((movie,index) => {
          const cast = movie.cast.join(", ")
          const search = query.toLowerCase()
          if (movie.title.toLowerCase().includes(search) || movie.director.toLowerCase().includes(search) || movie.genre.toLowerCase().includes(search) || cast.toLowerCase().includes(search)) {
            return (
              <tbody key={`${index}-${movie.title}`}>
              <tr>
                <td style={{width: "140px"}}>{movie.title}</td>
                <td style={{width: "140px"}}>{movie.director}</td>
                <td style={{width: "140px"}}>{movie.year}</td>
                <td style={{width: "140px"}}>{movie.genre}</td>
                <td style={{width: "170px"}}>{cast}</td>
                <td style={{width: "140px"}}>{movie.rating}</td>
              </tr>
              </tbody>             
            )
          } else return null
        })}
      </table>
    </div>
  );
}

export default App;
