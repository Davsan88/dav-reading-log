# 📚 Dav’s Reading Log – Personal Book Insights Website

Hello there! 👋
This is a clean, responsive reading journal where I share key insights from books that have shaped how I think.

👉 **Live Demo** *(add your Netlify link here later)*

---

## 🚀 Project Overview

This project started as a **Scrimba solo project focused on responsive design**, but I took it significantly further.

Instead of stopping at layout and styling, I expanded it into a **dynamic, multi-page experience powered by JavaScript**, including:

* Dynamic post rendering
* URL-based navigation
* Reusable components
* Structured content generation

The goal was to move beyond “just a static site” and build something closer to a **real-world content-driven application**.

---

## ✨ What It Does

* ✅ Displays a featured post dynamically
* ✅ Renders a list of recent book posts
* ✅ Each post has its own dedicated page
* ✅ Content is generated dynamically from JavaScript data
* ✅ Clean navigation between pages using query parameters
* ✅ Fully responsive layout across mobile, tablet, and desktop
* ✅ Subtle UI interactions (hover, focus, elevation)

---

## 🧠 Core Concept

The app is driven by a **data-first approach**.

Each post is defined as structured data:

```js
{
  id,
  title,
  author,
  entryDate,
  excerpt,
  content,
  coverImage
}
```

From that data:

* The homepage renders featured + recent posts
* Individual pages are generated dynamically using `id` from the URL

👉 This mimics how real-world apps (and frameworks like React) separate:
**data → rendering → UI**

---

## 🛠️ Technologies Used

* **HTML5** – Semantic structure
* **CSS3** – Responsive layout (Flexbox + Grid)
* **JavaScript (ES6)** – Dynamic rendering and routing logic

---

## 🎨 Design Approach

* Mobile-first layout using `min()` and flexible containers
* Responsive typography using `clamp()`
* Clean visual hierarchy and spacing system
* Subtle shadows and elevation for depth
* Minimal color palette with a soft accent (purple)
* Focus on readability and content-first design

---

## 📚 Features Covered

* Dynamic rendering with template functions
* URL query parameter handling (`post.html?id=`)
* Reusable component patterns (cards, featured section)
* Conditional rendering of content
* Responsive layout with CSS Grid + Flexbox
* Accessibility improvements with `:focus-visible`
* UI interaction states (hover, active, focus)
* Image handling and layout consistency
* CSS architecture separation (base / layout / components / typography)

---

## 🧪 How to Use

1. Open the homepage
2. Browse recent posts or the featured book
3. Click on any post
4. You’ll be taken to a dynamically generated post page
5. Read insights and navigate back

---

## 🎯 What I Focused On

This project was less about complexity and more about **doing simple things properly**:

* Clean layout structure
* Consistent spacing and typography
* Thoughtful responsiveness
* Reusable rendering logic
* Maintainable CSS organization

---

## 🏗️ Possible Next Steps

* 💾 Persist posts using a CMS or localStorage
* 🔍 Add search and filtering
* 🏷️ Add tags or categories
* 📝 Markdown support for post content
* 🌙 Dark mode
* ⚛ Rebuild with React / Next.js
* 🌐 Connect to a backend (Netlify Functions / Firebase)

---

## 💡 Skills Practiced

* Responsive design (mobile-first thinking)
* CSS architecture and organization
* JavaScript-driven rendering
* URL-based navigation (basic routing)
* Component thinking without frameworks
* UI/UX polish and interaction design

---

## ✅ Why I’m Proud

This project represents a shift from **“following tutorials” → “building with intention.”**

What started as a layout exercise became a **structured, dynamic application** with:

* Better code organization
* Real navigation logic
* Reusable UI patterns
* More thoughtful design decisions

It reflects how I now approach projects:
not just making things work, but making them **clean, scalable, and user-friendly**.

---

## 🌐 Live Demo

👉 *(Add your Netlify link here)*

---

## 📫 Contact

Got feedback or questions?
📧 [david.sanchez.martinez@outlook.com](mailto:david.sanchez.martinez@outlook.com)
