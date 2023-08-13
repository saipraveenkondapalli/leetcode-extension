const eye = `<svg class="svg-eye" style="display: inline-block" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"/></svg>`;
let problemName = window.location.href.split("/")[4];

// replace - with space 
problem = problemName.replace('-', " ")


  // Create the sidebar and inject it into the page
  const sidebar = document.createElement("leetcode-insights-sidebar");
  sidebar.id = "customSidebar";
  sidebar.classList.add("sidebar-content");
  sidebar.innerHTML = `

  <!-- HTML for the sidebar -->
  <div class="sidebar">
    <h2 id="sh2"><img style = "display:inline-block;" src = "${chrome.runtime.getURL('logo.png')}"  height = 50 width = 50>LeetCode Insights</h2>
    
    <button class="sidebar-close-button" style="display: inline-block;">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  width="20" height="20"
  viewBox="0 0 50 50">
  <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
  </svg>
    </button>
  
    <div class="section">
      <span class="option active" id="company""> Companies <svg aria-hidden="true"
          focusable="false" role="img" class="octicon octicon-rocket" viewBox="0 0 16 16" width="16" height="16"
          fill="currentColor"
          style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: auto;">
          <path
            d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z">
          </path>
        </svg> </span>
      <span class="option" id="yt"> Youtube Solutions <svg aria-hidden="true" focusable="false"
          role="img" class="octicon octicon-sidebar-collapse" viewBox="0 0 16 16" width="16" height="16"
          fill="currentColor"
          style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
          <path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z">
          </path>
          <path
            d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z">
          </path>
        </svg></span>
        <span class= 'option active' id='about' style="color:#292929; background-color:#FFDD00" onclick="window.open('https://www.buymeacoffee.com/saipraveen','_blank');" >
         Buy me a Coffee
         
        </span>

        <span class='option' style="color:blue" onclick="window.open('https://interview-prep-pro.vercel.app/companies','_blank');">
        Visit Site
        </span>
        
    </div>
    <div id="company-section">
  
      <p class="description">
        Count - No of times the question was asked in an interview. <br>
        Percentage - percentage of times the question was asked in the company. <br>
        <span> <em>you can click on the company name to see all questions asked by the company </em> </span>
      </p>
        
  
    <div class="table" id='table'>
  
    </div>
    </div>
    
  
    <div id ="yt-section">
        <p class="description">
          Youtube Solutions for the problem <em>${problem}<em>
        </p>
        <div class="videos">
        <iframe width="100%" height="350" src="https://www.youtube.com/embed/8z8Cobsvc9k" title="Create a ChatGPT Voice Assistant in 8 Minutes (Python Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <span style="display:text-align:center;color:black; font-size: 15px;"> channel name - ${eye}  1.2k views - 2 years ago - 15:05</span>
        </div>
      </div>
      <div class="social">
      <!-- social media links with icons -->
      <a href="https://www.linkedin.com/in/abhishek-kumar-4b5b3b1b2/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
      <a href="https:www.twitter.com/abhishek_1008" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/twitter.png"/></a>
      <a href="https://www.instagram.com/abhishek_1008/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
      <a href="https://www.buymeacoffee.com/saipraveen" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
  </div>
    </div>
   
    <style>
    #about:hover{
    transform : scale(1.2);
    }

    .social {
      display: flex ;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
  }

  .social a {
      display: inline-block;
  }

  .social a:hover {
      transform: scale(1.2);
      background-color: transparent;
  }

  .social img {
      height: 40px;
      width: 40px;
  }
    .description {
      background-color: rgb(0 0 0 / 5%);
      color: rgb(0, 0, 0);
      padding: 10px;
      font-size: 16px;
      border-radius: 10px;
      margin-left: 2px;
      margin-right: 5px;
      width: auto;
      margin-top: 10px;
      font-family: Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
  }

        .section{
            align-items: center;

        }

        #table{
            width: 100%;    
        }

        .table {
          margin-top: 10px;
          margin-left: 10px;
          top: 50%;
          border-radius: 5px;
          
        }
    
        table {
          margin-top: 10px;
          border-collapse: collapse;
         
        }
    
        td,
        th {
          border: 1px solid #d0d7de;
          padding: 8px;
          text-align: left;
          color: #24292e;
        
        }
    
       iframe{
            border-radius: 5px;
            margin-top: 5px;
            padding: 10px;
       }
    
    
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
    
        .sidebar {
          margin: 0;
          top: 0;
            left: 0;

          position: fixed;
          transform: translateY(-50%);
          height: 100vh;
          /* Set the height to 100vh to fill the entire screen */
          width: 35vw;
          background-color: rgba(255, 255, 255);
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
          transition: transform 0.5s ease-out;
          transform: translateX(-150%);
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          z-index: 999;
        }
        
        .sidebar.open {
            transform: translateX(0);
            left: 0;
            top: 0;
            overflow-y: auto;
        }

    
        .sidebar h2,
        .sidebar .sidebar-close-button {
        display: inline-block;
            }   
    #sh2{
        margin-top: 5px;
        font-size: 20px;
        margin-left: 10px;
        color: black;
        font-style: bold;

    }
    
    .sidebar .sidebar-close-button {
      float: right;
    }
    
        .sidebar ul {
          list-style: none;
          padding: 0;
        }
    
        .sidebar li {
          margin-bottom: 10px;
        }
    
        .sidebar a {
          display: block;
          padding: 10px;
          text-decoration: none;
          color: #333;
        }
    
        
        .sidebar-close-button {
          
          padding: 10px;
          background-color: white;
          color:black;
          border: none;
          cursor: pointer;
        }
    
    
        .sidebar-button {
          position: fixed;
          top: 50%;
          left: 0;
          padding: 10px;
          background-color: white;
          color: #fff;
          border: none;
          cursor: pointer;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          
        }
        img{
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      
        
        #company{
            margin-left: 10px;
        }
    
        #yt-section{
          display: none;
        }
    
        .option {
    
          display: inline-block;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 10px;
          text-decoration: none;
          cursor: pointer;
          color: rgba(0, 0, 0, .4)
        }
    
        .active {
          font-weight: 600;
          color: rgb(55, 113, 224, 1);
          border-width: 0px;
          border-color: slateblue;
          border-style: solid;
          border-color: skyblue;
          border-radius: 15px;
          background-color: rgb(55, 113, 224, 0.1);
          padding: 5px;
        }
    
        body {
          margin: 0;
        }
    
        /*.section {
          margin-top: 10px;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          flex-basis: calc(50% - 5px);
          overflow: hidden;
          transition: box-shadow 0.2s ease-in-out;
    
        }
    */
   #name {
    width: 70%;
   }
    
    
    
      </style>
    `;
  
  // Inject the sidebar into the page
  document.body.insertAdjacentElement("afterend", sidebar);
  



  
  // Function to send a message to the background script to toggle the sidebar
  function toggleSidebar() {
    
    let sidebarhandle = document.querySelector(".sidebar");
    if (sidebarhandle.classList.contains("open")) {
        sidebarhandle.classList.remove("open");
        }
        else {
        sidebarhandle.classList.add("open");
        }
    
  }



  
  // Create the button and append it to the body
  const button = document.createElement("button");
  button.classList.add("sidebar-button");
  button.id = "logo";
  button.innerHTML = `<img  src="${chrome.runtime.getURL('logo.png')}" height="50" width="50">`;
  



  button.addEventListener("click", toggleSidebar);
  document.body.appendChild(button);



  // close button event listener
let close = document.querySelector(".sidebar-close-button");
close.addEventListener("click", toggleSidebar);

  

// add event listener to element with id "yt"

let yt = document.querySelector("#yt");
yt.addEventListener("click", function () {
    // send a message to the background script to open a new tab with the youtube channel with paramenter "company"
    chrome.runtime.sendMessage({ action: "switch_tab", id:"yt" });
    // close the sidebar
});

// add event listener to element with id "company"
let company = document.querySelector("#company");
company.addEventListener("click", function () {
    // send a message to the background script to open a new tab with the company website
    chrome.runtime.sendMessage({ action: "switch_tab", id: "company" });
    // close the sidebar
}

);



let sidebarwidth = document.querySelector(".sidebar");


// Create a Resize Observer instance
const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const { target, contentRect } = entry;
      const { width } = contentRect;
      
      sidebarwidth.style.width = width - 15  + "px";
     
    }
  });
  
  // Select the element you want to track
  const elementToTrackNew = document.querySelector('#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w');
  const elementToTrackold = document.querySelector('#app > div > div.main__2_tD > div.content__3fR6 > div > div.side-tools-wrapper__1TS9')

  //check if an element with id = app exists
  if (elementToTrackNew) {
    // Start observing the target element
    resizeObserver.observe(elementToTrackNew);
  }
  else if (elementToTrackold) {
    // Start observing the target element
    resizeObserver.observe(elementToTrackold);
  }
  else {
    console.log("no element found");
  }




async function worker(problemName) {
  const url = 'https://interview-prep-pro.vercel.app/api/problems/' + problemName;
  
  // Check if problemName is in localStorage
  const check = localStorage.getItem(problemName);

  if (check) {
    console.log('Data found in localStorage');
    const data = JSON.parse(check);
    createData(data);
    return;
  }

  console.log('Fetching data from API');
  try {
    const response = await fetch(url);
    if (response.ok) {
      const responseText = await response.text();
      const data = JSON.parse(responseText);

      // Save data to localStorage
      localStorage.setItem(problemName, JSON.stringify(data));

      createData(data);
    } else {
      throw new Error('Request failed. Status: ' + response.status);
    }
  } catch (error) {
    console.error('Request failed. Error:', error.message);
  }
}

  

function createData(data) {
    let element = document.getElementById('table');

    table = ` <table>
    <thead>
    <tr>
    <td>S.no</td>
    <td> Companies </td>
    <td> Count </td>
    </tr>
    </thead>
    <tbody>
    `
    companies = data.problem.company;
    //console.log(companies, "this is a test")

    for (i = 0; i < companies.length; i++) {
      frequency = companies[i].freq;
      percentage = companies[i].percentage; // it is a string 
      if (percentage){
      // limit the percentage to 2 decimal places, first convert remove the % sign and convert to float
      percentage = parseFloat(percentage.slice(0,-1)).toFixed(1) + "%";
      // limit to 2 decimal places and add % sign
      }
      if (companies[i].freq != undefined && companies[i].percentage != undefined) {
        // if freq and percentage are not undefined
        table += `<tr>
        <td> ${i + 1} </td>
        <td id='name'> <a href="https://interview-prep-pro.vercel.app/company/${companies[i].name}" target=_blank>   ${companies[i].name}</a> </td>
        <td> ${frequency}(${percentage}) </td>`
      }
      // only freq is defined 
      else if (companies[i].freq != undefined) {
        frequency = companies[i].freq;
        table += `<tr>
        <td> ${i + 1} </td>
        <td id='name'> <a href="https://interview-prep-pro.vercel.app/company/${companies[i].name}" target=_blank>${companies[i].name}</a> </td>
        <td> ${frequency} </td>`
      }
      // only percentage is defined
      else {
        table += `<tr>
        <td> ${i + 1} </td>
        <td id='name'> <a href="https://interview-prep-pro.vercel.app/company/${companies[i].name}" target=_blank>   ${companies[i].name}</a> </td>
        <td> ${percentage} </td>`
      }

    }

    // close the table body and table
    table += `</tbody>
    </table>`

    element.innerHTML = table

    insertYT(data)
  
}



function insertYT(data){
  element = document.querySelector('.videos')
  yt =  ``;
  ytvideos = data.videos;

  for (i=0; i<ytvideos.length; i++){
    yt +=
   ` <iframe width="95%" height="400" src="https://www.youtube.com/embed/${ytvideos[i].video_id}" title="${ytvideos[i].video_title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <p><span style="display:text-align:center;color:black; font-size: 15px;"> ${ytvideos[i].channel} - ${eye}  ${ytvideos[i].view_count}  - ${ytvideos[i].date} - ${ytvideos[i].length}</span><p>
  `
  }
  element.innerHTML = yt

}


// problem name from the url

console.log("The Problem Name is ", problemName);

worker(problemName);


