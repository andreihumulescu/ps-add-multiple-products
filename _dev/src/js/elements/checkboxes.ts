function getActiveCheckboxes() {
  return document.querySelectorAll(
    '.addmultipleproducts .checkbox-container input:checked'
  );
}

function getCheckboxes() {
  return document.querySelectorAll(
    '.addmultipleproducts .checkbox-container input'
  );
}

function resetCheckboxes() {
  for (let activeCheckbox of Array.from(getActiveCheckboxes())) {
    (activeCheckbox as HTMLInputElement).click();
  }
}

export { getCheckboxes, getActiveCheckboxes, resetCheckboxes };
