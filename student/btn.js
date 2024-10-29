$(document).ready(function() {
    
    $('.btn-show').click(function() {
       
        var row = $(this).closest('tr');

        
        var userId = row.find('td').eq(0).text();   
        var userName = row.find('td').eq(1).text();
        var userGroup = row.find('td').eq(2).text(); 

       
        $('#info').html("ID: " + userId + "<br>Name: " + userName + "<br>Group: " + userGroup);

       
        $('#popup').show();
    });

   
    $('#close-btn').click(function() {
       
        $('#popup').hide();
    });
});
