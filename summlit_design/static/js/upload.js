
var app = app || {};

(function(o) {
    "use strict";
    //private methods

    var ajax, getFormData, setProgress;

    ajax = function(data) {
        var xmlhttp = new XMLHttpRequest();




        var uploaded;

        xmlhttp.addEventListener('readystatechange', function(){
            if(this.readyState === 4){
                if(this.status === 200){
                    uploaded = JSON.parse(this.response);
                    if(typeof o.options.finished === 'function'){
                        o.options.finished(uploaded);
                    }
                } else{
                    if(typeof o.options.error === 'functions'){
                        o.options.error();
                    }
                }
            }
        });

        xmlhttp.upload.addEventListener('progress', function(e){
            var percent;

            if(e.lengthComputable === true){
                percent = Math.round((event.loaded / event.total) * 100);
                setProgress(percent);
            }
        });

        //xmlhttp.open('post', o.options.processor);

        //xmlhttp.send(data);
    };

    getFormData = function(source) {
        var data = new FormData();
        var i = 0;
        for(i=0; i < source.length; i++){
            data.append('files[]', source[i]);
        }
        return data;
    };

    setProgress = function() {

    };
    o.uploader = function(options) {
        o.options = options;
        if(o.options.files !== undefined){
            ajax(getFormData(o.options.files));
        }
    }

}(app));