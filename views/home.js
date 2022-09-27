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
        ${people.map(person=>{
            return `<li>${person.name}</li>`
        }
        )}
    </ul>
    <h2>Places</h2>
    <ul>
        ${places.map(place=>{
            return `<li>${place.name}</li>`
        }
        )}
    </ul>
    <h2>Things</h2>
    <ul>
        ${things.map(thing=>{
            return `<li>${thing.name}</li>`
        }
        )}
    </ul>
    <h2>Souvenir purchases</h2>
    <ul>
        ${souvenirs.map(souvenir=>{
            return `<li>${souvenir.person.name} purchased a ${souvenir.thing.name} from ${souvenir.place.name}</li>`
        }
        )}
    </ul>
    <form method='POST'>
        <label for="personId">Person</label>
        <select name='personId'>
            ${people.map(person => {
                return `
                <option value=${person.id}>
                    ${person.name}
                </option>`
            })
            }
        </select>
        <label for="thingId">Thing</label>
        <select name='thingId'>
            ${things.map(thing => {
                return `
                <option value=${thing.id}>
                    ${thing.name}
                </option>`
            })
            }
        </select>
        <label for="placeId">Place</label>
        <select name='placeId'>
            ${places.map(place => {
                return `
                <option value=${place.id}>
                    ${place.name}
                </option>`
            })
            }
        </select>
        <button type="submit">Submit</button>
    </form>
</body>
`;
};

module.exports = {
    home:home
};