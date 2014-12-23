$(document).ready(function(){

    Update();

    
    
    window.setInterval(function(){   
        Update();
    }, 1000);
    
    
    
    
    function Update(){
    
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;   
        }
        
        $("#R").css("background-color", "#" + hours.toString() + "0000").text(hours.toString());
        $("#G").css("background-color", "#00" + minutes.toString() + "00").text(minutes.toString());
        $("#B").css("background-color", "#0000" + seconds.toString()).text(seconds.toString());
    }
    
});