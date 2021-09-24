    const firstString = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.';
    const secondString = 'John castiga 1000 euro/luna din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing.';
  
    const reg = /\d+/g;
  
    const result = firstString.match(reg);
    const result2 = secondString.match(reg)
    
    const arr1 = [
    num1 = parseInt(result[0] * 12),
    num2 = parseInt(result[1]),
    num3 = parseInt(result[2] * 12)
    ];

    const arr2 = [
    num1 = parseInt((result2[0] * 4.8) * 12),
    num2 = parseInt(result2[1]),
    num3 = parseInt((result2[2] * 4.3) * 12)
    ];

    const reducer = (prev, curr) => prev + curr;
  
    const calcIncomeForFirst = (result) => {
        return arr1.reduce(reducer);
    };

    const calcIncomeForSecond = (result2) => {
        return arr2.reduce(reducer);
    };

    console.log(calcIncomeForFirst());  //88000
    console.log(calcIncomeForSecond());  //118200


  
  
  
  
  