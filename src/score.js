/*Coding Challenge for the week (weekend):
There are n number of players for a game. (1 < n < 10000)
There is a list that stores the score of each players e.g. [11, 22, 22, 33, 40, 45, 60, 60, 70]. In this case n = 9
The rank of the players in this case is stored as [1,2,2,3,4,5,6,6,7]
You are running the game and you need to report on the number of  players who have a score k or less. E.g. if k=2, your output should be 3.
Write a program, that takes the list of scores and the highest selection score as the input and gives you the number of selected player as the output.
*/

var count = 0;
var score = '';
var totalPlayers= prompt("Enter Total number of players", "0");
let scoreList = new Array(totalPlayers);
while (count < totalPlayers) {
    score = '';
    score = prompt("Enter score for player " + (count + 1));
    scoreList[count] = score;
    count++ ;
}
var base = prompt("Enter the base score", "0");

console.log (findCount(scoreList.sort(),base));

function findCount(scoreList,base) {

    var cnt = 0;
    var rankvar = 0;
    var rankscore = 0;
    var rankList = new Array(scoreList.length);
    //create rank of players
    while(cnt < scoreList.length) {
        if (scoreList[cnt] > rankvar) {
            rankvar = scoreList[cnt];
            rankscore = rankscore + 1;
            rankList[cnt] = rankscore;
        }
        else
        {
            rankList[cnt] = rankscore;
        }
        cnt++;
    }
    //find count which matches the base
    const isLeEqBase = a => a.filter(e => +e === e && e <= base);
    return isLeEqBase(rankList).length;
}


