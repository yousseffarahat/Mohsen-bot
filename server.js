var LolApi = require('leagueapi');
 
LolApi.init('xxxxxxxxxxxxxxxxxxxxxxxxxx', 'euw');
 
LolApi.getChampions(true, function(err, champs) {
    console.log(champs);
});
 
LolApi.Summoner.getByName('Zamalkawii', function(err, summoner) {
    if(!err) {
        console.log(summoner);
    }
})
 
//The wrapper also accepts promises:
LolApi.Summoner.getByName('Zamalkawii')
.then(function (summoner) {
    console.log(summoner);
});