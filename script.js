const socialLinks = {
    "Instagram": "https://www.instagram.com/letsapproach",
    "YouTube#yt": "https://youtube.com/@letsapproachyt?si=khi2ChTHsbHDaIzQ",
    "Discord Invite" : "https://discord.gg/UB9M6X2FDG",
    "UPI" : "https://discord.com/channels/1286413784549687326/1363837887694504106/1363852853579616347",
    "Email" : "mailto:letsapproach69@gmail.com"
}
const letsapproachLinks = {
    "Book 1-On-1 Call#imp" : "https://forms.gle/jqxmjrKcvx9zTAjU9",
    "Texting Session" : "https://forms.gle/iNZ7UoqupvgXNbuo6",
    "Approach Session" : "https://forms.gle/fN4jphpUyHQEgBpb9",
    "IRL Bootcamp" : "https://forms.gle/d9dcytFRavGTif317",
    "Sunday Workshop" : "https://forms.gle/Wshnrk7aFdWEbF1cA"
}

function addLinks(title, dict){
    let content = 
    `
        <section class="about-link-section">
            <p>${title}</p>
        </section>
        <hr>
        <section class="link-section">
    `
    for (let key in dict) {
        let value = dict[key];
    
        if (key.includes("#")) {
            let [text, idValue] = key.split("#");
            content += `<a class="link-bar" id="${idValue}" href="${value}" target="_blank">${text}</a>`;
        } else {
            content += `<a class="link-bar" href="${value}" target="_blank">${key}</a>`;
        }
    }
    
    content += `</section>`

    document.querySelector(".all-in-one").innerHTML += content;
    return true;
}
addLinks("My Socials", socialLinks)
addLinks("@letsapproach Resources", letsapproachLinks)
