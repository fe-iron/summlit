(function(){
    "use strict";
    //drop functionality
    var dropZone = document.getElementById("dropdown-inner");
    var barFill = document.getElementById("my_canvas");
    var barFillText = document.getElementById("bar-fill-text");

    var startUpload = function(files){
        app.uploader({
            files: files,
            progressBar: barFill,
            progressText: barFillText,
            processor: 'upload',

            finished: function(data){
                //console.log(data);
            },

            error: function(){
                console.log("There was an error");
            }
        });
    };


    //standard upload
    document.getElementById('document').oninput = function(e){
        var standardUploadFiles = document.getElementById('document').files;
        e.preventDefault();
//        console.log(standardUploadFiles)
        //show file length
        if(standardUploadFiles.length == 1){
            $('.uploaded-file').html(standardUploadFiles[0]['name'] +' is uploading ...');
        }else{
            $('.uploaded-file').html(standardUploadFiles.length +" files uploading ...");
        }
        //remove tags before showing circle animation
        $('.music_block').attr('class', 'display-none');
        $('.download_file1').attr('class', 'display-none');
        $('.cloud_block').attr('class', 'display-none');
        $('.download_file').attr('class', 'display-none');

        $('#dropdown').attr('id', 'dropdown-after');
        $('#dropdown-p').attr('id', '');
        $('.box__dragndrop').attr('class', 'display-none');

        $('#browse-button').attr('class', "display-none");
        startUpload(standardUploadFiles);
    };

    dropZone.ondrop = function(e) {
        e.preventDefault();
//        console.log("under on drop");
        if(e.dataTransfer.files.length == 1){
            $('.uploaded-file').html(e.dataTransfer.files[0]['name'] +' is uploading ...');
        }else{
            $('.uploaded-file').html(e.dataTransfer.files.length +" files uploading ...");
        }
        $('.music_block').attr('class', 'display-none');
        $('.download_file1').attr('class', 'display-none');
        $('.cloud_block').attr('class', 'display-none');
        $('.download_file').attr('class', 'display-none');

        $('#dropdown').attr('id', 'dropdown-after');
        $('#dropdown-p').attr('id', '');
        $('.box__dragndrop').attr('class', 'display-none');

        $('#browse-button').attr('class', "display-none");
        startUpload(e.dataTransfer.files);
    };

    dropZone.ondragover = function() {

            $('.music_block').attr('id', 'come-left');

            $('.cloud_block').attr('id', 'come-right-cloud_block');
            $('.download_file').attr('id', 'come-left-download');
            $('.download_file1').attr('id', 'come-right');
            $('#dropdown-inner').attr('id', 'dropdown-inner-black');

        return false;
    };
    dropZone.ondragleave = function() {
            $('#come-left-download').attr('id', '');
            $('#come-right-cloud_block').attr('id', '');
            $('.music_block').attr('id', '');
            $('.download_file1').attr('id', '');
            $('#dropdown-inner-black').attr('id', 'dropdown-inner');



        return false;
    };
}());


