# express-useful-stacktrace
Express Useful StackTrace

This module is used to a usefull stacktrace from an error thrown from an express middleware or controller



exemple: 

```

declaration : 

function getUsefulStacktrace(trace, separator = 'at newFn');

```

```

import getUsefulStacktrace from 'express-useful-stacktrace';

function errorHandlingMiddleware(err, req, res, next) {
  const usefulStack = getUsefulStacktrace(err.stack);
}

err.stack -> 
"Error
    at new Error (/usr/errors.js:15:1)
    at /usr/middlewares/myMiddleware.js:42:11"

usefulStack ->
[ '    at /usr/middlewares/myMiddleware.js:42:11' ]


err.stack -> 
"Error
    at new Error (/usr/errors.js:15:1)
    at myController (/usr/controllers/myController.js:155:26)
    at myNamedMiddleWare (/usr/middlewares/myMiddleware2.js:42:11)
    at /usr/middlewares/myMiddleware1.js:15:42
    at newFn (/usr/node_modules/express-async-errors/index.js:16:20)
    at Layer.handle [as handle_request] (/usr/node_modules/express/lib/router/layer.js:95:5)
    at next (/usr/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/usr/node_modules/express/lib/router/route.js:112:3)
    at newFn (/usr/node_modules/express-async-errors/index.js:16:20)
    at Layer.handle [as handle_request] (/usr/node_modules/express/lib/router/layer.js:95:5)
    at /usr/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/usr/node_modules/express/lib/router/index.js:335:12)
    at next (/usr/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/usr/node_modules/express/lib/router/index.js:174:3)
    at router (/usr/node_modules/express/lib/router/index.js:47:12)"


usefulStack ->
[ 
  '    at myController (/usr/controllers/myController.js:155:26)',
  '    at myNamedMiddleware (/usr/middlewares/myMiddleware2.js:42:11)',
  '    at /usr/middlewares/myMiddleware1.js:15:42', 
]



function errorHandlingMiddleware(err, req, res, next) {
  const usefulStack = getUsefulStacktrace(err.stack, 'at Layer.handle');
}


err.stack -> 
"Error
    at new Error (/usr/errors.js:15:1)
    at myController (/usr/controllers/myController.js:155:26)
    at myNamedMiddleWare (/usr/middlewares/myMiddleware2.js:42:11)
    at /usr/middlewares/myMiddleware1.js:15:42
    at newFn (/usr/node_modules/express-async-errors/index.js:16:20)
    at Layer.handle [as handle_request] (/usr/node_modules/express/lib/router/layer.js:95:5)
    at next (/usr/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/usr/node_modules/express/lib/router/route.js:112:3)
    at newFn (/usr/node_modules/express-async-errors/index.js:16:20)
    at Layer.handle [as handle_request] (/usr/node_modules/express/lib/router/layer.js:95:5)
    at /usr/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/usr/node_modules/express/lib/router/index.js:335:12)
    at next (/usr/node_modules/express/lib/router/index.js:275:10)
    at Function.handle (/usr/node_modules/express/lib/router/index.js:174:3)
    at router (/usr/node_modules/express/lib/router/index.js:47:12)"


usefulStack ->
[ 
  '    at myController (/usr/controllers/myController.js:155:26)',
  '    at myNamedMiddleware (/usr/middlewares/myMiddleware2.js:42:11)',
  '    at /usr/middlewares/myMiddleware1.js:15:42',
  '    at newFn (/usr/node_modules/express-async-errors/index.js:16:20)',
]


```
