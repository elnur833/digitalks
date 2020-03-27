$(document).ready(_ => {





    $("#lang-menu").on("click", function () {
        $(this).addClass("cls-border-lang");
        $(this).children().eq(0).addClass("cls-borderbottom-lang");
        $("#lang-menu ul").stop().slideToggle(100);
    },
        function () {
            $(this).removeClass("cls-border-lang");
            $(this).children().eq(0).removeClass("cls-borderbottom-lang");
            $("#lang-menu ul").stop().slideToggle(100);
        }
    );
    /// on click change language 
    $("#lang-menu ul li").on("click", function () {
        //select lang and apply changes
        var $lang = $(this).text();
        $("#lang-menu span").text($lang);
    });

    function openModal($modal) {
        // Note: fixed elements will also need the margin 
        // adjustment (like a fixed header, if you have one).
        var scrollBarWidth = window.innerWidth - document.body.offsetWidth;
        $('body')
            .css('margin-right', scrollBarWidth)
            .addClass('showing-modal');
        $modal.show();
    };

    function closeModal($modal) {
        $('body')
            .css('margin-right', '')
            .removeClass('showing-modal');
        $modal.hide();
    };

    // I prefer to generate and dynamically insert the modal
    // but for this demonstration it is already in the markup.
    var $modal = $('#modal');

    // Clicking outside the inner modal content should close it.
    $modal
        .click(function () {
            closeModal($modal);
        })
        .find('.modal-inner').click(function (event) {
            event.stopPropagation();
        });

    // Open the modal when open button is pressed.
    $('#open').click(function (event) {
        event.preventDefault();
        openModal($modal);
    });
    $('#open-connect').click(function (event) {
        event.preventDefault();
        openModal($modal);
    });
    $('#open-footer').click(function (event) {
        event.preventDefault();
        openModal($modal);
    });
    // Close the modal when open button is pressed.
    $('#close').click(function (event) {
        event.preventDefault();
        closeModal($modal);
    });

    // ----------- BURGER MENU
    const body = document.querySelector("body");
    const [burgerMenu, overlay] = [document.getElementById('burger-menu'), document.getElementById('menu')];
    burgerMenu.addEventListener('click', function () {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");

        this.classList.contains("close") ? body.style.overflowY = "hidden" : body.style.overflowY = "auto"
    });

    // ------ VIDEO ON SCROLL ---------- //
    // const videos = document.getElementsByTagName("video"),
    //     fraction = 0.8;
    // console.log(videos);
    // function checkScroll() {


    //     for (let i = 0; i < videos.length; i++) {

    //         let video = videos[i];
    //         let x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
    //             b = y + h, //bottom
    //             visibleX, visibleY, visible;

    //         visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
    //         visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

    //         visible = visibleX * visibleY / (w * h);

    //         if (visible > fraction) {
    //             video.play();
    //         } else {
    //             video.pause();
    //         }

    //     }

    // }
    // window.addEventListener('scroll', checkScroll, false);
    // window.addEventListener('resize', checkScroll, false);



    $(document).ready(function () {
        // Get media - with autoplay disabled (audio or video)
        var media = $('video');
        var tolerancePixel = 40;

        function checkMedia() {
            // Get current browser top and bottom
            var scrollTop = $(window).scrollTop() + tolerancePixel;
            var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

            media.each(function (index, el) {
                var yTopMedia = $(this).offset().top;
                var yBottomMedia = $(this).height() + yTopMedia;

                if (scrollTop < yBottomMedia && scrollBottom > yTopMedia) { //view explaination in `In brief` section above
                    $(this).get(0).play();
                } else {
                    $(this).get(0).pause();
                }
            });

            //}
        }
        $(document).on('scroll', checkMedia);
    });




    // (function () {
    //     //gett all the video elements on the document
    //     var vids = document.getElementsByTagName("video");
    //     console.log(vids);
    //     //loop through all the video elements
    //     for (var i = vids.length - 1; i >= 0; i--) {
    //         //pause all the videos by default
    //         vids[i].pause();
    //     }

    //     //triger an anonymous function that handles the playy, pause video actions
    //     window.onscroll = function () {
    //         for (var i = vids.length - 1; i >= 0; i--) {

    //             //get current scrol position
    //             var currentYpos = window.pageYOffset || document.documentElement.scrollTop;

    //             if (currentYpos >= vids[i].offsetTop
    //                 && currentYpos <= vids[i].offsetTop + vids[i].offsetHeight
    //             ) {
    //                 //Play video if the current scroll position 
    //                 //is between the top and bottom of the video element
    //                 vids[i].play();
    //             } else {
    //                 //else pause the video 
    //                 vids[i].pause();
    //             }
    //         }
    //     };
    // });









    /*var LogosArry = jQuery.makeArray($('.layout .item'));
    var Logos = LogosArry.length - 1;
    setInterval(function () {
        var randomNum = Math.floor(Math.random() * Logos);
        LogosArry[randomNum].classList.add("active")


    }, 800)
    setInterval(function () {
        $(".layout .item").removeClass("active");
    }, 1600)*/








    $(window).scroll(function () {


        if ($(window).scrollTop() > 250) {
            $(".animate-partners").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 2000) {
            $(".animate-works").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 5100) {
            $(".animate-about").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 2700) {
            $(".line1").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 3300) {
            $(".line2").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 3800) {
            $(".line3").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 4400) {
            $(".line4").css("animation-play-state", "running")
        }
        if ($(window).scrollTop() > 5000) {
            $(".line5").css("animation-play-state", "running")
        }
    })



    jQuery(document).ready(function () {

        var mouseX = 0, mouseY = 0;
        var xp = 0, yp = 0;

        $(document).mousemove(function (e) {
            mouseX = e.pageX-7;
            mouseY = e.pageY-7;
        });

        setInterval(function () {
            xp += ((mouseX - xp) / 6);
            yp += ((mouseY - yp) / 6);
            $("#circle").css({ left: xp + 'px', top: yp + 'px' });
        }, 10);

    });


})


var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3000,
    delay: (el, i) => 100 + 30 * i
  });

  $('._1cSXwx0GRH3cHOt6HZtOJW').click(function() {
    $('.menu_open').toggleClass('active active_second');
    $('.menu_box').slideToggle();
    $('body').toggleClass('fixed_menu');
    $('.left_menu ul').stop().fadeToggle(1200);
});

  