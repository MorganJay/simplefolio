export function addResume(pdf) {
  if (!pdf) return;

  const resumeButton = document.querySelector(".cta-btn--resume");
  resumeButton.setAttribute("href", pdf);
}

export function setCurrentYearCopy() {
  const currentYear = new Date().getFullYear();
  const currentYearEl = document.querySelector(".year");
  currentYearEl.textContent = currentYear;
}
