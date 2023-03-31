const slider = () => {
    const slide = document.querySelectorAll('.cards-elem'),
        slider = document.querySelector('.cards');
    let currentSlide = 0;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    }

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    }

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.cards-btn')) return;

        prevSlide(slide, currentSlide, 'cards-elem-active');

        if(target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        }

        if(currentSlide >= slide.length) currentSlide = 0;
        if(currentSlide < 0) currentSlide = slide.length - 1;

        nextSlide(slide, currentSlide, 'cards-elem-active');

    });


};

export default slider;