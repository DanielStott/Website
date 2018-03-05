(function () {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    }

    $.ajax({
        method: "GET",
        type:"JSON",
        url: "https://api.github.com/users/WilliamStott/repos",
    })
        .done(function (data) {
            PopulateCards(data);
        });

    function PopulateCards(data) {
        var cardTemplate = "<div class='card text-white bg-dark'>" +
            "<img class='card-img-top' src='http://via.placeholder.com/260x180' alt='Card image'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>{0}</h5>" +
            "<p class='card-text'>{1}</p>" +
            "<small class='text-muted'>Last updated on {2}</small>" +
            "<div class='ml-0 mt-1'><a class='btn btn-primary' href='{3}' role='button'>Learn More</a></div>"
            "</div>" +
            "</div>";

        $cards = $('#cards');

        for (var i = 0, repoLength = data.length; i < repoLength; i++) {
            if (i % 3 == 0) {
                $cards.append('<div class="card-group"></div>');
            }

            $cards.find('.card-group').last().append(cardTemplate.format(data[i].name, data[i].description,
                (data[i].updated_at).replace(/[A-Z]/g, " "), data[i].html_url));

        }

    }


}());
