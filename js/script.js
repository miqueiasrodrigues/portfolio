let observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initializeMessages();
      observe.unobserve(entry.target);
    }
  });
});

observe.observe(document.querySelector("#media-element-messages"));

function initializeMessages() {
  let scroller = document.querySelector("#media-element-messages");
  let anchor = document.querySelector("#anchor");

  let messagesClass1 = [
    "Hi, what's your name?",
    "How old are you?",
    "What's your nationality?",
    "What's your educational background?",
    "What is your field of expertise?",
];

let messagesClass2 = [
    "Hi, my name is Miqueias Rodrigues.",
    "I am 24 years old.",
    "I was born in São Luís do Maranhão.",
    "I have a degree in Science and Technology from UFMA, and I am also studying Computer Engineering at UFMA.",
    "I am a full-stack developer; I enjoy working on the backend, and I am proficient in frontend development as well.",
];


  let currentIndexClass1 = 0;
  let currentIndexClass2 = 0;

  function appendChild() {
    if (
      currentIndexClass1 + currentIndexClass1 >=
      messagesClass1.length + messagesClass2.length
    ) {
      clearInterval(tempMessage);
    }

    let msg = document.createElement("div");
    msg.className = "message";

    let now = new Date();
    let hours = ("0" + now.getHours()).slice(-2);
    let minutes = ("0" + now.getMinutes()).slice(-2);
    let time = hours + ":" + minutes;

    if (currentIndexClass1 <= currentIndexClass2) {
      msg.innerHTML =
        '<div style="display:flex; align-items: center;">Interviewer <div class="circle" style="background-color:var(--white-color); margin-left:10px"></div></div>' +
        time +
        "<br />" +
        messagesClass1[currentIndexClass1];
      msg.classList.add("message-class1");
      currentIndexClass1 = currentIndexClass1 + 1;
    } else {
      msg.innerText = messagesClass2[currentIndexClass2];
      msg.classList.add("message-class2");
      currentIndexClass2 = currentIndexClass2 + 1;
    }

    scroller.insertBefore(msg, anchor);
  }

  let tempMessage = setInterval(appendChild, 1000);
}


function clearForm() {
    document.getElementById("myForm").reset();
}
