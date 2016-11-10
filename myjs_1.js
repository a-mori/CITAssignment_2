$(document).ready(function() {
    var middle = document.getElementById('middle');
    var grid = document.getElementById("grid");
    var bioDiv = document.getElementById("bioDiv");
    
    var r = 0;
    var g = 0;
    var b = 0;
    
    $.ajax({
        url: 'tagline.html',
        dataType: 'html',
        success: function(resp) {
            console.log(resp);
            middle.innerHTML = resp;
        }
    });
    
    $.ajax({
        url: 'grid.html',
        dataType: 'html',
        success: function(resp) {
            console.log(resp);
            grid.innerHTML = resp;
            var img = document.getElementById('img3');
            
            var but4 = document.getElementById('button_4');
            
            but4.onclick = function() {
                img.style.backgroundImage = 'url(http://placekitten.com/'+r+'/'+g+')';
                r = Math.round(Math.random()*255);
                g = Math.round(Math.random()*255);
            }
        }
    });
    
    $.ajax({
        url: 'bio.html',
        dataType: 'html',
        success: function(resp) {
            console.log(resp);
            bioDiv.innerHTML = resp;
            var bio = document.getElementById('bio');
            
            var but2 = document.getElementById('button_2');
            
            but2.onclick = function() {
                bio.style.color = "rgb("+r+", "+g+", "+b+")";
                r = Math.round(Math.random()*255);
                g = Math.round(Math.random()*255);
                b = Math.round(Math.random()*255);
            }
        }
    });
});