const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;


  appendMessage(message, "user");
  userInput.value = "";

 
  setTimeout(() => {
    botReply(message.toLowerCase());
  }, 1000);
}

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(input) {
  let reply = "I didn’t understand that.";

  if (input.includes("hello") || input.includes("hi")) {
    reply = "Hello! How can I help you?";
  } 
  else if (input.includes("how are you")) {
    reply = "I’m just a bot, but I’m doing fine!";
  }
   else if (input.includes("github")) {
    reply = "https://github.com/NaveeraRajChuhan";
  }
  
  
  else if ( input.includes("about yourself") || input.includes("about naveera")) {
    reply = "Hay if you wanna know about Naveera ..so yea sure i can tell you first her age is running 17 ,she love coding ,college name: Gulshan college ,currently join University ,also a good teacher , Languages=> html,css,js,c++,python little bit, extra coure=> graphics,excel...may be its enough fou you if you wanna more info about her follow her insta heheheh (Naveera Naeem07)";
  }

  else if (input.includes("pagal") || input.includes("mad")) {
    reply = "I’m good and ok but i think you are pagal :)heheh";
  }
    else if ( input.includes("institute") || input.includes("saylani")|| input.includes("smit")|| input.includes("computer course") ) {
    reply = "hey! my computer institute is SMIT Saylani Mass IT Traning ..my teacher miss Hira ..follow her github=> hira ikram";
  }

  else if ( input.includes("chatbot")) {
    reply = "this chatbot is made by using if,else if statement and include method and also use set time out";
  }
  
    else if (input.includes("help")) {
    reply = "I’m just a bot, but I’ll try to help you ";
  }
  
  //  else if (input.includes("how are you") || input.includes("how's going") || input.includes("ap kessay ho")) {
  //   reply = "Better than you!";
  // }
  
  else if (input.includes(" single")) {
    reply = "im comitted and happy in my life dont interfare in my life...... may be you are single and be rozgar :)oops! sorry but its reality hahahah";
  }
   else if (input.includes("head") || input.includes("game") || input.includes("tail")) {
    reply = "  https://naveerarajchuhan.github.io/head-tail-3/  ... follow my github NaveeraRajChuhan";
  }
  
  
    else if (input.includes("instagram") || input.includes("insta") ) {
    reply = "https://www.instagram.com/naveera_naeem07?igsh=YzljYTk1ODg3Zg==                            ......FOLLOW BHI KARTAY JANA" ;
  
  }
  


  
  
  
  else if (input.includes("bye")) {
    reply = "Goodbye! Have a nice day.";
  } else if (input.includes("time")) {
    const now = new Date();
    reply = "Current time is " + now.getHours() + ":" + now.getMinutes();
  } else if (input.includes("date")) {
    const today = new Date();
    reply = "Today’s date is " + today.toDateString();
  }

  appendMessage(reply, "bot");
}
