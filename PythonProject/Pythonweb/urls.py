
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import handler404, handler500

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('blog/',include('blog.urls'))
]

handler404 = 'home.views.error'
handler500 = 'home.views.error'