const mineflayer = require('mineflayer');

function crearBot() {
    const bot = mineflayer.createBot({
        host: 'papillita_smp.aternos.me', 
        port: 50109,                     
        username: 'BotAFK_247',              
        version: false                       
    });

    bot.on('spawn', () => {
        console.log('El bot ha entrado al servidor con éxito.');
        
        // Bucle de movimiento continuo cada 10 segundos
        setInterval(() => {
            console.log('Iniciando ciclo de movimiento AFK...');
            
            // 1. Camina hacia adelante durante 1 segundo
            bot.setControlState('forward', true);
            
            setTimeout(() => {
                bot.setControlState('forward', false); // Detiene avance
                
                // 2. Pausa de medio segundo y luego camina hacia atrás durante 1 segundo
                setTimeout(() => {
                    bot.setControlState('back', true);
                    
                    setTimeout(() => {
                        bot.setControlState('back', false); // Detiene retroceso
                    }, 1000);
                    
                }, 500);
                
            }, 1000);

        }, 10000); // Se repite el ciclo completo cada 10 segundos
    });

    bot.on('end', () => {
        console.log('Bot desconectado. Intentando reconectar en 30 segundos...');
        setTimeout(crearBot, 30000);
    });

    bot.on('error', (err) => console.log('Error detectado:', err));
}

crearBot();
