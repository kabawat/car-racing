const setGameCount = (gamelocation) => {
    if(gamelocation !== undefined) {
        let isRegisterlocation = localStorage.getItem((new Date().toJSON().slice(0, 10)).split('-').reverse().join('-') + '-' + gamelocation);
        if(isRegisterlocation === null) {
            const GameOpen = firebase.database().ref('GameOpen');
            GameOpen.update({gameName: gamelocation, time: firebase.database.ServerValue.TIMESTAMP}).then(() => {
                localStorage.setItem((new Date().toJSON().slice(0, 10)).split('-').reverse().join('-') + '-' + gamelocation, true);
            });
        }
    }
}
