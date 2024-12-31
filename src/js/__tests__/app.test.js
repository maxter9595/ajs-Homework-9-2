import ArrayBufferConverter from '../app';
import getBuffer from '../buffer';

describe('ArrayBufferConverter tests', () => {
    test('should correctly convert ArrayBuffer to string', () => {
        const buffer = getBuffer();
        const converter = new ArrayBufferConverter();
        converter.load(buffer);
        const result = converter.toString();
        expect(result).toBe(
            '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
        );
    });

    test('toString should return an empty string if no buffer is loaded', () => {
        const converter = new ArrayBufferConverter();
        expect(converter.toString()).toBe('');
    });

    test('load should correctly load buffer data', () => {
        const buffer = getBuffer();
        const converter = new ArrayBufferConverter();
        converter.load(buffer);
        expect(converter.bufferView).toBeInstanceOf(Uint16Array);
        expect(converter.bufferView.length).toBe(buffer.byteLength / 2);
    });
});
