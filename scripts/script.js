// FUNCIÓN PARA MOSTRAR TLF
document.addEventListener('DOMContentLoaded', () => {
    const icon1 = document.getElementById('icon-1');
    const phoneNumber = document.getElementById('phone-number');
    let isPhoneVisible = false;

    icon1.addEventListener('click', () => {
        if (isPhoneVisible) {
            // Oculta el rectángulo
            phoneNumber.style.display = 'none';
        } else {
            // Muestra el rectángulo
            phoneNumber.style.display = 'block'; // Muestra el número de teléfono
        }
        isPhoneVisible = !isPhoneVisible;
    });
});

// FUNCION PARA MOSTRAR EMAIL
document.getElementById('icon-2').onclick = function() {
    const emailNumber = document.getElementById('email-2');
    if (emailNumber.style.display === "none" || emailNumber.style.display === "") {
        emailNumber.style.display = "block"; // Mostrar correo electrónico
        emailNumber.style.transition = "all 0.3s ease"; // Transición suave
    } else {
        emailNumber.style.display = "none"; // Ocultar correo electrónico
    }
};

// SCROLL SMOOTH DE BOTONES:
document.querySelector('.knowmore-img').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#card-container', 1000); // Ajusta el tiempo (en milisegundos) según la velocidad deseada
});

function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // La posición de destino
    const startPosition = window.pageYOffset; // La posición inicial de desplazamiento
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// NAVEGADOR HAMBURGUESA
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// CONTADOR DE EMPRESAS
$(window).on("scroll", function () {
    if ($(window).scrollTop() > $(".planshero-header").offset().top) {
        iniciarContador();
        $(window).off("scroll"); // Desactiva el evento de scroll una vez que se ha iniciado el contador
    }
});

function iniciarContador() {
    $('.contador').each(function () {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text("+" + this.countNum );
            }
        });
    });
}
