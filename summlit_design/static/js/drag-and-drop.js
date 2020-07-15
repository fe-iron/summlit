(function(){
    "use strict";
    //drop functionality
    var dropZone = document.getElementById("dropdown-inner");
    var startUpload = function(files){
        console.log(files);
    };
    dropZone.ondrop = function(e) {
        e.preventDefault();
        $('.music_block').attr('id', '');
        $('.download_file1').attr('id', '');
        $('.music_block').attr('class', '');
        $('.download_file1').attr('class', '');
        startUpload(e.dataTransfer.files);
    };

    dropZone.ondragover = function() {

            $('.music_block').attr('id', 'come-left');
            $('.download_file1').attr('id', 'come-right');

        return false;
    };
    dropZone.ondragleave = function() {

            $('.music_block').attr('id', '');
            $('.download_file1').attr('id', '');

        return false;
    };
}());


(function(){
    "use strict";
    //drop functionality
    var file_value = document.getElementById("customFile").value;
    //console.log(file_value);
    if(file_value == ""){
      //  console.log("hekndnd");
    }

}());