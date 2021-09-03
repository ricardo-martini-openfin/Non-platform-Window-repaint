console.log("connected")

let show = true

function hide() {
const timeDiv = document.querySelector(".img")


if (show) {
    timeDiv.style.visibility = "hidden"
} else {
    timeDiv.style.visibility = "visible"
}

show = !show
}

function newImg(){
    const urls = [100,101,102,200, 201, 202]

    let imgSrc = document.querySelector("#cat").setAttribute("src", `https://http.cat/${urls[Math.floor(Math.random() * urls.length)]}`)
}