class sanitization {
    static checkIfString(a) {
        let check = true
        if(typeof(a) == 'string') {
            throw new Error('Cannot add Strings');
        } else {
            check = false
            return check
        }
    }
}

module.exports = sanitization;