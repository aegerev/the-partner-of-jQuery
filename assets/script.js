let formElement = $('#skills-form');
let nameInputElement = $('#skills-name');
let dateInputElement = $('#datepicker');
let skillsListElement = $('#skills-list');

let handleFormSubmit = function(event) {
    event.preventDefault();

    let nameInput = nameInputElement.val();
    let dateInput = dateInputElement.val();

    if(!nameInput || !dateInput) {
        alert("The form needs to be filled out.");
        return;
    }

    nameInput.val('');
    dateInput.val('');
};

formElement.on('submit'), handleFormSubmit;

$(function() {
    $("#skill-name").autocomplete({
      source: ["Shared Vision", "Proven Track Record", "Complementary Skills", "Problem-Solving Abilities", "Financial Acumen", "Resilience and Adaptability", "Positive Attitude", "Trustworthiness and Integrity"]
    });
});

$(function() {
    $("#datepicker").datepicker();
  });

