// function superbowlWin(array) {
//     array.find(function(element) {
//         return element.result === "W"
//     })
// }


    function superbowlWin(array) {
        let win = array.find(function(element) {
            return element.result === "W"
        })
        if (!!win === true) {
            return win.year
        }
    }

// function superbowlWin(array) {
//     array.find(function (element) {
//         if (element.result === "W") {
//             return win = element
//         }
//     })
// }