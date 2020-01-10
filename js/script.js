$(document).ready(function () {

    var clock;
    // Instantiate a coutdown FlipClock 172800 = 48hrs
    clock = $('.clock').FlipClock(86400, {
        clockFace: 'HourlyCounter',
        countdown: true,
        language: 'fr',
        showSeconds: true,
        callbacks: {
            start: function () {
                $('.message').html('The clock has started!');
            },
            stop: function () {
                $('.message').html('The clock has stopped!');
            }
        }
    });


    //modal2
  
        $(".modalbox").fancybox();
        $("#form2").submit(function () {
            return false;
        });
        $("#form2-btn").on("click", function () {

            // тут дальнейшие действия по обработке формы
            // закрываем окно, как правило делать это нужно после обработки данных
            $("#form2").fadeOut("slow", function () {
                $(this).before("");
                setTimeout("$.fancybox.close()", 500);
            });
        });


    $('form').submit(function (e) {
        e.preventDefault();
    });
    //modal3
 
        $(".modalbox").fancybox();
        $('.quiz_btn').fancybox({
            baseClass: "quiz_fancy"
        });

        $("#form3").submit(function () {
            return false;
        });
        $("#form3-btn").on("click", function () {

            // тут дальнейшие действия по обработке формы
            // закрываем окно, как правило делать это нужно после обработки данных
            $("#form3").fadeOut("slow", function () {
                $(this).before("");
                setTimeout("$.fancybox.close()", 500);
            });
        });


    // открытие попапа
    /*$("#btn-open").click(function() {
        $("#close").removeClass("none");
        $(".quiz").removeClass("none");
        $("#body").addClass("hidden");
        $("#step1").removeClass("none");
    });
    $("#btn-openn").click(function() {
        $("#close").removeClass("none");
        $(".quiz").removeClass("none");
        $("#body").addClass("hidden");
        $("#step1").removeClass("none");
    });*/
    // закрытие попапа
    $("#close").click(function () {
        $("#close").addClass("none");
        $(".quiz").addClass("none");
        $(".done").addClass("none");
        $("#body").removeClass("hidden");
    })
    $("#btn-step1").click(function () {
        $("#step1").addClass("none");
        $("#step2").removeClass("none");
    })
    $("#btn-step2").click(function () {
        $("#step2").addClass("none");
        $("#step3").removeClass("none");
    })
    $("#btn-step3").click(function () {
        $("#step3").addClass("none");
        $("#step4").removeClass("none");
    })
    $("#btn-step4").click(function () {
        $("#step4").addClass("none");
        $("#step5").removeClass("none")
    })
    $("#form3-btn").click(function () {
        $("#form3").addClass("none");
        $("#step5").removeClass("none")
    })

});