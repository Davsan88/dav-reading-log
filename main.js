import { posts } from "./data.js"

const featuredPostContainer = document.getElementById('featured-post-container')
const recentPostContainer = document.getElementById('recent-post-container')


const generateFeaturePostCard = () => {

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

generateFeaturePostCard()


const generateRecentPostsCards = () => {
    const recentPosts = posts
        .filter(post => !post.featured)
        .sort((a, b) => new Date(b.entryDate) - new Date(a.entryDate))
        .slice(0, 3)

    const recentPostHtml = recentPosts.map(post => {
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

    recentPostContainer.innerHTML = recentPostHtml
}

generateRecentPostsCards()