// 1 - Creo un array con all'interno gli oggetti che avranno all'interno dei valori riguardanti il Nome il Ruolo ed il percorso della foto.

let allTeamCards = [
    {
        "Name":"Wayne Barnett",
        "Role":"Founder & CEO",
        "Image":"img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Name":"Angela Caroll",
        "Role":"Chief Editor",
        "Image":"img/angela-caroll-chief-editor.jpg"
    },
    {
        "Name":"Walter Gordon",
        "Role":"Office Manager",
        "Image":"img/walter-gordon-office-manager.jpg"
    },
    {
        "Name":"Angela Lopez",
        "Role":"Social Media Manager",
        "Image":"img/angela-lopez-social-media-manager.jpg"
    },
    {
        "Name":"Scott Estrada",
        "Role":"Developer",
        "Image": "img/scott-estrada-developer.jpg"
    },
    {
        "Name":"Barbara Ramos",
        "Role":"Graphic Designer",
        "Image":"img/barbara-ramos-graphic-designer.jpg"
    },

];

// 2 - Stampo tutte le card che abbiamo nell'array nell'html
    // Prendo dall'html gli id/classi su cui andrò a stampare i valori delle card

    const teamContainer = document.querySelector(".team-container");
    
    // Creo un ciclo che dall'array prende l'oggetto, ne estrae i valori e li salva in una variabile
    
    for (let i = 0; i < allTeamCards.length; i++) {
        let keyName = allTeamCards[i].Name;
        let keyRole = allTeamCards[i].Role;
        let keyImg = allTeamCards[i].Image;

        // stampo ad ogni iterazione la struttura html con dentro i valori degli oggetti
        teamContainer.innerHTML += (`<div class="team-card">
                                        <div class="card-image">
                                            <img src="${keyImg}" alt="${keyName}" />
                                        </div>
                                        <div class="card-text">
                                            <h3>${keyName}</h3>
                                            <p>${keyRole}</p>
                                        </div>
                                    </div>`);
        
    }
    
    // 3 - Al click del tasto i valori inseriti nel form andranno a creare un nuovo oggetto da inserire nell'array iniziale
    // Prendo dall'html gli id associati al form per pescare il testo inserito dall'utente e selezionare il bottone
    const addMemberBtn = document.getElementById("addMemberButton");
    // Al click -
    // Creo un oggetto che ha i valori inseriti dal form
    
    addMemberBtn.addEventListener("click",
        function() {
            const inputName = document.getElementById("name").value;
            const inputRole = document.getElementById("role").value;
            const inputImg = document.getElementById("image").value;

            newTeamCard = {
                "Name": inputName,
                "Role": inputRole,
                "Image": inputImg
            }

            console.log(newTeamCard);
            
            // Pusho l'oggetto creato nell'array iniziale
            allTeamCards.push(newTeamCard);
            
            console.log(allTeamCards);
            teamContainer.innerHTML += (`<div class="team-card">
            <div class="card-image">
            <img src="${inputImg}" alt="${inputName}" />
            </div>
            <div class="card-text">
            <h3>${inputName}</h3>
            <p>${inputRole}</p>
            </div>
            </div>`);
        }
    );