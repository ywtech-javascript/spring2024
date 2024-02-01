function updateScreen(ev) {
    ev.preventDefault();
    const selector = document.querySelector("#selector").value;
    const prop = document.querySelector("#thing-to-change").value;
    const val = document.querySelector("#value").value;
    if (!selector || !prop || !val) {
        return;
    }
    const executionString = `document.querySelector("${selector}").${prop} = "${val}";`;
    const elem = document.querySelector("#js");
    elem.insertAdjacentHTML("beforeend", `${executionString}\n`);
    try {
        eval(executionString);
    } catch (ex) {
        console.error(ex);
    }
    // Element previously highlighted.
    // To highlight again, first unset `dataset.highlighted`.
    elem.removeAttribute("data-highlighted");
    hljs.highlightElement(elem);
}
