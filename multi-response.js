const http = require ( 'http' );
const hostname = 'localhost' ;
const port = 1000 ;
const server = http.createServer((req, res) => {
	res.statusCode = 200 ;
	res.setHeader( 'Content-Type' , 'application/json' );

    switch (req.url) {
        case "/home" :
            res.writeHead( 200 );
            res.end( "This is Home page" );
            break ;
        case "/about" :
            res.writeHead( 200 );
            res.end( "This is About page" );
            break ;
        default :
            break ;
    }
});

server.listen(port, hostname, () => {
	console .log( `Server running at http://${hostname}:${port}/` );
});