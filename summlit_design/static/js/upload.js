// using jQuery
    const csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

var app = app || {};

(function(o) {

    //private methods

    var ajax, getFormData, setProgress;

    ajax = function(data) {
        var xmlhttp = new XMLHttpRequest();
        var uploaded;

//        console.log();
        xmlhttp.addEventListener('readystatechange', function(){
            if(this.readyState === 4){
                if(this.status === 200){
//                    console.log(this.response);



                } else{
                    if(typeof o.options.error === 'function'){
                        o.options.error();
                    }
                }
            }
        });

        xmlhttp.upload.addEventListener('progress', function(e){
            var percent;
//            console.log(e);
            if(e.lengthComputable === true){
                percent = Math.round((event.loaded / event.total) * 100);
                setProgress(percent);
            }
        });

        xmlhttp.open('post', o.options.processor);
        xmlhttp.setRequestHeader("X-CSRFToken", csrftoken);
        xmlhttp.send(data);
    };

    getFormData = function(source) {
        var formData = new FormData();
        var i;
        for(i=0; i<source.length; i=i+1){
            formData.append('files[]',source[i]);

        }

        return formData;

    };

    setProgress = function(value) {
//        if(o.options.progressBar !== undefined){
//            if(value){
//                o.options.progressBar.style.width = value + '%'
//            } else{
//                o.options.progressBar.style.width = 0;
//            }
//        }

//        if(o.options.progressText !== undefined){

                var ctx = document.getElementById("my_canvas").getContext('2d');
                var al = value;
                var start = 4.72;
                var cw = ctx.canvas.width;
                var ch = ctx.canvas.height;
                var diff;
                function progressSim(){
                    diff = ((al / 100) * Math.PI*2*10).toFixed(2);
                    ctx.clearRect(0, 0, cw, ch);
                    ctx.lineWidth = 20;
                    ctx.fillStyle = '#536DFE';
                    ctx.strokeStyle = '#536DFE';
                    ctx.lineCap = "round";
                    ctx.font = "20px 'Rubik', sans-serif";
                    ctx.textAlign = 'center';
                    ctx.fillText(al+'%', cw*.5, ch*.5+2, cw);
                    ctx.beginPath();
                    ctx.arc(100, 100, 88, start, diff/10+start, false);
                    ctx.stroke();

                }
                progressSim();



    };
    o.uploader = function(options) {
        o.options = options;

        if(o.options.files !== undefined){
            ajax(getFormData(o.options.files));
        }
    }

}(app));