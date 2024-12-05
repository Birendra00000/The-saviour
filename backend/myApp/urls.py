from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RegisterNumberViewSet, SOSMessageViewSet,
    TimeIntervalViewSet, ViewNumberViewSet, DeletedNumberViewSet
)

router = DefaultRouter()
router.register(r'register-numbers', RegisterNumberViewSet, basename='registerNumber')
router.register(r'sos-messages', SOSMessageViewSet, basename='sosmessage')
router.register(r'time-intervals', TimeIntervalViewSet, basename='timeinterval')
router.register(r'view-numbers', ViewNumberViewSet, basename='viewnumber')
router.register(r'deleted-numbers', DeletedNumberViewSet, basename='deletednumber')

urlpatterns = [
    path('', include(router.urls)),
]
