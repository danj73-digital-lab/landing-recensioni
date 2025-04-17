document.getElementById("filter-stars").addEventListener("change", function() {
    const selectedStars = this.value;
    document.querySelectorAll(".recensione").forEach(recensione => {
        const stars = recensione.querySelector("p:nth-of-type(2)").textContent.length;
        recensione.style.display = (selectedStars === "all" || stars == selectedStars) ? "block" : "none";
    });
});
