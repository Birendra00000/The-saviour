from rest_framework import serializers
from .models import SOSMessage
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

class SOSMessageSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=CustomUser.objects.all())

    class Meta:
        model = SOSMessage
        fields = ['user', 'message', 'latitude', 'longitude', 'timestamp']
