console.log("configs")
console.log(`canvas size:${c_width} x ${c_height}`)
console.log(`node size ${size}px with ${space}px spacing`)
console.log(`number of column:${max_node_col}`)
console.log(`number of row:${max_node_row}`)


const test_coord = [1,3]
const test_index = coord_to_index(test_coord[0],test_coord[1])
const original_coord = index_to_coord(test_index);
console.log(`coord ${test_coord[0]},${test_coord[1]} index is ${test_index} and convert back to ${original_coord[0]},${original_coord[1]}`) 

const up_coord = up(test_coord[0],test_coord[1])
console.log(`${test_coord[0]},${test_coord[1]} up is ${up_coord[0]},${up_coord[1]}`)

const up_index = index_up(test_index)
const up_index_coord = index_to_coord(up_index)
console.log(`${test_index} up is ${up_index}(${up_index_coord[0]},${up_index_coord[1]})`)
