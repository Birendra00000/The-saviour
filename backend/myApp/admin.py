from django.contrib import admin
from .models import RegisterNumber,SOSMessage,TimeInterval,ViewNumber,DeletedNumber


# Register your models here.
admin.site.register(RegisterNumber)
# admin.site.register(SOSMessage)
@admin.register(SOSMessage)
class SOSMessageAdmin(admin.ModelAdmin):
    list_display = ['message']
admin.site.register(TimeInterval)
admin.site.register(ViewNumber)
admin.site.register(DeletedNumber)

