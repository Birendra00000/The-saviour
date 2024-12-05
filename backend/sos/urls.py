from django.urls import path
from .views import SendSOSMessageView

urlpatterns = [
    path('sos/', SendSOSMessageView.as_view(), name='send_sos_message'),
]
