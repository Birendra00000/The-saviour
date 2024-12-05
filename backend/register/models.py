
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils.timezone import now, timedelta
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)   
    groups = models.ManyToManyField(
        Group,
        related_name="register_customuser_groups", 
        blank=True
    )
    
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="register_customuser_permissions",  
        blank=True
    )

    def __str__(self):
        return self.username  

class ExpiringToken(Token):
    expires_at = models.DateTimeField(blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.expires_at:
            self.expires_at = now() + timedelta(minutes=1)  # Token expires in 1 minute
        super().save(*args, **kwargs)


class ExpiringTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        user, token = super().authenticate_credentials(key)
        
        # Check if the token is expired
        if token.expires_at < now():
            token.delete()  # Delete the expired token
            raise AuthenticationFailed("Token has expired")
        
        return user, token
