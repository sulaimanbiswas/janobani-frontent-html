// menu icon change onClick

{
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.addEventListener("click", (e) => {
    let iconEl = e.currentTarget.children[0].children[0];
    if (iconEl.getAttribute("href") === "#bars") {
      iconEl.setAttribute("href", "#close");
    } else {
      iconEl.setAttribute("href", "#bars");
    }
  });
}

// Hide header on scroll down, show on scroll up

{
  let lastScrollTop = 0;
  const header = document.querySelector("#header");
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.top = "-130px";
    } else {
      header.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
}
