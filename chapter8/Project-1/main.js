$(document).ready(function($) {
    $('#form').on('submit', function(event) {

        event.preventDefault();

        //set variables, get inputs and create form data
        var $inputs = $(this).find('.form__input--text');
        var $form = $('#form').first();
        var $gears = $('.gears');
        var firstName = $('#first-name').val();
        var formData = new FormData();

        //add hidden class
        $form.addClass('form-hidden');
        $gears.addClass('gears-shown');
        // $form.children().each(function(index, child) {
        //     child.classList.add("form-row--hidden");
        // });

        //loop through inputs and add data to formData
        $inputs.each(function(index, input) {
            formData.append(input.id, input.value);
        });

        //set cookie
        document.cookie = "name=" + firstName;

        // ajax call
        $.ajax({
            url: 'http://localhost:8000/create_account',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            type: 'POST',
            data: formData,
            processData: false,
            success: function(response) {
                setTimeout(function() {
                    $form.children().remove();
                    var confirmationMessage = document.createElement("p");
                    confirmationMessage.classList.add("confirmation-message");
                    confirmationMessage.textContent = "Thanks, " + firstName + ". " + response.data;
                    $form.append(confirmationMessage).removeClass('form-hidden');
                    $gears.removeClass('gears-shown');
                }, 2000);
                console.log("Request successful.");
            }
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

        // $.get("http://localhost:8000/chapter8/createaccount.json", function(response) {
        //     console.log(response);
        // });

    });
});
