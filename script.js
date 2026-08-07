// ===== script.js =====
(function() {
    "use strict";

    // ---------- LISTA DE PALABRAS (300) ----------
const PALABRAS_INICIALES = [
    "SOL", "LUNA", "ESTRELLA", "CIELO", "MAR", "VIENTO", "FUEGO", "AGUA", "TIERRA",
    "CANTAR", "BAILAR", "REÍR", "SOÑAR", "VIVIR", "AMAR", "PAZ", "ALEGRÍA", "ESPERANZA",
    "LIBERTAD", "ARMONÍA", "MELODÍA", "RITMO", "CANCIÓN", "NOTA", "ACORDE", "COMPÁS",
    "SINFONÍA", "CONCIERTO", "PIANO", "VIOLÍN", "FLAUTA", "TROMPETA", "BATERÍA", "ARPA",
    "CORO", "ÓPERA", "JAZZ", "ROCK", "POP", "CLÁSICO", "MODERNO", "FOLKLORE", "TROPICAL",
    "ALBA", "OCASO", "AURORA", "CRESPÚSCULO", "NOCHE", "DÍA", "BRISA", "TORMENTA",
    "ARCOÍRIS", "RELÁMPAGO", "TRUENO", "LLUVIA", "NIEVE", "CALOR", "FRÍO", "PRIMAVERA",
    "VERANO", "OTOÑO", "INVIERNO", "FLOR", "FRUTO", "SEMILLA", "ÁRBOL", "BOSQUE",
    "JARDÍN", "MONTAÑA", "VALLE", "RÍO", "LAGO", "OCÉANO", "ISLA", "VOLCÁN",
    "DESIERTO", "SAVANA", "JUNGLA", "POLO", "GLACIAR", "GÉISER", "CASCADA",
    "AVENTURA", "MISTERIO", "LEGENDA", "CUENTO", "POESÍA", "PROSA", "DRAMA",
    "COMEDIA", "SUSPENSO", "FANTASÍA", "CIENCIA", "HISTORIA", "FILOSOFÍA",
    "SABIDURÍA", "CONOCIMIENTO", "VERDAD", "BELLEZA", "BONDAD", "JUSTICIA",
    "CORAZÓN", "ALMA", "ESPÍRITU", "MENTE", "CUERPO", "SENTIDO", "PASIÓN",
    "ENERGÍA", "FUERZA", "VALOR", "HUMILDAD", "GRATITUD", "AMISTAD", "HERMANO",
    "CAMINO", "VIAJE", "DESTINO", "HORIZONTE", "INFINITO", "ETERNIDAD", "MOMENTO",
    "RECUERDO", "SONRISA", "LÁGRIMA", "ABRAZO", "BESO", "MIRADA", "SUSURRO",
    "GRITO", "SILENCIO", "PALABRA", "LENGUAJE", "DIÁLOGO", "ECOS", "VIBRACIÓN",
    "RISA", "JUEGO", "CREACIÓN", "IMAGINACIÓN", "INVENTO", "DESCUBRIR",
    "EXPLORAR", "SORPRESA", "MARAVILLA", "ASOMBRO", "MAGIA", "ENCANTO", "HECHIZO",
    "CARICIA", "TERNURA", "CENTELLA", "CHISPA", "LLAMA", "HOGUERA",
    "COMETA", "ASTRO", "GALAXIA", "NEBULOSA", "ÓRBITA", "SATÉLITE",
    "PLANETA", "MARTE", "VENUS", "JÚPITER", "SATURNO", "URANO", "NEPTUNO",
    "MERCURIO", "ECLIPSE", "METEORO", "GRAVEDAD", "LUZ",
    "TINIEBLAS", "MEDIODÍA", "MADRUGADA", "DESPERTAR", "SUEÑO",
    "PESADILLA", "ENSUEÑO", "ALQUIMIA", "ELIXIR", "AMULETO", "TALISMÁN",
    "PRODIGIO", "DESTELLO", "RESPLANDOR", "BRILLO", "OPACO", "CÁLIDO",
    "GÉLIDO", "TEMPLADO", "FRESCO", "ÁCIDO", "DULCE", "SALADO", "AMARGO",
    "PICANTE", "SUAVE", "ÁSPERO", "LISO", "RUGOSO", "TENUE", "FUERTE",
    "RÁPIDO", "LENTO", "BRUSCO", "SINUOSO", "RECTILÍNEO", "CURVO",
    "ENREDADO", "SENCILLO", "COMPLEJO", "PROFUNDO", "SUPERFICIAL", "CLARO",
    "OBSCURO", "NÍTIDO", "BORROSO", "FIEL", "LEAL", "NOBLE", "SENSUAL",
    "PÍCARO", "SERIO", "JOVIAL", "MELANCÓLICO", "EUFÓRICO", "PLÁCIDO",
    "PODER", "CADENAS", "HOGAR", "VERTIGO", "CLARIDAD", "FE",
    "CHÉVERE", "FARRA", "MAMACITA", "ALBOROTO", "BOYÓN", "PALMEO", "WHINE",
    "LATIDO", "PULSO", "REFLEJO", "RUIDO", "ENCENDER", "ROMPER", "SENTIR",
    "LATIR", "MANOS", "OJOS", "CALLE", "PLAZA", "ANHELO", "FURIA", "ABISMO",
    "AURORA", "BALCÓN", "BARCO", "BOLSILLO", "BOSQUE", "CABELLO", "CÁMARA",
    "CAMPO", "CANDIL", "CAÑÓN", "CARBÓN", "CARPA", "CAUTIVO", "CERCA",
    "CICATRIZ", "CIELO", "CIMA", "CLAVEL", "COBRE", "COLOR", "COMBATE",
    "CONDE", "CONEJO", "CORTE", "CRISTAL", "CUELLO", "CUMBRE", "DELGADO",
    "DETALLE", "DIENTE", "DILUVIO", "DORADO", "DUENDE", "DULZURA", "ECHO",
    "EDAD", "ENCAJE", "ENCANTO", "ENGANCHE", "ENORME", "ENTREGA", "ESCOLTA",
    "ESPADA", "ESPANTAR", "ESPESO", "ESPIAR", "ESTACIÓN", "ESTIRAR", "ESTUDIO",
    "FABRICA", "FANTASMA", "FAUNA", "FESTÍN", "FIESTA", "FILO", "FIRME",
    "FLAMA", "FOSA", "FRAGANCIA", "FRÁGIL", "FUGAS", "GARRAS", "GEMIDO",
    "GENTE", "GIRAR", "GOZO", "GRIETA", "GRITO", "GRUESO", "GUANTE",
    "HACHA", "HAZ", "HECHO", "HERIDA", "HUELLA", "HUMO", "IMPULSO",
    "INICIO", "INVENTO", "JIRA", "JORNADA", "JOVEN", "JUICIO", "JUNTA",
    "LADRILLO", "LARGO", "LENGUA", "LEÑA", "LETRA", "LEVANTE", "LIGERO",
    "LIMÓN", "LINDO", "LLANTO", "LLAVE", "LLEGAR", "LLENO", "LLUVIA",
    "LUCIR", "LUGAR", "LUNAR", "MACHO", "MANCHA", "MANDO", "MANTO",
    "MAÑANA", "MAPA", "MARCHA", "MARCO", "MASA", "MAYOR", "MELÓN",
    "MEMORIA", "MES", "META", "MOLDE", "MONEDA", "MONTAR", "MORIR",
    "MOSTRAR", "MOVIL", "NACER", "NARIZ", "NAVE", "NIDO", "NIEBLA",
    "NOMBRE", "NORTE", "NOTA", "NUBE", "NUÑO", "OBRA", "OÍDO"
];

    while (PALABRAS_INICIALES.length < 300) {
        PALABRAS_INICIALES.push("MÚSICA");
    }
    const PALABRAS_BASE = PALABRAS_INICIALES.slice(0, 300);

    // ---------- DOM ----------
    const btnIniciar = document.getElementById('btn-iniciar');
    const palabraElegida = document.getElementById('palabra-elegida');
    const caminoDeslizamiento = document.getElementById('camino-deslizamiento');
    const contenedorArrastre = document.getElementById('contenedor-arrastre');
    const btnArrastrable = document.getElementById('btn-arrastrable');
    const orificioDestino = document.getElementById('orificio-destino');
    const btnModo = document.getElementById('btn-modo');

    // ---------- ESTADO ----------
    let palabrasDisponibles = [];
    let palabraActual = '';
    let arrastrando = false;
    let offsetX = 0;
    let offsetY = 0;
    let modoOscuro = false;
    let posicionInicialX = 0;

    // ---------- INICIALIZAR ----------
    function reiniciarPalabras() {
        palabrasDisponibles = [...PALABRAS_BASE];
        for (let i = palabrasDisponibles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [palabrasDisponibles[i], palabrasDisponibles[j]] = [palabrasDisponibles[j], palabrasDisponibles[i]];
        }
    }

    function obtenerPalabraAleatoria() {
        if (palabrasDisponibles.length === 0) {
            reiniciarPalabras();
        }
        const idx = Math.floor(Math.random() * palabrasDisponibles.length);
        const palabra = palabrasDisponibles[idx];
        palabrasDisponibles.splice(idx, 1);
        return palabra;
    }

    // ---------- UI ----------
    function mostrarInicio() {
        btnIniciar.style.display = 'flex';
        palabraElegida.style.display = 'none';
        caminoDeslizamiento.style.display = 'none';
        btnIniciar.disabled = false;
        palabraElegida.textContent = '';
        // Resetear posición del botón deslizable
        contenedorArrastre.style.left = '0px';
        orificioDestino.classList.remove('exito');
    }

    function mostrarPalabra(palabra) {
        palabraActual = palabra;
        btnIniciar.style.display = 'none';
        palabraElegida.style.display = 'flex';
        palabraElegida.textContent = palabra;
        caminoDeslizamiento.style.display = 'block';
        // Resetear posición del botón
        contenedorArrastre.style.left = '0px';
        orificioDestino.classList.remove('exito');
        // Guardar posición inicial
        posicionInicialX = 0;
    }

    // ---------- EVENTO INICIAR ----------
    function handleIniciar() {
        if (palabrasDisponibles.length === 0) {
            reiniciarPalabras();
        }
        const palabra = obtenerPalabraAleatoria();
        mostrarPalabra(palabra);
    }

    btnIniciar.addEventListener('click', handleIniciar);

    // ---------- ARRASTRE ----------
    function obtenerPosicionRelativa(clientX, clientY) {
        const carrilRect = document.getElementById('carril').getBoundingClientRect();
        const contenedorRect = contenedorArrastre.getBoundingClientRect();
        const anchoCarril = carrilRect.width - contenedorRect.width;
        
        let x = clientX - carrilRect.left - (contenedorRect.width / 2);
        x = Math.max(0, Math.min(x, anchoCarril));
        
        return x;
    }

    function iniciarArrastre(e) {
        if (palabraElegida.style.display === 'none') return;
        
        if (e.type === 'mousedown') {
            e.preventDefault();
            const rect = btnArrastrable.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            arrastrando = true;
            btnArrastrable.classList.add('dragging');
            document.addEventListener('mousemove', moverArrastre);
            document.addEventListener('mouseup', soltarArrastre);
        } else if (e.type === 'touchstart') {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = btnArrastrable.getBoundingClientRect();
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            arrastrando = true;
            btnArrastrable.classList.add('dragging');
            document.addEventListener('touchmove', moverArrastreTouch, { passive: false });
            document.addEventListener('touchend', soltarArrastreTouch, { passive: false });
        }
    }

    function moverArrastre(e) {
        if (!arrastrando) return;
        e.preventDefault();
        
        const x = obtenerPosicionRelativa(e.clientX, e.clientY);
        contenedorArrastre.style.left = x + 'px';
        
        // Verificar si llegó al orificio (cerca del final)
        const carril = document.getElementById('carril');
        const anchoCarril = carril.getBoundingClientRect().width - contenedorArrastre.offsetWidth;
        if (x >= anchoCarril * 0.85) {
            orificioDestino.classList.add('exito');
            // Disparar nueva palabra después de un breve delay
            if (!window._esperandoReset) {
                window._esperandoReset = true;
                setTimeout(() => {
                    soltarYReiniciar();
                    window._esperandoReset = false;
                }, 400);
            }
        } else {
            orificioDestino.classList.remove('exito');
        }
    }

    function moverArrastreTouch(e) {
        if (!arrastrando) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = obtenerPosicionRelativa(touch.clientX, touch.clientY);
        contenedorArrastre.style.left = x + 'px';
        
        const carril = document.getElementById('carril');
        const anchoCarril = carril.getBoundingClientRect().width - contenedorArrastre.offsetWidth;
        if (x >= anchoCarril * 0.85) {
            orificioDestino.classList.add('exito');
            if (!window._esperandoReset) {
                window._esperandoReset = true;
                setTimeout(() => {
                    soltarYReiniciar();
                    window._esperandoReset = false;
                }, 400);
            }
        } else {
            orificioDestino.classList.remove('exito');
        }
    }

    function soltarArrastre(e) {
        if (!arrastrando) return;
        arrastrando = false;
        btnArrastrable.classList.remove('dragging');
        document.removeEventListener('mousemove', moverArrastre);
        document.removeEventListener('mouseup', soltarArrastre);
        
        // Si no llegó al orificio, volver al inicio
        const carril = document.getElementById('carril');
        const anchoCarril = carril.getBoundingClientRect().width - contenedorArrastre.offsetWidth;
        const xActual = parseFloat(contenedorArrastre.style.left) || 0;
        if (xActual < anchoCarril * 0.85) {
            contenedorArrastre.style.left = '0px';
            orificioDestino.classList.remove('exito');
        }
    }

    function soltarArrastreTouch(e) {
        if (!arrastrando) return;
        arrastrando = false;
        btnArrastrable.classList.remove('dragging');
        document.removeEventListener('touchmove', moverArrastreTouch);
        document.removeEventListener('touchend', soltarArrastreTouch);
        
        const carril = document.getElementById('carril');
        const anchoCarril = carril.getBoundingClientRect().width - contenedorArrastre.offsetWidth;
        const xActual = parseFloat(contenedorArrastre.style.left) || 0;
        if (xActual < anchoCarril * 0.85) {
            contenedorArrastre.style.left = '0px';
            orificioDestino.classList.remove('exito');
        }
    }

    function soltarYReiniciar() {
        // Verificar si aún hay palabras
        if (palabrasDisponibles.length === 0) {
            reiniciarPalabras();
        }
        
        // Mostrar el botón de inicio nuevamente
        mostrarInicio();
        
        // El botón de inicio ahora está visible, el usuario puede hacer clic cuando quiera
        // Resetear estado de arrastre
        arrastrando = false;
        btnArrastrable.classList.remove('dragging');
        document.removeEventListener('mousemove', moverArrastre);
        document.removeEventListener('mouseup', soltarArrastre);
        document.removeEventListener('touchmove', moverArrastreTouch);
        document.removeEventListener('touchend', soltarArrastreTouch);
        
        contenedorArrastre.style.left = '0px';
        orificioDestino.classList.remove('exito');
        window._esperandoReset = false;
    }

    // Eventos de arrastre
    btnArrastrable.addEventListener('mousedown', iniciarArrastre);
    btnArrastrable.addEventListener('touchstart', iniciarArrastre, { passive: false });

    // ---------- MODO CLARO/OSCURO ----------
    function toggleModo() {
        modoOscuro = !modoOscuro;
        document.body.classList.toggle('modo-oscuro', modoOscuro);
        btnModo.textContent = modoOscuro ? '☀️' : '🌙';
    }
    btnModo.addEventListener('click', toggleModo);

    // ---------- NOTAS MUSICALES ----------
    function crearNotasFondo() {
        const contenedor = document.getElementById('notas-fondo');
        const simbolos = ['♩', '♪', '♫', '♬', '𝄞', '𝄢', '♭', '♯', '𝄫', '𝄪'];
        for (let i = 0; i < 45; i++) {
            const nota = document.createElement('span');
            nota.className = 'nota';
            nota.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
            nota.style.left = Math.random() * 90 + '%';
            nota.style.top = Math.random() * 90 + '%';
            nota.style.fontSize = (1.2 + Math.random() * 2.4) + 'rem';
            nota.style.transform = `rotate(${Math.random() * 360}deg)`;
            nota.style.animationDelay = (Math.random() * 10) + 's';
            nota.style.animationDuration = (10 + Math.random() * 18) + 's';
            contenedor.appendChild(nota);
        }
    }
    crearNotasFondo();

    // ---------- INICIO ----------
    reiniciarPalabras();
    mostrarInicio();

    // Prevenir selección
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Reajustar en resize
    window.addEventListener('resize', () => {
        if (palabraElegida.style.display !== 'none') {
            const carril = document.getElementById('carril');
            const anchoCarril = carril.getBoundingClientRect().width - contenedorArrastre.offsetWidth;
            const xActual = parseFloat(contenedorArrastre.style.left) || 0;
            if (xActual > anchoCarril) {
                contenedorArrastre.style.left = '0px';
            }
        }
    });

    console.log('🎵 Canta la palabra - versión mejorada con camino visual!');
})();