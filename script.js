document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('glow-text');

    // Verifica se o dispositivo possui um cursor de mouse real (Desktop)
    // Isso evita que o efeito de hover fique "preso" em telas de toque (Mobile/Tablet)
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Só ativa o efeito de luz se o texto existir E for um desktop
    if(text && isDesktop) {
        // Inicializa o CSS do texto para o gradiente dinâmico
        text.style.background = `radial-gradient(
            circle at 50% 50%, 
            #f82f2f 0%, 
            #a52222 15%, 
            #757575 40%
        )`;
        text.style.webkitBackgroundClip = 'text';
        text.style.webkitTextFillColor = 'transparent';

        text.addEventListener('mousemove', (e) => {
            const rect = text.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            // O "- 25" serve para alinhar o brilho verticalmente com o cursor
            const y = (((e.clientY - rect.top) / rect.height) * 100) - 25;
            
            text.style.background = `radial-gradient(
                circle at ${x}% ${y}%, 
                #f82f2f 0%, 
                #a52222 15%, 
                #757575 40%
            )`;
            text.style.webkitBackgroundClip = 'text';
        });

        text.addEventListener('mouseleave', () => {
            text.style.background = `radial-gradient(
                circle at 50% 50%, 
                #757575 0%, 
                #757575 100% 
            )`;
            text.style.webkitBackgroundClip = 'text';
        });
    }
});