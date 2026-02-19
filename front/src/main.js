/*import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
        <div class="header" style="cursor:pointer;">
          <h1>My Quizz</h1>
          Pour accéder a la page /about <a href="about/" style="text-decoration: none;">click ici</a>
        </div>


        <div class="topnav">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-google"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
          <a href="#" class="fa fa-pinterest"></a>
          <a href="#" class="fa fa-snapchat-ghost"></a>
          <a href="#" class="fa fa-skype"></a>
          <a href="#" class="fa fa-android"></a>
          <a href="#" class="fa fa-dribbble"></a>
          <a href="#" class="fa fa-vimeo"></a>
          <a href="#" class="fa fa-tumblr"></a>
          <a href="#" class="fa fa-vine"></a>
          <a href="#" class="fa fa-foursquare"></a>
          <a href="#" class="fa fa-stumbleupon"></a>
          <a href="#" class="fa fa-flickr"></a>
          <a href="#" class="fa fa-yahoo"></a>
          <a href="#" class="fa fa-reddit"></a>
          <a href="#" class="fa fa-rss"></a>
        </div>

        <div class="row">
          <div class="leftcolumn">
            <div class="card">
              <h1>Nom étudiant</h1>
              <h5>description</h5>
              <div id="quiz">
                <h2>A TOI DE JOUER</h2>
                <div id="question"></div>
                <div id="proposals"></div>
              </div>
            </div>
          </div>
          <div class="rightcolumn">
            <div class="card">
              <img src="/question.png" width="500" height="600">
            </div>
        </div>

        <div class="footer">
          <h2>@2024</h2>
        </div>
`

initQuizz(); */




/* import { initQuizz } from './quizz.js';

import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="header" style="cursor:pointer;" role="banner" aria-label="En-tête du site">
    <h1>My Quizz</h1>
    <p>Pour accéder à la page /about 
      <a href="about/" style="text-decoration: none;" aria-label="Aller vers la page About">clique ici</a>
    </p>
  </div>

  <nav class="topnav" role="navigation" aria-label="Liens vers réseaux sociaux">
    <a href="#" class="fa fa-facebook" aria-label="Facebook"></a>
    <a href="#" class="fa fa-twitter" aria-label="Twitter"></a>
    <a href="#" class="fa fa-google" aria-label="Google"></a>
    <a href="#" class="fa fa-linkedin" aria-label="LinkedIn"></a>
    <a href="#" class="fa fa-youtube" aria-label="YouTube"></a>
    <a href="#" class="fa fa-instagram" aria-label="Instagram"></a>
    <a href="#" class="fa fa-pinterest" aria-label="Pinterest"></a>
    <a href="#" class="fa fa-snapchat-ghost" aria-label="Snapchat"></a>
    <a href="#" class="fa fa-skype" aria-label="Skype"></a>
    <a href="#" class="fa fa-android" aria-label="Android"></a>
    <a href="#" class="fa fa-dribbble" aria-label="Dribbble"></a>
    <a href="#" class="fa fa-vimeo" aria-label="Vimeo"></a>
    <a href="#" class="fa fa-tumblr" aria-label="Tumblr"></a>
    <a href="#" class="fa fa-vine" aria-label="Vine"></a>
    <a href="#" class="fa fa-foursquare" aria-label="Foursquare"></a>
    <a href="#" class="fa fa-stumbleupon" aria-label="StumbleUpon"></a>
    <a href="#" class="fa fa-flickr" aria-label="Flickr"></a>
    <a href="#" class="fa fa-yahoo" aria-label="Yahoo"></a>
    <a href="#" class="fa fa-reddit" aria-label="Reddit"></a>
    <a href="#" class="fa fa-rss" aria-label="Flux RSS"></a>
  </nav>

  <div class="row">
    <div class="leftcolumn">
      <div class="card" role="region" aria-labelledby="student-title">
        <h1 id="student-title">Nom étudiant</h1>
        <h5>Description</h5>

        <div id="quiz" role="form" aria-label="Quiz interactif">
          <h2>A TOI DE JOUER</h2>
          <div id="question" aria-live="polite"></div>
          <div id="proposals" aria-live="polite"></div>
        </div>
      </div>
    </div>

    <div class="rightcolumn">
      <div class="card">
        <img src="/question.png" width="500" height="600" alt="Illustration d'une question de quiz">
      </div>
    </div>
  </div>

  <footer class="footer" role="contentinfo" aria-label="Pied de page">
    <h2>@2024</h2>
  </footer>
`;

initQuizz();
*/




import { initQuizz } from './quizz.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="header" style="cursor:pointer;">
    <h1>My Quizz</h1>
    Pour accéder à la page À propos :
    <a href="about/" aria-label="Aller vers la page À propos" class="link">Page À propos</a>
  </div>

  <div class="topnav">
    <a href="#" class="fa fa-facebook" aria-label="Lien vers Facebook"></a>
    <a href="#" class="fa fa-twitter" aria-label="Lien vers Twitter"></a>
    <a href="#" class="fa fa-google" aria-label="Lien vers Google"></a>
    <a href="#" class="fa fa-linkedin" aria-label="Lien vers LinkedIn"></a>
    <a href="#" class="fa fa-youtube" aria-label="Lien vers YouTube"></a>
    <a href="#" class="fa fa-instagram" aria-label="Lien vers Instagram"></a>
    <a href="#" class="fa fa-pinterest" aria-label="Lien vers Pinterest"></a>
    <a href="#" class="fa fa-snapchat-ghost" aria-label="Lien vers Snapchat"></a>
    <a href="#" class="fa fa-skype" aria-label="Lien vers Skype"></a>
    <a href="#" class="fa fa-android" aria-label="Lien vers Android"></a>
    <a href="#" class="fa fa-dribbble" aria-label="Lien vers Dribbble"></a>
    <a href="#" class="fa fa-vimeo" aria-label="Lien vers Vimeo"></a>
    <a href="#" class="fa fa-tumblr" aria-label="Lien vers Tumblr"></a>
    <a href="#" class="fa fa-vine" aria-label="Lien vers Vine"></a>
    <a href="#" class="fa fa-foursquare" aria-label="Lien vers Foursquare"></a>
    <a href="#" class="fa fa-stumbleupon" aria-label="Lien vers StumbleUpon"></a>
    <a href="#" class="fa fa-flickr" aria-label="Lien vers Flickr"></a>
    <a href="#" class="fa fa-yahoo" aria-label="Lien vers Yahoo"></a>
    <a href="#" class="fa fa-reddit" aria-label="Lien vers Reddit"></a>
    <a href="#" class="fa fa-rss" aria-label="Lien vers flux RSS"></a>
  </div>

  <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h1>Nom étudiant</h1>
        <h5>Description</h5>
        <div id="quiz">
          <h2>A TOI DE JOUER</h2>
          <div id="question" aria-live="polite"></div>
          <div id="proposals"></div>
        </div>
      </div>
    </div>

    <div class="rightcolumn">
      <div class="card">
        <img src="/question.png" width="500" height="600" alt="Illustration d'une question de quiz">
      </div>
    </div>
  </div>

  <div class="footer">
    <h2>@2024</h2>
  </div>
`;

initQuizz();
