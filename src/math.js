class Math {
    sum(a, b){
        return(a + b)
    }
    multiply(a, b){
        return (a * b);
    }
    divide(a, b){
        return (a / b);
    }
    subtract(a, b){
        return (a - b);
    }

    printSum(req,res,a ,b){
        res.load('index', a + b)
    }
}


module.exports = Math;
