/**
 * Created by fletcher on 2017-07-02.
 */

/*This feels like cheating*/
/*So, this method doesn't actually work, anyway-- it creates an array, which is then no-longer a string that
can be parsed by JSON.
 */

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "file://"+file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("dataSet.json");


console.log(dataSet[0].Company);
//var jsonText = localStorage.getItem('dataSet.json'); // Does not work.
//console.log(jsonText); // <-- null
var contacts =  JSON.parse(dataSet);
console.log(contacts.contacts.length);
console.log(contacts[1].Company);


