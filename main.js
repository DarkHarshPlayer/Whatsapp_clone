
var mic = document.getElementById('mic');
var conversation = document.getElementById('conversation');
var count = 0;

document.addEventListener('keydown',function (ev) { if(ev.keyCode === 13){verify();conversation.scrollTop = conversation.scrollHeight}},false);

  function verify() {
      count += 0;
  
        var msg = document.getElementById('msg');
        if(msg.value === '') {
            console.log("No message");
        }
        else {
            console.log(msg.value);
            new Message(msg.value);
        }
        msg.value = '';
    }




    function  Message(message){
      this.message = message;
      var msgbox = document.createElement('div');
      msgbox.setAttribute("class","msgbox");
      msgbox.innerHTML = this.message;
        var time = document.createElement('div');
        time.setAttribute('class','time');
        var date = new Date();
        time.innerText = formatAMPM(date);
        console.log(time);
      msgbox.appendChild(time);
        if(count == 1){
            conversation.appendChild(msgbox);
        }else {
      for(var i = 0; i < 3; i++){
          var br = document.createElement('br');
          conversation.appendChild(br);
          console.log(br);
          conversation.appendChild(msgbox);

      }
        }

  }


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}