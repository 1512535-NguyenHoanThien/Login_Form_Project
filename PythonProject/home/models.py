from django.db import models

class User(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length= 30)
    date = models.DateTimeField(auto_now_add=True)