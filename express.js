'use strict'  //Libreri para usar nuevos tipos de variables
    var express = require('express')
    var app = express()

      app.get('/', function(req, res) {
      res.end('Hello World!')
    })

     app.listen(3000 , () => {
       console.log('corriendo en http.//localhost:3000');
          console.log('ppppppppppppppppp');
     })
