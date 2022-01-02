import React, {Component} from "react"
import UsernameContext from "./UsernameContext"

class Header extends Component {
    // const username = React.useContext(UsernameContext)
    static contextType = UsernameContext
    
    render() {
        const username = this.context
        
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )    
    }
}

export default Header
