const dropdownTrigger = document.querySelectorAll(".material-icon-dropdown");

const openDropdown = (el) => {
  const dropdownMenu = document.getElementById(el);
  dropdownMenu.classList.toggle("active");

  document
    .querySelectorAll(
      ".accordion-wrapper-dropdopwn-items__dropdown-menu.active"
    )
    .forEach((el) => {
      if (el === dropdownMenu) return;
      el.classList.remove("active");
    });
};

dropdownTrigger.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetEl = btn.dataset.dropdownTarget;
    openDropdown(targetEl);
  });
});
