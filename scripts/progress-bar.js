// Progress bar functionality
document.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.getElementById("progress-container");

  function updateProgressBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const maxScroll = scrollHeight - clientHeight;
    const scrollPercentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    console.log(`ScrollTop: ${scrollTop}, Percentage: ${scrollPercentage.toFixed(2)}%`);

    progressBar.style.width = scrollPercentage + "%";

    if (scrollTop > 50) {
      progressContainer.style.opacity = "1";
    } else {
      progressContainer.style.opacity = "0.7";
    }
  }

  window.addEventListener("scroll", updateProgressBar);
  updateProgressBar();
});
