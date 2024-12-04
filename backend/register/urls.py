from django.urls import path
from register import views

urlpatterns = [
    path('login/',views.custom_login, name="login"),
    path('register/',views.register, name = "register"),
]