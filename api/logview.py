from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import logSerializer,SignupSerializer
from knox.models import AuthToken
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view([ 'POST'])
def dologin(request):
    data = request.data
    print(data)
    serializer = logSerializer(data, many=False)
    print(serializer)
    return Response(serializer.data)

@api_view(['POST'])
def SignupAPI(request):
    if request.method == 'POST':
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            created, token = AuthToken.objects.create(user)
            print(created,token)
            return Response({
                'user': serializer.data,
                'status': status.HTTP_201_CREATED,
                'token': token
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
