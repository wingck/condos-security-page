let result = document.getElementById("result");
let selectedNumbers = [];
let title = document.getElementById("title");
let unit = document.getElementById("unit");
let popup = document.getElementById("popup");
let keyboard = document.getElementById("keyboard");
let image = document.getElementById("image");
let fail = document.getElementById("fail");
let noresponse = document.getElementById("noresponse");
let phone = document.getElementById("phone");

unit.style.display = "none";
popup.style.display = "none";
phone.style.display = "none";
fail.style.display = "none";
      
      function addNumber(number) {
        selectedNumbers.push(number);
        result.value = selectedNumbers.join("");
      }
      
      function deleteNumber() {
        selectedNumbers.pop();
        result.value = selectedNumbers.join("");
      }

      function showPopup(){
        title.innerHTML = "Now dialing...";
        title.style.paddingLeft = "120px";
        result.style.border = "none";
        unit.style.display = "block";
        unit.style.paddingLeft = "100px";
        keyboard.style.display = "none";
        popup.style.display = "block";
        phone.style.display = "block";
        setTimeout(function() {
            image.style.display = "none";
            phone.style.display = "none";
            fail.style.display = "block";
            noresponse.innerHTML = "No response from Unit #"+result.value;
        }, 3000);
      }
      function callAgain(){
        image.style.display = "block";
        phone.style.display = "block";
        fail.style.display = "none";
        setTimeout(function() {
            image.style.display = "none";
            phone.style.display = "none";
            fail.style.display = "block";
            noresponse.innerHTML = "No response from Unit #"+result.value;
        }, 3000);
    }
