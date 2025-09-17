let departurePlanet = "Trai Dat";
let mission = "Khám phá Vũ trụ K11";
let crew = {
    member: ["Huy", "Chi", "An"],
}

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew.member.join(", ")} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission} !`;
}

console.log(launchShip(crew));

function calculateDistance(speed, time) {
    return speed * time;
}

console.log(`Khoang cach tinh toan duoc la ${calculateDistance(1000, 24)} Km.`);


function convertTimeToHex(time) {
    return time.toString(16);
}

console.log(`120 giay tren hanh tinh ky la ${convertTimeToHex(120)}`);

function decryptCode(code) {
    let result = "";

    for (let i of code) {
        if (i == i.toLowerCase()) {
            result += i.toUpperCase();
        } else {
            result += i.toLowerCase();
        }
    }
    return result;
}

console.log(decryptCode(code = "K11 Challenge"));

function returnToEarth() {
    console.log("Chuan bi tro ve Trai Dat");
}
returnToEarth();