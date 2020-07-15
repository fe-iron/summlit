from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'home/index.html')


def upload(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['document']
        fs = FileSystemStorage()
        name = fs.save(uploaded_file.name, uploaded_file)
        context['url'] = fs.url(name)
        return render(request, 'home/index.html', context)


    return render(request, 'home/upload.html', context)

