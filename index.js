function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return function bestFunctionEver() {
      console.log("This is a named function");
    };
  }

  function returnsAnAnonymousFunction(){
    return function(){
    console.log ("This is an anonymous function")
    }
}

