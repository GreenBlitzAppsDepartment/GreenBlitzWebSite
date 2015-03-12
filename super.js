/**
 * Created by tomer on 23/02/15.
 */
function hello(){
    $("*").each(function() {
        var cur = $(this);
        if(cur.css("cursor") == "pointer") {
            cur.css("cursor", "url(images/logo.ico)");
        }
    });
        var array = new Array;
        for (var l = 1; l < 8; l++) {
            array[l] = "images/gallery_pics/img_"+l+".JPG";
        }
        for (var i = 1; i < array.length; i++) {
            var ul = document.getElementById("gallery_mini");
            var li = document.createElement("li");
            var link = array[i];
            var image = new Image();
            image.src = link;
            li.appendChild(image);
            ul.appendChild(li);
        }
}
