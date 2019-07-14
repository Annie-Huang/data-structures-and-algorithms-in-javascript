// Stacks
// Last in, frist out

function createStack() {
    const array = [];

    return {
        // push
        push(item) {
            array.push(item)
        },
        // pop
        pop() {
            return array.pop()
        },
        // peek
        peek() {
            return array[array.length - 1]
        },
        // length
        // We can create a length property. In order to do this, we need to use a getter function.
        // If we simply call .length on our stack, we'll get the value every time,
        // because that's the length of the array when this object is created.

        // This will work too:
        // length() {..}
        // lowerBodyStack.length()

        get length() {
            return array.length
        },
        // isEmpty
        isEmpty() {
            return array.length === 0;
        }
    }
}

const lowerBodyStack = createStack();

lowerBodyStack.push('underwear');
lowerBodyStack.push('sock');
lowerBodyStack.push('pants');
lowerBodyStack.push('shoes');

lowerBodyStack.pop();
lowerBodyStack.pop();
// console.log(lowerBodyStack.peek());
console.log(lowerBodyStack.length);
