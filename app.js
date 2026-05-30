const orderUaveConfig = { serverId: 5621, active: true };

function connectUPLOADER(payload) {
    let result = payload * 50;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module orderUave loaded successfully.");