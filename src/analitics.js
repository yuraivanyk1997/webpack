function createAnalitics(){
    let counter = 0;
    let isDestroyed = false;
    const listener = () => counter++;
    document.addEventListener("click", listener);
    return {
        destroy(){
            document.removeEventListener("click", listener);
            counter = 0;
            isDestroyed = true;
        },
        getClicks(){
            if(isDestroyed){
                console.log("is destroed");
            }
            return counter;
        }
    }
}

window.anaytics = createAnalitics();