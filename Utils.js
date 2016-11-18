/**
 * Created by Janna on 12/11/2016.
 */


function FloatToBuffer(num) {
    const buf = new Buffer(4);
    buf.writeFloatLE(num, 0);
    return buf
}
function BufferToFloat(buf) {
    return buf.readFloatLE(0);
}

module.exports.FloatToBuffer = FloatToBuffer;
module.exports.BufferToFloat = BufferToFloat;
module.exports.Frequency     = 100;