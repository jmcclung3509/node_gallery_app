const Art = require("../art-module")
const {v4: uuidv4} = require("uuid");

async function getArt(query){
    try {
    query = query ? query : {};
    const response = await Art.find(query)
    return response;
    } catch (error){
        throw new Error (error.message)
    }
}

async function addArt(payload){
    try {
         payload = payload ? payload : {};
        const newArt= new Art({ ...payload, id: uuidv4() })
        const response = await newArt.save();
         return response;
    } catch (error){
        throw new Error (error.message)
    }
}

async function updateArt(id, payload){
    try {
        payload = payload ? payload : {};
        const response = await Art.updateOne(id , payload);
        return response;
    } catch (error){
        throw new Error (error.message)
    }
}
async function findOne(id){
    try{
        const query = query?query :{}
        const response = await Art.findOne(id );
        return response
    } catch (error){
        throw new Error (error.message)
    }
}


async function deleteArt(id){
try {
   query= query ? query : {}
    let response = await Art.deleteOne(id)
return response;
} catch(error){
    throw new Error (error.message)
}   
}

exports.getArt = getArt
exports.addArt = addArt
exports.updateArt = updateArt
exports.deleteArt = deleteArt
exports.findOne = findOne