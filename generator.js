function renderTooltip(triggerText, tooltipText) {
    return `
        <div class="tooltip">
            <button class="tooltip__trigger">${triggerText}</button>
            <div class="tooltip__content">${tooltipText}</div>
        </div>
    `;
}

const tooltip1 = renderTooltip("текст 1", "подсказка 1");
const tooltip2 = renderTooltip("текст 2", "подсказка 2");
const tooltip3 = renderTooltip("текст 3", "подсказка 3");

console.log(tooltip1);
console.log(tooltip2);
console.log(tooltip3);