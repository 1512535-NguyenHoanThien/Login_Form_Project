
from rest_framework import generics
from .models import Users
from .serializers import UsersSerializer
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json

@api_view(['GET', 'POST'])
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        # queryset = [{'title':'123',"artist":'123'}]
        queryset = Users.objects.all()
        serializer = UsersSerializer(queryset,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = json.loads(request.body)
        if data:
            username = data['username']
            password = data['password']
            try:
                queryset = Users.objects.get(username__exact=username,password__exact=password)
                return Response({'result':True,'message':'Dang nhap thanh cong'}, status=status.HTTP_200_OK)
            except Users.DoesNotExist:
                return Response({'result':False,'message':'Ten dang nhap hoac mat khau khong dung'}, status=status.HTTP_200_OK)
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

# class ListSongsView(generics.ListAPIView):
#     """
#     Provides a get method handler.
#     """
#     queryset = [{'title':'123',"artist":'123'}]

#     serializer_class = SongsSerializer