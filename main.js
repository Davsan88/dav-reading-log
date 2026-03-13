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
const viewMoreBtn = document.getElementById('view-more-btn')


// ====================
// Helper Functions
// ====================

const getFeaturedPost = () => posts.find(post => post.featured)

const getCurrentPostId = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get("id")
}

const getSortedPosts = (limit = null) => {
    const postId = getCurrentPostId()

    let sortedPosts = posts
            .filter(post => !post.featured)
            .filter(post => post.id !== postId)
            .sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate))

    return limit ? sortedPosts.slice(0, limit) : sortedPosts
}

const getFullPost = () => {
    const postId = getCurrentPostId()
    return posts.find(post => post.id === postId)   
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
                    <img src="${post.coverImage}" alt="${post.title} cover" />
                    <span>${post.entryDate}</span>
                    <h2>${post.title}</h2>
                    <span>by ${post.author}</span>
                    <p>${post.excerpt}</p>
                </a>
            </article>
        `
    }).join(' ')
}

const generateFullHtml = post => {
    return `
        <article>
            <span>${post.entryDate}</span>
            <h1>${post.title}</h1>
            <span>by ${post.author}</span>
            <p>${post.excerpt}</p>
            <img src="${post.coverImage}" alt="${post.title} cover" />
            <p>${post.content}</p>
        </article>
    `
}


// ====================
// Render Functions
// ====================

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

const renderPostPage = () => {
    const fullPost = getFullPost()

    if(!fullPost) {
        fullPostContainer.innerHTML = "<p>Post not found</p>"
        return
    }

    fullPostContainer.innerHTML = generateFullHtml(fullPost)
}


// ====================
// Handlers
// ====================

const handleViewMoreClick = () => {  
    renderRecentPosts(getSortedPosts())
    viewMoreBtn.hidden = true
}


// ====================
// Page Initialization
// ====================

if (featuredPostContainer) renderFeaturedPost()
if (recentPostContainers.length) renderRecentPosts(getSortedPosts(3))
if (fullPostContainer) renderPostPage()
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', handleViewMoreClick)
}
