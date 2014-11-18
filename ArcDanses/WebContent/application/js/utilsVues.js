// fc d'Olivier
// utilise par photo.html et document.html
function getURLParameter(sParam) {

	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for ( var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

// utilise par photo.html et document.html
function getActants(data) {
	
	var html = "";
	var actants = [];
	/* var contextActant = $("asmContext:has(metadata[semantictag='choix_actant'])", data);
	var actant = $("asmResource[xsi_type='Get_Double_Resource'] > label1[lang='fr']",contextActant).text().trim();
	if (actant != "") {													
		actants.push(actant);
	} */
	
	var contextsActantsAdditionnels = $("asmContext:has(metadata[semantictag='choix_actant'])", data);
	for ( var i = 0; i < contextsActantsAdditionnels.length; ++i) {
		var contextActant = contextsActantsAdditionnels[i];
		var actant = $("asmResource[xsi_type='Get_Double_Resource'] > label1[lang='fr']",contextActant).text().trim() + " - " + $("asmResource[xsi_type='Get_Double_Resource'] > label1[lang='fr']",contextActant).text().trim();
		if (actant != "") {
			actants.push(actant);
		}
	}

	if (actants.length > 0) {
		
		if (actants.length > 1) {
			html += "<h5>Actants</h5>";
		} else {
			html += "<h5>Actant</h5>";
		}
		
		html += "<ul class='sansBullet'>";
		
		for ( var i = 0; i < actants.length; ++i) {
			html += "<li>" + actants[i] + "</li>";
		}
		
		html += "</ul>";
	}
	
	return html;
}

/* // utilise par photo.html et document.html
function getAnecdote(data) {
	
	var html = "";
	var contextAnecdote = $("asmContext:has(metadata[semantictag='Contexte/Anecdote'])", data);
	var anecdote = $("asmResource[xsi_type='Field']",contextAnecdote).text().trim();
	if (anecdote != "") {	
		html += "<h5>Contexte/Anecdote</h5><p>" + anecdote + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getAuteurDocument(data) {
	
	var html = "";
	var contextAuteurDoc = $("asmContext:has(metadata[semantictag='CreateurD'])", data);
	var auteurDoc = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr']",contextAuteurDoc).text().trim();
	if (auteurDoc != "") {	
		html += "<h5>Auteur du document</h5><p>" + auteurDoc + "</p>";
	}

	return html;
} */

// utilise par photo.html et document.html
function getAuteursOeuvre(data) {
	
	var html = "";
	var auteursOeuvre = [];
	/* var contextAuteurOeuvre = $("asmContext:has(metadata[semantictag='CreateurO'])", data);
	var auteurOeuvre = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr']",contextAuteurOeuvre).text().trim();
	if (auteurOeuvre != "") {													
		auteursOeuvre.push(auteurOeuvre);
	} */
	
	var contextsAuteursAdditionnels = $("asmContext:has(metadata[semantictag='choix_contributeur'])", data);
	for ( var i = 0; i < contextsAuteursAdditionnels.length; ++i) {
		var contextAuteurOeuvre = contextsAuteursAdditionnels[i];
		var auteurOeuvre = $("asmResource[xsi_type='Get_Double_Resource'] > label1[lang='fr']",contextAuteurOeuvre).text().trim() + " - " + $("asmResource[xsi_type='Get_Double_Resource'] > label2[lang='fr']",contextAuteurOeuvre).text().trim();
		if (auteurOeuvre != "") {
			auteursOeuvre.push(auteurOeuvre);
		}
	}

	if (auteursOeuvre.length > 0) {
		
		if (auteursOeuvre.length > 1) {
			html += "<h5>Participants à la création</h5>";
		} else {
			html += "<h5>Participant à la création</h5>";
		}
		
		html += "<ul class='sansBullet'>";
		
		for ( var i = 0; i < auteursOeuvre.length; ++i) {
			html += "<li>" + auteursOeuvre[i] + "</li>";
		}
		
		html += "</ul>";
	}
	
	return html;
}

// utilise par photo.html et document.html
function getDateArchivage(data) {
	
	var html = "";
	var contextDateArchivage = $("asmContext:has(metadata[semantictag='date_archivage'])", data);
	var dateArchivage = $("asmResource[xsi_type='Calendar'] > text[lang='fr']",contextDateArchivage).text().trim();
	if (dateArchivage != "") {	
		html += "<h5>Date d'archivage</h5><p>" + formatDate(dateArchivage) + "</p>";		// voir methode interne ci-dessous
	}

	return html;
}

// utilise par photo.html et document.html
function getDateDocument(data) {
	
	var html = "";
	var contextDateDoc = $("asmContext:has(metadata[semantictag='date_document'])", data);
	var dateDoc = $("asmResource[xsi_type='Calendar'] > text[lang='fr']",contextDateDoc).text().trim();
	if (dateDoc != "") {	
		html += "<h5>Date du document</h5><p>" + formatDate(dateDoc) + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getDescription(data) {
	
	var html = "";
	var contextDescription = $("asmContext:has(metadata[semantictag='description'])", data);
	var description = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextDescription).text().trim();
	if (description != "") {	
		html += "<h5>Description</h5><p>" + description + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getDimensions(data) {
	
	var html = "";
	var contextDimensions = $("asmContext:has(metadata[semantictag='dimensions'])", data);
	var dimensions = $("asmResource[xsi_type='Field'] > text[lang='fr']",contextDimensions).text().trim();
	if (dimensions != "") {	
		html += "<h5>Dimensions</h5><p>" + dimensions + "</p>";
	}

	return html;
}

// *** PAS TESTE ***
// utilise par photo.html et document.html
function getDocumentsConnexes(data) {
	
	var html = "";
	var docsConnexes = [];
	/*var contextDocConnexe = $("asmContext:has(metadata[semantictag='documents_connexes'])", data);
	var docConnexe = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextDocConnexe).text().trim();
	if (docConnexe != "") {													
		docsConnexes.push(docConnexe);
	}*/
	
	var contextsDocsAdditionnels = $("asmContext:has(metadata[semantictag='documents_connexes'])", data);
	for ( var i = 0; i < contextsDocsAdditionnels.length; ++i) {
		var contextDocAdditionnel = contextsDocsAdditionnels[i];
		var docAdditionnel = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextDocAdditionnel).text().trim();
		if (docAdditionnel != "") {
			docsConnexes.push(docAdditionnel);
		}
	}

	if (docsConnexes.length > 0) {
		
		if (docsConnexes.length > 1) {
			html += "<h5>Documents connexes</h5>";
		} else {
			html += "<h5>Document connexe</h5>";
		}
		
		html += "<ul class='sansBullet'>";
		
		for ( var i = 0; i < docsConnexes.length; ++i) {
			html += "<li>" + docsConnexes[i] + "</li>";
		}
		
		html += "</ul>";
	}
	
	return html;
}

// *** PAS TESTE ***
// utilise par photo.html et document.html
function getDroits(data) {

var html = "";
var contextDroits = $("asmContext:has(metadata[semantictag='droits'])", data);
var droits = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextDroits).text().trim();
if (droits != "") {	
	html += "<h5>Droits</h5><p>" + droits + "</p>";
}

return html;
}

// utilise par photo.html et document.html
function getEtatConservation(data) {
	
	var html = "";
	var contextEtat = $("asmContext:has(metadata[semantictag='etat_conservation'])", data);
	var etat = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextEtat).text().trim();
	if (etat != "") {	
		html += "<h5>&Eacute;tat de conservation</h5><p>" + etat + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getContexte(data) {
	
	var html = "";
	var contextEvenement = $("asmContext:has(metadata[semantictag='contexte'])", data);
	var evenement = $("asmResource[xsi_type='TextField'] > text[lang='fr']",contextEvenement).text().trim();
	if (evenement != "") {	
		html += "<h5>Contexte</h5><p>" + evenement + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getLangues(data) {
	
	var html = "";
	var langues = [];
	/*var contextLangue = $("asmContext:has(metadata[semantictag='choix_langue'])", data);
	var langue = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr']",contextLangue).text().trim();
	if (langue != "") {													
		langues.push(langue);
	}*/
	
	var contextsLanguesAdditionnelles = $("asmContext:has(metadata[semantictag='choix_langue'])", data);
	for ( var i = 0; i < contextsLanguesAdditionnelles.length; ++i) {
		var contextLangue = contextsLanguesAdditionnelles[i];
		var langue = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr'] ",contextLangue).text().trim();
		if (langue != "") {
			langues.push(langue);
		}
	}

	if (langues.length > 0) {
		
		if (langues.length > 1) {
			html += "<h5>Langues</h5>";
		} else {
			html += "<h5>Langue</h5>";
		}
		
		html += "<ul class='sansBullet'>";
		
		for ( var i = 0; i < langues.length; ++i) {
			html += "<li>" + langues[i] + "</li>";
		}
		
		html += "</ul>";
	}
	
	return html;
}

// utilise par photo.html et document.html
function getLieu(data) {
	
	var html = "";
	var contextLieu = $("asmContext:has(metadata[semantictag='choix_lieu'])", data);
	var lieu = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr'] ",contextLieu).text().trim();
	if (lieu != "") {	
		html += "<h5>Lieu</h5><p>" + lieu + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getMotsCles(data) {
	
	var html = "";
	var contextMotsCles = $("asmContext:has(metadata[semantictag='choix_mot_cle'])", data);
	var motsCles = $("asmResource[xsi_type='nodeRes'] > text[lang='fr']",contextMotsCles).text().trim();
	if (motsCles != "") {	
		html += "<h5>Mots cl&eacute;s</h5><p>" + motsCles + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getNombrePages(data) {
	
	var html = "";
	var contextPages = $("asmContext:has(metadata[semantictag='nombre_pages'])", data);
	var pages = $("asmResource[xsi_type='Field'] > text[lang='fr']",contextPages).text().trim();
	if (pages != "") {	
		html += "<h5>Nombre de pages</h5><p>" + pages + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getSource(data) {
	
	var html = "";
	var contextSource = $("asmContext:has(metadata[semantictag='choix_source'])", data);
	var source = $("asmResource[xsi_type='Get_Resource'] > label[lang='fr']",contextSource).text().trim();
	if (source != "") {	
		html += "<h5>Source</h5><p>" + source + "</p>";
	}

	return html;
}

// utilise par photo.html et document.html
function getTitre(data) {
	
	var html = "";
	var titre = $("asmResource[xsi_type='nodeRes']:first > label[lang='fr']",data).text().trim();
	if (titre != "") {	
		html += "<h3 align='center'>" + titre + "</h3>";
	}

	return html;
}

// ---------------------------- fonctions internes ----------------------------

// utilise par getDateArchivage ci-dessus
function formatDate (date) {
	
	var annee = date.substring(0,4);
	var mois = getMoisAlphabetique(date.substring(5,7));
	var jour = date.substring(8,10);
	
	if (jour.substring(0,1) == "0") {
		jour = jour.substring(1,2);
	}

	return jour + " " + mois + " " + annee;
}

// utilise par formatDate ci-dessus
function getMoisAlphabetique (moisNumerique) {
	
	switch (parseInt(moisNumerique)) {
		case 1 : return "janvier";
		case 2 : return "f&eacute;vrier";
		case 3 : return "mars";
		case 4 : return "avril";
		case 5 : return "mai";
		case 6 : return "juin";
		case 7 : return "juillet";
		case 8 : return "ao&ucirc;t";
		case 9 : return "septembre";
		case 10 : return "octobre";
		case 11 : return "novembre";
		case 12 : return "d&eacute;cembre";
	}	
}
