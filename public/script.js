fetch("/list")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person) => {
      // Select the <template> we created in index.html
      const cardTemplate = document.querySelector("template");

      // Clone a copy of the template we can insert in the DOM as a real visible node
      const card = cardTemplate.content.cloneNode(true);

      // Update the content of the cloned template with the employee data we queried from the backend
      card.getElementById("name").innerText = person.name;
      card.getElementById("career").innerText = person.career;
      card.getElementById("description").innerText = person.description;
      card.getElementById("linkedin").href = person.linkedin;
      card.getElementById("linkedin").innerText = person.linkedin;
      card.getElementById("github").href = person.github;
      card.getElementById("github").innerText = person.github;
      card.getElementById("need_help").innerText = person.need_help;
      card.getElementById("could_help").innerText = person.could_help;

      // Append the card as a child with the employee data to the <body> element on our page
      document.body.appendChild(card);
    });
  });
