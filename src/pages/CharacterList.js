import React, { useEffect, useState } from 'react'
import md5 from 'md5'
import { Link } from 'react-router-dom'

export const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const timestamp = Date.now().toString()
  const publicKey = '785f108ac49ee15d64e2d1c53999f652'
  const hash = md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + publicKey)

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.data.results)
      })
  }, [])

  //console.log(process.env.REACT_APP_PRIVATE_KEY)
  //console.log(timestamp)
  //console.log(md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + '785f108ac49ee15d64e2d1c53999f652'))

  const filteredCharacters = characters.filter(
    character => character.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
  )

  return (
    <section>
      {filteredCharacters.map(character => (
         <Link to={`/characters/${character.id}`}>
        <article key={character.id}>
          <img src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
            alt={`Picture of ${character.name}`} />
          <h3>{character.name}</h3>
        </article>
           </Link>
      ))}
    </section>
  )
}