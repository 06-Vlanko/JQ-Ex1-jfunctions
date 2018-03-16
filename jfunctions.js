$(document).ready(function(){
    $('#click button').click (function(){
        $('#click div h1').css ("color", 'red');
    })
    $('#hide button:first-child').click (function(){
        $('#hide div h1').hide();
    })
    $('#hide button:nth-child(2)').click (function(){
        $('#hide div h1').show();
    })
    $('#toggle button').click (function(){
        $('#toggle div h1').toggle();
    })
    $('#slide button:first-child').click (function(){
        $('#slide div h1').slideDown('slow');
    })
    $('#slide button:nth-child(2)').click (function(){
        $('#slide div h1').slideUp('slow');
    })
    $('#fade button:first-child').click (function(){
        $('#fade h1').fadeIn('slow');
    })
    $('#fade button:nth-child(2)').click (function(){
        $('#fade h1').fadeOut('slow');
    })
    $('#addClass button:first-child').click (function(){
        $('#addClass div h1').addClass('addedClass');
    })
    $('#addClass button:nth-child(2)').click (function(){
        $('#addClass div h1').removeClass('addedClass');
    })
    $('#addBeforeAfter button:first-child').click (function(){
        $('#addBeforeAfter div h1').before('<p>This has been added "before" h1</p>');
    })
    $('#addBeforeAfter button:nth-child(2)').click (function(){
        $('#addBeforeAfter div h1').after('<p>This has been added "after" h1</p>')
    })
    $('#append button').click (function(){
        $('#append div h1').append('<h4>This is an h4 that has been appended to h1</h4>');
    })
    $('#htmlFunction button').click (function(){
        $('#htmlFunction div p').text($('#htmlFunction div').html());
        // console.log($('#htmlFunction div').html());
    })
    $('#attrfunction button:first-child').click (function(){
        $('#attrfunction div p').text('The class of h1 is: '+$('#attrfunction div h1').attr('class'));
    })
    $('#attrfunction button:nth-child(2)').click (function(){
        $('#attrfunction div h1').attr('class', 'addedClass');
        $('#attrfunction div p').text('The new of class of this div is: '+$('#attrfunction div h1').attr('class'));
    })
    $('#value button:first-child').click (function(){
        $('#value div h1').text($('#textValue').val());
    })
    $('#value button:nth-child(2)').click (function(){
        $('#textValue').val('I just forced this value in');
    })
    $('#click button').click (function(){
    })
    $('#click button').click (function(){
    })
    $('#click button').click (function(){
    })
    $('#click button').click (function(){
    })
})
