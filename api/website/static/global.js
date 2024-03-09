window.onload = function() {
    var collapsables = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < collapsables.length; i++) {
        collapsables[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
    }
}