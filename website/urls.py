from django.contrib import admin
from django.urls import path
from .views import index

app_name = 'website'


urlpatterns = [
    path('', index, name="index"),
]
