// Write your JavaScript code here.
window.onload = function() {
    let takeoffButton = document.getElementById('takeoff');
    let landButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');

    takeoffButton.addEventListener('click', function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    abortButton.addEventListener('click', function() {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', function() {
        rocket.style.top = parseInt(rocket.style.top) - 10 + 'px';
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener('click', function() {
        rocket.style.top = parseInt(rocket.style.top) + 10 + 'px';
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });

    rightButton.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) + 10 + 'px';
    });

    leftButton.addEventListener('click', function() {
        rocket.style.left = parseInt(rocket.style.left) - 10 + 'px';
    });
};
// Remember to pay attention to page loading!

