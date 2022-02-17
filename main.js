const buyClay = () => {
    clayObject = {};
    return clayObject;
}

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl";
    return clayObject;
}

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true;
    return clayObject;
}

const glazePottery = (clayObject) => {
    if (clayObject.bisqueFire = true) {
        clayObject.glazing = "Midnight Blue";
        return clayObject;
    } else {
        console.log("Make Sure you bisque fire the pottery before you glaze it.")
    }
}

const finalFiring = (clayObject, temp) => {
    if(temp > 1200) {
        clayObject.cracked = true;
    } else {
        clayObject.cracked = false;
    }
    return clayObject;
}

const entireClayProcess = () => {
    let clay = buyClay();
    makePottery(clay);
    bisqueFire(clay);
    glazePottery(clay);
    return clay;
}

let clay1 = entireClayProcess();
console.log(clay1);

// or could do just...
// console.log(entireClayProcess);

