$(document).ready(function() {
    $("#search").on('keyup', function() {
        let query = $(this).val();
        if (query.length >= 2) {  // Only fetch suggestions when 2 or more characters are typed
            $.ajax({
                url: "https://api.datamuse.com/sug",
                dataType: "jsonp",
                data: {
                    s: query
                },
                success: function(data) {
                    if (data.length > 0) {
                        // Display the word of the first suggestion below the textbox
                        $('#suggestion').text(data[0].word);
                    } else {
                        // Clear the suggestion if there's no match
                        $('#suggestion').text('');
                    }
                }
            });
        } else {
            // Clear the suggestion if less than 2 characters
            $('#suggestion').text('');
        }
    });
});
