{% extends "base.tpl" %}
{%- block head %}
    {{ super() }}
        <link rel="stylesheet" type="text/css" href="../src/css/cast.css">
    {%- endblock %}
{% block content %}
<div class="content" id="cast-header">
    <h1>Meet the Cast of Tamberlane</h1>
    <p>Get a detailed introduction to each citizen of Treehollow, who together play an important role in uncovering more
        about Tamberlane’s origin story. Each unique creature in this diverse cast brings their own
        flavor to the comic’s plot through their bold personalities and evolving, complex
        relationships with one another.</p>
    <p>Click on each character portrait to learn more about them!</p>
    <noscript>This page needs javascript to work! Don't worry, it's very lightweight and doesn't trace your information.</noscript>
</div>
<div class="cast-container">
    <h2 id="PrimaryCastTitle">Primary Cast<a name="top"></a></h2>
    <div id="primary-cast" class="cast-section">
        <div id="primaryCastPortraits" class="cast-section-portraits">
            <div id="primaryBelfry" class="portrait"><span>Belfry</span></div>
            <div id="primaryOakewood" class="portrait"><span>Oakewood</span></div>
            <div id="primaryTamberlane" class="portrait"><span>Tamberlane</span></div>
        </div>
        <div class="cast-section-summary"><p>Our story is set into motion by our three intrepid main characters: an
            accident-prone bat, a grumpy coyote, and of course, the titular Tamberlane!</p>
            <p>Together they embark on a life-changing journey of discovery to learn more about this mysterious, yet adorable
                creature.</p></div>
    </div>
</div>
<div class="cast-container">
    <h2 id="SecondaryCastTitle">Secondary Cast</h2>
    <div id="secondary-cast" class="cast-section">
        <div id="secondaryCastPortraits" class="cast-section-portraits">
            <div id="secondaryAinsley" class="portrait"><span>Ainsley</span></div>
            <div id="secondaryAnthony" class="portrait"><span>Anthony</span></div>
            <div id="secondaryAvery" class="portrait"><span>Avery</span></div>
            <div id="secondaryBriar" class="portrait"><span>Briar</span></div>
            <div id="secondaryHenry" class="portrait"><span>Henry</span></div>
            <div id="secondaryMarie" class="portrait"><span>Marie</span></div>
            <div id="secondaryNora" class="portrait"><span>Nora</span></div>
            <div id="secondaryParker" class="portrait"><span>Parker</span></div>
            <div id="secondaryParsley" class="portrait"><span>Parsley</span></div>
            <div id="secondaryPenny" class="portrait"><span>Penny</span></div>
            <div id="secondaryPiper" class="portrait"><span>Piper</span></div>
            <div id="secondaryTess" class="portrait"><span>Tess</span></div>
            <div id="secondaryWalter" class="portrait"><span>Walter</span></div>
        </div>
        <div class="cast-section-summary"><p>It takes a village to raise a child, and the citizens of Treehollow are living
            proof.</p>
            <p>This colorful cast of animal characters frequently serve as Tamberlane’s extended family, complete with
            their own unique quirks and personalities that drive a plot full of wacky hijinks, bold adventures, and
            tender moments. </p></div>
    </div>
</div>
<div class="cast-container">
    <h2 id="PatreonCastTitle">Patreon Cast</h2>
    <div id="patreon-cast" class="cast-section">
        <div id="patreonCastPortraits" class="cast-section-portraits">
            <div id="patreonArtieHattie" class="portrait"><span>Artie & Hattie</span></div>
            <div id="patreonBleddyn" class="portrait"><span>Bleddyn</span></div>
            <div id="patreonCallie" class="portrait"><span>Callie</span></div>
            <div id="patreonCur" class="portrait"><span>Cur</span></div>
            <div id="patreonDanger" class="portrait"><span>Danger</span></div>
            <div id="patreonGillian" class="portrait"><span>Gillian</span></div>
            <div id="patreonIsaiah" class="portrait"><span>Isaiah</span></div>
            <div id="patreonJackie" class="portrait"><span>Jackie</span></div>
            <div id="patreonJason" class="portrait"><span>Jason</span></div>
            <div id="patreonJentzen" class="portrait"><span>Jentzen</span></div>
            <div id="patreonJonas" class="portrait"><span>Jonas</span></div>
            <div id="patreonKira" class="portrait"><span>Kira</span></div>
            <div id="patreonMilo" class="portrait"><span>Milo</span></div>
            <div id="patreonPeek" class="portrait"><span>Peek</span></div>
            <div id="patreonRhode" class="portrait"><span>Rhode</span></div>
            <div id="patreonScott" class="portrait"><span>Scott</span></div>
            <div id="patreonStoker" class="portrait"><span>Stoker</span></div>
            <div id="patreonSylvia" class="portrait"><span>Sylvia</span></div>
            <div id="patreonTagg" class="portrait"><span>Tagg</span></div>
            <div id="patreonTerra" class="portrait"><span>Terra</span></div>
            <div id="patreonTimmothy" class="portrait"><span>Timmothy</span></div>
            <div id="patreonTwitchel" class="portrait"><span>Twitchel</span></div>
            <div id="patreonWinnie" class="portrait"><span>Winnie</span></div>
        </div>
        <div class="cast-section-summary"><p>Patreon supporters at $50+ have the opportunity to be featured in the comic as
            a non-speaking minor character, while supporters of $100+ get speaking roles. This list contains patron character
            cameos that have spoken so far. If you'd like to see the full patreon cast, check out the <a href="../patreon-cast/">Rogue's Gallery</a>!</p>
            <p>Want to be included in the comic and become a canonical part of the Tamberlane universe?</p>
            <div class="patreon-button" id="patreon-button"><a href="http://www.patreon.com/tamberlane">Become a Patron</a></div></div>
    </div>
</div>
<h2 id="cast-title" tabindex="-1">Belfry Baker, the Clumsy Bat</h2>

<div id="cast-content" class="content">
    <div id="cast-profile">
        <div id="cast-photo"></div>
        <div id="cast-stats">
            <div id="castSpecies">
                <h3>Species</h3>
                <p id="textSpecies" class="cast-stats-p">Bat/Lemur-Squirrel(?)</p>
            </div>
            <div id="castGender">
                <h3>Gender</h3>
                <p id="textGender" class="cast-stats-p">Female</p>
            </div>
            <div id="castBirthday">
                <h3>Birthday</h3>
                <p id="textBirthday" class="cast-stats-p">February 1st</p>
            </div>
            <div id="castAge">
                <h3>Age (at First Appearance)</h3>
                <p id="textAge" class="cast-stats-p">19</p>
            </div>
            <div id="castOccupation">
                <h3>Occupation</h3>
                <p id="textOccupation" class="cast-stats-p">Waitress at Hubba Grub</p>
            </div>
            <div id="castBirthplace">
                <h3>Birthplace</h3>
                <p id="textBirthplace" class="cast-stats-p">Treehollow, Silver Sage</p>
            </div>
            <div id="castFamily">
                <h3>Family</h3>
                <p id="textFamily" class="cast-stats-p">Tess (mom), Walter (dad), Briar (sister), Koss (bio mom), Jeremy (bio dad)</p>
            </div>
            <div id="cast-links">
                <h3>Links</h3>
                <p id="cast-tagged" class="cast-stats-p">&#10087; <a href="../tagged/Belfry">All pages featuring Belfry</a></p>
                <p id="cast-refsheet" class="cast-stats-p">&#10087; <a href="../your_content/images/sheets/Belfry.png">Belfry's Reference Sheet</a> <span><br>(contains nudity)</span></p>
            </div>
        </div>
        <div id="cast-info">
            <h2 id="headerInfo">About Belfry</h2>
            <p id="textInfo">Belfry is a bat, with (she thinks) a bit of squirrel mixed in. She’s clumsy, well-meaning, naive, sweet, and tries her hardest to do the very best she can!</p>
        </div>
        <div id="cast-story">
            <h2 id="headerStory">Belfry's Story</h2>
            <div id="textStory">
                <p>"Shhhh. It's okay."</p>
                <p>It was not okay. Where was Papa? Where was Mum? The batling writhed in discomfort, too hot under the strange covers and too cold to fling them free.</p>
                <p>"Little Belfry, don't fret so much."</p>
                <p>A new voice. He knew her name. Whimpering, Belfry opened her eyes, tears leaking from their corners. "Papa," she cried.</p>
                <p>The two hazy silhouettes hesitated. "Your papa is gone, little one," one said. "You're sick. Please just rest, and we'll figure out what to do after."</p>
                <p>Gone? What did they mean, gone? If her mum and papa were gone, they'd be back soon. Right?</p>
                <p>She was enveloped in strange scents and warm fur. They were gone and she was wrung out, too tired and sick and exhausted to think anymore.</p>
                <p>She slept.</p>
            </div>
        </div>
    </div>
    <div id="to-top"><p><a href="#top">⯅ To Top</a></p></div>
</div>
<script src="../src/js/cast.js"></script>
{% endblock %}