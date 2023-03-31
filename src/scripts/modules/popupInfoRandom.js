const popupInfoRandom = () => {
    const popupInfo = document.querySelector('.popup-random-info'),
        popupRandomBlock = document.querySelector('.popup-random'),
        popupClose = document.querySelector('.popup-random-close');

    const content = {
        1: {
            "img": "./images/icon-people.svg",
            "text": "Количество посетителей на сайте: <br><span class='popup-number'>172</span>"
        },

        2: {
            "img": "./images/icon-phone.svg",
            "text": "Ольга М. сделала заявку на обратный звонок"
        },

        3: {
            "img": "./images/icon-cart.svg",
            "text": "Ольга М. только что совершила покупку на сумму 5 600 руб."
        },

    }

   const random = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getText = (contentNumber) => {
        const txt = content[contentNumber]["text"];
        const textBlock = document.createElement("div");
        textBlock.classList.add('popup-random-text');
        textBlock.innerHTML = txt;
        return textBlock;
    }

    const getImg = (contentNumber) => {
        const img = new Image();
        img.classList.add('popup-random-icon');
        img.src = content[contentNumber]["img"];
        return img;
    }

    const contentToBlock = () => {
        popupRandomBlock.style.display = 'block';

        const contentNumber = random(1, 3),
            imgBlock = popupInfo.querySelector("img"),
            textBlock = popupInfo.querySelector(".popup-random-text");

        imgBlock ? imgBlock.replaceWith(getImg(contentNumber)) : popupInfo.append(getImg(contentNumber));
        textBlock ? textBlock.replaceWith(getText(contentNumber)) : popupInfo.append(getText(contentNumber));
    }

    setInterval(contentToBlock, 10000);

    popupClose.addEventListener('click', () => {
        popupRandomBlock.style.display = 'none';
    });

};

export default popupInfoRandom;


