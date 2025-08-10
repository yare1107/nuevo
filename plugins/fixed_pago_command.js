let handler = async (m, { conn }) => {
    let videoUrl = 'https://qu.ax/PWOGh.mp4';
    let texto = `
╔═══════════════════════════════╗
║            💸 𝐏𝐀𝐆𝐎𝐒 💸              ║
╚═══════════════════════════════╝

🏦 *𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐄𝐍𝐂𝐈𝐀𝐒 STP:*
📱 *Número:* 728969000119672904
👤 *Beneficiario:* Franklin Pérez Méndez

💳 *𝐃𝐄𝐏𝐎́𝐒𝐈𝐓𝐎 OXXO:*
🏪 *Tarjeta:* 2242 1701 0032 1516
🏢 *Establecimiento:* SPIN OXXO

📋 *𝐈𝐍𝐒𝐓𝐑𝐔𝐂𝐂𝐈𝐎𝐍𝐄𝐒:*
• Mandar comprobante de pago 🧾
• Especificar el motivo del pago 📝

💝 *𝐌𝐎𝐓𝐈𝐕𝐎𝐒 𝐀𝐂𝐄𝐏𝐓𝐀𝐃𝐎𝐒:*
🥩 Carne
🛒 Despensa  
🍽️ Comida
🎯 Otros (especificar)

⚡ *¡Gracias por tu apoyo!* ✨
`;

    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    };

    try {
        await conn.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: texto, 
            gifPlayback: true 
        }, { quoted: fkontak });
        
        // Opcional: guardar timestamp si usas sistema de cooldown
        if (global.db && global.db.data && global.db.data.users && global.db.data.users[m.sender]) {
            global.db.data.users[m.sender].lastpago = new Date() * 1;
        }
        
    } catch (error) {
        console.error('Error enviando mensaje de pago:', error);
        m.reply('❌ Ocurrió un error al mostrar la información de pagos. Intenta nuevamente.');
    }
}

handler.help = ['pago']
handler.tags = ['owner', 'info'] 
handler.command = ['formapagoperez'] 
handler.register = true

export default handler
