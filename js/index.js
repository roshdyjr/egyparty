// navbar functions
$(".nav-btn").on("click", () => {
  $(".side-bar").animate({
    width: "250px",
  });
  $(".home-content").animate({
    marginLeft: "250px",
  });
  $(".nav-btn").animate({
    marginLeft: "250px",
  });
});

$(".closeBtn").on("click", () => {
  $(".side-bar").animate({
    width: "0",
  });
  $(".home-content").animate({
    marginLeft: "0",
  });
  $(".nav-btn").animate({
    marginLeft: "0",
  });
});


$(".side-bar a").on("click", function () {
  let navLink = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(navLink).offset().top,
    },
    1500,
  );
});

// singer slider functions
$(".toggler").on("click", function () {
  let nextSlide = $(this).next(".slide");
  $(".slide").not(nextSlide).slideUp(500);
  nextSlide.slideToggle(500);
});

// countdown functions
function countDown() {
  const countDownDate = new Date("July 2, 2025 00:00:00").getTime();

  updateCountdown(countDownDate);

  let countDownInterval = setInterval(() => {
    updateCountdown(countDownDate, countDownInterval);
  }, 1000);
}

function updateCountdown(countDownDate, countDownInterval) {
  let currentTime = new Date().getTime();
  let dateDifference = countDownDate - currentTime;

  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  $(".days").text(days + " D");
  $(".hours").text(hours + " H");
  $(".minutes").text(minutes + " M");
  $(".seconds").text(seconds + " S");

  if (dateDifference < 0) {
    clearInterval(countDownInterval);
    $(".days").text("Party is Over");
    $(".hours").text("Party is Over");
    $(".minutes").text("Party is Over");
    $(".seconds").text("Party is Over");
  }
}

countDown();

// characters remaining functions

const maxChars = 100;

$(".char-remaining").text(maxChars);

$("textarea").on("input", function () {
  const remainingChars = maxChars - $(this).val().length;
  $(".char-remaining").text(remainingChars);
  if (remainingChars === 0) {
    $(".char-remaining").text("You Are Out Of Characters!");
    $(".chars").hide();
  } else {
    $(".chars").show();
  }
});
