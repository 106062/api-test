## quik start

a api tool to test with python scripts.

``` bash
$ docker run -d -p 8089:8089 \
             -v ${__Dir}/locust:/mnt/locust locustio/locust \
             -f /mnt/locust/locustfile.py
```

then click [here](http://localhost:8089/) to show the results from the test case.

`Note` stat one test case by one start time. or run many test case with one file.
