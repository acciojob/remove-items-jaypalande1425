document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("input[type='button']").addEventListener("click", function () {
        let select = document.getElementById("colorSelect");
        let selectedOption = select.options[select.selectedIndex];
        
        if (selectedOption) {
            select.remove(select.selectedIndex);
        }
    });
});
