<div class="title__container d-flex flex-row justify-content-between align-items-center">
    <img src="<?php echo isset($logo_path) ? $logo_path : 'https://www.payter.us/img/default-logo.png'; ?>" 
         alt="profile_picture" class="img-fluid" />
    <div class="nav-item dropdown flex-shrink-1 ml-auto">
        <a class="nav-link dropdown-toggle language-toggle d-flex align-items-center" href="#" id="languageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <ion-icon name="globe-outline" style="width:2rem; height:2rem;"></ion-icon>
            <span class="pl-3" data-lang="en">English</span>
        </a>
        <ul class="dropdown-menu shadow-lg" id="language-dropdown" aria-labelledby="languageDropdown">
            <li id="google_translate_element"></li>
            <li class="dropdown-item" data-lang="en">English</li>
            <li class="dropdown-item" data-lang="es">Spanish</li>
            <li class="dropdown-item" data-lang="fr">French</li>
        </ul>
    </div>
</div>
