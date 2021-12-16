const users = [
    { id: 1, name: "Stanko Petrovic", age: 25 },
    { id: 2, name: "Klara Jovovic", age: 36 },
    { id: 3, name: "Milica Tesic", age: 17 },
    { id: 4, name: "Branko Kesic", age: 65 },
]

/*
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
*/

const tBodyElement = document.getElementById("content");

users.forEach(user => {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    const thText = document.createTextNode(user.id);  
    th.appendChild(thText); 

    const tdFullName = document.createElement("td");
    const tdFullNameText = document.createTextNode(user.name);  
    tdFullName.appendChild(tdFullNameText); 

    const tdAge = document.createElement("td");
    const tdAgeText = document.createTextNode(user.age);  
    tdAge.appendChild(tdAgeText); 

    tr.appendChild(th);
    tr.appendChild(tdFullName);
    tr.appendChild(tdAge);
    
    tBodyElement.appendChild(tr);
});

