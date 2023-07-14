var instilled=0;
var rabbit=1;
var n,cot,tor,img,drug,rdm=0;
var ipad=0;
var newButton = document.getElementById("new")

if($(window).width()<=1366){
    ipad=1;
    // $("#cotton").attr("draggable","true");
}

$(".r0").draggable({containment:".restrict",revert:true});

$(".r1").draggable({containment:".restrict1",revert:true});

$(".instill").on("click",function(){
    instilled=1;
    if(rdm){
        n=Math.ceil(5*Math.random());
        $(".new").removeAttr('disabled');
    }
    else{
        n=parseInt($("#ddmenu").val());
    }
    instill();
    $(".instill").attr('disabled','disabled');
})

$("html").on("click",function(){
    $("body").css('cursor','initial');
    if(ipad){
        $("#highlight1").removeClass('selected');
        $("#highlight2").removeClass('selected');
    }
    cot=0,tor=0;
})


$(".cot").on("click",function(event){
    event.stopPropagation();
    cot=1;tor=0;
    $("body").css('cursor','url("Images/blueball.png"),auto');
    $("#highlight1").removeClass('selected');
    $("#highlight2").removeClass('selected');
})

$(".tor").on("click",function(event){
    event.stopPropagation();
    tor=1;cot=0;
    $("body").css('cursor','url("Images/torch.png"),auto'); 
    $("#highlight1").removeClass('selected');
    $("#highlight2").removeClass('selected');
})

$("#inv1").on("click",function(event){
    if(ipad){
        event.stopPropagation();
        $("#highlight1").addClass('selected');
    }  
})

$("#inv2").on("click",function(event){
    if(ipad){
        event.stopPropagation();
        $("#highlight2").addClass('selected');
    }  
})

function instill(){
    if(n==1){
        $(".txt").html("Low");
        drug="epinephrine";
        img="image/Drug1-instill-change (1).jpeg";
        $(".green1").html("Epinephrine");
    }
    else if(n==2){
        $(".txt").html("Normal");
        drug="atropine";
        img="image/Drug2-instill-change.png";
        $(".green1").html("Atropine");
    }
    else if(n==3){
        $(".txt").html("Normal");
        drug="ephidrine";
        img="image/Drug3-instill-change.png";
        $(".green1").html("Ephidrine");
    }
    else if(n==4){
        $(".txt").html("Low");
        drug="physostigmine";
        img="image/Drug4-instill-change.png";
        $(".green1").html("Physostigmine");
        //Done
    }
    else if(n==5){
        $(".txt").html("Normal");
        drug="lignocaine";
        img="image/Drug5-instill-change.png";
        $(".green1").html("Lignocaine");
    }
    else if(n==6){
        drug="saline";
        // img="Images/eyes-before1.png";
        $(".green1").html("Saline");
    }
    if(rdm){
        $(".green1").html("Unkown");
    }
    $("#right-eye").attr("src",img);
    $(".saline").html("Saline");
}

$("#inv1").mouseover(function(){
    if((tor||cot)&&instilled){
        switch (n){
            case 1:
                if(tor){
                    $("#right-eye").attr("src","image/Drug1-torch.png");
                    //alert(n+" torch");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
            case 2:
                if(tor){
                    // alert(n+" torch");
                   
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                break;
            case 3:
                if(tor){
                    $("#right-eye").attr("src","image/Drug3-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                break;
            case 4:
                if(tor){
                    $("#right-eye").attr("src","image/Drug4-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
            case 5:
                if(tor){
                    $("#right-eye").attr("src","image/Drug5-torch.png");
                }
                else{
                    
                }
                
                break;
            case 6:
                if(tor){
                    $("#right-eye").attr("src","image/Drug6-torch.png");
                }
                else{
                    $("#right-eye").attr("src","Images/closed-eye.jpg");
                }
                
                break;
        }
    }
    else if(!instilled){
        img="Images/eyes-before1.png";
        if(tor){
            $("#right-eye").attr("src","image/Drug6-torch.png");
        }
        else if(cot){
            $("#right-eye").attr("src","Images/closed-eye.jpg");
        }
    }
    //tor=0;cot=0;
});

$(".next").on("click",function(){
    rdm=1;
    if(instilled){
        rabbit++;
        $(".rab").html("Rabbit "+rabbit);
    }
    $(".instill").removeAttr('disabled');
    $("#ddmenu").attr('disabled','disabled');
    $(".new").html("Answer");
    $(".new").attr('disabled','disabled');
    $(".next").attr("disabled", "disabled");
})

function increment(){
    // answer button clicked
    if(rdm){
        newButton.dataset.target = "#exampleModal";
        newButton.onclick = "";
    }
    // new button clicked
    else{
        instilled=0;rabbit++;tor=0;cot=0;
        $(".rab").html("Rabbit "+rabbit);
        $(".green1").html("None");
        $(".txt").html("Normal");
        $(".saline").html("None");
        $(".instill").removeAttr('disabled');
        img="Images/eyes-before1.png";
        $("#right-eye").attr("src",img);    
    }      
}

var m;


// evaluates the user answer when save is pressed
function answer(){
    let correctAns = n;
    ans = document.getElementById("modaldrugs").value; // user input
    let modalBody = document.getElementById("final-body");
    if (ans == correctAns) { // check it with correct answer
        modalBody.innerHTML =
            "Correct!\nThe correct answer is " + drug + ".";
    } else {
        modalBody.innerHTML = "Wrong.\nThe right answer is " + drug + ".";
    }
    document.getElementById("final-save").style.display = "none"; // remove save button from modal  
}

function refresh(){
    location.reload()
}

$("#inv1").mouseout(function(){
    $("#right-eye").attr("src",img);
})

$("#inv2").mouseover(function(){
    if(tor){
        $("#left-eye").attr("src","image/left-eye-torch.png");
    }
    if(cot){
        $("#left-eye").attr("src","image/left-eye-cotton.png");
    }
})

$("#inv2").mouseout(function(){
    $("#left-eye").attr("src","Images/eyes-before.png");
})



