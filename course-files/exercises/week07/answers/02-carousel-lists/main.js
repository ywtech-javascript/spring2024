// more photo ids can be found here: https://picsum.photos/images#4

const pictureIdList = [
    237, 238, 239, 240, 241, 242, 243, 244, 104, 106, 107, 108, 109, 110,
];

let i = 0;
const pic = document.querySelector("img");
const caption = document.querySelector("p");

function showImage() {
    pic.src = "https://picsum.photos/id/" + pictureIdList[i] + "/400/300";
    caption.innerHTML = "Picture " + (i + 1) + " of " + pictureIdList.length;
}

function previous() {
    i = i - 1;
    if (i < 0) {
        i = pictureIdList.length - 1;
    }
    showImage();
}

function next() {
    i = i + 1;
    if (i == pictureIdList.length) {
        i = 0;
    }
    showImage();
}

showImage();
