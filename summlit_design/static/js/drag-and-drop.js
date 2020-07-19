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
    dropZone.ondrop = function(e) {
        e.preventDefault();


        $('.music_block').attr('class', 'display-none');
        $('.download_file1').attr('class', 'display-none');
        $('.cloud_block').attr('class', 'display-none');
        $('.download_file').attr('class', 'display-none');

        $('#dropdown').attr('id', 'dropdown-after');
        $('#dropdown-p').attr('id', '');
        $('.box__dragndrop').attr('class', 'display-none');

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


