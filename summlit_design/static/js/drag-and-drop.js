(function(){
    "use strict";
    //drop functionality
    var dropZone = document.getElementById("dropdown-inner");
    dropZone.ondragover = function() {
        this.className = 'drop';
        return false;
    };

}());