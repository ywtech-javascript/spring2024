const gallery = document.querySelector("#gallery");

function addImageCardToDOM(id, caption) {
    const template = `
        <section class="card">
            <img src="https://picsum.photos/id/${id}/400/300" />
            <p>${caption}</p>
        </section>`;
    gallery.insertAdjacentHTML("beforeend", template);
}

// draw a card for each of the following images:
addImageCardToDOM(106, "Flowers");
addImageCardToDOM(107, "Wild Grasses in a Meadow");
addImageCardToDOM(108, "Palm Trees");
addImageCardToDOM(109, "Meadow at sunset");
addImageCardToDOM(110, "Field");
addImageCardToDOM(111, "Truck");
addImageCardToDOM(112, "Wheat");
addImageCardToDOM(114, "Sky");


// let i = 114;
// function showNewImageFromServer() {
//     i += 1;
//     addImageCardToDOM(i, "some caption");
// }
