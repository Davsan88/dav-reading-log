import { posts } from "./data.js"


const recentPostContainer = document.getElementById('recent-post-container')

console.log(recentPostContainer)




const generateRecentPostsCards = () => {
    const recentPosts = posts
        .filter(post => !post.featured)
        .sort((a,b) => new Date(b.entryDate) - new Date(a.entryDate))
        .slice(0, 3)
    

    const recentPostHtml = recentPosts.map(post => {
        return `<article>
                    <a href="">
                        <img src="${post.coverImage}" alt="" />
                       <span>${post.entryDate}</span>
                       <h2>${post.title}</h2>
                       <span>by ${post.author}</span>
                       <p>${post.excerpt}</p>
                    </a>
                </article>
                `
        
    }).join(' ')

    recentPostContainer.innerHTML = recentPostHtml

}

generateRecentPostsCards()