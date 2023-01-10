const startRace = (runners) => {
    let tempRunners = [...runners];
    let top3 = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * tempRunners.length);
        top3.push(tempRunners.splice(randomIndex, 1)[0]);
    }
    const results = assignTime(top3);
    raceLog(results);
}
const runners =["aa","bb","cc","dd" ,"ee","ff","gg","hh","ii","jj"];

function raceLog(results)
{
 console.log `congrats ! ${results[0].name} is the first place with ${results[0].time} the second place is ${results[1].name} with 
 ${results[1].name} and the third place ${results[0].name} with ${results[0].time}`
}
