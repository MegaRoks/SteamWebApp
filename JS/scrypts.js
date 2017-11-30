$("#id_button").click(function (e) {
    e.preventDefault();
    var UserId = $('input[name=SteamId]').val().trim();
    if (!UserId) {
        alert("Вы забыли указать имя");
        return;
    }
    console.log("id_button");
    $.ajax({
        method: "GET",
        url: "http://project-megaroks931128.codeanyapp.com/users/add/?usersid=" + UserId,
        dataType: "json",
        success: function (data) {
            console.log(data);
            $("#steam-id").text(data.steamid);
        }
    })
});
