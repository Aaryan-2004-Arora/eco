# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="projects")
    project_name = models.CharField(max_length=255)
    company_name = models.CharField(max_length=255)
    idea = models.TextField()
    about = models.TextField()
    expected_spend = models.DecimalField(max_digits=10, decimal_places=2)
    expected_time = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    description = models.TextField()
    verify = models.BooleanField(default=False)
    image_link = models.CharField(max_length=255)  # URL for image link
    joined = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    members = models.ManyToManyField(User, related_name="project_members")
 \


    def __str__(self):
        return self.project_name
