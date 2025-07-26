from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

def index(request):
    form = ContactForm()
    return render(request, "index.html", {"form": form})

def privacy(request):
    return render(request, "privacy.html")

def terms(request):
    return render(request, "terms.html")

def contact_view(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            send_mail(
                subject=f"New Contact from {name}",
                message=message,
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
            return render(request, "contact_success.html")
    else:
        form = ContactForm()
    
    return render(request, "index.html", {"form": form})

def contact_success(request):
    return render(request, "contact_success.html")
