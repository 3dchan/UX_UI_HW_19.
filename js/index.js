
console.log("Your index.js is currently has loaded!")

$("document").ready(function () {
  // Menu will easing in when it appareas
  $('.nav-links--desktop').animate({
    opacity: 1,
    right: 0,
  }, 1000)
});

// Arrow button will show content when clicked
let arrowDown = true;

function debounce(func, timeout = 50) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

$("#arrow").click(function () {
  console.log('firing');
  if (arrowDown) {
    window.scrollTo({ top: $("#skills").offset().top - $("#nav").outerHeight(), behavior: 'smooth' });
    $(this).removeClass('rotate-arrow--down').addClass('rotate-arrow--up');
    arrowDown = false;
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    arrowDown = true;
    $(this).removeClass('rotate-arrow--up').addClass('rotate-arrow--down');
  }
});

$(window).scroll(debounce(function () {
  console.log('firing scroll');
  let distanceFromTop = window.pageYOffset;

  if (distanceFromTop > $("#skills").offset().top - 100) {
    $('#arrow').removeClass('rotate-arrow--down').addClass('rotate-arrow--up');
    arrowDown = false;
  } else {
    $("#arrow").removeClass('rotate-arrow--up').addClass('rotate-arrow--down');
    arrowDown = true;
  }
}));

// Toggle class "visible" on the big menu, hide the little menu

// Visible class would have animate-in values
// eg keyframes