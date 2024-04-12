
var button = document.querySelector('button');

//
// SAMPLE #1: See everything works
//
// console.log(button);
// button.addEventListener('click', (event) =>{
//     console.log(event);
// });


//
// SAMPLE #2: subscribe to click event
//
//  rxjs.fromEvent(button, 'click')
//      .subscribe((event) => console.log(event));


//
// SAMPLE #3: throttleTime sample
//
// (function(){
//     var fromEvent = rxjs.fromEvent;
//     var throttleTime = rxjs.throttleTime;

//     fromEvent(button, 'click')
//     .pipe(throttleTime(2000))
//     .subscribe((event) => console.log(event));
// })();

//
// SAMPLE #4: map sample
//
// (function(){
//     var fromEvent = rxjs.fromEvent;
//     var throttleTime = rxjs.throttleTime;
//     var map = rxjs.map;

//     fromEvent(button, 'click')
//     .pipe(throttleTime(2000))
//     .pipe(map(d=> d.clientY))
//     .subscribe((coordinate) => console.log(coordinate));
// })();

//
// SAMPLE #5: observer object implementation
//
// (function(){
//     var fromEvent = rxjs.fromEvent;

//     var observer = {
//         next: function(value){
//             console.log(value);
//         },
//         error: function(error){
//             console.log(error);
//         },
//         complete: function(){
//             console.log('Completed');
//         }
//     };

//     fromEvent(button, 'click')
//      .subscribe(observer);
// })();

//
// SAMPLE #6: Implement observable from scratch
//
// (function(){
//     var fromEvent = rxjs.fromEvent;

//     var observer = {
//         next: function(value){
//             console.log(value);
//         },
//         error: function(error){
//             console.log(error);
//         },
//         complete: function(){
//             console.log('Completed');
//         }
//     };

//     rxjs.Observable.create(function(obs){
//         obs.next('A value');
//     })
//      .subscribe(observer);
// })();

//
// SAMPLE #7: how to unsubscribe?
//
(function(){
    var observer = {
        next: function(value){
            console.log(value);
        },
        error: function(error){
            console.log(error);
        },
        complete: function(){
            console.log('Completed');
        }
    };

    var subscription = rxjs.Observable.create(function(obs){
        button.onclick = function(event)
        {
            obs.next(event);
        }
    })
    .subscribe(observer);

    setTimeout(function(){
        subscription.unsubscribe();
    }, 5000);
})();