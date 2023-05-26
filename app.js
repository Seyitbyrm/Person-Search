const users = [
  {
    name: "First Person",
    photo: "img1.jpg",
    desc: "DESC",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    name: "Second Person",
    photo: "img2.jpg",
    desc: "DESC",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    name: "Third Person",
    photo: "img3.png",
    desc: "DESC",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
];

const input = document.querySelector("#input"),
  aButton = document.querySelector("#aButton"),
  tekrarAraButton = document.querySelector(".tekrarButton"),
  cardContainer = document.querySelector("#card-container"),
  cardTitle = document.querySelector(".card-title"),
  cardName = document.querySelector("#card-name"),
  cardPhoto = document.querySelector("#card-photo"),
  cardDesc = document.querySelector("#card-desc"),
  cardSkills = document.querySelector("#card-skills"),
  sorgulama = document.querySelector(".arama");

const yoksa = () => (alert("Kullanıcı Bulunamadı"), input.value = "");

const arama = () => {
  const isim = input.value.toLowerCase();
  const user = users.find((user) => user.name.toLowerCase() === isim);  //find() metodu, bir dizi içindeki belirli bir öğeyi bulmak için kullanılır. İlk bulduğu öğeyi döndürür. Eğer bulunamazsa undefined değerini döndürür.
  user
    ? (cardTitle.textContent = "Developer Search",
      cardName.textContent = user.name,
      cardPhoto.src = `img/${user.photo}`,
      cardDesc.textContent = user.desc,
      cardSkills.innerHTML = `<ul>${user.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>`,
      cardContainer.style.display = "block",
      sorgulama.style.display = "none",
      tekrarAraButton.style.display = "block")
    : yoksa();
};

const tekrarAra = () => {
  input.value = "";
  cardContainer.style.display = "none";
  sorgulama.style.display = "block";
};

const kontrol = () => {
  const isim = input.value.toLowerCase();
  return users.some((user) => user.name.toLowerCase() === isim); // some() metodu, bir dizi içinde belirli bir koşulu sağlayan en az bir öğe varsa true değerini döndürür, aksi halde false değerini döndürür.
};

const klavyeArama = (event) => {
  if (event.keyCode === 13) kontrol() ? arama() : yoksa();   
};


aButton.addEventListener("click", arama);
tekrarAraButton.addEventListener("click", tekrarAra);
input.addEventListener("keydown", klavyeArama);
