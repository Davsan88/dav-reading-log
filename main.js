// ====================
// Imports
// ====================

import { posts } from "./data.js"


// ====================
// DOM References
// ====================

const featuredPostContainer = document.getElementById('featured-post-container')
const recentPostContainers = document.querySelectorAll('.recent-post-container')
const fullPostContainer = document.getElementById('full-post-container')


// ====================
// Helper Functions
// ====================

const getRecentPosts = posts => {
    return posts.filter(post => !post.featured)
                .sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate))
                .slice(0, 3)
}







// ====================
// Render Functions
// ====================

const renderPostPage = () => {
    const params = new URLSearchParams(window.location.search)
    const postId = params.get("id")
}


const renderFeaturedPost = () => {
    const featuredPost = posts.find(post => post.featured)

    if (!featuredPost) {
        featuredPostContainer.innerHTML = "Post not found"
        return
    }

    featuredPostContainer.innerHTML = `
        <article>
            <a 
                href="post.html?id=${featuredPost.id}" 
                class="featured-post-card"
                style="background-image: url('${featuredPost.coverImage}')"
            >
                <span>${featuredPost.entryDate}</span>
                <h2>${featuredPost.title}</h2>
                <span>by ${featuredPost.author}</span>
                <p>${featuredPost.excerpt}</p>
            </a>

        </article>
    `
}


const renderRecentPosts = (posts) => {

    const recentPostHtml = posts.map(post => {
        return `<article>
                    <a href="post.html?id=${post.id}">
                        <img src="${post.coverImage}" alt="" />
                        <span>${post.entryDate}</span>
                        <h2>${post.title}</h2>
                        <span>by ${post.author}</span>
                        <p>${post.excerpt}</p>
                    </a>
                </article>
                `
    }).join(' ')

    recentPostContainers.forEach(container => {
        container.innerHTML = recentPostHtml
    })
}



// ====================
// Page Initialization
// ====================

if (featuredPostContainer) renderFeaturedPost()
if (recentPostContainers.length) renderRecentPosts(getRecentPosts(posts))
if (fullPostContainer) renderPostPage()