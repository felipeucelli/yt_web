// https://www.youtube.com/s/player/53afa3ce/player_ias.vflset/en_US/base.js

Xe = []
Xca = []
d = []

We = function(a) {
     var b = a.length
       , c = b * 3 / 4;
     c % 3 ? c = Math.floor(c) : xb("=.", a[b - 1]) && (c = xb("=.", a[b - 2]) ? c - 2 : c - 1);
     var d = new Uint8Array(c)
       , e = 0;
     Zca(a, function(f) {
         d[e++] = f
     });
     return e !== c ? d.subarray(0, e) : d
 }
 ;    

 xb = function(a, b) {
     return a.indexOf(b) != -1
 }
 ;

 Zca = function(a, b) {
     function c(m) {
         for (; d < a.length; ) {
             var n = a.charAt(d++)
               , p = Xe[n];
             if (p != null)
                 return p;
            // if (!g.vb(n))
            //     throw Error("Unknown base64 encoding at char: " + n);
         }
         return m
     }
     Wca();
     for (var d = 0; ; ) {
         var e = c(-1)
           , f = c(0)
           , h = c(64)
           , l = c(64);
         if (l === 64 && e === -1)
             break;
         b(e << 2 | f >> 4);
         h != 64 && (b(f << 4 & 240 | h >> 2),
         l != 64 && b(h << 6 & 192 | l))
     }
 }
 ;

 Wca = function() {

         Xe = {};
         for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
             var d = a.concat(b[c].split(""));
             Xca[c] = d;
             for (var e = 0; e < d.length; e++) {
                 var f = d[e];
                 Xe[f] === void 0 && (Xe[f] = e)
             }
         }
     }
 
 ;

getVisitor = function(a){    
    v = We(a)
    
    return(v)
 }

 getProg = function(a){
    prog = We(a)

    
    return(prog)
 }

 module.exports = {getProg, getVisitor}
 