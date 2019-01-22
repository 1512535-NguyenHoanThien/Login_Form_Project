from django.shortcuts import render
from .models import Post

def list(resquest):
    Data = {'Posts': Post.objects.all().order_by("date")}
    return render(resquest, 'blog/blog.html', Data) 

def post(resquest, id):
    post = Post.objects.get(id=id)
    return render(resquest,'blog/post.html', {'post':post})