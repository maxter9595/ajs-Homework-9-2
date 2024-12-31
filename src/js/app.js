class ArrayBufferConverter {
    load(buffer) {
        this.bufferView = new Uint16Array(buffer);
    }

    toString() {
        if (!this.bufferView) {
            return '';
        }
        return Array
            .from(this.bufferView)
            .map((code) => String.fromCharCode(code))
            .join('');
    }
}

export default ArrayBufferConverter;
