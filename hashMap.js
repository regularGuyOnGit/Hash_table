
// A factory function.
function hashmap() {

    const Array16 = ['bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket'];
           
    const hash = key => {
       
        capacity()

        let keyCode = 0

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {

            keyCode += primeNumber * keyCode + key.charCodeAt(i);
            // keyCode = keyCode % Array16.length
        }
        console.log(keyCode % Array16.length);

        return keyCode % Array16.length
    }

    const set = (key, val) => {
        const index = hash(key);
        Array16.splice(index, 1, { key, val });
        // console.log(index);


    }

    const get = key => {
        const index = hash(key);
        const requiredNodeVal = Array16[index].val;
        const requiredNodeKey = Array16[index].key;

        if (key == requiredNodeKey) {
            return requiredNodeVal
        }
        else {
            return null
        }


    }
    const has = key => {
        const hashedkey = Array16[hash(key)];
        if (key == hashedkey.key) {
            return true
        } else {
            return false;
        }
    }
    const remove = key => {
        let removeIndex = hash(key);
        if (key == Array16[removeIndex].key) {
            Array16.splice(removeIndex, 1, 'bucket')
        }
        else {
            return 'No such key found'
        }
    }

    const length = ()=>{

        let count = 0;
        for(let i=0 ; i<Array16.length;i++){
            if(Array16[i]!=='bucket'){
                count++
            }
        }
        return count
    }
    const clear = () => {
        for(let i=0; i<Array16.length;i++){
            Array16.pop();
            Array16.unshift('bucket');
        }
    }
    const key = () => {

        let keyArray = [];
        for(let i = 0 ; i<Array16.length;i++){
            if(Array16[i] == 'bucket')continue
            
                keyArray.push(Array16[i].key)
        
        }
        return keyArray;

    }
    const value = () => {

        let valueArray = [];
        for(let i = 0 ; i<Array16.length;i++){
            if(Array16[i] == 'bucket')continue
            
             valueArray.push(Array16[i].val)
        
        }
        return valueArray;

    }
    const entires = () => {

        let entriesNodes = [];
       
        for(let i = 0 ; i<Array16.length;i++){
            if(Array16[i] == 'bucket')continue;

            
            entriesNodes.push([Array16[i].key,Array16[i].val])
        
        }
        return entriesNodes;

    }

    function capacity (){
    let countOfBucket = 0;
    const sizeOfBucket = Array16.length
    for(let i = 0 ; i <Array16.length ;i++){
        if(Array16[i] === 'bucket'){
            countOfBucket++
        }
        continue;
    }

// console.log(countOfBucket);
// console.log(sizeOfBucket);
        // loadfactor will be invoked which will tell the load factor and weather it has to grow or not.
        loadFactor(countOfBucket,sizeOfBucket);
    }

    function loadFactor (bucket,noOfBuckets){

        const loadFactor = bucket/noOfBuckets;
        console.log(1-loadFactor);
        if(1-loadFactor >= 0.75){
            const length = Array16.length 
            // Array size of 16 should be size of 32;
            for(let i = 0 ; i<length ; i++ ){
                Array16.push('bucket')
            }
// console.log(loadFactor);
        }else{
            return
        }

    }




    return { hash, set, Array16, get, has, remove, length, clear, key,value,entires  }
    

};

let hashMapName = hashmap();

// hashMapName.set('Alexander','Johnson')
// hashMapName.set('Emily','Martinez')
// hashMapName.set('Ethan','Taylor')
// hashMapName.set('Sophia','Rodriguez')
// hashMapName.set('Benjamin','Anderson')
// hashMapName.set('Olivia','Garcia')
// hashMapName.set(' William',' William')
// hashMapName.set('Ava','Hernandez')
// hashMapName.set('James',' Smith')
// hashMapName.set('Mia','Brown')
// hashMapName.set('Michael',' Lopez')
// hashMapName.set('Charlotte','Flores')
// hashMapName.set('Daniel','Perez')
// hashMapName.set('Matthew','Davis')
// hashMapName.set('Harper','Gonzales')
// hashMapName.set('Jacob','Wilson')
// hashMapName.set('Evelyn','Ramirez')
// hashMapName.set('Christopher','Moore')
// hashMapName.set('Abigail','Sanchez')
// hashMapName.set('Joshua','Joshua')
// hashMapName.set('Isabella','Clark')
// hashMapName.set('Andrew','Lewis')
// hashMapName.set('Sophia','Young')
// hashMapName.set('Victoria',' Turner')
// hashMapName.set('David','Hill')
// hashMapName.set('Penelope','Baker')
// hashMapName.set('John','Green')
// hashMapName.set('Grace','Adams')
// hashMapName.set('Nicholas','Mitchell')
// hashMapName.set('Aria','Nelson')
// hashMapName.set('Ryan','Carter')
// hashMapName.set('Chloe',' Wright')
// hashMapName.set('Jonathan','Walker')
// hashMapName.set('Zoey','Thomas')
// hashMapName.set('Nathan','Allen')
// hashMapName.set('Audrey','Hall')
// hashMapName.set('Luke','Ross')
// hashMapName.set('Savannah','Bailey')
// hashMapName.set('Samuel','Rivera')
// hashMapName.set('Zoey','Howard')
// hashMapName.set('Christopher','Sanchez')
// hashMapName.set('Audrey','Morgan')
// hashMapName.set('Brandon','Ross')
// hashMapName.set('Leah','Coleman')
// hashMapName.set('Ward','Powell')
// hashMapName.set('Murphy','Wood')



console.log(hashMapName.Array16);