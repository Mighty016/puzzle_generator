
const canvas = document.getElementById("canvas");

canvas.width = c_width
canvas.height = c_height

const ctx = canvas.getContext("2d");
ctx.lineWidth = size


function draw_all_nodes(){
    for ( let x = 0; x < max_node_col; x++){
        for( let y = 0; y < max_node_row; y++){
            ctx.fillRect((size + space) * x,(size + space) * y,size,size);
        }
    }    
}

function clear_canvas(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,c_width,c_height)
}



// clear_canvas()


function coord_to_line_position(x,y){
    return [start_line + (space + size) * x,start_line + (space + size) * y]
}
function draw_line(start_x,start_y,end_x,end_y){
    const [start_pos_x,start_pos_y] = coord_to_line_position(start_x,start_y);
    const [end_pos_x,end_pos_y] = coord_to_line_position(end_x,end_y);
    ctx.moveTo(start_pos_x, start_pos_y);
    ctx.lineTo(end_pos_x, end_pos_y);
    

}

function draw_puzzle(parent_nodes){
    for (let i=0;i<parent_nodes.length;i++){
        const [start_x,start_y] = index_to_coord(i)
        const [end_x,end_y] = index_to_coord(parent_nodes[i])
        ctx.beginPath();
        draw_line(start_x,start_y,end_x,end_y);
        ctx.stroke();
    }

}

// function draw_path(path_stack){
//     let current_index = path_stack.pop()
//     ctx.beginPath();
//     const start_coord = index_to_coord(current_index)
//     const start_line = coord_to_line_position(start_coord[0],start_coord[1])
//     ctx.moveTo(start_line[0],start_line[1]);
//     while(current_index){
//         current_index = path_stack.pop()
//         const coord = index_to_coord(current_index)
//         const [x,y] = coord_to_line_position(coord[0],coord[1])
//         ctx.lineTo(x, y);
//     }
//     ctx.stroke();
// }

// function draw_multi_path(child_nodes){
//     let stacks = [[0]]

//     stacks.forEach((stack)=>{

//     })
// }