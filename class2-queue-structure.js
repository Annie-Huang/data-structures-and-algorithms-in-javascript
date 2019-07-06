// Queue

function createQueue() {
    // First in, first out
    const queue = [];

    return {
        // add or enqueue
        enqueue(item) {
            // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
            queue.unshift(item);
        },
        // remove or dequeue
        dequeue() {
            // Removes the last element from an array and returns it.
            return queue.pop();
        },
        // peek
        peek() {
            return queue[queue.length - 1]
        },
        // length
        get length() {
            return queue.length
        },
        // isEmpty
        isEmpty() {
            return queue.length === 0;
        }
    }
}

const q = createQueue();
q.enqueue('Mark an egghead lesson');
q.enqueue('Help others learn');
q.enqueue('Be happy');

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q.isEmpty());
// console.log(q.peek());
