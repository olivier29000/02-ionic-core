fetch('https://devfest-nantes-2018-api.cleverapps.io/blog')
.then(function(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // lecture du corps de la réponse en tant que JSON.
  return response.json();
})
.then(function(responseAsJson) {
  // traitement de l'objet
  var objetJson=responseAsJson;

  var contenu='';
  for (const item of responseAsJson) {
    contenu+=`
    <ion-card>
    <img src="https://devfest2018.gdgnantes.com/${item.image}" />
    <ion-card-header>
      <ion-card-title>${item.title}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    ${item.brief}
    </ion-card-content>
  </ion-card>
    `
  }

  document.querySelector('ion-content').innerHTML = contenu

})
.catch(function(error) {
  console.log('Une erreur est survenue : ', error);
});