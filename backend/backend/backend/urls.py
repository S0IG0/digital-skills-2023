from django.contrib import admin
from django.urls import path

from uplaod.views import FileUploadView

urlpatterns = [
    path("api/admin/", admin.site.urls),
    path("api/upload/", FileUploadView.as_view(), name="upload"),
]
