const fs = require('fs')
const readStreams = fs.createReadStream('./docs/blog3.txt' ,{
    encoding:'utf-8',
    highWaterMark:30
})
const writeStreams = fs.createWriteStream('./docs/blog4.txt')
// readStreams.on('data' ,(chunk)=>{
//     console.log('----------New Chunk------------');
//     console.log(chunk)
//     writeStreams.write(chunk)
//     writeStreams.write('\nNEW CHUNK\n')
//     console.log(chunk);
    
// })

readStreams.pipe(writeStreams)