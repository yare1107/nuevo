// Código elaborado por: https://github.com/GataNina-Li

let handler = async (m, { command, usedPrefix, conn, text }) => {
let fantasy = `
> *¡Bienvenido a la fascinante bitácora de Fantasy!*

_Aquí, te proporcionaré información esencial para que te conviertas en un maestro en el emocionante mundo de los usuarios *Fantasy* en *𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳*._

> *¿Qué es Fantasy RPG?*
_Se trata de una experiencia dinámica que te permite adquirir personajes mediante su compra._

👇 *Continúa bajando para saber: Clases de Imágenes*
${String.fromCharCode(8206).repeat(850)}
> *Clases de Personajes:*

*Común:* Imágenes sencillas pero fácilmente accesibles.
\`\`\`% de encontrarla: 100%\`\`\`
\`\`\`Costo: 100 - 200\`\`\`

*Poco Común:* Imágenes únicas y novedosas, con un costo igualmente accesible.
\`\`\`% de encontrarla: 90%\`\`\`
\`\`\`Costo: 300 - 500\`\`\`

*Raro:* Imágenes de calidad decente, poco frecuentes y aclamadas.
\`\`\`% de encontrarla: 75%\`\`\`
\`\`\`Costo: 600 - 700\`\`\`

*Épico:* Imágenes a veces presentadas en excelentes condiciones y realmente sorprendentes.
\`\`\`% de encontrarla: 80%\`\`\`
\`\`\`Costo: 800 - 1500\`\`\`

*Legendario:* Contiene la posibilidad de obtener tu personaje favorito.
\`\`\`% de encontrarla: 50%\`\`\`
\`\`\`Costo: 1600 - 3000\`\`\`

*Sagrado:* Un rango bendecido por los dioses, ofrece mucho tiempo Premium al cambiarlo.
\`\`\`% de encontrarla: 40%\`\`\`
\`\`\`Costo: 3100 - 9999\`\`\`

*Supremo:* Aparece raramente, con bonificaciones notables y una calidad increíble.
\`\`\`% de encontrarla: 20%\`\`\`
\`\`\`Costo: 10000 - 30000\`\`\`

*Transcendental:* Lo más exclusivo y especial se encuentra en este rango y también lo más caro.
\`\`\`% de encontrarla: 10%\`\`\`
\`\`\`Costo: +30000\`\`\`

> *Tipos de Imagen:*
Cada imagen se clasifica con etiquetas que actúan como palabras clave, proporcionando información sobre el contenido de la imagen. Estas etiquetas son esenciales para realizar búsquedas futuras o comprender de qué trata el Personaje.

*¿Cómo puedo adquirir una imagen?*
Utiliza los comandos \`${usedPrefix}fantasy* o *${usedPrefix}fy\` para ver Personajes.

Para realizar la compra, es necesario contar con *${rpgshop.emoticon('money')}*. Si dispones de la cantidad necesaria, responde al mensaje de la imagen con *"c", "🛒", o "🐱"* para comprar al personaje.

La transacción se confirma cuando recibes el mensaje de que has adquirido al personaje. De lo contrario, recibirás un mensaje diferente indicando la falta de *${rpgshop.emoticon('money')}* o que alguien más ya ha reclamado ese personaje.

*¿Te gustaría proponer tus propios personajes para que formen parte de 𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳?*
¡Es sencillo! Solo utiliza el comando \`${usedPrefix}fyadd* o *${usedPrefix}fyagregar\` y sigue la guía proporcionada para comenzar a crear tu solicitud de personajes. Los desarrolladores estarán encantados de recibir tus propuestas y considerarlas para enriquecer la experiencia en 𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳.

> Calificar personajes en RPG Fantasy

Para calificar personajes en RPG Fantasy, primero necesitas adquirir uno. Una vez que tengas un personaje, podrás calificar cualquier personaje que esté en estado vendido o libre.

También puedes calificar un personaje utilizando el comando \`${usedPrefix}fantasy o ${usedPrefix}fy\`, respondiendo al mensaje con un emoji. Los emojis permitidos son:

- *Me gusta:* 👍👍🏻👍🏼👍🏽👍🏾👍🏿
- *Me encanta:* 🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎
- *No me gusta:* 👎👎🏻👎🏼👎🏽👎🏾👎🏿

*¿Qué sucede al calificar personajes?*

- Si calificas un personaje con "🩵" y más tarde calificas a ese mismo personaje con "👍🏽" lo que sucederá es que se actualizará la calificación del personaje.
- Si calificas un personaje con el mismo me gusta pero diferentes tonos de piel, la calificación (Me gusta) se mantendrá y solo se actualizará el tono de piel del personaje.

Al calificar personajes, puedes influir en su precio. *Por ejemplo:*

- Si das "👍🏽" a un personaje que cuesta \`200\` *${rpgshop.emoticon('money')}* en estado vendido o libre, su precio aumentará un \`2%\` es decir, su nuevo preio será de \`204\` *${rpgshop.emoticon('money')}*.
- Si el personaje está vendido, la próxima vez que esté libre, tendrá el nuevo precio.
- Si el personaje está libre, la próxima vez que aparezca, tendrá un nuevo precio.

> *Métricas de manipulación de precios al calificar:*

- Cada *"Me gusta"* incrementa el precio en un \`2%\`
- Cada *"Me encanta"* incrementa el precio en un \`5%\`
- Cada *"No me gusta"* decrementa el precio en un \`1%\`

> *Recompensas y seguimiento:*

Al calificar personajes, además de manipular su precio, puedes desbloquear recompensas. Para ver tu progreso, puedes usar el comando \`${usedPrefix}fantasymy o ${usedPrefix}fymy\`

Utilizando \`${usedPrefix}fytendencia o ${usedPrefix}fyranking\`, podrás ver una lista de los usuarios más destacados en RPG Fantasy además de ver el progreso del usuario que uso el comando.

Las recompensas serán asignadas de acuerdo al \`${usedPrefix}inventario o ${usedPrefix}inventory\`. Es decir, al completar misiones, podrás obtener recompensas de todo tipo. Además, mientras más misiones completes, más se multiplicarán tus futuras recompensas. Para ver las misiones disponibles, visita con el comando \`${usedPrefix}fantasy o ${usedPrefix}fymy\`

*¿Quieres conocer todos los personajes disponibles en 𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳?*

Con el comando \`${usedPrefix}fylista o ${usedPrefix}fyl\`, puedes acceder a una lista completa de todos los personajes disponibles en 𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳. Además, podrás explorar diferentes categorías.

*¿Quieres saber más sobre un personaje específico?*

Utiliza el comando \`${usedPrefix}fantasyinfo o ${usedPrefix}fyinfo\` seguido del nombre del personaje o su código para obtener información detallada. Este comando es realmente asombroso, ya que te permite profundizar en el conocimiento del personaje a través de preguntas sugeridas, utilizando *Inteligencia artificial*.

*¿Cómo puedo transferir la propiedad de un personaje comprado a otro usuario?*

Con el comando \`${usedPrefix}fyentregar o ${usedPrefix}fytr\`, y mencionando el nombre del personaje y etiquentando a alguien o respondiendo al mensaje de un usuario, podrás transferir la propiedad del personaje al usuario deseado.`.trim()
let pp = 'https://telegra.ph/file/5413c3d098f748e7def77.jpg'
await conn.sendFile(m.chat, pp, 'error.jpg', fantasy, fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: false,
title: `🌟 FANTASÍA RPG`,
body: `😻 Una aventura nos espera...`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://i.imgur.com/vIH5SKp.jpg'
}}})
}

handler.command = /^(fantasyguia|fyguia|fyguía|fantasyguide|fyguide)$/i
export default handler
