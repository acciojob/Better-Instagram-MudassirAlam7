let imageList = document.getElementsByClassName('image');
let firstElement = null;

for (let list of imageList) {
    list.setAttribute('draggable', 'true');

    list.addEventListener('dragstart', function (e) {
        firstElement = e.target;
        e.dataTransfer.setData('text/plain', ''); // Required for some browsers
    });

    list.addEventListener('dragover', function (e) {
        e.preventDefault(); // Allow dropping
    });

    list.addEventListener('drop', function (e) {
        e.preventDefault();
        let secondElement = e.target;

        if (firstElement && firstElement !== secondElement) {
            // Swap inner HTML instead of background images
            let tempHTML = firstElement.innerHTML;
            firstElement.innerHTML = secondElement.innerHTML;
            secondElement.innerHTML = tempHTML;
        }

        firstElement = null; // Reset first element after drop
    });
}
