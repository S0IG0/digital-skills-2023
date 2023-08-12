from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response


# Create your views here.
class FileUploadView(CreateAPIView):
    parser_classes = (FileUploadParser,)

    def create(self, request, *args, **kwargs):
        files = request.data['files']
        print(files)
        print(type(files))
        for file in files:
            print(file)
            print(type(file))
        # file_path = default_storage.save('uploaded_files/' + file_obj.name, ContentFile(file_obj.read()))

        return Response({'message': 'File uploaded successfully'}, status=status.HTTP_201_CREATED)
