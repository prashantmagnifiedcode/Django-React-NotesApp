from django.urls import path
from . import views
from . import logview
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('notes/', views.getNotes, name="notes"),
    # path('log/login/', logview.dologin, name="log"),
    path('authy/signup', logview.SignupAPI, name='api-authy-signup'),
    path('authy/login', logview.LoginAPI.as_view(), name='knox_login'),
    # path('authy/whoami', UserAPI.as_view(), name='api-who-am-i'),

    # path('notes/create/', views.createNote, name="create-note"),
    #path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    #path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),

    path('notes/<str:pk>/', views.getNote, name="note"),
]
