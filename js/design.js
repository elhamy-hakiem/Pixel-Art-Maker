

var submitBtn = document.getElementById("submitBtn");
// Start Draw Grid
function drawGrid()
{
    let selectShape = document.getElementById("shapes").value;
    let table = document.getElementById("gridId");
    let cols = document.getElementById("widthId").value;
    let rows = document.getElementById("heightId").value;
    let tableData = "";
    if(cols <=0 || rows <= 0 )
    {
        alert("Please Insert Correct Data !!!");

    }
    else
    {
    for(let i=0 ;i<rows;i++)
    {
        tableData +=`<tr>`;
        for(let j=0;j<cols;j++)
        {
            tableData +=`<td class="`+selectShape+`"></td>`;
        }
        tableData +=`</tr>`;
    }
    table.innerHTML=tableData;
    }
}
//End Draw Grid

//Start Add Event Color
function addColor()
{
    let tds=document.getElementsByTagName("td");
    for(let i=0;i<tds.length;i++)
    {
        tds[i].addEventListener("click",function(e)
        {
            let color=document.getElementById("colortId").value;
           let currentTd= e.target;
           currentTd.style.backgroundColor=color;
        })
    }
}
//End Add Event Color

//Start Submit
submitBtn.addEventListener("click",function(){
    drawGrid();
    addColor();
})
//End Submit