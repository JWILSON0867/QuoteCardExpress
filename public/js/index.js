async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
        imgDiv.style.backgroundSize = "cover";
        imgDiv.style.backgroundPosition = "center";
        imgDiv.style.backgroundRepeat = "no-repeat";

        console.log("Background image set to:", receivedPhotoUrl);
    } catch (error) {
        console.error("Error fetching image from backend:", error);
    }
}

/* console.log("JS file loaded");

async function getRandomImage() {
    console.log("Fetching image...");

    const client_id = "PuJcecupmlXPeXLlOyG-gYngxBrz9Th0yS7aBZerzDk";
    const endpoint = `https://api.unsplash.com/photos/random?client_id=${client_id}`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Returned data:", data); // See what's coming back

        const imageUrl = data?.urls?.regular;

        if (!imageUrl) {
            console.warn("Image URL not found in API response");
            return;
        }

        const imgDiv = document.querySelector(".background-img");

        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        imgDiv.style.backgroundSize = "cover";
        imgDiv.style.backgroundPosition = "center";
        imgDiv.style.backgroundRepeat = "no-repeat";

        console.log("Background image set to:", imageUrl);
    } catch (error) {
        console.error("Error fetching image:", error);
    }
}



getRandomImage();

*/

/*
"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },

    {
        quote: "Doh!",
        author: "Homer Simpson",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quotes.length) {
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        } else {
            quoteIndex = 0;
        }
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);
*/