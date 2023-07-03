let form = document.querySelector(".form");
let input = document.querySelector(".input");

form.addEventListener('submit', () => { speedDetector(parseInt(input.value, 10)) })


function speedDetector(carSpeed) {
    const speedLimit = 70;
    const extraSpeed = carSpeed - speedLimit;
    const demeritPoint = extraSpeed / 5;
    if (demeritPoint >= 12) {
        alert("License suspended")
    }

    if (carSpeed <= speedLimit) {
        alert("Ok")
    }
    else {

        alert(`points: ${demeritPoint}`)
    }

}