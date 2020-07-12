import React, { useEffect, useState } from 'react'
import md5 from 'md5'
import { Link } from 'react-router-dom'

export const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const timestamp = Date.now().toString()
  const publicKey = '785f108ac49ee15d64e2d1c53999f652'
  const hash = md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + publicKey)

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=785f108ac49ee15d64e2d1c53999f652&hash=${hash}`)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.data.results)
      })
  }, [])

  //console.log(process.env.REACT_APP_PRIVATE_KEY)
  //console.log(timestamp)
  //console.log(md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + '785f108ac49ee15d64e2d1c53999f652'))


  return (
    <section>

      {characters.map(character => (
        <p key={character.id}>{character.name}</p>
      ))}
    </section>
  )
}