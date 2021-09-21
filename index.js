// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    let distance;
    if (blocks >= 42) {
        distance = blocks - 42;
    }
    else {
        distance = 42 - blocks;
    }
    return distance;
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    if (block2 > block1) {
        return (block2 - block1) * 264;
    }
    else if (block2 < block1) {
        return (block1 - block2) * 264;
    }
}

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2);
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}