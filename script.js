let numbers = new Set([12,15,14,16,16,11,19]);
numbers.add(25);
numbers.add("124");
for(const ele of numbers){
    console.log(ele);
}
console.log(numbers.size);
console.log(numbers.delete(12));
console.log(numbers)
numbers.forEach(ele=>console.log(ele*2));
console.log("MAP Methods");
let cart= new Map([
    ["book",2],
    ["pen",1],
    ["notebook",76]
]);
cart.set("mouse",13);
for(const ele of cart)
{
    console.log(ele);
}
console.log(cart.has("pen",1));
console.log(cart.get("book"));
console.log(cart.keys());
console.log(cart.values());
console.log(cart.size);