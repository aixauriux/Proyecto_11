
// Seleccionar los elementos
const bannerCookies = document.getElementById("bannerCookies");
const botonAceptar = document.getElementById("aceptarCookies");
const botonCerrar = document.getElementById("cerrarCookies");

// Buscar si existe la cookie de aceptación
function cookieAceptada() {
    return document.cookie
        .split("; ")
        .some(cookie => cookie === "cookiesAceptadas=true");
}

// Ocultar el aviso si ya se aceptaron las cookies
if (cookieAceptada()) {
    bannerCookies.classList.add("oculto");
}

// Aceptar las cookies
botonAceptar.addEventListener("click", function() {
    // Guardar el consentimiento durante 30 días
    document.cookie = "cookiesAceptadas=true; max-age=2592000; path=/; SameSite=Lax";

    // Ocultar el aviso
    bannerCookies.classList.add("oculto");
});

// Cerrar el aviso sin aceptar
botonCerrar.addEventListener("click", function() {
    bannerCookies.classList.add("oculto");
});
