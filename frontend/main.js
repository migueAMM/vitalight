document.addEventListener('DOMContentLoaded', () => {
    // Current year for footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // keep it for testing
            navbar.classList.remove('scrolled');
        }
    });

    // User provided URLs
    const waBaseUrl = "https://wa.me/qr/EYXBN3Z5FMBDO1";
    const igUrl = "https://www.instagram.com/vita_lightt?stkn=NGJjOGhhdjFiNTU4";

    // Update Social Links
    document.getElementById('ig-link').href = igUrl;
    document.getElementById('ig-footer').href = igUrl;
    
    // We append the text param but using a simple WA link approach
    const waNavMessage = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre los yogurts y parfaits.");
    
    // Some wa.me/qr links don't accept ?text directly, but we will assign it. 
    // If it fails on the user end they will just see the contact, which is fine.
    document.getElementById('wa-link-nav').href = waBaseUrl;
    document.getElementById('floating-wa').href = waBaseUrl;

    // Product Order Buttons setup
    const orderBtns = document.querySelectorAll('.wa-order');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Since it's a QR shortlink, appending ?text= might not be supported natively by the WA redirector, 
            // but we'll try to just open the link directly so they reach the chat.
            window.open(waBaseUrl, '_blank');
        });
    });

    // Simple Intersection Observer for scroll animations (if added to more elements)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.1}s`;
        observer.observe(card);
    });
});
