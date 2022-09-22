const apiRequest = async (url = '', optionsOjb = null, errMsg = null) => {
    try{
        const response = await fetch(url,optionsOjb);
        if(!response.ok) throw Error('Please reload the app');
    }catch(err){
        errMsg = err.message;
    }finally{
        return errMsg;
    }
}

export default apiRequest;