
import { choice, remove} from './helpers.js'
import fruits from './foods.js'

const foodPick = choice(fruits);

console.log(`I'd like one ${foodPick}, please`);

console.log(`Here you go: ${foodPick}`);
console.log(`Delicious! May I have another?`);

const remainingItems = remove(fruits,foodPick);

console.log(`I'm sorry, we're all out.  We have ${remainingItems.length} left.`);


