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