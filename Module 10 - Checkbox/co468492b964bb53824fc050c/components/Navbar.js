import React from "react"

const liStyle = {
    float: 'left'
};

const aStyle = {
    display: 'block',
    padding: '14px 16px',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
};

const ulStyle = {
  listStyleType: 'none',
  margin: '0',
  padding: '0',
  overflow: 'hidden',
  background: '#333'
};

function Navbar() {
    return (
        <div>
            <ul style = {ulStyle}>
              <li style = {liStyle}><a style = {aStyle} href="default.asp">Home</a></li>
              <li style = {liStyle}><a style = {aStyle} href="news.asp">News</a></li>
              <li style = {liStyle}><a style = {aStyle} href="contact.asp">Contact</a></li>
              <li style = {liStyle}><a style = {aStyle} href="about.asp">About</a></li>
            </ul>
        </div>
    )
}

export default Navbar