(function(){
    if(!(String.prototype.repeatt)){
        String.prototype.repeatt = function(count){
            var output = "";
            for(var i = 0; i < count; i++){
                var output = output + this;
            }
            return output;
        }
    }

    var out = document.getElementsByClassName('output')[0];

    out.innerHTML = "Example - ".repeatt(4);
})();