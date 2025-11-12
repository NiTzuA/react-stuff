function Add(x, y) {
    return x + y;
}

function Display() {
    let x = 1;
    let y = 2;
    let sum = Add(x, y);

    return (
        <h1>{x} + {y} = {sum}</h1>
    );
}

export default Display;