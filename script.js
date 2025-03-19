function updateInsuranceRows() {
    let container = document.getElementById("insuranceContainer");
    container.innerHTML = ""; 
    let anzahl = parseInt(document.getElementById("anzahlVersicherungen").value) || 0;
    
    for (let i = 1; i <= anzahl; i++) {
        let div = document.createElement("div");
        div.className = "insurance-row";
        div.innerHTML = `<input type="text" placeholder="Versicherung ${i}" id="versicherung${i}">
                         <input type="number" placeholder="Betrag (€)" id="betrag${i}" oninput="updateGesamtsumme()">`;
        container.appendChild(div);
    }
}

function updateSuggestionTabs() {
    let container = document.getElementById("suggestionTabs");
    let contentContainer = document.getElementById("suggestionContent");
    let anzahl = parseInt(document.getElementById("anzahlVorschlaege").value) || 0;

    container.innerHTML = "";
    contentContainer.innerHTML = "";

    let tabList = ["Aktueller Stand"];
    for (let i = 1; i <= anzahl; i++) {
        tabList.push("Vorschlag " + i);
    }

    tabList.forEach((tabName, index) => {
        let button = document.createElement("button");
        button.className = "tab-button" + (index === 0 ? " active" : "");
        button.innerText = tabName;
        button.onclick = (event) => openTab(event, 'tab' + index);
        container.appendChild(button);

        let div = document.createElement("div");
        div.id = "tab" + index;
        div.className = "tab-content" + (index === 0 ? " active" : "");
        div.innerHTML = `<h3>${tabName}</h3><p>Hier kann der Inhalt für ${tabName} ergänzt werden.</p>`;
        contentContainer.appendChild(div);
    });
}

function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
