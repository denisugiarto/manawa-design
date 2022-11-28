let wz_class = ".wizard";

let args = {
  wz_class: wz_class,
  wz_nav_style: "dots", // dots, tabs, progress
  wz_ori: "horizontal",
  buttons: true,
  navigation: "all", // buttons, nav, all
  prev: "Back",
  next: "Next Step",
  finish: "Save",
};

const wizard = new Wizard(args);

wizard.init();

let $wz_doc = document.querySelector(wz_class);

$wz_doc.addEventListener("submitWizard", function (e) {
  alert("Form Submit");
});

$wz_doc.addEventListener("endWizard", function (e) {
  alert("Wizard End");
});

$wz_doc.addEventListener("errorFormValidatorWizard", function (e) {
  alert("Some required field is empty or incorrectly formatted.");
});
$wz_doc.addEventListener("nextWizard", function (e) {
  changeStep("next");
});
$wz_doc.addEventListener("prevWizard", function (e) {
  changeStep("prev");
});

let dots = document.querySelectorAll(".dot");
Array.from(dots).map((dot, index) => (dot.innerHTML = index + 1));

//Stepper in Mobile View
const stepItems = document.querySelectorAll(".wizard-content .wizard-step");
const countStep = stepItems.length;
let circularProgress = document.querySelector(".circular-progress");
let progressStartValue = 0,
  speed = 50,
  intervalId;

//Update Progress Circle
const updateProgress = (targetValue) => {
  const update = setInterval(() => {
    let FULL_CIRCLE_DEGREE = 360;
    let PERCENTAGE = 1 / 100;
    progressStartValue > targetValue
      ? progressStartValue--
      : progressStartValue++;

    //update progress circle from 0 to 100 in PercentAGE
    circularProgress.style.background = `conic-gradient(#d62f0e ${
      progressStartValue * PERCENTAGE * FULL_CIRCLE_DEGREE
    }deg, #ced4da 0deg)`;

    if (progressStartValue == targetValue) {
      clearInterval(update);
      return;
    }
  }, speed);
  //Clear old interval when detect new interval
  if (intervalId != update) {
    clearInterval(intervalId);
    intervalId = update;
  }
};

//Update Step Content inside circle
const updateProgressValue = (value, countStep) => {
  let progressValue = document.querySelector(".progress-value");
  progressValue.innerHTML = `${value} of ${countStep}`;
};

//Update Step title
const updateStepTitle = (value) => {
  let title = document.querySelector(".wizard-step .wizard-step__title");
  title.innerHTML = value;
};

//Update Next Step Title
const updateStepNextTitle = (value) => {
  let nextTitle = document.querySelector(
    ".wizard-step .wizard-step__next-step"
  );
  value == ""
    ? (nextTitle.innerHTML = "")
    : (nextTitle.innerHTML = `Next : ${value}`);
};

//Change Step Function "Next" and "Prev"
function changeStep(value) {
  let currentStep = document.querySelector(
    ".wizard-content .wizard-step.active"
  );

  let targetStep;
  if (value === "prev") {
    targetStep = currentStep.previousElementSibling;
    updateStepNextTitle(currentStep.dataset.title);
  } else if (value === "next") {
    targetStep = currentStep.nextElementSibling;
    let nextStep = targetStep.nextElementSibling;
    let nextStepTitle = nextStep ? nextStep.dataset.title : "";
    updateStepNextTitle(nextStepTitle);
  } else {
    console.log("define target step with next or prev");
  }

  let targetTitle = targetStep.dataset.title;
  let targetStepNumber = Number(targetStep.dataset.step) + 1;
  let targetValue = Math.floor((targetStepNumber / countStep) * 100);
  updateStepTitle(targetTitle);
  updateProgress(targetValue);
  updateProgressValue(targetStepNumber, countStep);
}

//Mobile Nav wizard step Init
updateProgressValue(1, countStep);
updateProgress(Math.floor((1 / countStep) * 100));
