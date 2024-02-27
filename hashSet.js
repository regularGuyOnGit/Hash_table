

function hashSet() {

    const Array16 = ['bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket', 'bucket'];

    const hash = key => {

        let keyCode = 0

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {

            keyCode += primeNumber * keyCode + key.charCodeAt(i);
            keyCode = keyCode % 16
        }

        return keyCode % 16
    }

    const set = (key) => {
        const index = hash(key);
        Array16.splice(index, 1, { key })


    }

    const get = key => {
        const index = hash(key);
        const requiredNodeKey = Array16[index].key;

        if (key == requiredNodeKey) {
            return requiredNodeKey
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




    return { hash, set, Array16, get, has, remove, length, clear, key  }

};

const hashTableOne = hashSet();
hashTableOne.set('nitinaQE')
hashTableOne.set('jartin')
hashTableOne.set('nerraj');
console.log(hashTableOne.Array16);