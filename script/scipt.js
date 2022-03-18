window.onload = () =>{
    setTimeout(()=>{
        const preloader = document.querySelector('.preloader');
        preloader.style.top = "-1000px";
    },500);
    
}
window.addEventListener('DOMContentLoaded', () => {
    class SpecializationCard {
        constructor(src,title,descr,parentSelector,...classes) {
            this.src = src,
            this.title = title,
            this.descr = descr,
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }
        
        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.element = 'specializationCard__item';
                element.classList.add(this.element);
            }else{
                this.element = 'specializationCard__item';
                this.classes.forEach(className => element.classList.add(this.element,className));
            }
            element.innerHTML = `
                <h3 class = "specializationCard__item-title">${this.title}</h3>
                <p class = "specializationCard__item-descr">${this.descr}</p>
                <button><div></div>Read more</button>
            `;
            element.style.background = `url(${this.src})`
            this.parent.append(element);
        }   
    }
    class Location {
        constructor(src,title,descr,parentSelector) {
            this.src = src,
            this.title =title,
            this.descr = descr,
            this.parent = document.querySelector(parentSelector)
        }
        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class = "location">
                    <h3 class = "location-title">${this.title}</h3>
                    <p class = "location-descr">${this.descr}</p>
                </div>
            `
            this.parent.style.background = `url(${this.src})`
            this.parent.append(element);
        }
    }
    class infoLocation {
        constructor(speed,angel,iso,positon,parentSelector,left,top) {
            this.speed = speed,
            this.angel = angel,
            this.iso = iso,
            this.positon = positon,
            this.parent = document.querySelector(parentSelector),
            this.left = left,
            this.top = top
        }
        render() {
            const element = document.createElement('div');
            element.className = 'info-location';
            element.innerHTML = `
                <div class="speed"><img src = "/img/speed.png"><p>${this.speed}</p></div>
                <div class="angle"><img src = "/img/angle.png"><p>${this.angel}</p></div>
                <div class="iso"><img src = "/img/iso.png"><p>${this.iso}</p></div>
                <div class="position"><img src = "/img/position.png"><p>${this.positon}</p></div>
            `
            element.style.left = `${this.left}`
            element.style.top = `${this.top}`;
            this.parent.append(element);
        }
    }
    new SpecializationCard(
        "/img/SpecializationCard1.png",
        "Product Photography",
        "Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
        ".specialization__exempels"
    ).render();
    new SpecializationCard(
        "/img/SpecializationCard2.png",
        "Architecture Photography",
        "Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.",
        ".specialization__exempels"
    ).render();
    new SpecializationCard(
        "/img/SpecializationCard3.png",
        "Drone Photography",
        "Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.",
        ".specialization__exempels"
    ).render();
    new SpecializationCard(
        "/img/SpecializationCard4.png",
        "Wildlife Photography",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.",
        ".specialization__exempels"
    ).render();

    new Location(
        "/img/japan_bg.png",
        "Sunset at Mount Fuji",
        "Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.",
        ".japan"
    ).render();
    new Location(
        "/img/leaf_bg.png",
        "Monstera Leafs",
        "Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.",
        ".leaf"
    ).render();
    new Location(
        "/img/starfall_bg.png",
        "Star fall in the Himalayas",
        "Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.",
        '.starfall'
    ).render();
    new infoLocation(
        "1/2000s",
        "f/11",
        "100",
        "Iceland",
        ".about",
        "1037.25px",
        "750px"
    ).render();
    new infoLocation(
        `1"`,
        "f/16",
        "400",
        "Japan",
        ".japan",
        "1037.25px",
        "2900px"
    ).render();
    new infoLocation(
        `0.8"`,
        "f/5.6",
        "100",
        "Sweden",
        ".tools",
        "1037.25px",
        "3445px"
    ).render();
    new infoLocation(
        `1/400s`,
        "f/3,5",
        "100",
        "Costa Rica",
        ".leaf",
        "1037.25px",
        "4045px"
    ).render();
    new infoLocation(
        `6"`,
        "f/11",
        "800",
        "Nepal",
        ".starfall",
        "1037.25px",
        "5145px"
    ).render();
});