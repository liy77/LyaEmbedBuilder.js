# LyaEmbedBuilder.js
Crie embeds facilmente!

## Como utilizar?

```js
const LyaEmbedBuilder = require("./LyaEmbedBuilder");

let embed = new LyaEmbedBuilder();
embed.title("Título da embed!");
embed.description("Descrição da embed");

message.channel.createMessage(embed.create);
```
