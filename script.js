document.addEventListener('DOMContentLoaded', function () {

    /* =============================
       FAQ ACCORDION
    ============================= */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-icon').textContent = '+';
                }
            });

            item.classList.toggle('active');
            item.querySelector('.faq-icon').textContent =
                item.classList.contains('active') ? '−' : '+';
        });
    });

    /* =============================
       SMOOTH SCROLL
    ============================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    /* =============================
       FORM → WHATSAPP
    ============================= */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = this.querySelector('[name="name"]').value;
            const phone = this.querySelector('[name="phone"]').value;
            const email = this.querySelector('[name="email"]').value;
            const services = this.querySelector('[name="services"]').value;

            const message =
                `Hi, I would like to book an appointment:%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Phone: ${encodeURIComponent(phone)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A` +
                `Services: ${encodeURIComponent(services)}`;

            window.open(`https://wa.me/919900379167?text=${message}`, '_blank');
            alert('Thank you! Redirecting to WhatsApp to confirm your appointment.');
            this.reset();
        });
    }

    /* =============================
       GALLERY SLIDER (DESKTOP)
    ============================= */
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryPrevBtn = document.querySelector('.gallery-slider .prev');
    const galleryNextBtn = document.querySelector('.gallery-slider .next');

    if (galleryTrack && galleryPrevBtn && galleryNextBtn) {
        let index = 0;
        const perView = 3;
        const total = Math.ceil(galleryTrack.children.length / perView);

        function updateGallery() {
            galleryTrack.style.transform = `translateX(-${index * 100}%)`;
        }

        galleryNextBtn.addEventListener('click', () => {
            index = (index + 1) % total;
            updateGallery();
        });

        galleryPrevBtn.addEventListener('click', () => {
            index = (index - 1 + total) % total;
            updateGallery();
        });
    }

    /* =============================
       REVIEWS SLIDER (DESKTOP ONLY)
    ============================= */
    if (window.innerWidth > 768) {

        const track = document.querySelector('.reviews-track');
        const reviewPrevBtn = document.querySelector('.review-nav.prev');
        const reviewNextBtn = document.querySelector('.review-nav.next');
        let cards = document.querySelectorAll('.review-card');

        if (track && cards.length && reviewPrevBtn && reviewNextBtn) {

            const gap = 24;       // must match CSS
            const perView = 3;
            let index = perView;
            let isAnimating = false;

            // Clone cards for infinite loop
            const firstClones = [...cards].slice(0, perView).map(c => c.cloneNode(true));
            const lastClones  = [...cards].slice(-perView).map(c => c.cloneNode(true));

            lastClones.forEach(c => track.insertBefore(c, cards[0]));
            firstClones.forEach(c => track.appendChild(c));

            cards = document.querySelectorAll('.review-card');

            function cardWidth() {
                return cards[0].getBoundingClientRect().width + gap;
            }

            function setPosition(animate = true) {
                track.style.transition = animate ? 'transform 0.4s ease' : 'none';
                track.style.transform = `translateX(-${index * cardWidth()}px)`;
            }

            setPosition(false);

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
    }

    /* =============================
       SCROLL ANIMATIONS
    ============================= */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .feature-card, .gallery-item')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

    /* =============================
       HEADER SHADOW ON SCROLL
    ============================= */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.style.boxShadow =
            window.scrollY > 0
                ? '0 2px 20px rgba(0,0,0,0.3)'
                : '0 2px 10px rgba(0,0,0,0.3)';
    });

});
