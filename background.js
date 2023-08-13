let sidebarVisible = false;

// Function to toggle the sidebar visibility
function toggleSidebar(tabId) {
  sidebarVisible = !sidebarVisible;
  updateSidebar(tabId, sidebarVisible);
}

// Function to update the sidebar visibility
function updateSidebar(tabId, isVisible) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    function: (isVisible) => {
      const sidebar = document.getElementById("customSidebar");
      if (sidebar) {
        sidebar.style.display = isVisible ? "block" : "none";
      }
    },
    args: [isVisible],
  });
}



function switch_color(id) {
    element = document.getElementById(id);
    company = document.getElementById("company");
    yt = document.getElementById("yt");
    if (id == "company") {
      company.classList.add("active");
      yt.classList.remove("active");
      yt_section.style.display = "none";
      company_section.style.display = "block";
    }
    else {
      yt.classList.add("active");
      company.classList.remove("active");
      yt_section.style.display = "block";
      company_section.style.display = "none";
    }


  }


function switch_tab(tabID, id) {
    console.log("switching tab");

    chrome.scripting.executeScript({
        target: { tabId: tabID },
        function: (id) => {
            const yt_section = document.getElementById("yt-section");
            const company_section = document.getElementById("company-section");
            element = document.getElementById(id);
            company = document.getElementById("company");
            yt = document.getElementById("yt");
            if (id == "company") {
            company.classList.add("active");
            yt.classList.remove("active");
            yt_section.style.display = "none";
            company_section.style.display = "block";
            }
            else {
            yt.classList.add("active");
            company.classList.remove("active");
            yt_section.style.display = "block";
            company_section.style.display = "none";
            }

        },
        args: [id],
    });
}









// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "toggleSidebar") {
    toggleSidebar(sender.tab.id);
  }

  // switch tab with parameter id 
    if (message.action === "switch_tab") {
        switch_tab(sender.tab.id, message.id);
    }


});



/* Backend call to extract the data */




  
