$(document).ready(function() {
    let currentTerm = '';
    $("#search").on('input', function() {
        const query = $(this).val();
        if(query.length > 1 && currentTerm !== query) {
            currentTerm = query;
            $.ajax({
                url: "https://api.datamuse.com/sug",
                dataType: "jsonp",
                data: {
                    s: query,
                    max: 1
                },
                success: function(data) {
                    if(data.length > 0) {
                        const suggestedWord = data[0].word;
                        if(suggestedWord.startsWith(query)) {
                            $('#shadowText').text(suggestedWord);
                        }
                    }
                }
            });
        } else {
            $('#shadowText').text(''); // Clear shadow text
        }
    }).on('keydown', function(e) {
        if (e.keyCode === 9) { // If the key is Tab
            e.preventDefault();
            $(this).val($('#shadowText').text());
            $('#shadowText').text('');
        }
    });
});
