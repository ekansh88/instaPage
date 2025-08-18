const socialLinks = {
    "Instagram": "https://www.instagram.com/letsapproach",
    "YouTube Channel#yt": "https://youtube.com/@letsapproachyt?si=khi2ChTHsbHDaIzQ",
    "Discord Community" : "https://discord.gg/xAcX3bcJPQ",
    "UPI" : "https://drive.google.com/file/d/1pOp3ZFU5n1bN2oZmMJw5FaWV7b3hb1Ki/view?usp=sharing",
    "Email ID" : "mailto:letsapproach69@gmail.com"
}
const letsapproachLinks = {
    // "Book 1-On-1 Call" : "https://forms.gle/jqxmjrKcvx9zTAjU9",
    "Texting Session" : "https://forms.gle/iNZ7UoqupvgXNbuo6",
    "Approach Session" : "https://forms.gle/fN4jphpUyHQEgBpb9",
    "In-Field Bootcamp" : "https://forms.gle/d9dcytFRavGTif317",
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
addLinks("Dating Life Programs", letsapproachLinks)
