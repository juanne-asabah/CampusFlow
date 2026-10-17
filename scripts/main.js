let records = []

var totalRecordsElement = document.getElementById("total-records")
totalRecordsElement.textContent = records.length
console.log(totalRecordsElement)

var totalDurationElement = document.getElementById("total-duration")
totalDurationElement.textContent = records.reduce (
    (total, record) => total + record.duration,
    0
)

var topTagElement = document.getElementById("top-tag")
topTagElement.textContent = 
    let counts = {};
    for (let tag of tags) {
        if (counts[tag]) {
            counts[tag]++
        } else {
            counts[tag] = 1
        }
    } 
    
    

