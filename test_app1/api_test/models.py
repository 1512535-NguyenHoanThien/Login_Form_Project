
from django.db import models


class Users(models.Model):
    # song title
    username = models.CharField(max_length=30, null=False)
    # name of artist or group/band
    password = models.CharField(max_length=11, null=False)
    email = models.CharField(max_length=50, null=False)
    fullname = models.CharField(max_length=50, null=False)
    
    class Meta:
        db_table = 'users'

    def __str__(self):
        return "{} - {} - {} - {}".format(self.username, self.password, self.email, self.fullname)