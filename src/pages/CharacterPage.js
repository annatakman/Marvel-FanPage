import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import md5 from 'md5'

export const CharacterPage = () => {
  const { characterId } = useParams()
  const [character, setCharacter] = useState([])
  const timestamp = Date.now().toString()
  const publicKey = '785f108ac49ee15d64e2d1c53999f652'
  const hash = md5(timestamp + process.env.REACT_APP_PRIVATE_KEY + publicKey)

  useEffect(() => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then(res => res.json())
      .then(json => {
        setCharacter(json.data.results)
      })
  }, [characterId])

  return (
    <section>
      {character.map(character=> (
         <h3>{character.name}</h3>
      ))}
    </section>
  )
}