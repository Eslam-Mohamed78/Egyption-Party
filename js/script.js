// ================== Nav Bar =================

$("#home .nav").click(function () {
  if ($("nav").css("left") == "0px") {
    $("nav").animate({ left: "-250px" });
    $("#home .nav").animate({ left: "12px" });
  } else {
    $("nav").animate({ left: "0" });
    $("#home .nav").animate({ left: "262px" });
  }
});

$("nav li i").click(() => {
  $("nav").animate({ left: "-250px" });
  $("#home .nav").animate({ left: "12px" });
});

// ============== Details section ============

$("#singer .container .one ~ * p").slideUp();

$("#singer .head").click(function (e) {
  $(e.target).siblings().slideToggle();
  $(e.target).parent().siblings().children("p").slideUp();
});

// ================== Duration section =================
let eventDate = new Date("2023-10-25");
let currDate = new Date();
let timeDiff = eventDate.getTime() - currDate.getTime();

let day = Math.floor(timeDiff/(1000 * 60 * 60 * 24));
let hour = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minute = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
let second = Math.floor((timeDiff % (1000 * 60)) / 1000);
console.log(typeof(day),  hour, minute, second);


$("#event .day").text(`${day} D`);
$("#event .hour").text(`${hour} H`);
$("#event .minute").text(`${minute} M`);
$("#event .second").text(`${second} S`);

let x = setInterval(countDown, 1000);
function countDown() {
  console.log('after')
  if ((day == 0) & (hour == 0) & (minute == 0) & (second == 0)) {
    clearInterval(x);
    $("#event .container").html(
      '<p class="w-100 text-center fs-1">Event is Now</p>'
    );
  }
  if ((hour == 0) & (minute == 0) & (second == 0)) {
    day -= 1;
    hour = 24;
    minute = 60;
    second = 60;
    $("#event .day").text(`${day} D`);
    $("#event .hour").text(`${hour} H`);
    $("#event .minute").text(`${minute} M`);
    $("#event .second").text(`${second} S`);
  }
  if ((minute == 0) & (second == 0)) {
    hour -= 1;
    minute = 60;
    second = 60;
    $("#event .hour").text(`${hour} H`);
    $("#event .minute").text(`${minute} M`);
    $("#event .second").text(`${second} S`);
  }
  if (second == 0) {
    minute -= 1;
    second = 60;
    $("#event .minute").text(`${minute} M`);
    $("#event .second").text(`${second} S`);
  }
  second -= 1;
  $("#event .second").text(`${second} S`);
}

// ================== Contact section =================

$("#contact form textarea").keyup(() => {
  if ($("#contact form textarea").val().length <= 100) {
    $("#contact form p span").text(
      100 - $("#contact form textarea").val().length
    );
    $("#contact form input[type='submit']").removeAttr("disabled");
  } else {
    $("#contact form p").html(
      `<span>your available character finished & Sending Disabled</span>`
    );
    $("#contact form input[type='submit']").attr("disabled", "true");
  }
});

let user = {
  age:this
}
console.log(user.age)



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {  // there was a problem in the pass but solved
  console.log('callback - particles.js config loaded');
});
