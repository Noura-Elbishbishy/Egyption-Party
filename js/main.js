// Toggle nav-content and aside visibility when sidebar-box is clicked
$('aside .sidebar-box').on('click', function() {
    if ($('.nav-content').hasClass('show')) {
        $('.nav-content').slideUp('slow', function() {
            $(this).removeClass('show');
        });
        $('aside').removeClass('d-none'); /* Ensure aside is visible when nav-content is hidden */
    } else {
        $('.nav-content').slideDown('slow', function() {
            $(this).addClass('show');
        });
        $('aside').addClass('d-none'); 
    }
});

// Close nav-content lma closebtn (i element) is clicked
$('.nav-content .closebtn').on('click', function() {
    $('.nav-content').slideUp('slow', function() {
        $(this).removeClass('show');
        $('aside').removeClass('d-none'); /*  aside yb2a visible when nav-content is closed */
    });
});
// slideUP w slideDown homa elly bydo effect al nav
// for slider
$('.info-title').click(function() {
    $('.info-content').slideUp('slow');  // Close any open info-content
    $(this).next('.info-content').stop(true, true).slideToggle('slow');
    //this-> 3la al info-title , next -> awl info-content b3dha
    // awl true -> clears the animation queue fmfysh ay info-content tany yt3mlo animation
    // tany true -> btnfz al animation 3la al info-content al awlany fe3ln
});

//for countdown
$(document).ready(function() {
    var targetDate = new Date("2026-05-14").getTime(); // التاريخ المستهدف للعد التنازلي

    var countdownFunction = setInterval(function() {
        var now = new Date().getTime();
        var diff = targetDate - now;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        $('#count .day p').html('-' + days + " days");
        $('#count .hours p').html(hours + " hours");
        $('#count .min p').html(minutes + " min");
        $('#count .sec p').html(seconds + " sec");

        if (diff < 0) {
            clearInterval(countdownFunction);
            $('#count').html("done");
        }
    }, 1000);
});
//charc remaining 
$(document).ready(function() { // htkhly ylwn w y2olo charch left/zyada
    var maxCharacters = 100;
    $('#Message').on('input', function() {
        var remaining = maxCharacters - $(this).val().length;
        $('#remaining-characters').text(remaining + ' characters remaining');

        if (remaining < 0) {
            $('#remaining-characters').css('color', 'red').text(remaining + ' characters extra');
            $('.sendbtn').attr('disabled', false); //attr= attributes , 3lshan aghyr attr al button
        } else {
            $('#remaining-characters').css('color', 'green').text(remaining + ' characters remaining');
        }
    });
});


