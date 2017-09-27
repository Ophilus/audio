        (function player(){
            var now = 0;
            $("#player")[0].src = $("#playlist li a")[0];
            $("#playlist li a").click(function(e){
               e.preventDefault(); 
               $("#player")[0].src = this;
               $("#player")[0].play();
               $("#playlist li").removeClass("now");
                now = $(this).parent().index();
                $(this).parent().addClass("now");
            });
            
             $("#player")[0].addEventListener("ended", function(){
               now++;
                if(now == $("#playlist li a").length)
                    now = 0;
                $("#playlist li").removeClass("now");
                $("#playlist li:eq("+now+")").addClass("now");
                 $("#player")[0].src = $("#playlist li a")[now].href;
                 $("#player")[0].play();
            });
        })();
