'use strict';

module.exports = class Util {
  static color(color) {
        if (typeof color === 'string') {
          if (color.toLowerCase() === 'random') return Math.floor(Math.random() * (0xffffff + 1));
          if (color.toLowerCase() === 'default') return 0;
          color = parseInt(color.replace('#', ''), 16);
        } else if (Array.isArray(color)) {
          color = (color[0] << 16) + (color[1] << 8) + color[2];
        }
        
        if (color < 0 || color > 0xffffff) throw new Error ("A cor deve ser um código hex!");
        else if (color && isNaN(color)) throw new Error ("Não foi possível converter a cor para número :(");
        
        return color;
    }
}