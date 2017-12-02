$("#id_button").click(function (e) {
    e.preventDefault();
    var UserId = $('input[name=SteamId]').val().trim();
    if (!UserId) {
        alert("Вы забыли указать имя");
        return;
    }

    $.ajax({
        method: "GET",
        url: "http://project-megaroks931128.codeanyapp.com/users/add/?usersid=" + UserId,
        dataType: "json",
        success: function (data) {
            $('#profile').html(`
                <h3>Информация о пользователи</h3>
                <table id="profile">
                    <tr class="row">
                        <th class="nyr">SteamID</th>
                        <td class="cell">${data.steamid}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Преватность</th>
                        <td class="cell">${data.communityvisibilitystate}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Nike</th>
                        <td class="cell">${data.personaname}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Имя</th>
                        <td class="cell">${data.realname}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Статус</th>
                        <td class="cell">${data.personastate}</td>
                    </tr>
                        <tr class="row">
                        <th class="nyr">Сейчас играет</th>
                        <td class="cell">${data.gameextrainfo}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Дата регистрации</th>
                        <td class="cell">${data.timecreated}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Был в сети</th>
                        <td class="cell">${data.lastlogoff}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Community Ban</th>
                        <td class="cell">${data.CommunityBanned}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">VAC Ban</th>
                        <td class="cell">${data.VACBanned}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Trade Ban</th>
                        <td class="cell">${data.EconomyBan}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Число VAC Bans</th>
                        <td class="cell">${data.NumberOfVACBans}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Число дней запрета</th>
                        <td class="cell">${data.DaysSinceLastBan}</td>
                    </tr>
                    <tr class="row">
                        <th class="nyr">Запрет в играх</th>
                        <td class="cell">${data.NumberOfGameBans}</td>
                    </tr>
                </table>`);


            if ($.trim($('#historys').html()) !== '') {
                $('#history').append(`
                    <tr class="row">
                        <td class="cell">${UserId}</td>
                    </tr>`);
                console.log('1');
            } else {
                $('#historys').html(`
                    <h3>История</h3>
                    <table id="history">
                        <tr class="row">
                            <th class="nyr">SteamID</th>
                        </tr>
                        <tr class="row">
                            <td class="cell">${UserId}</td>
                        </tr>
                    </table>`);
                console.log('2');
            }

            $('#avatars').html(`
                <h3>Аватар</h3>
                    <table>
                        <tr class="row">
                            <td class="cell"><img src="${data.avatarfull}" /></td>
                        </tr>
                    </table>`);

            $('#friends').html(`
                <h3>Друзья</h3>                    
                <table id="friend">
                    <thead>
                        <tr class="row">
                            <th class="nyr">Steam ID</th>
                            <th class="nyr">Срок дружбы</th>
                            <th class="nyr">Друзья</th>
                        </tr>
                    </thead>
                </table>`);

            $('#friend').append(data.friends.map(friend => `
                <tr class="row">
                    <td class="cell">${friend.steamid}</td>
                    <td class="cell">${friend.relationship}</td>
                    <td class="cell">${friend.friend_since}</td>
                </tr>`).join(''));

            $('#games').html(`                    
                <h3>Игры</h3>
                <table id="game">
                    <thead>
                        <tr class="row">
                            <th class="nyr">Logo</th>
                            <th class="nyr">Назвиние</th>
                            <th class="nyr">Ч/Н</th>
                            <th class="nyr">Ч/В</th>
                        </tr>
                    </thead>
                </table>`);

            $('#game').append(data.games.map(game => `
                <tr class="row">
                    <td class="cell"><img id="avatar" src="http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg" /></td>
                    <td class="cell">${game.name}</td>
                    <td class="cell">${game.playtime_2weeks}</td>
                    <td class="cell">${game.playtime_forever}</td>
                </tr>`).join(''));
        }
    })
});
