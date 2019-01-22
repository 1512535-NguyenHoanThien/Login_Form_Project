from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'pages/home.html')
def contact(request):
    return render(request, 'pages/contact.html')
def register(request):
    return render(request,'pages/register.html')
def error(request):
    return render(request, 'pages/error.html')