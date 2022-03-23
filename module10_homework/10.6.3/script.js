const wsUrl = 'wss://echo-ws-service.herokuapp.com';
const websocket = new WebSocket(wsUrl);


const btnSend = document.querySelector('.btn_send');
const btnGeo = document.querySelector('.btn_geo');
const message = document.querySelector('.textarea');
const map = document.querySelector('.map');


function writeScreen(messageText) {

    let create = document.createElement("div");

    create.className = `chat`;
    create.innerHTML = messageText;
    message.appendChild(create);
} 




btnSend.addEventListener('click', () => {

    let messageText = document.querySelector('.input').value;

    writeScreen("Я: " + messageText);
    websocket.send(messageText);

    websocket.onmessage = function(evt) {
        writeScreen('Сервер: ' + evt.data);};
        
    websocket.onerror = function(evt) {
        writeScreen('Сервер: ERROR' + evt.data);
  };

});


const error = () => {
    writeScreen('Невозможно получить местоположение');
};
  
const success = (position) => {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    map.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    map.className = `chat`;
    map.textContent = 'Гео-локация';
    message.appendChild(map);

};



btnGeo.addEventListener('click', () => {
    map.href = '';
    map.textContent = '';
    
    if (!navigator.geolocation) {
      message.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }

});
  
  
  

