import { supabase } from "./supabase.js";

/* =====================
   AJOUT FILM
===================== */
const movieForm = document.getElementById("movie-form");

movieForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("movie-title").value;
  const year = document.getElementById("movie-year").value || null;

  const { error } = await supabase
    .from("movies")
    .insert([{ title, year }]);

  if (error) {
    alert(error.message);
  } else {
    alert("Film ajouté !");
    movieForm.reset();
  }
});

/* =====================
   AJOUT PEOPLE
===================== */
const peopleForm = document.getElementById("people-form");

peopleForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const birthdate = document.getElementById("birthdate").value || null;

  const nationalitiesInput = document
    .getElementById("nationalities")
    .value
    .split(",")
    .map(n => n.trim())
    .filter(Boolean);

  const { error } = await supabase
    .from("people")
    .insert([{
      firstname,
      lastname,
      birthdate,
      nationalities: nationalitiesInput
    }]);

  if (error) {
    alert(error.message);
  } else {
    alert("Personne ajoutée !");
    peopleForm.reset();
  }
});
