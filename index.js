const mineflayer = require('mineflayer');

function crearBot() {
    const bot = mineflayer.createBot({
        host: 'papillita_smp.aternos.me', // <-- Aquí SOLO va el nombre del servidor sin números
        port: 50109,                     // <-- Aquí pones el puerto dinámico actual
        username: 'BotAFK_247',              
        version: false                       
    });

    bot.on('spawn', () => {
        console.log('El bot ha entrado al servidor con éxito.');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 15000);
    });

    bot.on('end', () => {
        console.log('Bot desconectado. Intentando reconectar en 30 segundos...');
        setTimeout(crearBot, 30000);
    });

    bot.on('error', (err) => console.log('Error detectado:', err));
}

crearBot();
