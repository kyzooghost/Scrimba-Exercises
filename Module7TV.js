/*
    TV Guide

    Write an async function called findShow(query)
        performs a fetch call to:
        https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons
        and returns the resulting show object

    Build a layout to display the show
        - Title
        - Summary
        - Seasons listed as individual divs
*/

async function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    let data = await response.json()
    return data
}

function displayHTML (show) {
    return `
    <div class="my-show">
        <div class="my-show-title">
            ${show.name}
        </div>

        <div class="my-show-summary">
            ${show.summary}
        </div>

        ${show._embedded.seasons.map(season => {
            return `<div class="my-show-season">Season ${season.number}</div>`
        }).join('')}
    </div>
    `
}

function renderHTML (show) {
    document.body.innerHTML = displayHTML(show)

    const seasonBtn = document.getElementsByClassName("my-show-season")
    const myShow = document.getElementsByClassName("my-show")[0]

    for (let i = 0; i < seasonBtn.length; i++) {
        seasonBtn[i].addEventListener("click", function(e) {
            e.preventDefault()
            console.log("b")

            document.body.insertAdjacentHTML("afterend", `<div id="season-info">
                Episode #: ${show._embedded.seasons[i].episodeOrder}
                <br>
                Premier Data: ${show._embedded.seasons[i].premiereDate}
                <br>
                End Data: ${show._embedded.seasons[i].endDate}
                <br>
                <img src=${show._embedded.seasons[i].image.medium}>
            </div>`)
        })
    }


}

findShow("office").then(renderHTML)
