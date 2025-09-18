// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const hamburger = document.getElementById("hamburger")
  const closeIcon = document.getElementById("closeIcon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  const mobileRegisterBtn = document.querySelector(".mobile-register")

  let isMenuOpen = false

  function toggleMenu() {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.add("active")
      hamburger.style.display = "none"
      closeIcon.style.display = "block"
    } else {
      mobileMenu.classList.remove("active")
      hamburger.style.display = "flex"
      closeIcon.style.display = "none"
    }
  }

  function closeMenu() {
    isMenuOpen = false
    mobileMenu.classList.remove("active")
    hamburger.style.display = "flex"
    closeIcon.style.display = "none"
  }

  // Toggle menu when button is clicked
  mobileMenuBtn.addEventListener("click", toggleMenu)

  // Close menu when nav links are clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu when register button is clicked
  if (mobileRegisterBtn) {
    mobileRegisterBtn.addEventListener("click", closeMenu)
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to header
  let lastScrollTop = 0
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add transition to header
  header.style.transition = "transform 0.3s ease-in-out"
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease-in-out"

  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})

// Add hover effects to cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".step-card, .testimonial-card, .vision-card, .mission-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})
