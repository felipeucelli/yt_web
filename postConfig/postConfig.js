// https://www.youtube.com/s/player/53afa3ce/player_ias.vflset/en_US/base.js

a= {
    "Fr": {
       // "Pea": 0,
        //"N7": 543122.0705818472,
        "X7": 640,
        "W7": 360,
        "visibility": 0,
       // "efa": 26440, 
       // "A8": 26424,
       // "Xo": false,
       // "yj": 1080,
        "x8": true,
        "dT": 0,
        //"c8": 351.43875787680037
    },
    "Dx":[
        {
            "itag": 399,
            "lmt": 1716257009631240,
            "xtags": ""
        },
        {
            "itag": 251,
            "lmt": 1716256479964346,
            "xtags": ""
        }
    ],
    "hd": [
        {
            "formatId": {
                "itag": 251,
                "lmt": 1716256479964346,
                "xtags": ""
            },
            "startTimeMs": 0,
            "durationMs": 20000, // Appear to set the portion of the stream by time
            "An": 1,
            "aj": 3,
            //"UB": 0,
            //"TB": 30001 same durationMs
        },
        {
            "formatId": {
                "itag": 399,
                "lmt": 1716257009631240,
                "xtags": ""
            },
            "startTimeMs": 0,
            "durationMs": 20000, // Appear to set the portion of the stream by time
            "An": 1,
            "aj": 5,
           // "UB": 0,
           // "TB": 21960 same durationMs
        }
    ],
    "Vo": [],
    "IH": [
        {
            "itag": 251,
            "lmt": 1716256479964346,
            "xtags": ""
        },
        {
            "itag": 250,
            "lmt": 1716256475019506,
            "xtags": ""
        }
    ],
    "JH": [
        {
            "itag": 399,
            "lmt": 1716257009631240,
            "xtags": ""
        },
        {
            "itag": 248,
            "lmt": 1716256918250010,
            "xtags": ""
        },
        {
            "itag": 398,
            "lmt": 1716256690759459,
            "xtags": ""
        },
        {
            "itag": 247,
            "lmt": 1716256895494673,
            "xtags": ""
        },
        {
            "itag": 397,
            "lmt": 1716256821694880,
            "xtags": ""
        },
        {
            "itag": 244,
            "lmt": 1716256895914474,
            "xtags": ""
        },
        {
            "itag": 396,
            "lmt": 1716256650863366,
            "xtags": ""
        },
        {
            "itag": 243,
            "lmt": 1716256895959618,
            "xtags": ""
        },
        {
            "itag": 395,
            "lmt": 1716256624671426,
            "xtags": ""
        },
        {
            "itag": 242,
            "lmt": 1716256895776918,
            "xtags": ""
        },
        {
            "itag": 394,
            "lmt": 1716256647002454,
            "xtags": ""
        },
        {
            "itag": 278,
            "lmt": 1716256895175461,
            "xtags": ""
        }
    ],
    "videoPlaybackUstreamerConfig": [],
    "KC": {
        "jT": [],
        "jN": [],
        "EM": [],
        "clientInfo": {
            "clientName": 1,
            "clientVersion": "2.20240816.01.00",
            "osName": "Windows",
            "osVersion": "10.0"
        }
    }
}


OCa = function(a, b) {
    CK(a, 1, b.Fr, fL, 3);

    // #########################################
    // current video itag
    if (b.Dx)
        for (var c = 0; c < b.Dx.length; c++)
            CK(a, 2, b.Dx[c], hL, 3);
    if (b.hd)
        for (c = 0; c < b.hd.length; c++)
            CK(a, 3, b.hd[c], tCa, 3);
    // ########################################    

    AK(a, 5, b.videoPlaybackUstreamerConfig);
    //if (b.Vo)
    //    for (c = 0; c < b.Vo.length; c++)
    //        CK(a, 6, b.Vo[c], LCa, 3);
    if (b.IH)
        for (c = 0; c < b.IH.length; c++) // audio itag
            CK(a, 16, b.IH[c], hL, 3);
    if (b.JH)
        for (c = 0; c < b.JH.length; c++) // video itag
            CK(a, 17, b.JH[c], hL, 3);
    CK(a, 19, b.KC, gL, 3);
    //CK(a, 21, b.vn, MCa, 3);
    //yK(a, 22, b.dL);
    //yK(a, 23, b.aL);
    //if (b.YH)
    //    for (c = 0; c < b.YH.length; c++)
    //        CK(a, 1E3, b.YH[c], NCa, 3)
}
;

gL = function(a, b) {
    CK(a, 1, b.clientInfo, zCa, 3);
    AK(a, 2, b.jT); // visitordata transformed
   // AK(a, 3, b.playbackCookie);
   // AK(a, 4, b.vp);
   // if (b.EM)
   //     for (var c = 0; c < b.EM.length; c++)
   //         CK(a, 5, b.EM[c], ACa, 3);
   // if (b.jN)
   //     for (c = 0; c < b.jN.length; c++)
   //         yK(a, 6, b.jN[c]);
   // BK(a, 7, b.Jea);
   // CK(a, 8, b.TB, BCa, 3)
}
;


fL = function(a, b) {
    yK(a, 13, b.timeSinceLastManualFormatSelectionMs); 
    var c = b.lastManualDirection;
    c !== void 0 && (xK(a, 112),
    xK(a, c << 1 ^ c >> 31));
    yK(a, 16, b.J$); // set res
    //yK(a, 17, b.detailedNetworkType);
    yK(a, 18, b.X7); // 640
    yK(a, 19, b.W7); // 360
    yK(a, 21, b.Pea); // set res
    yK(a, 23, b.N7);
    yK(a, 28, b.dT); // appears to be the time shown from the player
    //yK(a, 29, b.ffa);
    yK(a, 34, b.visibility); // 0
    c = b.playbackRate; // undefined
    //if (c !== void 0) {
    //    var d = new ArrayBuffer(4);
    //    (new Float32Array(d))[0] = c;
    //    c = (new Uint32Array(d))[0];
    //    if (c !== void 0)
    //        for (xK(a, 285),
    //        wK(a, 4),
    //        d = 0; d < 4; )
    //            a.view.setUint8(a.pos, c & 255),
    //            c >>= 8,
    //            a.pos += 1,
    //            d += 1
    //}
    yK(a, 36, b.A8); // increases with each request
    //CK(a, 38, b.mediaCapabilities, wCa, 3); 
    yK(a, 39, b.efa); // increases with each request
    //yK(a, 40, b.mY);
    //yK(a, 44, b.playerState);
    zK(a, 46, b.x8); // true
    //yK(a, 48, b.Ry);
    //yK(a, 50, b.Nw);
    //yK(a, 51, b.cz);
    //yK(a, 54, b.Mq);
    //zK(a, 56, b.paa);
    yK(a, 57, b.c8); // 430.4591719178668
    zK(a, 58, b.Xo); // false
    yK(a, 59, b.yj); // 1080
    //yK(a, 60, b.ey);
    //zK(a, 61, b.isPrefetch);
    //yK(a, 62, b.Uz);
    //AK(a, 63, b.sabrLicenseConstraint);
    //yK(a, 64, b.L$);
    //yK(a, 66, b.K$);
    //yK(a, 67, b.epa);
    //yK(a, 68, b.aaa)
}
;

tCa = function(a, b) {
    CK(a, 1, b.formatId, hL, 3);
    yK(a, 2, b.startTimeMs);
    yK(a, 3, b.durationMs);
    yK(a, 4, b.An);
    yK(a, 5, b.aj);
    //CK(a, 9, b.Vma, sCa, 3);
    //CK(a, 11, b.wpa, iL, 1);
    //CK(a, 12, b.US, iL, 1)
}
;

CBa = function(a, b, c) {
    if (b && c && c.buffer === b.exports.memory.buffer) {
        var d = b.exports.realloc(c.byteOffset, a);
        if (d)
            return new Uint8Array(b.exports.memory.buffer,d,a)
    }
    a = b ? new Uint8Array(b.exports.memory.buffer,b.exports.malloc(a),a) : new Uint8Array(a);
    c && a.set(c);
    return a
}
;


yK = function(a, b, c) {
    c !== void 0 && (xK(a, b * 8),
    xK(a, c))
}
;
zK = function(a, b, c) {
    c !== void 0 && yK(a, b, c ? 1 : 0)
}
;

DBa = function(a, b) {
    this.rd = b;
    this.pos = 0;
    this.B = [];
    this.j = CBa(a === void 0 ? 4096 : a, b);
    this.view = new DataView(this.j.buffer,this.j.byteOffset,this.j.byteLength)
}
;

DK = function(a, b, c) {
    c = new DBa(4096,c);
    b(c, a);
    return new Uint8Array(c.j.buffer,c.j.byteOffset,c.pos)
}
;

FBa = function(a) {
    for (var b = a.B.pop(), c = a.B.pop(), d = a.pos - c - b; b--; ) {
        var e = b ? 128 : 0;
        a.view.setUint8(c++, d & 127 | e);
        d >>= 7
    }
}
;


iK = {encoding:"utf-8"}

jK = function(a, b) {
    var c;
    if ((c = iK) == null ? 0 : c.encodeInto)
        return b = iK.encodeInto(a, b),
        b.read < a.length ? a.length * 4 : b.written;
    for (var d = c = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) === 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) === 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
        b[c++] = e >> 18 | 240,
        b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
        b[c++] = e >> 6 & 63 | 128),
        b[c++] = e & 63 | 128)
    }
    return c
}
;

xK = function(a, b) {
        if (b > 268435455) {
            wK(a, 4);
            for (var c = b & 1073741823, d = 0; d < 4; d++)
                a.view.setUint8(a.pos, c & 127 | 128),
                c >>= 7,
                a.pos += 1;
            b = Math.floor(b / 268435456)
        }
        for (wK(a, 4); b > 127; )
            a.view.setUint8(a.pos, b & 127 | 128),
            b >>= 7,
            a.pos += 1;
        a.view.setUint8(a.pos, b);
        a.pos += 1
    }
    ;
yK = function(a, b, c) {
    c !== void 0 && (xK(a, b * 8),
    xK(a, c))
}
;
zK = function(a, b, c) {
    c !== void 0 && yK(a, b, c ? 1 : 0)
}
;
AK = function(a, b, c) {
    c !== void 0 && (xK(a, b * 8 + 2),
    b = c.length,
    xK(a, b),
    wK(a, b),
    a.j.set(c, a.pos),
    a.pos += b)
}
;
BK = function(a, b, c) {
    c !== void 0 && (EBa(a, b, Math.ceil(Math.log2(c.length * 4 + 2) / 7)),
    wK(a, c.length * 1.2),
    b = jK(c, a.j.subarray(a.pos)),
    a.pos + b > a.j.length && (wK(a, b),
    b = jK(c, a.j.subarray(a.pos))),
    a.pos += b,
    FBa(a))
}
;

zCa = function(a, b) {
    //BK(a, 12, b.deviceMake);
    //BK(a, 13, b.deviceModel);
    yK(a, 16, b.clientName);
    BK(a, 17, b.clientVersion);
    BK(a, 18, b.osName);
    BK(a, 19, b.osVersion)
}
;

hL = function(a, b) {
    yK(a, 1, b.itag);
    yK(a, 2, b.lmt);
    BK(a, 3, b.xtags)
}
;

EBa = function(a, b, c) {
    c = c === void 0 ? 2 : c;
    xK(a, b * 8 + 2);
    a.B.push(a.pos);
    a.B.push(c);
    a.pos += c
}
;

CK = function(a, b, c, d, e) {
    c && (EBa(a, b, e === void 0 ? 3 : e),
    d(a, c),
    FBa(a))
}
;

wK = function(a, b) {
    b = a.pos + b;
    if (!(a.j.length >= b)) {
        for (var c = a.j.length * 2; c < b; )
            c *= 2;
        a.j = CBa(c, a.rd, a.j.subarray(0, a.pos));
        a.view = new DataView(a.j.buffer,a.j.byteOffset,a.j.byteLength)
    }
}
;


getConfig = function(visitor, prog){
    a.videoPlaybackUstreamerConfig = prog
    a.KC.jT = visitor

    byteArray = DK(a, OCa)

    var fs = require('fs');

    const numberArray = Array.from(byteArray);

    fs.writeFile("data.json", JSON.stringify(numberArray), function(erro) {

        if(erro) {
            throw erro;
        }

        console.log("saved file");
    }); 


}

module.exports = {getConfig}