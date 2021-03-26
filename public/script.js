async function dining () {
    const diningRequest = await fetch('/api/dining');
    const diningData = await diningRequest.json();
    const arraydata = diningData.data;
    console.log(arraydata);
   
    const targettable = document.querySelector('.target');

    arraydata.forEach((element) => {
        console.log(element.dining);
        console.log(element.hall_address)
        const appendelement = document.createElement('tr');
        appendelement.innerHTML = `
                <td>${element.hall_id}</td>
                <td>${element.hall_name}</td>
                <td>${element.hall_address}</td>
            </tr>      
        `;
        targettable.append(appendelement)
    });
    
    
  
}

window.onload = dining();