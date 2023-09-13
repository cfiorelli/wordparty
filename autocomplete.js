$(document).ready(function() {
    $("#search").on('keyup', function() {
        let query = $(this).val();
        if (query.length >= 2) {
            $.ajax({
                url: "https://api.datamuse.com/sug",
                dataType: "jsonp",
                data: {
                    s: query
                },
                success: function(data) {
                    // Clear previous suggestions
                    $('#suggestions').empty();

                    if (data.length > 0) {
                        // Append each suggestion to the #suggestions div
                        data.forEach(function(item) {
                            $('#suggestions').append('<div class="suggestion-item">' + item.word + '</div>');
                        });
                    }
                }
            });
        } else {
            // Clear the suggestions if less than 2 characters
            $('#suggestions').empty();
        }
    });
});
