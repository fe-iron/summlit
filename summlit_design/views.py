from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'home/index.html')


def upload(request):
    if request.method == 'POST' and request.is_ajax:
        print("shhshs")
        uploaded_file = request.FILES['document']
        fs = FileSystemStorage()
        name = fs.save(uploaded_file.name, uploaded_file)

        return render(request, 'home/upload.html')

    return render(request, 'home/upload.html')


def upload1(request):

    # request should be ajax and method should be POST.
    if request.is_ajax and request.method == "POST":
        print("aaaahahaha")
    # some error occured

    return JsonResponse({"error": ""}, status=400)