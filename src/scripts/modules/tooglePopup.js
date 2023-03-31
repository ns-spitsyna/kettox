const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBackdrop = document.querySelector('.popup-backdrop');

    popup.classList.add('d-flex');
    popupBackdrop.classList.add('show');

    popup.addEventListener('click', (event) =>{
        let target = event.target;
        target = target.closest('.popup-body');
        if(!target){
            popup.classList.remove('d-flex');
            popupBackdrop.classList.remove('show');
        }
    });
};

export default togglePopup;