from django.db import models

# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]

class log(models.Model):
    email = models.TextField(null=True, blank=True)
    password = models.TextField(null=False)

    def __str__(self):
        return self.body[0:50]
