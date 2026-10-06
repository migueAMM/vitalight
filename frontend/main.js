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
    const waPhone = "573175798113";
    const waBaseUrl = `https://wa.me/${waPhone}`;
    const igUrl = "https://www.instagram.com/vita_lightt/"; // Se removió el parámetro ?stkn= para evitar el mensaje de invitación

    // Update Social Links
    document.getElementById('ig-link').href = igUrl;
    document.getElementById('ig-footer').href = igUrl;
    
    // Mensaje por defecto para los botones generales de WhatsApp
    const waNavMessage = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre los yogurts y parfaits.");
    
    // Asignar los enlaces con mensaje para el navbar y el botón flotante
    document.getElementById('wa-link-nav').href = `${waBaseUrl}?text=${waNavMessage}`;
    document.getElementById('floating-wa').href = `${waBaseUrl}?text=${waNavMessage}`;

    // Product Order Buttons setup
    const orderBtns = document.querySelectorAll('.wa-order');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const product = btn.getAttribute('data-product');
            let message = "¡Hola! Me gustaría hacer un pedido.";
            if (product) {
                message = `¡Hola! Me gustaría hacer un pedido de ${product}. ¿Me podrías dar más información?`;
            }
            const finalUrl = `${waBaseUrl}?text=${encodeURIComponent(message)}`;
            window.open(finalUrl, '_blank');
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
