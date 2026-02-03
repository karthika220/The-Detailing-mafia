// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-icon').textContent = '+';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const icon = item.querySelector('.faq-icon');
            icon.textContent = item.classList.contains('active') ? '−' : '+';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[name="name"]').value;
            const phone = this.querySelector('input[name="phone"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const services = this.querySelector('input[name="services"]').value;
            
            // Create WhatsApp message
            const message = `Hi, I would like to book an appointment:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AServices: ${encodeURIComponent(services)}`;
            const whatsappURL = `https://wa.me/919900379167?text=${message}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show alert
            alert('Thank you! Redirecting to WhatsApp to confirm your appointment.');
            
            // Reset form
            this.reset();
        });
    }

    // Gallery slider functionality (basic)
    // Gallery slider functionality (3 images per slide)
const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.gallery-slider .prev');
const nextBtn = document.querySelector('.gallery-slider .next');

if (galleryTrack && galleryItems.length && prevBtn && nextBtn) {
    const itemsPerView = 3;
    const totalSlides = Math.ceil(galleryItems.length / itemsPerView);
    let currentIndex = 0;

    function updateSlider() {
        galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
    });
}


// =============================
// Reviews Slider (3 per view | Infinite loop)
// =============================

// =============================
// Reviews Slider (3 per view | Infinite | FINAL)
// =============================

const track = document.querySelector('.reviews-track');
const reviewPrevBtn = document.querySelector('.review-nav.prev');
const reviewNextBtn = document.querySelector('.review-nav.next');
let cards = document.querySelectorAll('.review-card');

if (track && cards.length && reviewPrevBtn && reviewNextBtn) {
    const gap = 24;      // MUST match CSS
    const perView = 3;
    let index = perView;
    let isAnimating = false;

    // Clone last & first 3 cards
    const firstClones = [...cards].slice(0, perView).map(c => c.cloneNode(true));
    const lastClones  = [...cards].slice(-perView).map(c => c.cloneNode(true));

    lastClones.forEach(clone => track.insertBefore(clone, cards[0]));
    firstClones.forEach(clone => track.appendChild(clone));

    cards = document.querySelectorAll('.review-card');

    function cardWidth() {
        return cards[0].getBoundingClientRect().width + gap;
    }

    function setPosition(animate = true) {
        track.style.transition = animate ? 'transform 0.4s ease' : 'none';
        track.getBoundingClientRect(); // force reflow
        track.style.transform = `translateX(-${index * cardWidth()}px)`;
    }

    
    setPosition(false);

/* =============================
   MOBILE SWIPE SUPPORT
============================= */

const viewport = document.querySelector('.reviews-viewport'); 
// or .reviews-wrapper — MUST match HTML

let startX = 0;
let startY = 0;
let isSwiping = false;

viewport.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = false;
}, { passive: true });

viewport.addEventListener('touchmove', e => {
    const dx = Math.abs(e.touches[0].clientX - startX);
    const dy = Math.abs(e.touches[0].clientY - startY);

    if (dx > dy && dx > 10) {
        isSwiping = true;
    }
}, { passive: true });

viewport.addEventListener('touchend', e => {
    if (!isSwiping || isAnimating) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        isAnimating = true;
        index += diff > 0 ? perView : -perView;
        setPosition(true);
    }
});



    reviewNextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        index += perView;
        setPosition(true);
    });

    reviewPrevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;
        index -= perView;
        setPosition(true);
    });
    

    track.addEventListener('transitionend', () => {
        isAnimating = false;

        if (index >= cards.length - perView) {
            index = perView;
            setPosition(false);
        }

        if (index < perView) {
            index = cards.length - perView * 2;
            setPosition(false);
        }
    });
}








    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .feature-card, .review-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 0) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // Page indicator scroll update (optional enhancement)
    const sections = document.querySelectorAll('section');
    const pageIndicator = document.querySelector('.page-indicator span');
    
    window.addEventListener('scroll', () => {
        let current = 1;
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop) {
                current = index + 1;
            }
        });
        
        if (pageIndicator) {
            const total = sections.length;
            pageIndicator.textContent = `${Math.min(current, total)} / ${total}`;
        }
    });
});
