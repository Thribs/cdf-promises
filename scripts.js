const bestDeveloper = "Vanessa"

function whosBestCallback(callback, errorCallback) {

    return new Promise(function(resolve, reject) {

        if (bestDeveloper != "Vanessa" && bestDeveloper != "Gabriel") {
            reject({
                name: "This is wrong.",
                message: bestDeveloper + "? Really?"
            })
        } else {
            resolve({
                name: bestDeveloper,
                message: "CDFs are the best!"
            })
        }

    })
}

whosBestCallback().then( result => {
    console.log(result.name + "? Yeah! " + result.message)
}).catch( err => {
    console.log(err.name + " " + err.message)
})