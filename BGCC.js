      'use strict';
      let body = document.querySelector('body');
      let button = document.querySelector('button');
      let h1 = document.querySelector('h1');

      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'pink', 'brown'];

      function change() {
          let randomColors = Math.floor(Math.random() * colors.length);
          body.style.backgroundColor = colors[randomColors];

          if (body.style.backgroundColor === colors[0] || body.style.backgroundColor === colors[7]) {
              h1.style.color = 'white';
          } else if (body.style.backgroundColor === colors[2]) {
              h1.style.color = 'red';
          } else {
              h1.style.color = 'black';
          }
      }