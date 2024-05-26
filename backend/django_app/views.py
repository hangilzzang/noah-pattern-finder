from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import datetime

class CurrentTimeAPIView(APIView):
    
    def get(self, request):
        current_time = datetime.now().strftime("%H:%M")
        return Response({"current_time": current_time})