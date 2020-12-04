$(function () {
    $.ajax('/burgers', {
        type: 'GET'
    }).then((data) => {
        let devouredEl = $('#eatenBurgers');
        let notDevouredEl = $('#addedBurgers');

        let burgers = data.burgers;
        let len = burgers.length;

        for (let i = 0; i < len; i++) {
            let new_elem = '<li>' + burgers[i].id + '. ' + burgers[i].name + "<button class='change-devoured' data-id='" + burgers[i].id + "' data-newDevoured='" + !burgers[i].devoured + "'>";

            if (burgers[i].devoured) {
                new_elem += "Devour Burger";
            } else {
                new_elem += "Devoured";
            }

            new_elem += '</button>';

            new_elem += "<button class= 'delete-burger' data-id='" + burgers[i].id + " '>Delete</button></li>";

            if (burgers[i].devoured) {
                devouredEl.append(new_elem);
            } else {
                notDevouredEl.append(new_elem);
            }
        }
    });

    $(document).on('click', '.change-devoured', (event) => {
        let id = $(this).data('id');
        console.log(id);
        let nowDevoured = $(this).data('nowdevour') === true;

        let eatenState = {
            devoured: nowDevoured
        };

        $.ajax('/burgers/' + id, {
            type: 'PUT',
            data: JSON.stringify(eatenState),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function () {
            console.log('eaten state', nowDevoured);
            location.reload();
        });
    });
    $('.create-form').on('submit', (event) => {
        event.preventDefault();

        let newBurger = {
            name: $('#bg').val().trim(),
            devour: $('[name=devour]:checked').val().trim()
        };

        $.ajax('/burgers', {
            type: "POST",
            data: JSON.stringify(newBurger),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });

    $(document).on("click", ".delete-burger", (event) => {
        let id = $(this).data("id");
    });

})