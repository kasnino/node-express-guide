var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
