class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.stack.length] = val
    }

    /**
     * @return {void}
     */
    pop() {
        let val = this.stack[this.stack.length -1]
        this.stack = this.stack.slice(0, this.stack.length-1)
        return val
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let mini = this.stack[this.stack.length - 1];

        for (let i= 0; i <this.stack.length; i++) {
            mini = Math.min(mini, this.stack[i]);
        }
 
        return mini;
    }
}
