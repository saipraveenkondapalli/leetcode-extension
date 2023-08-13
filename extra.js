



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
    