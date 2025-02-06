draw_all_nodes()
measure_runtime(generate,"generate")
measure_runtime(()=>{draw_puzzle(parent_nodes)},"draw_puzzle");

function measure_runtime(func,name){
    const startTime = performance.now()
    func()
    const endTime = performance.now()
    console.log(`Call to ${name} took ${endTime - startTime} milliseconds`)
}

