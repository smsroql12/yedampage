$(document).ready(function(){
            $("body").toggleClass("no-bg");
            $(".bottom-btn").attr('disabled', true);
            setTimeout(hide_panel, 2300);
            function hide_panel(){
                $(".centering-wrapper").fadeOut(200, function() {
                    $(".wrapper").css('display', 'block');
                    $("body").toggleClass("no-bg");
                    $(".bottom-btn").attr('disabled', false);
                });
            }
            
            let tog = true;
            $(".bottom-btn").click(function() {
                if(tog == true) {
                    $(this).attr('disabled', true)
                    $(".wrapper").css('display', 'none');
                    $("body").toggleClass("no-bg");
                    $(".centering-wrapper").fadeIn(200);
                    $(".bottom-btn").attr('disabled', false);
                    tog = false;
                }
                else {
                    $(this).attr('disabled', true)
                    $(".centering-wrapper").fadeOut(200, function() {
                        $(".wrapper").css('display', 'block');
                        $("body").toggleClass("no-bg");
                        $(".bottom-btn").attr('disabled', false);
                        tog = true;
                    });
                }
            });
        });