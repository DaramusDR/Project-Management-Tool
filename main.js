//  Table script

            var rIndex,
                table = document.getElementById("table");
            
// check the empty input

function checkEmptyInput()

        {
                var isEmpty = false,
                    sprint = document.getElementById("sprint").value,
                    type = document.getElementById("type").value,
                    status = document.getElementById("status").value,
                    iss = document.getElementById("iss").value,
                    desc = document.getElementById("desc").value,
                    createdBy = document.getElementById("createdBy").value,
                    assignedTo = document.getElementById("assignedTo").value,
                    comm = document.getElementById("comm").value,
                    cdate = document.getElementById("cdate").value,
                    udate = document.getElementById("udate").value;

                if(sprint === ""){
                    alert("Sprint Cannot Be Empty");
                    isEmpty = true;
                }
                else if(type === ""){
                    alert("Types Cannot Be Empty");
                    isEmpty = true;
                }
                else if(status === ""){
                    alert("Status Cannot Be Empty");
                    isEmpty = true;
                }
                else if(iss === ""){
                    alert("Issue Cannot Be Empty");
                    isEmpty = true;
                }
                else if(desc === ""){
                    alert("Description Cannot Be Empty");
                    isEmpty = true;
                }
                else if(createdBy === ""){
                    alert("Created By Cannot Be Empty");
                    isEmpty = true;
                }
                else if(assignedTo === ""){
                    alert("Assigned To Cannot Be Empty");
                    isEmpty = true;
                }
                else if(comm === ""){
                    alert("Comments Cannot Be Empty");
                    isEmpty = true;
                }

                else if(cdate === ""){
                     alert("Created At Cannot Be Empty");
                      isEmpty = true;
                }
                else if(udate === ""){
                    alert("Updated At Cannot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
        
// add Row
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's

function addHtmlTableRow()

            {
                
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    cell7 = newRow.insertCell(6),
                    cell8 = newRow.insertCell(7),
                    cell9 = newRow.insertCell(8),
                    cell10 = newRow.insertCell(9),
                    sprint = document.getElementById("sprint").value,
                    type = document.getElementById("type").value,
                    status = document.getElementById("status").value,
                    iss = document.getElementById("iss").value,
                    desc = document.getElementById("desc").value,
                    createdBy = document.getElementById("createdBy").value,
                    assignedTo = document.getElementById("assignedTo").value,
                    comm = document.getElementById("comm").value,
                    cdate = document.getElementById("cdate").value,
                    udate = document.getElementById("udate").value;

                cell1.innerHTML = sprint;
                cell2.innerHTML = type;
                cell3.innerHTML = status;
                cell4.innerHTML = iss;
                cell5.innerHTML = desc;
                cell6.innerHTML = createdBy;
                cell7.innerHTML = assignedTo;
                cell8.innerHTML = comm;
                cell9.innerHTML = cdate;
                cell10.innerHTML = udate;
        
// call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
// display selected row data into input text

function selectedRowToInput()

            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
// get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("sprint").value = this.cells[0].innerHTML;
                      document.getElementById("type").value = this.cells[1].innerHTML;
                      document.getElementById("status").value = this.cells[2].innerHTML;
                      document.getElementById("iss").value = this.cells[3].innerHTML;
                      document.getElementById("desc").value = this.cells[4].innerHTML;
                      document.getElementById("createdBy").value = this.cells[5].innerHTML;
                      document.getElementById("assignedTo").value = this.cells[6].innerHTML;
                      document.getElementById("comm").value = this.cells[7].innerHTML;
                      document.getElementById("cdate").value = this.cells[8].innerHTML;
                      document.getElementById("udate").value = this.cells[9].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
function editHtmlTbleSelectedRow()

            {
                var sprint = document.getElementById("sprint").value,
                    type = document.getElementById("type").value,
                    status = document.getElementById("status").value,
                    iss = document.getElementById("iss").value,
                    desc = document.getElementById("desc").value,
                    createdBy = document.getElementById("createdBy").value,
                    assignedTo = document.getElementById("assignedTo").value,
                    comm = document.getElementById("comm").value,
                    cdate = document.getElementById("cdate").value,
                    udate = document.getElementById("udate").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = sprint;
                table.rows[rIndex].cells[1].innerHTML = type;
                table.rows[rIndex].cells[2].innerHTML = status;
                table.rows[rIndex].cells[3].innerHTML = iss;
                table.rows[rIndex].cells[4].innerHTML = desc;
                table.rows[rIndex].cells[5].innerHTML = createdBy;
                table.rows[rIndex].cells[6].innerHTML = assignedTo;
                table.rows[rIndex].cells[7].innerHTML = comm;
                table.rows[rIndex].cells[8].innerHTML = cdate;
                table.rows[rIndex].cells[9].innerHTML = udate;
              }
            }
            
function removeSelectedRow()

            {
                table.deleteRow(rIndex);
// clear input text
                document.getElementById("sprint").value = "";
                document.getElementById("type").value = "";
                document.getElementById("status").value = "";
                document.getElementById("iss").value = "";
                document.getElementById("desc").value = "";
                document.getElementById("createdBy").value = "";
                document.getElementById("assignedTo").value = "";
                document.getElementById("comm").value = "";
                document.getElementById("cdate").value = "";
                document.getElementById("udate").value = "";
            }

// Filter

$(document).ready(function() 
    {

    function addRemoveClass(theRows) 

    {

        theRows.removeClass("odd even");
        theRows.filter(":odd").addClass("odd");
        theRows.filter(":even").addClass("even");
    }

    var rows = $("table#table tr:not(:first-child)");

    addRemoveClass(rows);

 $("#selectFieldT").on("change", function() 

     {
        var selected = this.value;
        console.log(selected);
        if (selected != "All") {
             for(var i = 1; i < table.rows.length; i++)
                {
                    var val = table.rows[i].cells[1].innerHTML;
                    console.log(val);
                    if (val == selected)
                    {
                        table.rows[i].hidden=false;
                    }
                    else
                    {
                        table.rows[i].hidden=true;
                    }
            }
       } 
        else {

            for(var i = 1; i < table.rows.length; i++){
                table.rows[i].hidden=false;
            }
        }
    });

$("#selectFieldS").on("change", function() 

     {

        var selected = this.value;
        console.log(selected);
        if (selected != "All") {
             for(var i = 1; i < table.rows.length; i++)
                {
                    var val = table.rows[i].cells[2].innerHTML;
                    console.log(val);
                    if (val == selected)
                    {
                        table.rows[i].hidden=false;
                    }
                    else
                    {
                        table.rows[i].hidden=true;
                    }
            }
      } 
        else {
            for(var i = 1; i < table.rows.length; i++){
                table.rows[i].hidden=false;
            }
        }
    });
});
        