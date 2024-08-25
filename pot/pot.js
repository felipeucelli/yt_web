// https://www.youtube.com/s/player/37b24ccb/player_ias.vflset/en_US/base.js

/*
MZa => run

visitorData => turned into a uint8array per Kga

yga => creates int values

zga => creates a string based on yga

Lj.prototype => manipulates the already transformed visitorData

zj.prototype.Qu => calls g.Re with the modified visitorData and passes the value 2

g.Re => assemble the token with visitorData Transformed

*/

Xca = []

// g.Re
Re = function(a, b) {
        b === void 0 && (b = 0);
        Wca();
        b = Xca[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var h = a[e]
              , l = a[e + 1]
              , m = a[e + 2]
              , n = b[h >> 2];
            h = b[(h & 3) << 4 | l >> 4];
            l = b[(l & 15) << 2 | m >> 6];
            m = b[m & 63];
            c[f++] = "" + n + h + l + m
        }
        n = 0;
        m = d;
        switch (a.length - e) {
        case 2:
            n = a[e + 1],
            m = b[(n & 15) << 2] || d;
        case 1:
            a = a[e],
            c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + m + d
        }
        return c.join("")
    }
    ;

    Wca = function() { 
        Ue = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
            var d = a.concat(b[c].split(""));
            Xca[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                Ue[f] === void 0 && (Ue[f] = e)
            }
        }
        
    }
    ;

    Kga = function(a) {
        return globalThis.TextEncoder ? (new TextEncoder).encode(a) : g.Oe(a)
        
    }
    ;

   // Lj.prototype.Pu
    Lj = function(a) {
        var b = a;
        if (b.length > 118)
            throw new ij(19,"DFO:Invalid");
        a = Math.floor(Date.now() / 1E3);
        var c = [Math.random() * 255, Math.random() * 255]
          , d = c.concat([0 & 255, 3], [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, a & 255]);
        a = new Uint8Array(2 + d.length + b.length);
        a[0] = 34;
        a[1] = d.length + b.length;
        a.set(d, 2);
        a.set(b, 2 + d.length);
        b = a.subarray(2);
        for (d = c = c.length; d < b.length; ++d)
            b[d] ^= b[d % c];
       // this.logger.G_(this.clientState);
        return a
    }
    ;



getVisitor = function(a){

    visitorDataCon = Kga(a)

    visitorDataMod = Lj(visitorDataCon)

    pot = Re(visitorDataMod, 2)

    console.log(pot)

    return pot
}

module.exports = {getVisitor}
    

