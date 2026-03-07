import { posts } from "./data.js"


const recentPostContainer = document.getElementById('recent-post-container')

console.log(recentPostContainer)




const generateRecentPostsCards = () => {
    
    const unfeaturedPosts = posts.slice(0, -1)
    console.log(unfeaturedPosts)
    
    const lastThreePost = unfeaturedPosts.slice(-3).sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate))
    console.log(lastThreePost)

    const recentPostHtml = lastThreePost.map(post => {
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