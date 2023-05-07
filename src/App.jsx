import react, { useEffect, useState } from 'react'
import Pokemon from './components/pokemon'
import "./style.css"

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
         .then((r) => {
          if (r.ok){
            return r.json()
          }
         })
         .then((r) => setPokemons(r.results))
  })


  return (
    <div className='app'>
      <header>
        <h2>pokedex - filipe f. guilardi</h2>
      </header>
      <div className="pokemons-area">{pokemons.map((pkm) => <Pokemon props={pkm.url} />)}</div>
    </div>
  )
}

export default App

