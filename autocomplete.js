$(document).ready(function() {
    $("#search").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "https://api.datamuse.com/sug",
                dataType: "jsonp",
                data: {
                    s: request.term
                },
                success: function(data) {
                    response($.map(data, function(item) {
                        return {
                            label: item.word,
                            value: item.word
                        };
                    }));
                }
            });
        },
        minLength: 2
    });
});
