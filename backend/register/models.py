
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_groups",  # Avoids clash with default User.groups
        blank=True
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_user_permissions",  # Avoids clash with default User.user_permissions
        blank=True
    )
