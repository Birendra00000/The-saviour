from django.urls import path
from .views import SOSMessageView

urlpatterns = [
    path('sos/', SOSMessageView.as_view(), name='sos_message'),
]
