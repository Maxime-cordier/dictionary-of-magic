export default function statLivre(DATA) {
    let tabLivres = [];
        DATA.forEach(sort => {
        if (!tabLivres.includes(sort[0])) {
          tabLivres.push(sort[0])
        }
    });
    return tabLivres;
}