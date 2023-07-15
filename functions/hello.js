const arr=['name','roll'];

exports.handler= async function(event,context){
    return {
        statusCode:200,
        body:JSON.stringify(arr),
    }
}