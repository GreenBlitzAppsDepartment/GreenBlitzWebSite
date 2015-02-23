/**
 * Created by tomer on 10/12/14.
 */
Parse.initialize("p4iC6A6WGN0KEpw5TdkHiIJdJFnd5qBBvA5FjTRR", "72jxZgPHP0OPVONn7BpF8uIGR9MWKZJ7zRIuUj81");

function addData(ToPush,id){

}
function overRideData(ToPush,id){
    var ParseObject = Parse.Object.extend("Pic1");
    var data = new ParseObject();

    data.set(id, ToPush);

    data.save(null, {
        success: function(data) {
            // Now let's update it with some new data. In this case, only cheatMode and score
            // will get sent to the cloud. playerName hasn't changed.
            data.set(id, ToPush);
            data.save();
        }
    });
}
function getCurrentData(id,WhatToGet){
    var GameScore = Parse.Object.extend("Pic1");
    var query = new Parse.Query(GameScore);
    query.get(id, {
        success: function(gameScore) {
            return gameScore.get(WhatToGet);
        },
        error: function(object, error) {
            alert("Error please reload") ;
        }
    });
}