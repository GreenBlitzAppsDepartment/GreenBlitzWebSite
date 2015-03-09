/**
 * Created by tomer on 05/12/14.
 */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function handleTeamMembers(){
    var construction = ["koren blomberg","amit benzi","roi goldfarb","roi alder","miki kovlarzik","tamir blomberg","fadi alfraune","magdi alkatnai","oria michaeli","alon panfil","bar taub","ben gordon"]
    var software = ["noam gal","amit banai","liam kimel","tomer schlesinger","eden rozen","oz tamir","shaked reich","ehud baraz","yoav hayut"];
    var media = ["jonatan broder","jonatan kaplan","tomer rosenfeld","itamar holtzman","tamir neiderman","ofir bergman"];
    var design = ["tal kogen","ido shyvitz(fanboy)","omer hareli","inbar yaakobi","shira yoren"];
    var ceo = ["avishag rosenbaum"];
    var chairman = ["ali levontin"]
}

function OpenInNewTab(url,shit) {
   /* sessionStorage.setItem('label',shit);
    var win = window.open(url, '_blank');
    win.focus();*/
}
function AnimateGallery(){
   /* jQuery('.anim0').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX', // Class to add to the elements when they are visible
        offset: 100
    });*/
}
var s = false;
var p = false;
var o = false;
var n = false;
var g = false;
var e = false;

$(document).keypress(function(event){
    if(String.fromCharCode(event.which) == "s"){

        s = true;
    }


    else if(String.fromCharCode(event.which) == "p"){
        if(s) {
            p = true;
        }     else{
            s = false;
            p = false;
            o = false;
            n = false;
            g = false;
            e = false;
        }
    }
    else if(String.fromCharCode(event.which) == "o"){
        if(s&&p) {

            o = true;
        }     else{
            s = false;
            p = false;
            o = false;
            n = false;
            g = false;
            e = false;
        }
    }
    else if(String.fromCharCode(event.which) == "n") {
        if (s && p && o) {
        n = true;
    }     else{
            s = false;
            p = false;
            o = false;
            n = false;
            g = false;
            e = false;
        }
    }
    else if(String.fromCharCode(event.which) == "g"){
        if (s && p && o&&n) {

            g = true;
        }
        else{
            s = false;
            p = false;
            o = false;
            n = false;
            g = false;
            e = false;
        }
    }
    else if(String.fromCharCode(event.which) == "e"){
        e = true;
    }
    else {
        s = false;
        p = false;
        o = false;
        n = false;
        g = false;
        e = false;
    }
    chekSPonge();
});

function chekSPonge(){
    if(s&&p&&o&&n&&g&&e){
        window.open('js/spnge/spongeKing.html','_blank');
        s = false;
        p = false;
        o = false;
        n = false;
        g = false;
        e = false;
    }
}

/*function Gallery(){
    alert("STARTED");
    var ul = document.getElementById("gallery_mini");
    var li = document.createElement("li");

    Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");
    var GameScore = Parse.Object.extend("Pic1");
    var query = new Parse.Query(GameScore);
    query.get("Fw5jBPXKfM", {
        success: function(gameScore) {
            var array = gameScore.get("ArrayData");
            for(var i = 0;i<array.length;i++){
                var link = array[i];
                var image = new Image();
                image.src = link;
                li.appendChild(image);
                ul.appendChild(li);
            }
        },
        error: function(object, error) {
            alert("Error please reload") ;
        }
    });

    alert("FINISHED");
}

Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");
*/

var space = 380;

$(window).scroll(function() {
    $('#menu').each(function(){
        var topOfWindow = $(window).scrollTop();

        if (400 < topOfWindow+space) {
            $(this).removeClass();
            $(this).addClass("fadeIn");
        }
        else{
            $(this).removeClass();
            $(this).addClass("fadeOut");
         }
    });
});
/*
$(window).scroll(function() {
    $('#contact_us').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+space) {
            $(this).addClass("slideRight");

        }
    });
});

$(window).scroll(function() {
    $('#wrapper').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+space) {
            $(this).addClass("bigEntrance");
        }
    });
});
$(window).scroll(function() {
    $('#about_wrapper').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+space) {
            $(this).addClass("fadeIn");
        }
    });
});

*/
var loaded = 0;
function getTextForMostThings() {
    Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");
    var GameScore = Parse.Object.extend("Pic1");
    var query = new Parse.Query(GameScore);
    query.get("5hYo5h5OJ6", {
        success: function (gameScore) {
            //setting about entry
            document.getElementById("about_short").innerHTML = gameScore.get("data");

        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("QarIEumed4", {
        success: function (gameScore) {
            //setting facebook link
            document.getElementById("men5").href = gameScore.get("data");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("MGKBejsfJ2", {
        success: function (gameScore) {

            document.getElementById("men6").href = gameScore.get("data");
            loaded++;
            if (loaded == 1) {
                $("#loader").fadeOut("x-slow");
                AnimateGallery();
            }
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
 /*   query.get("44KBZerng4", {
        success: function (gameScore) {
            document.getElementById("systems").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });

    query.get("PlNziueyvT", {
        success: function (gameScore) {

            document.getElementById("design").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("cwvUIecLVp", {
        success: function (gameScore) {

            document.getElementById("software").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("bknfFD49Ts", {
        success: function (gameScore) {

            document.getElementById("strategy").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("BYilLMGe1V", {
        success: function (gameScore) {

            document.getElementById("construction").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("Wwv2BMyAX5", {
        success: function (gameScore) {

            document.getElementById("start_up").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
        query.get("Jksh7K9qE4", {
            success: function (gameScore) {

                document.getElementById("mentors").src = gameScore.get("team_picture");
            },
            error: function (object, error) {
                alert("Error please reload") ;
            }
        });
    query.get("08POLeOtoP", {
        success: function (gameScore) {

            document.getElementById("charmane").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
    query.get("ccUUKycMTU", {
        success: function (gameScore) {

            document.getElementById("media").src = gameScore.get("team_picture");
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });*/
    //getting awards
    query.get("hnuGPXvr0a", {
        success: function (gameScore) {
            var reward_name = gameScore.get("ArrayData");
            var reward_year = gameScore.get("member_picture");
            var div = document.getElementById("awards");
                for (var i = 0; i < reward_name.length; i++) {
                    var shitt = document.createElement("li");
                    var oNewP = document.createElement("p");
                    var oText = document.createTextNode(reward_name[i] + " - " + reward_year[i]);
                    oNewP.style.fontSize = "large";
                    oNewP.appendChild(oText);
                    var x = document.createElement("IMG");
                    x.setAttribute("src", "images/medal.png");
                    x.setAttribute("width", "auto");
                    x.setAttribute("width", "100");

                    shitt.appendChild(x);
                    shitt.appendChild(oNewP);
                    div.appendChild(shitt);
                }
        },
        error: function (object, error) {
            alert("Error please reload") ;
        }
    });
}
/*
function getWorks(){
    Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");
    var GameScore = Parse.Object.extend("Pic1");
    var query = new Parse.Query(GameScore);
    query.get("N1k7LPjfJa", {
        success: function(gameScore) {
            var ceo_name = gameScore.get("member_picture");
            document.getElementById("ceo").setAttribute("src",ceo_name[0]);
            document.getElementById('ceo').style.height = 'auto';
            loaded++;
            if(loaded==2){
                sleep(500);
                $("#loader").fadeOut("x-slow");
                AnimateGallery();
            }
        },
        error: function(object, error) {
            alert("Error please reload") ;
        }
    });

}*/

/*var GameScore = Parse.Object.extend("Pic1");
var query = new Parse.Query(GameScore);
query.get("Fw5jBPXKfM", {
    success: function(gameScore) {
        var array = gameScore.get("ArrayData");
        for(var i = 0;i<array.length;i++){
            var ul = document.getElementById("gallery_mini");
            var li = document.createElement("li");
            var link = array[i];
            var image = new Image();
            image.src = link;
            li.appendChild(image);
            ul.appendChild(li);
        }
    },
    error: function(object, error) {
        alert("Error please reload") ;
    }
});*/
/*function getYoutubeLink() {
 Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");
 var GameScore = Parse.Object.extend("Pic1");
 var query = new Parse.Query(GameScore);
 query.get("gFU3LjvyrT", {
 success: function(gameScore) {
 var video_link = gameScore.get("data");
 video_link = video_link.replace("https:","");
 video_link = video_link.replace("watch?v=","embed/");
 video_link = video_link.replace(" ","");
 video_link = video_link.replace(" ","");
 video_link = video_link+"?autoplay=1";
 document.getElementById("video").setAttribute("src", video_link);
 loaded++;
 if(loaded==3){
 sleep(500);
 $("#loader").fadeOut("x-slow");

 }
 $('#video').each(function(){
 var imagePos = $(this).offset().top;
 var topOfWindow = $(window).scrollTop();
 if (imagePos < topOfWindow+400) {
 $(this).addClass("fadeIn");
 }
 });
 },
 error: function(object, error) {
 alert("Error please reload") ;
 }
 });

 }*/





$(document).ready(function(){
    $('.slider_wrapper')._TMS({
        show:0,
        pauseOnHover:false,
        prevBu:'.prev',
        nextBu:'.next',
        playBu:false,
        duration:800,
        preset:'fade',
        pagination:true,//'.pagination',true,'<ul></ul>'
        pagNums:false,
        slideshow:8000,
        numStatus:false,
        banners: 'fade',
        waitBannerAnimation:false,
        progressBar:false
    });
});
$(document).ready(function(){
    !function(){
        var map=[]
            ,names=[]
            ,win=$(window)
            ,header=$('header')
            ,currClass
        $('.content').each(function(n){
            map[n]=this.offsetTop
            names[n]=$(this).attr('id')
        })
        win
            .on('scroll',function(){
                var i=0
                while(map[i++]<=win.scrollTop());
                if(currClass!==names[i-2])
                    currClass=names[i-2]
                header.removeAttr("class").addClass(names[i-2])
            })
    }(); });
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
$(document).ready(function(){
    $().UItoTop({ easingType: 'easeOutQuart' });
});
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }

}
