// Javascript

// call to jQuery ready function
//make sure html and css is loaded

$(document).ready(function () {

    console.log('ready');


    //when waitingButton Id is hovered
    $('#waitingButton').hover(function () {
        //change the color of the type
        $('#percentage div').css('background-color', '#ed2b94');
        $('#percentage div p').html('Waiting~15%').css('color', 'white');
    }, function () {
        $('#percentage div').css('background-color', 'black');
        $('#percentage div p').html('Waiting~15%').css('color', 'black');


    });

    //when waitingButton Id is pressed
    $('#waitingButton').click(function () {
        //change the color of the type
        $('#results ul li a:not(.waiting)').css('color', '#575757');
        $('.waiting').css('color', '#ed2b94');
        $('#percentage div').css('background-color', '#ed2b94');
        $('#percentage div p').html('Waiting~15%').css('color', 'white');
    });


    /////////////////

    //when GoingButton Id is hovered
    $('#goingButton').hover(function () {
        //change the color of the type
        $('#percentage div').css('background-color', '#9ecb3b');
        $('#percentage div p').html('Going~20%').css('color', 'white');
    }, function () {
        $('#percentage div').css('background-color', 'black');
        $('#percentage div p').html('Going~20%').css('color', 'black');


    });

    //when goingButton Id is pressed
    $('#goingButton').click(function () {
        //change the color of the type
        $('#results ul li a:not(.going)').css('color', '#575757');
        $('.going').css('color', '#9ecb3b');
        $('#percentage div').css('background-color', '#9ecb3b');
        $('#percentage div p').html('Going~20%').css('color', 'white');
    });

    /////////////////

    //when workingButton Id is hovered
    $('#workingButton').hover(function () {
        //change the color of the type
        $('#percentage div').css('background-color', '#f47621');
        $('#percentage div p').html('Working~45%').css('color', 'white');
    }, function () {
        $('#percentage div').css('background-color', 'black');
        $('#percentage div p').html('Working~45%').css('color', 'black');


    });

    //when workingButton Id is pressed
    $('#workingButton').click(function () {
        //change the color of the type
        $('#results ul li a:not(.working)').css('color', '#575757');
        $('.working').css('color', '#f47621');
        $('#percentage div').css('background-color', '#f47621');
        $('#percentage div p').html('Working~45%').css('color', 'white');


    });

    /////////////////

    //when chillingButton Id is hovered
    $('#chillingButton').hover(function () {
        //change the color of the type
        $('#percentage div').css('background-color', '#68c8c1');
        $('#percentage div p').html('Chilling-20%').css('color', 'white');
    }, function () {
        $('#percentage div').css('background-color', 'black');
        $('#percentage div p').html('Chilling-20%').css('color', 'black');


    });

    //when chillingButton Id is pressed
    $('#chillingButton').click(function () {
        //change the color of the type
        $('#results ul li a:not(.chilling)').css('color', '#575757');
        $('.chilling').css('color', '#68c8c1');
        $('#percentage div').css('background-color', '#68c8c1');
        $('#percentage div p').html('Chilling-20%').css('color', 'white');

    });
    
    
    /////////////////

    //when Activities is pressed
    $('#pressingArea ul li a h2').click(function () {
        //change the color of the type
        $('.chilling').css('color', '#68c8c1');
        $('.working').css('color', '#f47621');
        $('.going').css('color', '#9ecb3b');
        $('.waiting').css('color', '#ed2b94');
        $('#percentage div').css('background-color', 'black');
        $('#percentage div p').html('');
        $('#results ul li .tip').css('visibility', 'hidden');
        //prevent page from reloading


    });


    $('#pressingArea ul li a h2').hover(function () {
        //hover effect over activity
        $('#pressingArea ul li a h2').css('color', 'yellow');
    }, function () {
        //color of activity to white
        $('#pressingArea ul li a h2').css('color', 'white');

    });


    /////////////////
    //when Date is pressed
    $('#results h2').click(function () {
        //show all the tool tips

        $('#results ul li .tip').css('visibility', 'visible');
        //prevent page from reloading


    });


    $('#results h2').hover(function () {
        //hover effect over activity
        $('#results h2').css('color', 'purple');
    }, function () {
        //color of activity to white
        $('#results h2').css('color', 'white');

    });

    
    ///////////////// all the times
    
    //shows the 3:15 tool tip
    $('#results ul li:first-child').click(function () {
        //reveals the tool tip
        $('#results ul li:first-child .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 3:15 tool tip
    $('#results ul li:first-child').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:first-child .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 3:30 tool tip
    $('#results ul li:nth-child(2)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(2) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 3:30 tool tip
    $('#results ul li:nth-child(2)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(2) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 3:45 tool tip
    $('#results ul li:nth-child(3)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(3) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 3:45 tool tip
    $('#results ul li:nth-child(3)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(3) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 4:00 tool tip
    $('#results ul li:nth-child(4)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(4) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 4:00 tool tip
    $('#results ul li:nth-child(4)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(4) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 4:15 tool tip
    $('#results ul li:nth-child(5)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(5) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 4:15 tool tip
    $('#results ul li:nth-child(5)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(5) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 4:30 tool tip
    $('#results ul li:nth-child(6)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(6) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 4:30 tool tip
    $('#results ul li:nth-child(6)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(6) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 4:45 tool tip
    $('#results ul li:nth-child(7)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(7) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 4:45 tool tip
    $('#results ul li:nth-child(7)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(7) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 5:00 tool tip
    $('#results ul li:nth-child(8)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(8) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 5:00 tool tip
    $('#results ul li:nth-child(8)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(8) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });
    //shows the 5:15 tool tip
    $('#results ul li:nth-child(9)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(9) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 5:15 tool tip
    $('#results ul li:nth-child(9)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(9) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });
    //shows the 5:30 tool tip
    $('#results ul li:nth-child(10)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(10) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 5:30 tool tip
    $('#results ul li:nth-child(10)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(10) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 5:45 tool tip
    $('#results ul li:nth-child(11)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(11) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 5:45 tool tip
    $('#results ul li:nth-child(11)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(11) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 6:00 tool tip
    $('#results ul li:nth-child(12)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(12) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 6:00 tool tip
    $('#results ul li:nth-child(12)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(12) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 6:15 tool tip
    $('#results ul li:nth-child(13)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(13) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 6:15 tool tip
    $('#results ul li:nth-child(13)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(13) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 6:30 tool tip
    $('#results ul li:nth-child(14)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(14) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 6:30 tool tip
    $('#results ul li:nth-child(14)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(14) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });


    //shows the 6:45 tool tip
    $('#results ul li:nth-child(15)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(15) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 6:45 tool tip
    $('#results ul li:nth-child(15)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(15) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 7:00 tool tip
    $('#results ul li:nth-child(16)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(16) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 7:00 tool tip
    $('#results ul li:nth-child(16)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(16) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 7:15 tool tip
    $('#results ul li:nth-child(17)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(17) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 7:15 tool tip
    $('#results ul li:nth-child(17)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(17) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 7:30 tool tip
    $('#results ul li:nth-child(18)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(18) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 7:30 tool tip
    $('#results ul li:nth-child(18)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(18) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 7:45 tool tip
    $('#results ul li:nth-child(19)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(19) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 7:45 tool tip
    $('#results ul li:nth-child(19)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(19) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });

    //shows the 8:00 tool tip
    $('#results ul li:nth-child(20)').click(function () {
        //reveals the tool tip
        $('#results ul li:nth-child(20) .tip').css('visibility', 'visible');
        //prevent page from reloading
        return false;
    });

    //hides the 8:00 tool tip
    $('#results ul li:nth-child(20)').dblclick(function () {
        //show mouseEvents section
        $('#results ul li:nth-child(20) .tip').css('visibility', 'hidden');
        //prevent page from reloading
        return false;
    });


});
