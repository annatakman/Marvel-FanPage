import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CharacterList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(json => {
        setCharacters(json)
      })
  }, [])

  return(
  <div>Marvel</div>
  )
}