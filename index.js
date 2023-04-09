const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionCards = document.querySelectorAll(".card")

// Function to render the sections on the page

function renderSection() {
    for (let i = 0; i < sectionCards.length; i++) {

        sectionCards[i].innerHTML +=
            `<div>
                <div class="avatar-container">
                    <img class="avatar-img" src="${posts[i].avatar}" alt="headshot image of ${posts[i].name}">
                    <div class="avatar-txt">
                    <h2 class="bolded-txt">${posts[i].name}</h2>
                    <p>${posts[i].location}</p>
                    </div>
                </div>
                <img class="post-img" src="${posts[i].post}">
                <div class="icon-container offset-txt">
                
                    <svg class="heart-icon" alt="heart icon" xmlns="http://www.w3.org/2000/svg" 
                    width="32" height="32" viewBox="0 0 24 24"><path fill="black" 
                    d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0
                    3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 
                    5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 
                    3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 
                    12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>

                    <svg class="comment-icon" alt="comment icon" xmlns="http://www.w3.org/2000/svg" 
                    width="32" height="32" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)">
                    <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" 
                    stroke-width="2" d="m3 20l1.3-3.9A9 8 0 1 1 7.7 19L3 20"/></g></svg>

                    <svg class="dm-icon" alt="dm icon" xmlns="http://www.w3.org/2000/svg" 
                    width="32" height="32" viewBox="0 0 24 24"><path fill="black" 
                    d="M20.33 3.67a1.45 1.45 0 0 0-1.47-.35L4.23 8.2A1.44 1.44 0 0 0 4 10.85l6.07 
                    3l3 6.09a1.44 1.44 0 0 0 1.29.79h.1a1.43 1.43 0 0 0 1.26-1l4.95-14.59a1.41 1.41 0 
                    0 0-.34-1.47ZM4.85 9.58l12.77-4.26l-7.09 7.09Zm9.58 9.57l-2.84-5.68l7.09-7.09Z"/></svg>
                </div>
                <div class="offset-txt"><p class="bolded-txt"><span id="like-el">${posts[i].likes}</span> likes</p></div>
                <div class="offset-txt"><p><span class="bolded-txt">${posts[i].username}</span> ${posts[i].comment}</p></div>
            </div>`
    }
}

renderSection()

