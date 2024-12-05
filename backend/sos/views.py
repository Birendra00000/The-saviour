from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import SOSMessage
from .serializers import SOSMessageSerializer
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

class SendSOSMessageView(APIView):
    def post(self, request):
        serializer = SOSMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # Send the message to the admin WebSocket
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                "admin_dashboard",  # Define the group name
                {
                    "type": "sos_message",
                    "message": serializer.data['message'],
                    "latitude": serializer.data['latitude'],
                    "longitude": serializer.data['longitude'],
                    "user_id": serializer.data['user']
                }
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
