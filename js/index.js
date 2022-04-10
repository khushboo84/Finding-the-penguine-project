var score = 0;

function shuffle()
{
    penguins = ["images/penguin_1.png", "images/penguin_2.png",
        "images/penguin_3.png", "images/penguin_4.png", "images/penguin_5.png", "images/penguin_6.png",
        "images/penguin_7.png", "images/penguin_8.png", "images/yeti.png"];


        var i=0 , j=0, temp=null ;
        

        for (i = penguins.length -1 ; i>0 ; i-=1)
        {

            j=Math.floor(Math.random() * i);
            temp = penguins[i];
            penguins[i] = penguins[j];
            penguins[j] = temp;
        }

} 

function displayPenguin(i)
{
    if(penguins[i] != "images/yeti.png")
    {
        document.getElementById("penguin" + i ).src = penguins[i];
        document.getElementById("PenguinAudio").play();
    
    }
    else
    {
        document.getElementById("penguin" + i ).src = penguins[i];
        if(score!=8)
        {
            document.getElementById("YetiAudio").play();
        setTimeout(PopUpYeti, 500);
        }
        else
        {
            alert("Congratulations...!!! you won")
            window.location.reload();
        }


    }
    
    score++;
    if(penguins[i] === "images/yeti.png")
    {
    $("#score").html("Score: " +(score-1));
    }
    else
    {
        $("#score").html("Score: " +score);
    }
    
}

function PopUpYeti()
{
    
    score=score-1;
    
    alert("Yaaaaaarrrrrrr..!!!" + "\n" + "Game Over.." + "\n" + "Your score is " + score );
    window.location.reload();
}


