function toggleDropdown() {
    document.getElementById("select-down").classList.toggle("show-select-dropdown-content");
}
  
function filterFunction() {
var input, filter, ul, li, a, i;
input = document.getElementById("select-down-input");
filter = input.value.toUpperCase();
div = document.getElementById("select-down");
button = div.getElementsByTagName("span");
for (i = 0; i < a.length; i++) {
    txtValue = button[i].textContent || button[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
    button[i].style.display = "";
    } else {
    button[i].style.display = "none";
    }
}
}