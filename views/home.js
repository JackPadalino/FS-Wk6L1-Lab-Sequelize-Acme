const html=require('html-template-tag');

function home(people,places,things,souvenirs){
    return html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>People, Places, and Things!</title>
</head>
<body>
    <h1>Acme People, Places, and Things</h1>
    <h2>People</h2>
    <ul>
        ${people.map(person=>
            `<li>${person.name}</li>`)}
    </ul>
    <h2>Places</h2>
    <ul>
        ${places.map(place=>
            `<li>${place.name}</li>`)}
    </ul>
    <h2>Things</h2>
    <ul>
        ${things.map(thing=>
            `<li>${thing.name}</li>`)}
    </ul>
    <h2>Souvenir purchases</h2>
    <ul>
        ${souvenirs.map(souvenir=>
            `<li>${souvenir.person.name} purchased a ${souvenir.thing.name} from ${souvenir.place.name}</li>`)}
</body>
`;
};

module.exports = {
    home:home
};