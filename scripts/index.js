class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const id = this.id++;
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }
}

const repo = new Repository();

const createActivityCard = (activity) => {
    const { id, title, description, imgUrl } = activity;

    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    h3.className='titulo';
    
    const p = document.createElement("p");
    p.innerHTML = description;
    p.className='subtitulo'
    
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `${title} image not found`;

    const card = document.createElement("div");
    card.className = 'card';
    card.id = id;

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);
    
    return card;
};

const createAllActivities = () => {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = '';

    const allActivities = repo.getAllActivities();

    allActivities.forEach(activity => {
        const activityCard = createActivityCard(activity);
        container.appendChild(activityCard);
    });
};

const handleClickSubmit = (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const imgUrl = document.getElementById("url").value;

    if (!title.trim() || !description.trim() || !imgUrl.trim()) {
        alert('Es necesario completar todos los campos');
        return;
    }

    repo.createActivity(title, description, imgUrl);
    createAllActivities();
};

const buttonSubmit=document.getElementById("add")
buttonSubmit.addEventListener("click",handleClickSubmit);
