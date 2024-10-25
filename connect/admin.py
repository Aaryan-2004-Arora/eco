from django.contrib import admin
from .models import User, Project

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'company_name', 'user', 'expected_spend', 'expected_time', 'location', 'verify')
    search_fields = ('project_name', 'company_name', 'user__username')
    list_filter = ('location', 'expected_time', 'verify')
    ordering = ('project_name',)
    readonly_fields = ('image_link',)
    list_editable = ('verify',)  # Allows verifying directly in the list view

