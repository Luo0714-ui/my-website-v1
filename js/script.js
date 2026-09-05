// 页面加载完成后才绑定交互事件
document.addEventListener("DOMContentLoaded", function () {
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const siteNav = document.getElementById("site-nav");
  const heading = document.getElementById("welcome-heading");
  const changeButton = document.getElementById("change-button");
  const feedback = document.getElementById("feedback");

  function closeMenu() {
    siteHeader.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "菜单";
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = siteHeader.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "关闭" : "菜单";
  });

  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  let hasSwitched = false;

  changeButton.addEventListener("click", function () {
    if (!hasSwitched) {
      heading.textContent = "你好，GitHub Pages！";
      feedback.textContent = "你已经完成第一次切换，JavaScript 修改了页面文字。";
    } else {
      heading.textContent = "你好，世界！";
      feedback.textContent = "已切回最初的问候语。";
    }

    hasSwitched = !hasSwitched;
  });
});
