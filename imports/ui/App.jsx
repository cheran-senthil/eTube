import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const App = props => {
  return (
    <div>
      <form action="/search">
        <input type="text" placeholder="Search.." name="query" />
        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
      {props.content}
    </div>
  )
}

export default App
