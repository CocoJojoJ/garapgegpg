/* Auto PGP Oficina — maquete.
   L'en-tête, le menu ☰ et le pied de page sont injectés ici pour ne pas
   les recopier dans chaque page HTML. */
(function () {
    "use strict";

    var PAGE = document.body.getAttribute("data-page") || "";
    var lien_wa = function (texte) {
        return "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(texte || "Olá AUTO PGP OFICINA!");
    };

    /* ---------- Icônes (traits simples, couleur = currentColor) ---------- */
    var TRACES = {
        pinceau: '<path d="M18 3l3 3-9 9-3-3z"/><path d="M9 12c-3 0-4 2-4 4s-1 3-2 3c2 2 7 2 8-1 .5-1.5 0-3 1-3"/>',
        flocon: '<path d="M12 2v20M4 7l16 10M20 7L4 17"/><path d="M9 4l3 3 3-3M9 20l3-3 3 3"/>',
        marteau: '<path d="M14 4l6 6-3 3-6-6z"/><path d="M11 7L3 15l3 3 8-8"/>',
        brillance: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/><path d="M19 3v4M17 5h4"/>',
        cle: '<path d="M15 3a6 6 0 0 0-5.6 8.2L3 17.6V21h3.4l6.4-6.4A6 6 0 1 0 15 3z"/><circle cx="16" cy="8" r="1.5"/>',
        bouclier: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
        tel: '<path d="M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
        wa: '<path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"/>',
        maison: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
        galerie: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
        etoile: '<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
        livre: '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
        contact: '<path d="M4 5h16v14H4z"/><path d="M4 6l8 7 8-7"/>',
        question: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17v.5"/>',
        tarif: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
        reglage: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
        carte: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
        horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        plan: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    };
    function icone(nom) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (TRACES[nom] || TRACES.cle) + "</svg>";
    }
    window.icone = icone;

    function $(sel, racine) { return (racine || document).querySelector(sel); }
    function $$(sel, racine) { return Array.prototype.slice.call((racine || document).querySelectorAll(sel)); }
    function param(nom) { return new URLSearchParams(location.search).get(nom); }
    function service_par_id(id) {
        for (var i = 0; i < SERVICES.length; i++) if (SERVICES[i].id === id) return SERVICES[i];
        return null;
    }
    function nom_categorie(id) {
        if (id === "publicidade") return "Publicidade";
        var s = service_par_id(id); return s ? s.nom : id;
    }

    /* ---------- Réglage de taille de texte (page Definições) ---------- */
    try {
        var taille = localStorage.getItem("pgp_taille");
        if (taille) document.documentElement.style.fontSize = taille;
    } catch (e) {}

    /* ---------- Menus ---------- */
    var NAV = [
        ["index.html", "Início", "maison", "inicio"],
        ["services.html", "Serviços", "cle", "servicos"],
        ["realisations.html", "Os nossos trabalhos", "galerie", "trabalhos"],
        ["avis.html", "Avaliações", "etoile", "avaliacoes"],
        ["conseils.html", "Conselhos", "livre", "conselhos"],
        ["a-propos.html", "Sobre nós", "info", "sobre"],
        ["contact.html", "Contacto", "contact", "contacto"]
    ];
    var NAV_PLUS = [
        ["tarifs.html", "Preços", "tarif", "precos"],
        ["faq.html", "Perguntas frequentes", "question", "faq"],
        ["parametres.html", "Definições", "reglage", "definicoes"]
    ];
    function liens(liste) {
        return liste.map(function (l) {
            return '<a href="' + l[0] + '"' + (l[3] === PAGE ? ' class="actif" aria-current="page"' : "") + ">" + icone(l[2]) + "<span>" + l[1] + "</span></a>";
        }).join("");
    }

    function injecter_site() {
        var haut = document.getElementById("entete");
        if (haut) {
            haut.outerHTML =
                '<div class="bandeau-maquete">Maquete de demonstração — os textos e fotos são provisórios. <a href="plan-du-site.html">Ver todas as páginas</a></div>' +
                '<div class="barre-info"><div class="conteneur">' +
                '<span><span class="masquer-mobile">' + CONTACT.horaires + '<span class="sep">|</span>' + CONTACT.adresse_courte + '</span></span>' +
                '<span>Precisa de ajuda? <a href="' + CONTACT.tel_lien + '">' + CONTACT.tel_affiche + "</a></span>" +
                "</div></div>" +
                '<header class="entete"><div class="conteneur">' +
                '<button class="burger" type="button" aria-label="Abrir o menu" aria-controls="tiroir" aria-expanded="false"><span></span></button>' +
                '<a class="marque" href="index.html" aria-label="Auto PGP Oficina — início"><img src="img/logo.jpg" alt="Auto PGP Oficina" width="88" height="54"></a>' +
                '<nav class="nav-principale" aria-label="Navegação principal">' +
                NAV.slice(1).map(function (l) { return '<a href="' + l[0] + '"' + (l[3] === PAGE ? ' class="actif" aria-current="page"' : "") + ">" + l[1] + "</a>"; }).join("") +
                "</nav>" +
                '<a class="btn btn-appel" href="' + CONTACT.tel_lien + '">' + icone("tel") + '<span class="txt">Ligar agora</span></a>' +
                "</div></header>";
        }

        // Tiroir ☰ (croquis : Paramètres, …). L'admin a été retiré du site vitrine.
        document.body.insertAdjacentHTML("beforeend",
            '<div class="voile" hidden></div>' +
            '<aside class="tiroir" id="tiroir" aria-label="Menu" aria-hidden="true">' +
            '<div class="tiroir-haut"><img src="img/logo.jpg" alt="Auto PGP Oficina" width="75" height="46"><button class="fermer" type="button" aria-label="Fechar o menu">×</button></div>' +
            "<nav><h4>Navegação</h4>" + liens(NAV) +
            "<h4>Informações</h4>" + liens(NAV_PLUS) +
            '<h4>Contacto</h4><a href="' + CONTACT.tel_lien + '">' + icone("tel") + "<span>" + CONTACT.tel_affiche + "</span></a>" +
            '<a href="' + lien_wa() + '" target="_blank" rel="noopener">' + icone("wa") + "<span>WhatsApp " + CONTACT.wa_affiche + "</span></a>" +
            "</nav></aside>");

        var pied = document.getElementById("pied");
        if (pied) {
            pied.outerHTML =
                '<footer class="pied"><div class="conteneur"><div class="colonnes">' +
                '<div><img class="logo-blanc" src="img/logo.jpg" alt="Auto PGP Oficina" width="180" height="111" loading="lazy">' +
                "<p>Pedro Jorge Pungui — Prestações de Serviços.<br><b style=\"color:#fff\">" + CONTACT.slogan + ".</b></p></div>" +
                "<div><h4>Serviços</h4><ul>" + SERVICES.slice(0, 6).map(function (s) { return '<li><a href="service.html?s=' + s.id + '">' + s.nom + "</a></li>"; }).join("") +
                '<li><a href="services.html">Todos os serviços →</a></li></ul></div>' +
                '<div><h4>A oficina</h4><ul><li><a href="realisations.html">Os nossos trabalhos</a></li><li><a href="avis.html">Avaliações</a></li><li><a href="conseils.html">Conselhos</a></li><li><a href="a-propos.html">Sobre nós</a></li><li><a href="tarifs.html">Preços</a></li><li><a href="faq.html">Perguntas frequentes</a></li></ul></div>' +
                '<div><h4>Contacto</h4><ul><li><a class="tel" href="' + CONTACT.tel_lien + '">' + CONTACT.tel_affiche + "</a></li>" +
                '<li><a href="' + lien_wa() + '" target="_blank" rel="noopener">WhatsApp ' + CONTACT.wa_affiche + "</a></li><li>" + CONTACT.adresse + "</li><li>" + CONTACT.horaires + '</li><li><a href="contact.html">Página de contacto</a></li></ul></div>' +
                "</div>" +
                '<div class="bas"><span>© 2026 Auto PGP Oficina · Pedro Jorge Pungui, Prestações de Serviços</span>' +
                '<nav><a href="confidentialite.html">Privacidade</a><a href="conditions.html">Termos de utilização</a><a href="plan-du-site.html">Mapa do site</a></nav></div>' +
                "</div></footer>" +
                '<div class="flottant"><a class="f-tel" href="' + CONTACT.tel_lien + '" aria-label="Ligar">' + icone("tel") + '<span class="txt">Ligar</span></a>' +
                '<a class="f-wa" href="' + lien_wa() + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + icone("wa") + '<span class="txt">WhatsApp</span></a></div>';
        }
    }

    function brancher_tiroir() {
        var tiroir = $(".tiroir"), voile = $(".voile"), bouton = $(".burger");
        if (!tiroir || !bouton) return;
        function ouvrir(oui) {
            tiroir.classList.toggle("ouvert", oui);
            tiroir.setAttribute("aria-hidden", String(!oui));
            bouton.setAttribute("aria-expanded", String(oui));
            voile.hidden = !oui;
            if (oui) $(".fermer", tiroir).focus(); else bouton.focus();
        }
        bouton.addEventListener("click", function () { ouvrir(true); });
        voile.addEventListener("click", function () { ouvrir(false); });
        $(".fermer", tiroir).addEventListener("click", function () { ouvrir(false); });
        document.addEventListener("keydown", function (e) { if (e.key === "Escape" && tiroir.classList.contains("ouvert")) ouvrir(false); });
    }

    /* ---------- Rendus ---------- */
    function photo(label, couleur, video, duree) {
        return '<div class="photo ' + (couleur || "") + (video ? " video" : "") + '" role="img" aria-label="' + label + '" data-label="' + label + '">' +
            (duree ? '<span class="duree">' + duree + "</span>" : "") + "</div>";
    }

    function rendu_specialites(boite) {
        boite.innerHTML = SERVICES.filter(function (s) { return s.vedette; }).map(function (s) {
            return '<article class="specialite" id="' + s.id + '">' +
                photo(s.photo, s.couleur) +
                "<div>" +
                '<h3 class="etiquette">' + icone(s.icone).replace("<svg", '<svg width="28" height="28"') + s.nom + "</h3>" +
                "<p>" + s.texte + "</p>" +
                "<ul>" + s.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
                '<div class="actions"><a class="btn" href="realisations.html?cat=' + s.id + '">' + icone("galerie") + "Ver os nossos trabalhos</a>" +
                '<a class="lien-fleche" href="service.html?s=' + s.id + '">Saber mais</a></div>' +
                "</div></article>";
        }).join("");
    }

    function rendu_grille_services(boite) {
        boite.innerHTML = SERVICES.map(function (s) {
            return '<a class="item" href="service.html?s=' + s.id + '">' + icone(s.icone) +
                "<h3>" + s.nom + "</h3>" +
                "<p>" + s.court + '</p><span class="lien-fleche">Ver o serviço</span></a>';
        }).join("");
    }

    function rendu_service(boite) {
        var s = service_par_id(param("s")) || SERVICES[0];
        document.title = s.nom + " | Auto PGP Oficina";
        $("[data-champ=titre]").textContent = s.nom;
        $("[data-champ=fil]").textContent = s.nom;
        $("[data-champ=court]").textContent = s.court;
        var trabalhos = MEDIAS.filter(function (m) { return m.cat === s.id; }).slice(0, 3);
        while (trabalhos.length < 3) trabalhos.push({ type: "photo", titre: "Foto a fornecer" });
        boite.innerHTML =
            photo(s.photo, s.couleur) +
            "<h2>O que fazemos</h2><p>" + s.texte + "</p>" +
            "<ul>" + s.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
            "<h2>Como funciona</h2>" +
            '<div class="grille etapes" style="margin-bottom:20px">' +
            '<div class="etape"><h3>Ligue-nos</h3><p>Explique o problema por telefone ou WhatsApp.</p></div>' +
            '<div class="etape"><h3>Diagnóstico</h3><p>Avaliamos a viatura e damos o orçamento.</p></div>' +
            '<div class="etape"><h3>Reparação</h3><p>Fazemos o trabalho e devolvemos a viatura pronta.</p></div></div>' +
            "<h2>Trabalhos recentes</h2>" +
            '<div class="galerie-mini">' + trabalhos.map(function (m) { return photo(m.titre, s.couleur, m.type === "video", m.duree); }).join("") + "</div>" +
            '<a class="btn marine" href="realisations.html?cat=' + s.id + '">' + icone("galerie") + "Ver todos os trabalhos de " + s.nom.toLowerCase() + "</a>";
        var autres = $("[data-rendu=autres-services]");
        if (autres) autres.innerHTML = SERVICES.filter(function (x) { return x.id !== s.id; })
            .map(function (x) { return '<li><a href="service.html?s=' + x.id + '">' + x.nom + "</a></li>"; }).join("");
        $$("[data-wa-service]").forEach(function (a) { a.href = lien_wa("Olá AUTO PGP OFICINA, gostaria de um orçamento para: " + s.nom); });
    }

    function rendu_medias(boite) {
        var filtres = $("[data-rendu=filtres]");
        var cats = ["tous"].concat(SERVICES.map(function (s) { return s.id; }).filter(function (id) {
            return MEDIAS.some(function (m) { return m.cat === id; });
        }), ["publicidade"]);
        var actif = param("cat") || "tous";
        var type_actif = "tous";

        function dessiner() {
            filtres.innerHTML = cats.map(function (c) {
                return '<button type="button" class="pill' + (c === actif ? " on" : "") + '" data-cat="' + c + '">' + (c === "tous" ? "Todos" : nom_categorie(c)) + "</button>";
            }).join("");
            var liste = MEDIAS.filter(function (m) {
                return (actif === "tous" || m.cat === actif) && (type_actif === "tous" || m.type === type_actif);
            });
            boite.innerHTML = liste.length ? liste.map(function (m, i) {
                var s = service_par_id(m.cat);
                return '<button type="button" class="media" data-i="' + MEDIAS.indexOf(m) + '">' +
                    photo(m.titre, s ? s.couleur : "orange", m.type === "video", m.duree) +
                    '<div class="media-corps"><span class="cat">' + nom_categorie(m.cat) + " · " + (m.type === "video" ? "Vídeo" : "Foto") + "</span>" +
                    "<h3>" + m.titre + '</h3><div class="reactions"><span>♥ ' + m.gostos + "</span><span>💬 " + m.comentarios + "</span></div></div></button>";
            }).join("") : '<p class="msg">Ainda não há publicações nesta categoria.</p>';
        }
        filtres.addEventListener("click", function (e) {
            var b = e.target.closest("[data-cat]"); if (!b) return;
            actif = b.getAttribute("data-cat"); dessiner();
        });
        $$("[data-type]").forEach(function (b) {
            b.addEventListener("click", function () {
                type_actif = b.getAttribute("data-type");
                $$("[data-type]").forEach(function (x) { x.classList.toggle("on", x === b); });
                dessiner();
            });
        });
        boite.addEventListener("click", function (e) {
            var b = e.target.closest(".media"); if (!b) return;
            ouvrir_visionneuse(MEDIAS[+b.getAttribute("data-i")]);
        });
        dessiner();
    }

    function ouvrir_visionneuse(m) {
        var s = service_par_id(m.cat);
        var v = document.createElement("div");
        v.className = "visionneuse";
        v.setAttribute("role", "dialog");
        v.setAttribute("aria-modal", "true");
        v.innerHTML = '<button class="fermer" type="button" aria-label="Fechar">×</button><div class="boite">' +
            photo(m.titre + (m.type === "video" ? " (vídeo a fornecer)" : " (foto a fornecer)"), s ? s.couleur : "orange", m.type === "video", m.duree) +
            '<div class="boite-corps"><div><h3>' + m.titre + "</h3><p>" + nom_categorie(m.cat) + " · ♥ " + m.gostos + " · 💬 " + m.comentarios + "</p></div>" +
            '<div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn petit" href="avis.html#deixar">' + icone("etoile") + "Avaliar este trabalho</a>" +
            '<a class="btn wa petit" href="' + lien_wa("Olá! Vi o trabalho \"" + m.titre + "\" no site e gostaria de um orçamento.") + '" target="_blank" rel="noopener">' + icone("wa") + "Quero o mesmo</a></div></div></div>";
        function fermer() { v.remove(); document.removeEventListener("keydown", esc); }
        function esc(e) { if (e.key === "Escape") fermer(); }
        v.addEventListener("click", function (e) { if (e.target === v || e.target.closest(".fermer")) fermer(); });
        document.addEventListener("keydown", esc);
        document.body.appendChild(v);
        $(".fermer", v).focus();
    }

    function rendu_articles(boite) {
        var n = +(boite.getAttribute("data-max") || 99);
        boite.innerHTML = ARTICLES.slice(0, n).map(function (a) {
            return '<a class="article-carte" href="article.html?a=' + a.id + '">' + photo("Imagem: " + a.cat, a.couleur) +
                '<div class="corps"><span class="cat">' + a.cat + "</span><h3>" + a.titre + "</h3><p>" + a.resume + '</p><span class="lien-fleche">Ler o conselho</span></div></a>';
        }).join("");
    }

    function rendu_article(boite) {
        var a = ARTICLES.filter(function (x) { return x.id === param("a"); })[0] || ARTICLES[0];
        document.title = a.titre + " | Auto PGP Oficina";
        $("[data-champ=titre]").textContent = a.titre;
        $("[data-champ=fil]").textContent = a.cat;
        $("[data-champ=court]").textContent = a.resume;
        boite.innerHTML = photo("Imagem do artigo: " + a.cat, a.couleur) +
            "<h2>Porque é importante</h2><p>Texto do conselho a escrever com o cliente. Esta zona mostra o comprimento e a forma de um artigo real: uma introdução, alguns pontos práticos e um convite para contactar a oficina.</p>" +
            "<h2>O que pode fazer</h2><ul><li>Primeiro gesto simples a verificar.</li><li>Segundo gesto, com a frequência recomendada.</li><li>Sinal de alerta que exige uma visita à oficina.</li></ul>" +
            "<h2>Quando nos contactar</h2><p>Se tiver dúvidas, ligue-nos: fazemos o diagnóstico e explicamos tudo antes de reparar.</p>";
        var autres = $("[data-rendu=autres-articles]");
        if (autres) autres.innerHTML = ARTICLES.filter(function (x) { return x.id !== a.id; })
            .map(function (x) { return '<li><a href="article.html?a=' + x.id + '">' + x.titre + "</a></li>"; }).join("");
    }

    function rendu_avis(boite) {
        var n = +(boite.getAttribute("data-max") || 99);
        boite.innerHTML = AVIS.slice(0, n).map(function (a) {
            return '<div class="avis"><div class="etoiles" aria-label="' + a.note + ' em 5">' + "★★★★★".slice(0, a.note) + '<span style="color:#cfd5df">' + "★★★★★".slice(a.note) + "</span></div>" +
                "<p>« " + a.texte + " »</p>" +
                '<div class="auteur"><i>' + a.nom.charAt(0) + "</i><div><b>" + a.nom + "</b>" + a.service + "</div></div></div>";
        }).join("");
    }

    function remplir_selects() {
        $$("select[data-rendu=options-services]").forEach(function (sel) {
            sel.insertAdjacentHTML("beforeend", SERVICES.map(function (s) { return '<option value="' + s.id + '">' + s.nom + "</option>"; }).join(""));
            var s = param("s"); if (s) sel.value = s;
        });
    }

    /* ---------- Avant / après ---------- */
    function brancher_avant_apres() {
        $$(".ba").forEach(function (ba) {
            var avant = $(".avant", ba), barre = $(".barre", ba), curseur = $("input", ba);
            function regler(v) { avant.style.clipPath = "inset(0 " + (100 - v) + "% 0 0)"; barre.style.left = v + "%"; }
            curseur.addEventListener("input", function () { regler(curseur.value); });
            regler(50);
        });
    }

    /* ---------- Formulaires ---------- */
    function brancher_formulaires() {
        // Maquete : rien n'est envoyé, on affiche juste le message prévu.
        $$("form[data-maquete]").forEach(function (f) {
            f.addEventListener("submit", function (e) {
                e.preventDefault();
                var msg = $(".msg", f);
                if (msg) { msg.className = "msg ok"; msg.textContent = f.getAttribute("data-maquete"); }
                f.reset();
            });
        });

        // Demande de devis : ouvre WhatsApp avec le message déjà écrit.
        var devis = $("#form-devis");
        if (devis) devis.addEventListener("submit", function (e) {
            e.preventDefault();
            var s = service_par_id(devis.servico.value);
            var texte = "Olá AUTO PGP OFICINA, o meu nome é " + devis.nome.value.trim() + ".\n" +
                "Serviço: " + (s ? s.nom : "Outro") + "\nViatura: " + (devis.viatura.value.trim() || "-") +
                "\n" + devis.mensagem.value.trim();
            window.open(lien_wa(texte), "_blank", "noopener");
        });
    }

    /* ---------- Page Definições ---------- */
    function brancher_parametres() {
        $$("[data-taille]").forEach(function (b) {
            var courant = document.documentElement.style.fontSize || "16px";
            b.classList.toggle("on", b.getAttribute("data-taille") === courant);
            b.addEventListener("click", function () {
                var t = b.getAttribute("data-taille");
                document.documentElement.style.fontSize = t;
                try { localStorage.setItem("pgp_taille", t); } catch (e) {}
                $$("[data-taille]").forEach(function (x) { x.classList.toggle("on", x === b); });
            });
        });
    }

    /* ---------- Démarrage ---------- */
    injecter_site();
    brancher_tiroir();
    var rendus = {
        specialites: rendu_specialites,
        "grille-services": rendu_grille_services,
        service: rendu_service,
        medias: rendu_medias,
        articles: rendu_articles,
        article: rendu_article,
        avis: rendu_avis
    };
    $$("[data-rendu]").forEach(function (b) {
        var f = rendus[b.getAttribute("data-rendu")];
        if (f) f(b);
    });
    $$("[data-icone]").forEach(function (el) { el.insertAdjacentHTML("afterbegin", icone(el.getAttribute("data-icone"))); });
    $$("[data-tel]").forEach(function (a) { a.href = CONTACT.tel_lien; if (!a.textContent.trim()) a.textContent = CONTACT.tel_affiche; });
    $$("[data-wa]").forEach(function (a) { a.href = lien_wa(a.getAttribute("data-wa")); a.target = "_blank"; a.rel = "noopener"; });
    remplir_selects();
    brancher_avant_apres();
    brancher_formulaires();
    brancher_parametres();
})();
