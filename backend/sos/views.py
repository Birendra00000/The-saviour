from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import SOSMessage
from .serializers import SOSMessageSerializer

class SOSMessageView(APIView):
    def get(self, request):
        sos_messages = SOSMessage.objects.all()
        serializer = SOSMessageSerializer(sos_messages, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SOSMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
