document.addEventListener('DOMContentLoaded', () => {
    const text = document.getElementById('glow-text');

    if(text) {
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