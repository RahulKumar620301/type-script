var direction;
(function (direction) {
    direction[direction["North"] = 12] = "North";
    direction[direction["South"] = 14] = "South";
    direction[direction["west"] = 16] = "west";
    direction[direction["East"] = 20] = "East";
})(direction || (direction = {}));
//console.log(direction)
console.log(direction.North);
console.log(direction.west);
console.log(direction[12]);
