import React from "react"

const FooterStyle = {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'right'
}

const pStyle = {
    marginRight: '1em'
}

function Footer() {
    return (
        <footer style={FooterStyle}>
            <p style={pStyle}>© 2020 Eternal Possibilities</p>
        </footer>
    )
}

export default Footer