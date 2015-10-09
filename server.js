var app     =  require('express')();
var fs      =  require('fs');
var http    =  require('http').Server(app);
var io      =  require('socket.io')(http);
var port    =  process.env.PORT || 3000;
var ini_txt    =  "";

app.get('/',function(req,res){
    	res.sendFile(__dirname + "/Pair_clone.html");
});

io.on('connection', function(socket){
      	 socket.emit('new_txt',ini_txt);
      	 socket.on('text',function(data){
         	socket.broadcast.emit('new_txt', data.modofied_text);
         	ini_txt=data.modofied_text;
    	});

});

http.listen(port , function(){
    	console.log('Server listening\n Goto http://localhost:%d', port);
});
