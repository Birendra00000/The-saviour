from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    phone_validator = RegexValidator()
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True,validators=[phone_validator] )

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups", 
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_user_permissions",  
        blank=True
    )
