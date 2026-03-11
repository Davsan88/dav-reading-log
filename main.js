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

const getFeaturedPost = () => posts.find(post => post.featured)

const getRecentPosts = posts => {
    return posts.filter(post => !post.featured)
                .sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate))
                .slice(0, 3)
}

const generateFeaturedPost = post => {
    return `
        <article>
            <a 
                href="post.html?id=${post.id}" 
                class="featured-post-card"
                style="background-image: url('${post.coverImage}')"
            >
                <span>${post.entryDate}</span>
                <h2>${post.title}</h2>
                <span>by ${post.author}</span>
                <p>${post.excerpt}</p>
            </a>

        </article>
    `
}

const generateRecentPostsHtml = posts => {
    return posts.map(post => {
        return `
            <article>
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
}


// ====================
// Render Functions
// ====================

const renderPostPage = () => {
    const params = new URLSearchParams(window.location.search)
    const postId = params.get("id")
}

const renderFeaturedPost = () => {
    const featuredPost = getFeaturedPost()

    if (!featuredPost) {
        featuredPostContainer.innerHTML = "<p>Post not found</p>"
        return
    }

    featuredPostContainer.innerHTML = generateFeaturedPost(featuredPost)
}

const renderRecentPosts = posts => {
    const html = generateRecentPostsHtml(posts)

    recentPostContainers.forEach(container => {
        container.innerHTML = html
    })
}



// ====================
// Page Initialization
// ====================

if (featuredPostContainer) renderFeaturedPost()
if (recentPostContainers.length) renderRecentPosts(getRecentPosts(posts))
if (fullPostContainer) renderPostPage()