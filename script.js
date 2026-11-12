document.addEventListener('DOMContentLoaded', () => {
    // Create glowing dots
    const createGlowDots = () => {
        const container = document.body;
        const numberOfDots = window.innerWidth < 768 ? 4 : 8; // moins de points sur mobile

        // Updated color palette with vibrant purples and cyans
        const colors = [
            '#00ffff', // Cyan
            '#8a2be2', // Blue Violet
            '#ff00ff', // Magenta
            '#4B0082', // Indigo
            '#7B68EE', // Medium Slate Blue
            '#00CED1', // Dark Turquoise
            '#9400D3', // Dark Violet
            '#00BFFF'  // Deep Sky Blue
        ];

        for (let i = 0; i < numberOfDots; i++) {
            const dot = document.createElement('div');
            dot.className = 'glow-dot';

            // Random position
            dot.style.left = `${Math.random() * 100}vw`;
            dot.style.top = `${Math.random() * 100}vh`;

            // Larger size range for more impact
            const size = Math.random() * 200 + 100; // between 100px and 300px
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;

            // Random color from our new palette
            dot.style.background = colors[Math.floor(Math.random() * colors.length)];

            container.appendChild(dot);
        }
    };

    createGlowDots();

    // Hide loader after page is fully loaded
    window.addEventListener('load', () => {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        setTimeout(() => {
            loaderWrapper.classList.add('fade-out');
        }, 2500); // Show loader for 2.5 seconds to allow animations to complete
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100; // Adjust this value based on your navbar height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

function setActiveButton(clickedBtn) {
  const allBtns = document.querySelectorAll('.btn');
  allBtns.forEach(btn => btn.classList.remove('active-btn'));
  clickedBtn.classList.add('active-btn');
}

const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Ripple effect
    const x = e.clientX - btn.getBoundingClientRect().left;
    const y = e.clientY - btn.getBoundingClientRect().top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    const oldRipple = btn.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Show correct section + set active button (data-section => independant de la langue)
    if (btn.dataset.section) {
      showSection(btn.dataset.section);
      setActiveButton(btn);
    }
  });
});

// Set default view on page load
window.onload = function() {
  showSection('projects');

  const defaultBtn = Array.from(btns).find(btn =>
    btn.dataset.section === 'projects'
  );
  if (defaultBtn) setActiveButton(defaultBtn);
};

// Typing animation (traduisible)
const getTexts = () => (window.I18N ? I18N.typing() : ['Computer Science Student', 'C Programmer', 'Web Developer', 'SQL & Databases']);

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

const textElement = document.querySelector('.text');
const typingSpeed = 100;  // Speed of typing
const deletingSpeed = 50; // Speed of deleting
const pauseTime = 1000;   // Time to pause at full text

function typeText() {
    const texts = getTexts();
    const currentText = texts[currentTextIndex % texts.length];
    
    if (!isDeleting) {
        // Typing
        textElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, pauseTime); // Pause at full text
            return;
        }
    } else {
        // Deleting
        textElement.textContent = currentText.substring(0, currentCharIndex);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeText, speed);
}
document.getElementById('cv').addEventListener('click', function() {
    // Create link to underConstruction image
    const link = document.createElement('a');
    link.href = 'Asma_Elmokretar_CV_IT_2026.pdf';
    link.download = 'Asma_Elmokretar_CV_IT_2026.pdf';
    
    const button = this;
    const originalContent = button.innerHTML;
    button.innerHTML = '<img src="document.png" alt="document-icon"> ' + I18N.t('about.downloading');
    
    // Trigger download
    link.click();
    
    // Reset button after short delay
    setTimeout(() => {
        button.innerHTML = originalContent;
    }, 1000);
});

// Update active nav item based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('#home, #about, #portfolio, #contact');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust the offset to account for the fixed header
        if (window.scrollY >= (sectionTop - 150)) { // Adjusted threshold
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Also handle initial page load
window.addEventListener('load', () => {
    // Set initial active state
    const currentHash = window.location.hash || '#home';
    document.querySelector(`.navbar a[href="${currentHash}"]`)?.classList.add('active');
});

// Handle smooth scrolling for nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Update active state
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2, // 20% of element must be visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    function setupAnimations() {
        // About section
        const aboutElements = document.querySelectorAll('#about > *');
        aboutElements.forEach((el, index) => {
            el.classList.add('scroll-hidden', index % 2 === 0 ? 'from-left' : 'from-right');
            el.style.setProperty('--stagger-index', index);
            observer.observe(el);
        });

        // Portfolio section
        const portfolioItems = document.querySelectorAll('#portfolio .project-card');
        portfolioItems.forEach((el, index) => {
            el.classList.add('scroll-hidden', 'from-bottom');
            el.style.setProperty('--stagger-index', index);
            observer.observe(el);
        });

        // Contact section
        const contactElements = document.querySelectorAll('#contact > *');
        contactElements.forEach((el, index) => {
            el.classList.add('scroll-hidden', 'from-bottom');
            el.style.setProperty('--stagger-index', index);
            observer.observe(el);
        });

        // Add animation to section headings
        const sectionHeadings = document.querySelectorAll('section > h2');
        sectionHeadings.forEach(heading => {
            heading.classList.add('scroll-hidden', 'from-bottom');
            observer.observe(heading);
        });
    }

    // Initialize animations
    setupAnimations();

    // Optional: Refresh animations on dynamic content changes
    function refreshAnimations() {
        setupAnimations();
    }

    // Optional: Add this if you have dynamic content
    // someEventThatAddsContent.addEventListener('contentChanged', refreshAnimations);
});

// Menu hamburger (mobile / tablette)
(function () {
    const header = document.querySelector('.header');
    const toggle = document.getElementById('menu-toggle');
    if (!header || !toggle) return;
    const setOpen = (open) => {
        header.classList.toggle('menu-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.querySelector('i').className = open ? 'fa fa-times' : 'fa fa-bars';
    };
    toggle.addEventListener('click', () => setOpen(!header.classList.contains('menu-open')));
    document.querySelectorAll('.navbar a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('resize', () => { if (window.innerWidth > 1024) setOpen(false); });
})();