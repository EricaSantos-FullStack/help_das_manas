fetch("/list")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person) => {
  
      const cardTemplate = document.querySelector("template");

      const card = cardTemplate.content.cloneNode(true);


      card.getElementById("name").innerText = person.name;
      card.getElementById("career").innerText = person.career;
      card.getElementById("description").innerText = person.description;
      card.getElementById("linkedin").href = person.linkedin;
      card.getElementById("linkedin").innerText = person.linkedin;
      card.getElementById("github").href = person.github;
      card.getElementById("github").innerText = person.github;
      card.getElementById("need_help").innerText = person.need_help;
      card.getElementById("could_help").innerText = person.could_help;


      document.body.appendChild(card);
    });
  });
