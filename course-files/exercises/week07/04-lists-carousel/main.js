// more photo ids can be found here: https://picsum.photos/images#4

const pictureIdList = [
    237, 238, 239, 240, 241, 242, 243, 244, 104, 106, 107, 108, 109, 110,
];

let i = 0;
const pic = document.querySelector("img");
const caption = document.querySelector("p");

function showImage() {
    // right now, showImage always shows the same image.
    // Make it show different imageIDs (from the list above)
    const pictureId = 237;
    pic.src = "https://picsum.photos/id/" + pictureId + "/400/300";
    caption.innerHTML = "Picture 1 of 14";
}

function previous() {
    // show the previous image in the list
    console.log("show previous image...");
}

function next() {
    // show the next image in the list
    console.log("show next image...");
}

showImage();
