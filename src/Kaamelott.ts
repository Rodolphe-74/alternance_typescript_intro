/*interface Kaamelott {
    citation: string;
}

function getCitation(): Promise<Kaamelott[]> {
    return fetch('/kaamelott.json')
        .then(res => res.json())
        .then(res => {
            return res as Kaamelott[]
        })
}

const result = document.getElementById('result')
getCitation()
    .then(users => {
        result.innerHTML = users.map(u => u.citation).toString()
    })

 */