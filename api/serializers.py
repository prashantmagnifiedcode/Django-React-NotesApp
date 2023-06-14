from rest_framework.serializers import ModelSerializer
from .models import Note,log
from django.contrib.auth.models import User


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
class logSerializer(ModelSerializer):
    class Meta:
        model = log
        fields = '__all__'
#Signup Serializer
class SignupSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user