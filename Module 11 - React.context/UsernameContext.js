import React from 'react'
const UsernameContext = React.createContext({})
export default UsernameContext

// We are doing a few things here: Creating the context ( I put an empty object as an argument, which will be filled later ), then creating a way to ‘provide’ the context to components as ThingsProvider. We will be accessing the context with the useContext Hook later.