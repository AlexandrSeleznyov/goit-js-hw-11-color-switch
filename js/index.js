const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  
  const NOTIFICATION_DELAY = 1000;
  let timeoutId = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const buttons  = document.querySelector(".js-button");
  buttons.addEventListener("click", randomColors);

  function randomColors(e){
    if(e.target.dataset.action === "start"){
      timeoutId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]}, NOTIFICATION_DELAY);
        e.target.disabled = true; }
        else {
          clearInterval(timeoutId);
          e.currentTarget.firstElementChild.disabled = false;
        }
  }


