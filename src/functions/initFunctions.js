function initBoxes(rows, cols) {
    let boxes = []
    let count = 0;
    for (let r = 0; r < rows; r++) {
        let box = []
        for (let c = 0; c < cols; c++) {
            box.push({
                id: count,
                row: r,
                col: c,
                state:0, // options 0, 1, 2
            }) 
            count++;  
        }
        boxes.push(box);
    }
    return boxes
}

export { initBoxes}