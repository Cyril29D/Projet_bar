<script>
  import { API_BASE } from "../../../../config/db";

  let bar = {
    name: "",
    adresse: "",
    tel: "",
    email: "",
    description: ""
  };

  async function addBar() {
    const res = await fetch(`${API_BASE}/bars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bar),
    });

    if (res.ok) {
      alert("Bar ajouté !");
      bar = { name: "", adresse: "", tel: "", email: "", description: "" };
    } else {
      alert("Erreur lors de l'ajout du bar.");
    }
  }
</script>

<h2>Ajouter un Bar</h2>
<form on:submit|preventDefault={addBar}>
  <input type="text" bind:value={bar.name} placeholder="Nom du bar" required />
  <input type="text" bind:value={bar.adresse} placeholder="Adresse" required />
  <input type="text" bind:value={bar.tel} placeholder="Téléphone" />
  <input type="email" bind:value={bar.email} placeholder="Email" />
  <textarea bind:value={bar.description} placeholder="Description"></textarea>
  <button type="submit">Ajouter</button>
</form>