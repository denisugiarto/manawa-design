$(document).ready(function () {
  function handleFormStep() {
    $('#formStep').steps();
  }

  function handleGuideStep() {
    $("#guideStep").steps({
      transitionEffect: "slideLeft"
    });
  }

  function handleTogglePassword() {
    $(".icon-password").click(function () {
      $(this).toggleClass("active");
      var password = $(this).prev(".form__input--password");
      if (password.attr("type") === "password") {
        password.attr("type", "text");
      } else {
        password.attr("type", "password");
      }
    });
  }

  function handleReadMore() {
    $('.button--read-more').click(function () {
      if ($(this).closest(".card--attention").hasClass('expanded')) {
        $(this).html("Read More");
      } else {
        $(this).html("Less");
      }
      $(this).closest(".card--attention").toggleClass('expanded');
    })
  }

  function handleToggleNav() {
    $('.toggle--nav').click(function () {
      $('.sidebar').toggleClass('show--nav');
    })
    $('.sidebar__item').click(function () {
      $('.sidebar').removeClass('show--nav');
    })
    $('.hamburger').click(function () {
      $('.aside').toggleClass('show--nav');
    })
  }

  function handleVideo() {
    var video = document.querySelector('.video-content__source');
    $('.button--video').click(function () {
      video.setAttribute("controls", "controls")
      video.play();
      $('.video-content').addClass('isPlaying');
    })
    $('.close--modal').click(function () {
      video.removeAttribute("controls", "controls")
      video.pause();
      $('.video-content').removeClass('isPlaying');
    })
  }

  function handleAlert() {
    $('.btn-close--alert').click(function () {
      $('.alert-section').addClass('active');
    })
  }
  function handleFlash() {
    $('.icon--close-flash').click(function () {
      $('.flash').addClass('close');
    })
  }

  handleFormStep();
  handleGuideStep();
  handleTogglePassword();
  handleReadMore();
  handleToggleNav();
  handleVideo();
  handleAlert()
  handleFlash()
});

// temp chart
let ctxTemp = document.getElementById("tempChart");
if (ctxTemp != null) {
  const tempChart = new Chart(ctxTemp, {
    type: "line",
    data: {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
      datasets: [
        {
          label: "Living Room",
          data: [22, 27, 33, 22, 25, 25],
          backgroundColor: "rgb(235, 243, 248)",
          borderColor: "rgb(235, 243, 248)",
          fill: false,
        },
        {
          label: "Ricky Bedroom",
          data: [23, 23, 30, 25, 23, 23],
          backgroundColor: "rgb(255, 193, 7)",
          borderColor: "rgb(255, 193, 7)",
          fill: false,
        },
        {
          label: "Parent Bedroom",
          data: [26, 26, 28, 20, 27, 27],
          backgroundColor: "rgb(0, 123, 255)",
          borderColor: "rgb(0, 123, 255)",
          fill: false,
        },
        {
          label: "Hot",
          data: [60, 60, 60, 60, 60, 60], // max area hot
          backgroundColor: "rgba(205, 98, 118, 0)",
          borderColor: "rgba(205, 98, 118, 0)",
          fill: { above: "rgba(205, 98, 118, 0.75)", target: { value: 29 } }, // min area hot
        },
        {
          label: "Comfortable",
          data: [29, 29, 29, 29, 29, 29],
          backgroundColor: "rgba(77, 157, 46, 0)",
          borderColor: "rgba(77, 157, 46, 0)",
          fill: { above: "rgba(77, 157, 46, 0.75)", target: { value: 21 } },
        },
        {
          label: "Cold",
          data: [21, 21, 21, 21, 21, 21],
          backgroundColor: "rgba(89, 162, 201, 0)",
          borderColor: "rgba(89, 162, 201, 0)",
          fill: { above: "rgba(89, 162, 201, 0.75)", target: { value: 0 } },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "#ccc",
          },
          ticks: {
            stepSize: 15,
          },
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(255,255,255, 1)",
          bodyColor: "#101B37",
          titleColor: "#101B37",
        },
      },
    },
  });
}

// humidity chart
let ctxHumidity = document.getElementById("humidityChart");
if (ctxHumidity != null) {
  const humidityChart = new Chart(ctxHumidity, {
    type: "line",
    data: {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
      datasets: [
        {
          label: "Parent Bedroom",
          data: [58, 62, 59, 62, 55, 59],
          backgroundColor: "#007BFF",
          borderColor: "#007BFF",
          fill: false,
        },
        {
          label: "Ricky Bedroom",
          data: [55, 53, 52, 58, 53, 53],
          backgroundColor: "#FFC107",
          borderColor: "#FFC107",
          fill: false,
        },
        {
          label: "Living Room",
          data: [53, 58, 54, 53, 59, 55],
          backgroundColor: "#FFF",
          borderColor: "#FFF",
          fill: false,
        },
        {
          label: "Damp",
          data: [100, 100, 100, 100, 100, 100],
          backgroundColor: "rgba(89,162,201, 0)",
          borderColor: "rgba(89,162,201, 0)",
          fill: { above: "rgba(89,162,201, 0.75)", target: { value: 60 } },
        },
        {
          label: "Comfortable",
          data: [60, 60, 60, 60, 60, 60],
          backgroundColor: "rgba(77, 157, 46, 0)",
          borderColor: "rgba(77, 157, 46, 0)",
          fill: { above: "rgba(77, 157, 46, 0.75)", target: { value: 30 } },
        },
        {
          label: "Dry",
          data: [30, 30, 30, 30, 30, 30],
          backgroundColor: "rgba(205,98,118, 0)",
          borderColor: "rgba(205,98,118, 0)",
          fill: { above: "rgba(205,98,118, 0.75)", target: { value: 0 } },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "#ccc",
          },
          ticks: {
            stepSize: 25,
          },
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
      },
    },
  });
}

// temp chart single data
let ctxTempSingle = document.getElementById("tempChartSingle");
if (ctxTempSingle != null) {
  const tempChart = new Chart(ctxTempSingle, {
    type: "line",
    data: {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
      datasets: [
        {
          label: "Adult’s Bedroom",
          data: [23, 23, 33, 22, 25, 25],
          backgroundColor: "rgb(0,0,0)",
          borderColor: "rgb(0,0,0)",
          fill: false,
        },
        {
          label: "Hot",
          data: [60, 60, 60, 60, 60, 60], // max area hot
          backgroundColor: "rgba(205, 98, 118, 0)",
          borderColor: "rgba(205, 98, 118, 0)",
          fill: { above: "rgba(205, 98, 118, 0.75)", target: { value: 29 } }, // min area hot
        },
        {
          label: "Comfortable",
          data: [29, 29, 29, 29, 29, 29],
          backgroundColor: "rgba(77, 157, 46, 0)",
          borderColor: "rgba(77, 157, 46, 0)",
          fill: { above: "rgba(77, 157, 46, 0.75)", target: { value: 21 } },
        },
        {
          label: "Cold",
          data: [21, 21, 21, 21, 21, 21],
          backgroundColor: "rgba(89, 162, 201, 0)",
          borderColor: "rgba(89, 162, 201, 0)",
          fill: { above: "rgba(89, 162, 201, 0.75)", target: { value: 0 } },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "#ccc",
          },
          ticks: {
            stepSize: 15,
          },
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(255,255,255, 1)",
          bodyColor: "#101B37",
          titleColor: "#101B37",
        },
      },
    },
  });
}

// humidity chart
let ctxHumiditySingle = document.getElementById("humidityChartSingle");
if (ctxHumiditySingle != null) {
  const humidityChart = new Chart(ctxHumiditySingle, {
    type: "line",
    data: {
      labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"],
      datasets: [
        {
          label: "Adult’s Bedroom",
          data: [53, 58, 54, 53, 59, 55],
          backgroundColor: "#000",
          borderColor: "#000",
          fill: false,
        },
        {
          label: "Damp",
          data: [100, 100, 100, 100, 100, 100],
          backgroundColor: "rgba(89,162,201, 0)",
          borderColor: "rgba(89,162,201, 0)",
          fill: { above: "rgba(89,162,201, 0.75)", target: { value: 60 } },
        },
        {
          label: "Comfortable",
          data: [60, 60, 60, 60, 60, 60],
          backgroundColor: "rgba(77, 157, 46, 0)",
          borderColor: "rgba(77, 157, 46, 0)",
          fill: { above: "rgba(77, 157, 46, 0.75)", target: { value: 30 } },
        },
        {
          label: "Dry",
          data: [30, 30, 30, 30, 30, 30],
          backgroundColor: "rgba(205,98,118, 0)",
          borderColor: "rgba(205,98,118, 0)",
          fill: { above: "rgba(205,98,118, 0.75)", target: { value: 0 } },
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "#ccc",
          },
          ticks: {
            stepSize: 25,
          },
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
      },
    },
  });
}

//Electricity Chart
let ctxElectricity = document.getElementById("electricChart");
if (ctxElectricity != null) {
  const electricityChart = new Chart(ctxElectricity, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Electricity used",
          data: [0, 42, 0, 0, 0, 0, 0],
          backgroundColor: "#D62F0E",
          borderColor: "#D62F0E",
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
      },
    },
  });
}

//Bill Chart
let ctxBill = document.getElementById("billChart");
if (ctxBill != null) {
  const billChart = new Chart(ctxBill, {
    type: "bar",
    data: {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "electricity cost",
          data: [0, 32, 0, 0, 0, 0, 0],
          backgroundColor: "#D62F0E",
          borderColor: "#D62F0E",
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },

      plugins: {
        legend: {
          position: "bottom",
          display: false,
        },
      },
    },
  });
}

//Date Filter Handler
function dateFilterHandler() {
  let dateFilter = document.getElementsByName("date-filter")[0].value;
  //change input type element with class date-filter
  document.getElementsByClassName("date-filter")[0].type = dateFilter;
}

// //Carousel List
// let items = document.querySelectorAll(".carousel .carousel-item");
// console.log("items: ", items);

// items.forEach((el) => {
//   const minPerSlide = 3;
//   let next = el.nextElementSibling;
//   console.log("next: ", next);
//   for (var i = 0; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  loopFillGroupWithBlank: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Enable Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//Sidebar Menu Active function
const activeSidebarMenu = (target) => {
  const menuList = document.querySelectorAll(".menu-list");
  let targetId = 0;
  let index = 0;
  for (const menu of menuList) {
    let titleMenu = menu.getElementsByClassName("title")[0].textContent;
    index++;
    if (titleMenu.toLowerCase().includes(target)) {
      targetId = index - 1;
    }
  }
  menuList[targetId].classList.add("active");
};
