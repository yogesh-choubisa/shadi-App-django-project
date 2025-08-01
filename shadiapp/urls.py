from django.contrib import admin
from django.urls import path
from shadiapp import views

urlpatterns = [
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login' ),
    path('logout/', views.logout_view, name='logout'),
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('privacy/', views.privacy, name='privacy'),
    path('terms/', views.terms, name='terms'),
    path('contact/', views.contact_view, name='contact'),
    path('contact/success/', views.contact_success, name='contact_success'),
]
