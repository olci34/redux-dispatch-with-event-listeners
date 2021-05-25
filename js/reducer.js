// add code snippets from README
let state;

function changeState(state={count: 0}, action){
    switch (action.type) {
        case ('INCREASE_COUNT'):
            return {count: state.count + 1};
        default:
            return state;
    }
}

function dispatch(action) {
    state = changeState(state, action)
    render()
}

function render() {
    document.getElementById('container').textContent = state.count
}

document.querySelector('button').addEventListener('click', () => dispatch({type: 'INCREASE_COUNT'}))
dispatch({type: '@@INIT' })