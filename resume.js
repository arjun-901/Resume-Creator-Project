function addnewWorkField(){
    console.log("arjun");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");

    let wEobj=document.getElementById("wE");
    let workAddbtnobj=document.getElementById("containerbtn");

    wEobj.insertBefore(newNode,workAddbtnobj);
  
};
function addnewAcademicField(){
    console.log("maaurya");
    let nayaNode=document.createElement("textarea");
    nayaNode.classList.add("form-control");
    nayaNode.classList.add("acField");
    // nayaNode.classList.add()
    let weobje=document.getElementById("we");
    let acadmicObj=document.getElementById("acadmic");

    weobje.insertBefore(nayaNode,acadmicObj)
}
function generateCV(){
//console.log("bca s-@nd year");
// -------------------------------------for name with user-------------------------
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    // -------------------------------------contact --------------------------

    let contactField=document.getElementById("contactField").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;
    // ----------------------------------------for addressT-----------------

    let addressField=document.getElementById("addressField").value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML=addressField;

    // direct method--------------------
    document.getElementById("fbT").innerHTML=document.getElementById("faceField").value

    document.getElementById("linkT").innerHTML=document.getElementById("linkedinField").value;

    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //FOR WORK EXPRIENCS-------------
    let weFieldObj=document.getElementsByClassName("weField");

    let str=''
    for(let e of weFieldObj){
        str=str +`<li> ${e.value}</li>`;
    }
    document.getElementById("worExpT").innerHTML=str;
// -------------------------------for acadmicObj----------------------------
    let weonj=document.getElementsByClassName("acField");
    let dd="";
    for(let g of weonj){
        dd=dd+`<li>  ${g.value} </li>`;

    }
    document.getElementById("acQuT").innerHTML=dd;

    //code for setting image
    let file=document.getElementById("imgField").files[0];
    console.log(file);
    //create reader
    let reader=new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template
   reader.onloadend=function(){
    document.getElementById("imgTemplate").src=reader.result;
   }



  
    let cvform=document.getElementById("cv-form").style.display="none";
    let cvtemplate=document.getElementById("cv-template").style.display="block";
}
function printCV(){
  
    let abcobj=  document.getElementById("printbtn").style.display='none'
    window.print();
    let abcdobjfirse=document.getElementById("printbtn").style.display='block'
   
};

function backToEdit(){
    let cvform=document.getElementById("cv-form").style.display="block";
    let cvtemplate=document.getElementById("cv-template").style.display="none";
};