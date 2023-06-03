from rest_framework.serializers import ModelSerializer
from .models import Note,log


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
class logSerializer(ModelSerializer):
    class Meta:
        model = log
        fields = '__all__'
