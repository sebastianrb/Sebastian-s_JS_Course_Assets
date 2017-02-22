//create ajax object
// var xhr = new XMLHttpRequest();

// //attach event handler to listen for state change
// // xhr.onreadystatechange = function() {
// //     if(xhr.readyState === 4) {
// //         //4 indicates the transaction is done; time to do something with the response

// //     }
// // }

// //attach event handler to listen for request success
// xhr.onload = function() {
//     if(xhr.status === 200) {
//         console.log("AJAX request executed successfully!");
//         response = xhr.response;
//         responseObject = JSON.parse(response);
//         console.log("Response data: ", JSON.parse(response));
//         console.log("Content length: ", xhr.getResponseHeader("Content-Length"));

//         //print data to screen
//         for(var property in responseObject) {
//             var newP = document.createElement("p");
//             newP.textContent = responseObject[property];
//             document.body.appendChild(newP);
//         }
//     } else {
//         console.log("There was a problem with your AJAX request");
//     }
// }

// //open a connection - supply requets method and URL that we want to make the request to
// xhr.open("GET", "./response.json");

// //set http headers
// xhr.setRequestHeader("Accept", "application/json");
// xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");


// //send teh request
// xhr.send();

// //form data
// var form = document.getElementById('login');
// form.addEventListener('submit', function(event) {
//     // var xhr = new XMLHttpRequest(),
//     //     model = {
//     //        username: document.getElementById('username').value,
//     //        password: document.getElementById('password').value
//     //     };
//     // xhr.open('POST', '/signin');
//     // xhr.send(JSON.stringify(model));
//     // event.preventDefault();
//     var xhr = new XMLHttpRequest(),
//         formdata = new FormData();
//     formdata.append('username', document.getElementById('username').value);
//     formdata.append('password', document.getElementById('password').value);
//     xhr.open('POST', '/signin');
//     console.log(formdata);
//     xhr.send(formdata);
//     event.preventDefault();
// });




//AJAX uploads

// var uploadForm = document.getElementById('upload');
// uploadForm.addEventListener('submit', function() {
//     var xhr = new XMLHttpRequest(),
//         formData = new FormData(),
//         files = uploadForm.querySelector('#fileToUpload').files,
//         progressBar = document.getElementById('uploadProgress');
//     for (var x = 0; x < files.length; x++) {
//         formData.append('file', files[x], files[x].name);
//     }
//     xhr.upload.onprogress = function(e) {
//         if (e.lengthComputable) {
//              progressBar.value = (e.loaded / e.total) * 100;
//         }
//     };
//     xhr.open('POST', '/upload');
//     xhr.send(formData);
//     event.preventDefault();
// });

//determine length of time an upload takes
// var uploadForm = document.getElementById('upload');
// uploadForm.addEventListener('submit', function() {
//     var uploadSeconds;
//     var startTime;
//     var endTime;
//     var diff;
//     var xhr = new XMLHttpRequest(),
//         formData = new FormData(),
//         files = uploadForm.querySelector('#fileToUpload').files,
//         progressBar = document.getElementById('uploadProgress');
//     for (var x = 0; x < files.length; x++) {
//         formData.append('file', files[x], files[x].name);
//     }

//     //use onloadstart event to get time at start of upload
//     xhr.upload.onloadstart = function(e) {
//         startTime = new Date() / 1000;
//         // console.log(startTime);
//     };

//     //use onloadend event to get time at end of upload
//     xhr.upload.onloadend = function(e) {
//         endTime = new Date() / 1000;
//         // console.log(startTime);
//         // console.log(endTime);

//         //calculate time it took to complete upload
//         uploadSeconds = endTime - startTime;
//         console.log("This upload took " + uploadSeconds.toFixed(4) + " second(s).");
//     };

//     xhr.open('POST', '/upload');
//     xhr.send(formData);
//     event.preventDefault();
// });

$('#login').on("submit", function(event) {
    //get inputs and initialize form data
    var $inputs = $(this).find('input');
    var formData = new FormData();

    //save input keys and values to form data object
    $inputs.each(function(index, input) {
        formData.append(input.id, input.value);
    });

    //AJAX request using the ajax method
    // $.ajax({
    //     url: "http://localhost:8000/signin",
    //     type: 'POST',
    //     data: formData,
    //     processData: false,
    //     success: function(response) {
    //         console.log("Response data: ", response);
    //     }
    // })
    // .done(function() {
    //     console.log("Request success");
    // })
    // .fail(function() {
    //     console.log("Request error");
    // })
    // .always(function() {
    //     console.log("Request complete");
    // });

    //get method
    // $.get("http://localhost:8000/get_request", "test_data", function(response) {
    //     console.log(response);
    // });

    // //load method
    // $('#response').load('/get_request');


    var randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    //make ajax request using jquery
    $('#response').load('http://numbersapi.com/' + randomNumber);

    event.preventDefault();
});


// function ajaxRandomNumber() {
//     //generate random number
//     var randomNumber = Math.floor(Math.random() * 100);
//     console.log(randomNumber);

//     //make ajax request using jquery
//     $('#response').load('http://numbersapi.com/' + randomNumber);
// }

// ajaxRandomNumber();













