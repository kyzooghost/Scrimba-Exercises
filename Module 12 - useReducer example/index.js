import React, { useState, useReducer } from 'react'
import ReactDOM from 'react-dom';
import friendlyWords from 'friendly-words'

let backgrounds = [
  'Noble',
  'Urchin',
  'Folk Hero',
  'Acolyte',
  'Criminal',
  'Hermit',
  'Guild Artisan',
  'Sage',
]

function randomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

function randomName() {
  let array = friendlyWords.predicates
  let string = array[Math.floor(Math.random() * array.length)]
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// 1. Replace the useStates with a useReducer
// 2. Move our useReducer into a custom hook

/*

const initialState = {
  darkMode: false,
  name: '',
  background: '',
  error: null
}

const counterReducer = (state, action) => {return action}

*/

function useSwitch() {
  const [state, dispatch] = useReducer (
    (state, action) => {return action}
    , {
    darkMode: false,
    name: '',
    background: '',
    error: null
    }
  )
  
  return [state, dispatch]
}

export default function App() {
  const [state, dispatch] = useSwitch()
  // const [state, dispatch] = useReducer(counterReducer, initialState)
  let { darkMode, name, background, error } = state

  function handleBackgroundSelect(event) {
    let value = event.target.value
    dispatch({...state, background: value})
    if (!backgrounds.includes(value)) {
      dispatch({...state, error: 'This background does NOT exist.'})
    } else {
      dispatch({...state, error: null})
    }
  }

  return (
    <>
      <div className={`App ${darkMode ? 'darkmode' : ''}`}>
        <button
          onClick={() => {
            dispatch({...state, darkMode: !darkMode})
          }}
        >
          Dark Mode {darkMode ? 'ON' : 'OFF'}
        </button>{' '}
        <br />
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(event) => {
            dispatch({...state, name: event.target.value})
            if (event.target.value.length > 15) {
              dispatch({...state, error: 'Name is WAY too long, bucko.'})
            }
          }}
        />
        <select value={background} onChange={handleBackgroundSelect}>
          {backgrounds.map((b) => {
            return <option key={`bg-${b}`}>{b}</option>
          })}
        </select>
        {error && (
          <div className="error">
            {error}
            <button
              onClick={() => {
                dispatch({...state, error: null})
              }}
            >
              Dismiss
            </button>
          </div>
        )}
        <div className="sheet">
          <h3>Name: {name}</h3>
          <h3>Background: {background}</h3>
        </div>
        <button
          onClick={() => {
            dispatch({...state, name: randomName(), background: randomBackground()})
          }}
        >
          Do it all for me instead
        </button>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));