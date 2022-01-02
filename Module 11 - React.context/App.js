import React from "react"
import UsernameContext from "./UsernameContext"
import Header from "./Header"

function App() {    
    const username = React.useContext(UsernameContext)
    
    return (
        <div>
            <Header />
            <main>
                <p className="main">No new notifications, {username}! 🎉</p>
            </main>
        </div>
    )
}

export default App