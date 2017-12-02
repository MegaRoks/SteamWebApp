$("#id_button").click(function (e) {
    e.preventDefault();
    var UserId = $('input[name=SteamId]').val().trim();
    if (!UserId) {
        alert("Вы забыли указать имя");
        return;
    }

//    if (!$('#history')) {
//        $('#hisroty').append(`
//                        <table id="historys">
//                   <h3>История</h3>
//                    <thead>
//                        <tr class="row">
//                            <th class="nyr">SteamID</th>
//                        </tr>
//                    </thead>
//                </table>`);
//    }

    $.ajax({
        method: "GET",
        url: "http://project-megaroks931128.codeanyapp.com/users/add/?usersid=" + UserId,
        dataType: "json",
        success: function (data) {
            //            $("#info-steamid").text(data.steamid);
            //            $("#info-communityvisibilitystate").text(data.communityvisibilitystate);
            //            $("#info-personaname").text(data.personaname);
            //            $("#info-lastlogoff").text(data.lastlogoff);
            //            $("#info-realname").text(data.realname);
            //            $("#info-personastate").text(data.personastate);
            //            $("#info-timecreated").text(data.primaryclanid);
            //            $("#info-gameextrainfo").text(data.gameextrainfo);
            //            $("#info-EconomyBan").text(data.EconomyBan);
            //            $("#info-NumberOfGameBans").text(data.NumberOfGameBans);
            //            $("#info-CommunityBanned").text(data.CommunityBanned);
            //            $("#info-VACBanned").text(data.VACBanned);
            //            $("#info-NumberOfVACBans").text(data.NumberOfVACBans);
            //            $("#info-DaysSinceLastBan").text(data.DaysSinceLastBan);
            //            $("#avatar").attr("src", data.avatarfull);

//            $('#profile').append(data.map(obj =>`
//                            <h3>Информация о пользователи</h3>
//                            <tr class="row">
//                                    <th class="nyr">SteamID</th>
//                                    <td class="cell">${obj.steamid}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Преватность</th>
//                                    <td class="cell">${obj.communityvisibilitystate}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Nike</th>
//                                    <td class="cell">${obj.personaname}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Имя</th>
//                                    <td class="cell">${obj.realname}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Статус</th>
//                                    <td class="cell">${obj.personastate}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Сейчас играет</th>
//                                    <td class="cell">${obj.gameextrainfo}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Дата регистрации</th>
//                                    <td class="cell">${obj.timecreated}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Был в сети</th>
//                                    <td class="cell">${obj.lastlogoff}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Community Ban</th>
//                                    <td class="cell">${obj.CommunityBanned}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">VAC Ban</th>
//                                    <td class="cell">${obj.VACBanned}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Trade Ban</th>
//                                    <td class="cell">${obj.EconomyBan}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Число VAC Bans</th>
//                                    <td class="cell">${obj.NumberOfVACBans}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Число дней запрета</th>
//                                    <td class="cell">${obj.DaysSinceLastBan}</td>
//                                </tr>
//                                <tr class="row">
//                                    <th class="nyr">Запрет в играх</th>
//                                    <td class="cell">${obj.NumberOfGameBans}</td>
//                                </tr>`).join(''));

            $('#avatars').append(data.avatarfull.map(avatar => `
                <h3>Аватар</h3>
                    <tr class="row">
                    <td class="cell"><img src="${avatar.avatarfull}" /></td>
                </tr>`));
            console.log(data.avatarfull);

            $('#friends').append(data.friends.map(friend => `
                <tr class="row">
                    <td class="cell">${friend.steamid}</td>
                    <td class="cell">${friend.relationship}</td>
                    <td class="cell">${friend.friend_since}</td>
                </tr>`).join(''));

            $('#games').append(data.games.map(game => `
                <tr class="row">
                    <td class="cell"><img id="avatar" src="http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg" /></td>
                    <td class="cell">${game.name}</td>
                    <td class="cell">${game.playtime_2weeks}</td>
                    <td class="cell">${game.playtime_forever}</td>
                </tr>`).join(''));
        }
    })

    $('#historys').append(`
        <tr class="row">
            <td class="cell">${UserId}</td>
        </tr>`);
});
