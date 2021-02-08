from django.shortcuts import render
from notice.models import Notice

def index(request):
    notices = Notice.objects.all().order_by('-published_date')[:3]
    return render(request, "website/index.html", context={"notices": notices})
