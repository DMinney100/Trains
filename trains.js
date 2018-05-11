// link to firebase 
<script> src="https://www.gstatic.com/firebasejs/5.0.1/firebase.js"</script>

// add train button
$("submitButton").on("click", function() {
    //gets user input 
    var trainName = $("#trainNameInput").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#timeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    //train times 
    var newTrains = {
        name: trainName,
        tdestination: destination,
        tFirst: firstTime,
        tFreq: frequency,
    }

//upload data to base  
trainData.push(newTrains); 

//clear text 
$("#trainName").val("");
$("#destinationInput").val("");
$("#timeInput").val("");
$("#frequencyInput");

return false
});