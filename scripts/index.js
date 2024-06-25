class Activity{
    constructor(id,title,description,imgUrl){
        this.id=id;
        this.title=title;
        this.description=description;
        this.description=imgUrl;
    }
}

class Repository{
    constructor(){
        this.activities=[];
    }
    getAllActivities(){
        return this.activities;
    }
    createActivities(id,title,description,imgUrl){
        const newAct=new Activity(id,title,description,imgUrl);
        this.activities.push(newAct)
    }
    deleteActivity(id){
        this.activities=this.activities.filter(function(obj){
            return obj[id]!==id
        })
    }
}