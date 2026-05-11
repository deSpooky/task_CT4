const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach(tooltip => {
    const trigger = tooltip.querySelector(".tooltip__trigger")

    trigger.addEventListener("mouseenter", () => {
        tooltip.classList.add("tooltip_visible")
    })

    trigger.addEventListener("mouseleave", () => {
        tooltip.classList.remove("tooltip_visible")
    })
})