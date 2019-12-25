let tick = (duration)=>{
    return new Promise((resolve)=>{
      setTimeout(function () {
        console.log(duration,new Date());
        resolve(duration);
      },duration);
    });
  };
  
  function *generator() {
    var result = yield tick(2000);
    console.log('result = ',result);
    result = yield tick(4000);
    console.log('result = ',result);
    result = yield tick(3000);
    console.log('result = ',result);
  }
  
  
  let run = (generator,res)=>{
    var result = generator.next(res);
    if(result.done) return;
    result.value.then((res)=>{
      run(generator,res);
    });
  }
  
  run(generator());

  function* countAppSales() {
    var saleList = [3, 7, 5]
    for (let index = 0; index < saleList.length; index++) {
      yield saleList[index]
    }
  }

  console.log('---------------')
  console.log(countAppSales)
  const myArr = countAppSales();
  console.log(myArr)
  console.log(myArr.next(countAppSales()))
  console.log(myArr.next())
  console.log(myArr.next())
  console.log(myArr.next())