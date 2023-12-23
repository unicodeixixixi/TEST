// This script is by mr.toidi (Mr.1052 asktually)
w.on("chatmod",e=>{
      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1188233845875679272/8BmdRO4ReiXn7s7PEoJbITePnkfKmD-Q0hBcy6XJbgeDMGX13te1ZmwSYwnUD8UtGcFX");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Autism Machine",
        avatar_url: "",
        content: e.nickname+":"+e.message
      }

      request.send(JSON.stringify(params));
})
