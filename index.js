// // const http = require('http');

// // const requestListener = function (req, res) {
// //   res.writeHead(200);
// //   res.end('Hello, World!');
// // }

// // const server = http.createServer(requestListener);
// // server.listen(8080);

// const http = require('http');


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
// });

//server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


var http = require('http');  
var url = require('url');  
var fs = require('fs');
const hostname = require("./config.json");
//const hostname = '127.0.0.1';
//const hostname = '25.75.52.231';
const port = `8082`;
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;
    //console.log("Ready!");
    switch (path) {  
        case '/':  
            response.writeHead(302, {
              'Location': '/Math%20Solver%20Time.html'
            });
            response.end();
            break;  
        case '/Page%20Two%20Test.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/HtmlPage2.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/Math%20Solver%20Time.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;
        case '/src/arithAdd.js':
            fs.readFile(__dirname + path, function(error, jsFile) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(jsFile);
                    response.end();
                }
            });
            break;
        case '/src/geoAdd.js':
            fs.readFile(__dirname + path, function(error, jsFile) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(jsFile);
                    response.end();
                }
            });
            break;
        case '/src/LCMAdd.js':
            fs.readFile(__dirname + path, function(error, jsFile) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(jsFile);
                    response.end();
                }
            });
            break;
        case '/src/palindrome.js':
            fs.readFile(__dirname + path, function(error, jsFile) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(jsFile);
                    response.end();
                }
            });
            break;
        case '/src/typeSolve.js':
            fs.readFile(__dirname + path, function(error, jsFile) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(jsFile);
                    response.end();
                }
            });
            break;
        case '/gameAttempt.html':
                    fs.readFile(__dirname + path, function(error, data) {
                        if (error) {
                            response.writeHead(404);
                            response.write(error);
                            response.end();
                        } else {
                            response.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            response.write(data);
                            response.end();
                        }
                    });
                    break;
        default:  
            response.writeHead(404);  
            response.write("oops this doesn't exist - 404");
            response.end();  
            break;  
    }  
});  
server.listen(port, hostname, () => {
    console.log(`Server running at http:${hostname.localIP}:${port}`);
});