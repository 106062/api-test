import time
import random
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def hello_world(self):
        self.client.get("/");

    @task
    def post_num(self):
        a = random.randint(0, 9);
        b = random.randint(0, 9);
        res = ((a + b) % 2);
        with self.client.post("/numof2", json = { "num1" : a, "num2" : b }, 
                              catch_response = True ) as response:
            if response.json() ["Result"] != str(res):
                response.failure("Error");
