let tempData = "";

//put data through first object and retrieve it from the 2nd object
module.exports = {
    put: function (d){
        tempData = d;
    },
    get: function (){
        return tempData;
    },

    doIt: function(){
        console.log("did it");
    },

    doSomething: function(){
        console.log("did something");
    },

 getItDone: function(){
        console.log("Got it done");
    }


};