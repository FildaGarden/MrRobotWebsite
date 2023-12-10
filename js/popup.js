function openPopup(imageSrc) {
    var popup = document.getElementById('myPopup');
    var popupImg = document.getElementById('popupImage');

    popup.style.display = 'block';
    popupImg.src = imageSrc;
}

function closePopup() {
    document.getElementById('myPopup').style.display = 'none';
}