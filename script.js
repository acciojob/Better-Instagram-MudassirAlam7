let imageList = document.querySelectorAll('.image');
let firstElement = null;

imageList.forEach((image) => {
    image.setAttribute('draggable', 'true');

    image.addEventListener('dragstart', function (e) {
        firstElement = e.target;
        e.dataTransfer.setData('text/plain', ''); // Fix for some browsers
    });

    image.addEventListener('dragover', function (e) {
        e.preventDefault(); // Necessary to allow drop
    });

    image.addEventListener('drop', function (e) {
        e.preventDefault();
        let secondElement = e.target;

        if (firstElement && firstElement !== secondElement) {
            let parent = firstElement.parentNode;
            let nextSibling = secondElement.nextSibling === firstElement ? secondElement : secondElement.nextSibling;

            // Swap elements in the DOM
            parent.insertBefore(firstElement, secondElement);
            parent.insertBefore(secondElement, nextSibling);
        }

        firstElement = null; // Reset for next drag-and-drop
    });
});
