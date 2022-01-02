import React from "react"
import Checkbox from "./Checkbox"

function MainContent() {
    return (
        <div>
            <nav>
                <h1>Hello a third time!</h1>
                <Checkbox label='Option 1' />
                <Checkbox label='Option 2' />
                <Checkbox label='Option 3' />
            </nav>
            <main>
                <p>This is where most of my content will go...</p>
            </main>
        </div>
    )
}

export default MainContent