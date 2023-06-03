from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import logSerializer
# Create your views here.

@api_view([ 'POST'])
def dologin(request):
    data = request.data
    print(data)
    serializer = logSerializer(data, many=False)
    print(serializer)
    return Response(serializer.data)


