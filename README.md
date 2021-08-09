# Test api example

- get : http://host:9000/

- post : http://host:9000/test

format: `{"message": string }`

return: `{ Text: ${message} }`

================================

## start server

``` bash
$ npm run start

or

$ npm start
```

## start with docker-compose

``` bash
$ docker-compose up -d
```

================================

## RUN test case

``` bash
$ node ./test/get-test.js
```

``` bash
$ node ./test/post-test.js
```

================================
