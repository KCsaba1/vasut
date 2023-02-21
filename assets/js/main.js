const allomasok = ["Vasútállomás", "Autóbuszállomás", "József Attila utca", "Vasipari vállalat", "Márialaka", "Kenderessziget", 
"Csatornapart", "Berettyó vendéglő"];

function ElotteUtana()
{
    var content = document.getElementById("content");
    var megallo = document.getElementById("megallo").value;
    var p = allomasok.indexOf(megallo);

    if(p != -1)
    {
        if(p == 0)
        {
            content.innerHTML = "Előtte: - <br>Utána: " + allomasok[p+1];
        }
        if(p == allomasok.length-1)
        {
            content.innerHTML = "Előtte: " + allomasok[p-1] + "<br>Utána: -";
        }
        else
        {
            content.innerHTML = "Előtte: " + allomasok[p-1] + "<br>Utána: " + allomasok[p+1];
        }
    }
}