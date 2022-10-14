$(document).ready(function () {
  function handleFormStep() {
    $("#formStep").steps();
  }

  function handleGuideStep() {
    $("#guideStep").steps({
      transitionEffect: "slideLeft",
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
    $(".button--read-more").click(function () {
      if ($(this).closest(".card--attention").hasClass("expanded")) {
        $(this).html("Read More");
      } else {
        $(this).html("Less");
      }
      $(this).closest(".card--attention").toggleClass("expanded");
    });
  }

  function handleToggleNav() {
    $(".toggle--nav").click(function () {
      $(".sidebar").toggleClass("show--nav");
    });
    $(".sidebar__item").click(function () {
      $(".sidebar").removeClass("show--nav");
    });
    $(".hamburger").click(function () {
      $(".aside").toggleClass("show--nav");
    });
  }

  function handleVideo() {
    var video = document.querySelector(".video-content__source");
    $(".button--video").click(function () {
      video.setAttribute("controls", "controls");
      video.play();
      $(".video-content").addClass("isPlaying");
    });
    $(".close--modal").click(function () {
      video.removeAttribute("controls", "controls");
      video.pause();
      $(".video-content").removeClass("isPlaying");
    });
  }

  function handleAlert() {
    $(".btn-close--alert").click(function () {
      $(".alert-section").addClass("active");
    });
  }
  function handleFlash() {
    $(".icon--close-flash").click(function () {
      $(".flash").addClass("close");
    });
  }

  handleFormStep();
  handleGuideStep();
  handleTogglePassword();
  handleReadMore();
  handleToggleNav();
  handleVideo();
  handleAlert();
  handleFlash();

  //Highlow Temp and Humidity
  $("#temp-tab").click(function () {
    $("#tempHighLow").toggleClass("show");
    $("#humidityHighLow").toggleClass("show");
  });
  $("#humidity-tab").click(function () {
    $("#tempHighLow").toggleClass("show");
    $("#humidityHighLow").toggleClass("show");
  });

  //Select2
  $(".js-select").select2({
    placeholder: "Eg. dedekysf93@gmail.com",
    allowClear: true,
    width: "100%",
  });
});

// temp chart
var ctx = document.getElementById("tempChart");
var myChart = new Chart(ctx, {
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
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#ccc",
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

// humidity chart
var ctx = document.getElementById("humidityChart");
var myChart = new Chart(ctx, {
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

// datepicker
$(".datepicker").datepicker({
  uiLibrary: "bootstrap4",
});
