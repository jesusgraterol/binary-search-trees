// eslint-disable-next-line import/extensions
import BinaryTree from './binary-tree.js';

const tree = new BinaryTree([10, 1, 8]);
tree.insert(2);
tree.insert(17);
tree.insert(4);
tree.insert(73);
tree.prettyPrint();

console.log('\n\n---\n\n');
console.log('tree.find(10)', tree.find(10));
console.log('tree.find(100)', tree.find(100));

console.log('\n\n---\n\n');
console.log('tree.contains(73)', tree.contains(73));
console.log('tree.contains(118)', tree.contains(118));
