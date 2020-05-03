import {add, sub} from './module1'
import {mul} from './module2'
import module3 from './module3'
import data from '../json/data.json'
import '../less/demo.less'

console.log(add(1, 2))
console.log(sub(1, 2))
console.log(mul(1, 2))
console.log(module3.name, module3.age)

module3.setName('xxxx')
console.log(module3.name)
console.log(data)

setTimeout(() => {
  console.log('aaaaa')
},1000)
