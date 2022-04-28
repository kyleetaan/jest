function capitalize(str) {
    if(str.length > 0){
        return str.substring(0,1).toUpperCase() + str.substring(1)
    }
    
    return(str)
}

export default capitalize