
let treversed_path = new Array(max_node_col * max_node_row).fill(false);
const start_index = coord_to_index(0, 0)
let parent_nodes = new Array(max_node_col * max_node_row).fill(null);
let child_nodes = Array.from({length: max_node_col * max_node_row}, () => [])

// coords
function coord_to_index(x, y) {
    return x + max_node_col * y
}

function index_to_coord(index) {
    return [index % max_node_col, Math.trunc(index / max_node_col)]
}


// stack
let path_stack = []
function push_path(x, y) {
    const index = coord_to_index(x, y)
    path_stack.push(index)
}

function pop_path() {
    if (path_stack.length == 0)
        return []
    const index = path_stack.pop();
    return index_to_coord(index)
}

// available path by coord
function up(x, y) {
    const new_y = y - 1
    if (row_out_of_bound(new_y)) return
    if (coord_treversed(x, new_y)) return
    return [x, new_y]
}
function down(x, y) {
    const new_y = y + 1
    if (row_out_of_bound(new_y)) return
    if (coord_treversed(x, new_y)) return
    return [x, new_y]
}
function right(x, y) {
    const new_x = x + 1
    if (col_out_of_bound(new_x)) return
    if (coord_treversed(new_x, y)) return
    return [new_x, y]
}
function left(x, y) {
    const new_x = x - 1
    if (col_out_of_bound(new_x)) return
    if (coord_treversed(new_x, y)) return
    return [new_x, y]
}
function row_out_of_bound(y) {
    return (y < 0) || (y >= max_node_row)
}
function col_out_of_bound(x) {
    return (x < 0) || (x >= max_node_col)
}
function coord_treversed(x, y) {
    const index = coord_to_index(x, y);
    return treversed_path[index];
}


// available path by index

function index_up(index) {
    const new_index = index - max_node_col;
    if (index_out_of_bound(new_index)) return
    if (index_treversed(new_index)) return
    return new_index
}
function index_down(index) {
    const new_index = index + max_node_col;
    if (index_out_of_bound(new_index)) return
    if (index_treversed(new_index)) return
    return new_index
}
function index_right(index) {
    const new_index = index + 1;
    if (index_out_of_bound(new_index)) return
    if (!index_same_row(index, new_index)) return
    if (index_treversed(new_index)) return
    return new_index
}
function index_left(index) {
    const new_index = index - 1;
    if (index_out_of_bound(new_index)) return
    if (!index_same_row(index, new_index)) return
    if (index_treversed(new_index)) return
    return new_index
}

function index_out_of_bound(index) {
    return (index < 0) || (index >= (max_node_col * max_node_row))
}
function index_same_row(index1, index2) {
    return Math.trunc(index1 / max_node_col) == Math.trunc(index2 / max_node_col)
}
function index_treversed(index) {
    return treversed_path[index];
}


function random_int(max) {
    return Math.floor(Math.random() * max);
}


function get_neighbours(index) {
    return [
        index_up(index),
        index_down(index),
        index_left(index),
        index_right(index),
    ].filter((val) => val != null)
}

function select_one_neighbour(neighbours) {
    const len = neighbours.length;
    return neighbours[random_int(len)];
}

function generate() {
    recursive_gen(start_index)
    console.log(child_nodes)
    return parent_nodes
    // console.log(parent_nodes)
    // if(index_up(start_index))

}
function recursive_gen(index) {
    treversed_path[index] = true;
    // path_stack.push(index);
    let neighbours = get_neighbours(index);
    while (neighbours.length > 0) {
        // console.log(neighbours)
        const next_index = select_one_neighbour(neighbours)
        // console.log(next_index)
        parent_nodes[next_index] = index
        child_nodes[index].push(next_index)
        recursive_gen(next_index);
        neighbours = get_neighbours(index)
        treversed_path[index] = true;
    }
}


function draw_index(index1, index2) {
    const [start_x, start_y] = index_to_coord(index1)
    const [end_x, end_y] = index_to_coord(index2)
    draw_line(start_x, start_y, end_x, end_y);
}




// push to stack 
// add to treversed path
// add available path
// if no available path pop stack -> repeat step 1
// else select random path
// save parent child link
// repeat step 1


// push_path(1,1);
// push_path(1,2);
// push_path(1,4);


// console.log(path_stack)

// const [test_x,test_y] = pop_path()
// console.log(`x:${test_x},y:${test_y}`)
// console.log(path_stack)
// console.log(treversed_path)