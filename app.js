const nameHTML = document.getElementById("InputName");
const apellidoHTML = document.getElementById("InputApellido");
const emailHTML = document.getElementById("InputEmail");
const passHTML = document.getElementById("InputPassword");
const textInfo = document.getElementById("textInfo")

function regiterHandler(e) {
    e.preventDefault()
    const expreEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let warnings = ""
    let verific = false
    const datos = {
        Nombre: nameHTML.value,
        Apellido: apellidoHTML.value,
        Email: emailHTML.value,
        Contraseña: passHTML.value
    }
    console.log(datos);
    for (const key in datos) {
        const element = datos[key].trim();

        if (element == "") {
            warnings += key + " esta vacio" + "<br>"
            verific = true
            if (verific) {
                textInfo.innerHTML = warnings
            }
        } else {
            if (key == "Nombre") {
                if (nameHTML.value.length < 4) {
                    warnings += `El ombre es muy corto <br>`
                    verific = true
                }
            }
            if (key == "Nombre") {
                if (nameHTML.value.length < 4) {
                    warnings += `El ombre es muy corto <br>`
                    verific = true
                }
            }
            if (key == "Email") {
                console.log(element);
                if (expreEmail.test(emailHTML.value)) {
                    console.log("email si");
                } else {
                    warnings += `El Email no es validp <br>`
                    verific = true
                }
            }
            if (key == "Contraseña") {
                if (passHTML.value.length < 6) {
                    warnings += `La Contraseña es muy corta <br>`
                    verific = true
                }
            }

            if (verific) {
                textInfo.innerHTML = warnings
            }
        }

    }
}
