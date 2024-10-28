$(document).ready(function() {
    // Function to show the popup when a 'Show' button is clicked
    $('.btn-show').on('click', function() {
        // Get data attributes from the button
        let id = $(this).data('id');
        let name = $(this).data('name');
        let group = $(this).data('group');
        
        // Set the information in the popup
        $('#info').html(`ID: ${id}<br>Name: ${name}<br>Group: ${group}`);
        
        // Show the popup
        $('#popup').fadeIn();
    });
    
    // Function to close the popup when the 'OK' button is clicked
    $('#close-btn').on('click', function() {
        $('#popup').fadeOut();
    });
});
