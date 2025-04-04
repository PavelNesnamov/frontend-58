//const input = document.getElementById("input-name");
const button = document.getElementById("search");
const form = document.getElementById("form");

async function getCheckName(hero) {
  const res = await fetch("https://api.genderize.io/?name=" + hero);
  const data = await res.json();
  console.log(data);

  //  const section = document.createElement("section");
  //   data= document.createElement(data)
  //       h2.textContent = `${character.name} from ${character.location.name}`;
  //       const p = document.createElement('p')
  //       p.textContent = 'Species:' + character.species + ', status:' + character.status
  //       const img = document.createElement('img')
  //       img.src = character.image
  //       section.append(h2,p,img)

  //       gridContainer.append(section);
  //     });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const person = event.target.name.value;
  console.log(person);

  getCheckName(person);
});
