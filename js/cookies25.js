// Función para aceptar las cookies


function aceptarCookies() {
    // Configuramos la cookie por 1 mes (30 días)

    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();

    document.cookie = "mycookie = 010;" + expira + "; path = /";

    // Ocultamos el cuadro de consentimiento
    document.querySelector('.wrapper').style.display = 'none';
}

// Función para denegar las cookies
function denegarCookies() {
    // Eliminamos la cookie (si existe)
    document.cookie = 'CookieBy=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';

    // Ocultamos el cuadro de consentimiento
    document.querySelector('.wrapper').style.display = 'none';
}

function infoCookies(num) {

    var deep = "";
    if (num == 0) deep += "./html/legal/";
    for (i = 0; i < num; i++) {
        deep += "../html/legal/";
    }

    window.location.href = deep + 'info-cookies.html';

}


function establecerCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
    var traza = nombre + "=" + valor + ";" + expira + ";path=/";
    console.log("traza: " + traza);

    document.querySelector('.wrapper').style.display = 'none';

    var cookies = document.cookie.split(';');
    console.log("cookies: " + cookies);

    var tra = traza.split(';');
    console.log("tra: " + tra);


    console.log("Cookie técnica establecida");
}


// Función para obtener una cookie
function obtenerCookie(nombre) {
    console.log("obtenerCookie");
    var nombre = nombre + "=";
    var cookies = document.cookie.split(';');
    console.log("cookies: " + cookies);

    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            console.log("OOOB:" + c.substring(nombre.length, c.length));
            return c.substring(nombre.length, c.length);
        }
    }
    return "";
}


// Establecer una cookie técnica
//establecerCookie("cookieTecnica", "valorTecnico", 7);

