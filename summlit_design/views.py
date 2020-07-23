from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.


def index(request):
    return render(request, 'home/index.html')


def upload(request):

    if request.method == 'POST':

    # ret = {}
    # if upload_file:
    #     items = request.FILES['files[]']
    #     print(items)
    #     print(request.user)
        items = request.FILES['files[]']
        items = items.size
        print(items)
        # for line in items.chunks():
        #     print(line)

        # for file in items:
        #     print(file)



        # fs = FileSystemStorage()
        # name = fs.save(uploaded_file.name, uploaded_file)

        # return JsonResponse(uploaded_file)


    return render(request, 'home/upload.html')


def upload1(request):

    # request should be ajax and method should be POST.
    if request.is_ajax and request.method == "POST":
        print("aaaahahaha")
    # some error occured

    return JsonResponse({"error": ""}, status=400)

def circularupload(request):
    return render(request, 'home/circularupload.html')