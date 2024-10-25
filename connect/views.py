from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
from django.db import IntegrityError
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse

from .models import User, Project

@login_required(login_url = "/connect/login/")
def index(request):
    return render(request, "connect/index.html")


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "connect/login.html", {
                "message": "Invalid username and/or password."
            })
    else:
        return render(request, "connect/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "connect/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "connect/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "connect/register.html")

def start_project(request):
    if request.method == "POST":
        project_name = request.POST.get("projectName")
        company_name = request.POST.get("companyName")
        idea = request.POST.get("idea")
        about = request.POST.get("about")
        expected_spend = request.POST.get("amount")
        expected_time = request.POST.get("time")
        location = request.POST.get("location")
        description = request.POST.get("description")
        image_link = request.POST.get("image")

        # Save the project
        Project.objects.start(
            user=request.user,
            project_name=project_name,
            company_name=company_name,
            idea=idea,
            about=about,
            expected_spend=expected_spend,
            expected_time=expected_time,
            location=location,
            description=description,
            image_link=image_link,
        )

        # Redirect to the index page after successful form submission
        return redirect("index")

    return render(request, "connect/start-project.html")

def event(request):
    return render(request, "connect/events.html")