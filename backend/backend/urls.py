from django.urls import path
from django_app.views import CurrentTimeAPIView
# from backend.django_app.views import CurrentTimeAPIView

urlpatterns = [
    path('api/current-time/', CurrentTimeAPIView.as_view(), name='current_time'),
]
