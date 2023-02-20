import { data } from "./data.js";

const imageContainer = document.getElementById("images")


function renderGrid(){
 return data.map(image => {
        imageContainer.innerHTML += `
        <div class="card">
            <div class="nature"> 
                <img src=${image.image} alt="cabin" >
                <div class="costPerNight"> $${image.price}/night </div>
                <h4> ${image.title}</h4>
                <p>Book unique camping experiences on over 300,000 campsites</p>
                <div class="readMore">Read More </div>
            </div>
        </div>
        `
    })
}

renderGrid()