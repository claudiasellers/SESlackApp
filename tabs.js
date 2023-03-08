document.addEventListener("DOMContentLoaded", function() {
  const tabNav = document.querySelector(".tab-nav");
  const tabContent = document.querySelectorAll(".tab-content .tab-pane");

  tabNav.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("active")) {
      return;
    }
    // Remove active class from all tab navigation items and tab panes
    tabNav.querySelectorAll(".active").forEach(function(activeTab) {
      activeTab.classList.remove("active");
    });
    tabContent.forEach(function(tabPane) {
      tabPane.classList.remove("active");
    });

    // Add active class to clicked tab navigation item and corresponding tab pane
    const clickedTab = event.target;
    const targetPaneId = clickedTab.getAttribute("href").substr(1);
    const targetPane = document.getElementById(targetPaneId);
    clickedTab.classList.add("active");
    targetPane.classList.add("active");

    // Show/hide content based on active tab
    if (targetPaneId === "tab1") {
      document.querySelector("#tab1 p").style.display = "block";
      document.querySelector("#tab2 p").style.display = "none";
      document.querySelector("#tab3 p").style.display = "none";
    } else if (targetPaneId === "tab2") {
      document.querySelector("#tab1 p").style.display = "none";
      document.querySelector("#tab2 p").style.display = "block";
      document.querySelector("#tab3 p").style.display = "none";
    } else if (targetPaneId === "tab3") {
      document.querySelector("#tab1 p").style.display = "none";
      document.querySelector("#tab2 p").style.display = "none";
      document.querySelector("#tab3 p").style.display = "none";
    }
