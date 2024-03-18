                       function addInput() 
					         {
                             var inputField = document.getElementById("inputField");
                             var inputValue = inputField.value.trim(); 
                             if (inputValue !== "")
							 {
                                var listItem = document.createElement("li");
                                    listItem.textContent = inputValue;      //camel case,when we use inputField we get the gieldtype in op,="deena" koduthal ena type pannalum sumbit kuduthal deena dhan op varum. 
                               listItem.innerHTML += ' <button type="button" onclick="deleteInput(this)">Delete</button>';
                                    document.getElementById("inputList").appendChild(listItem);
                                    inputField.value = "";
                               } 
							  else 
							   {
                               alert("Please enter a value.");
                               }
                             }

                            function deleteInput(button)
							    {
                                   var listItem = button.parentNode;
                                   listItem.parentNode.removeChild(listItem);
                                }