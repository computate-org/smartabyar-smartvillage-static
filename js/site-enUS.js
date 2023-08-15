
//////////
// site //
//////////

$(window).on('load', function() {
    $(document).click(function(e) {
            var $target = $(e.target);
            if ($target.is($target.closest('.w3-modal'))) {
                    $target.hide();
            }
    });

	$('.datetimepicker').datePicker({
		weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
		, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		, closeOnSelect: false
		, readValue: function(element) {
			var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (!element.value) {
				var d = new Date();
				var s = moment(d).format('YYYY-MM-DD h:mm a'); 
				return s; // initial time if empty
			}
			var timeZone = element.value.split('[').pop().split(']')[0];
			var t1 = moment(element.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
			var t2 = moment.tz(element.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
			var t3 = new Date(t1._d); t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
			var m = moment(t3);
			var s = m.format('YYYY-MM-DD h:mm a');
			return s; // triggers default behavior
		}
		, renderValue: function(container, element, value) {
			var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			element.value = moment(value, 'YYYY-MM-DD h:mm a').format('MM/DD/YYYY h:mm A') + ' [' + userTimeZone + ']';
			$(element).change();
		}
		, header:
			'<div class="w3-small ">Press [ Tab ] to close</div>' +
			'<div class="dp-title">' +
				'<button class="dp-prev" type="button"{{disable-prev}}>{{prev}}</button>' +
				'<button class="dp-next" type="button"{{disable-next}}>{{next}}</button>' +
				'<div class="dp-label dp-label-month">{{month}}' +
					'<select class="dp-select dp-select-month" tabindex="-1">' +
						'{{months}}' +
					'</select>' +
				'</div>' +
				'<div class="dp-label dp-label-year">{{year}}' +
					'<select class="dp-select dp-select-year" tabindex="-1">' +
						'{{years}}' +
					'</select>' +
				'</div>' +
			'</div>'
		, footer:
			'<div class="dp-footer">' +
				'<div class="dp-label">{{hour}}' +
					'<select class="dp-select dp-select-hour" tabindex="-1">' +
						'{{hours}}' +
					'</select>' +
				'</div>' +
				'<div class="dp-label">{{minute}}' +
					'<select class="dp-select dp-select-minute" tabindex="-1">' +
						'{{minutes}}' +
					'</select>' +
				'</div>' +
				'<div class="dp-label">{{second}}' +
					'<select class="dp-select dp-select-second" tabindex="-1">' +
						'{{seconds}}' +
					'</select>' +
				'</div>' +
				'<div class="dp-label">{{am-pm}} [' + Intl.DateTimeFormat().resolvedOptions().timeZone + ']' +
					'<select class="dp-select dp-select-am-pm" tabindex="-1">' +
						'{{am-pms}}' +
					'</select>' +
				'</div>' +
			'</div>'
	});
	$('.datepicker').datePicker({
		weekDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
		, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		, timeFormat: 'HH:MM AM'
		, readValue: function(element) {
			if (!element.value) {
				var d = new Date();
				var s = moment(d).format('YYYY-MM-DD'); 
				return s; // initial time if empty
			}
			var result = moment(element.value, 'MM/DD/YYYY').format('YYYY-MM-DD');
			return result; // triggers default behavior
		}
		, renderValue: function(container, element, value) {
			element.value = moment(value, 'YYYY-MM-DD').format('MM/DD/YYYY');
			$(element).change();
		}
	});
	$('.timepicker').datePicker({
		timeFormat: "HH:mm a"
		, readValue: function(element) {
			if (!element.value) {
				return moment().format('h:mm a'); // initial time if empty
			}
			return element.value; // triggers default behavior
		}
	});
});

function paramChange(classSimpleName, elem) {
	var $elem = $(elem);
	if($elem.val())
		$elem.next().text($elem.attr('data-var') + "=" + encodeURIComponent($elem.val()));
	else
		$elem.next().text("");
	searchPage(classSimpleName);
}

function qChange(classSimpleName, elem) {
	var $elem = $(elem);
	if($elem.val())
		$elem.next().text("q=" + $elem.attr('data-var') + ":" + encodeURIComponent($elem.val()));
	else
		$elem.next().text("");
	searchPage(classSimpleName);
}

function fqChange(classSimpleName, elem) {
	var $elem = $(elem);
	if($elem.val())
		$("#pageSearchVal-" + $(elem).attr("id")).text("fq=" + $elem.attr('data-var') + ":" + encodeURIComponent($elem.val()));
	else
		$("#pageSearchVal-" + $(elem).attr("id")).text("");
	searchPage(classSimpleName);
}

function fqReplace(classSimpleName, elem) {
	var $fq = $('#fq' + elem.getAttribute('data-class') + '_' + elem.getAttribute('data-var'));
	$fq.val(elem.getAttribute('data-val'));
	fqChange(classSimpleName, $fq[0]);
}

function facetFieldChange(classSimpleName, elem) {
	var $elem = $(elem);
	if($elem.attr("data-clear") === "false") {
		$("#pageSearchVal-" + $(elem).attr("id")).text("facet.field=" + $elem.attr('data-var'));
		$elem.attr("data-clear", "true");
	} else {
		$("#pageSearchVal-" + $(elem).attr("id")).text("");
		$elem.attr("data-clear", "false");
	}
	searchPage(classSimpleName);
}

function facetRangeChange(classSimpleName, elem) {
	facetRangeVal = $("input[name='pageFacetRange']:checked").val();
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		$("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).text("facet.range.gap=" + encodeURIComponent($("#pageFacetRangeGap-" + classSimpleName).val()));
	} else {
		$("#pageSearchVal-pageFacetRangeGap-" + classSimpleName).text("");
	}
	searchPage(classSimpleName);
}

function facetRangeStartChange(classSimpleName, elem, classSimpleName) {
	facetRangeVal = $("input[name='pageFacetRange']:checked").val();
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		$("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).text("facet.range.start=" + encodeURIComponent($("#pageFacetRangeStart-" + classSimpleName).val() + ":00.000[" + timeZone + "]"));
	} else {
		$("#pageSearchVal-pageFacetRangeStart-" + classSimpleName).text("");
	}
	searchPage(classSimpleName);
}

function facetRangeEndChange(classSimpleName, elem, classSimpleName) {
	facetRangeVal = $("input[name='pageFacetRange']:checked").val();
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		$("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).text("facet.range.end=" + encodeURIComponent($("#pageFacetRangeEnd-" + classSimpleName).val() + ":00.000[" + timeZone + "]"));
	} else {
		$("#pageSearchVal-pageFacetRangeEnd-" + classSimpleName).text("");
	}
	searchPage(classSimpleName);
}

function facetRangeChange(classSimpleName, elem, classSimpleName) {
	facetRangeVal = $("input[name='pageFacetRange']:checked").val();
	if(facetRangeVal) {
		var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		$("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).text("facet.range={!tag=r1}" + encodeURIComponent(facetRangeVal));
	} else {
		$("#pageSearchVal-pageFacetRangeVar-" + classSimpleName).text("");
	}
	searchPage(classSimpleName);
}

function facetPivotChange(classSimpleName, elem) {
	var $elem = $(elem);
	var $listHidden = $("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
	if($elem.is(":checked")) {
		$listHidden.append($("<div>")
				.attr("id", "pageSearchVal-Pivot" + classSimpleName + "Hidden_" + $elem.val())
				.attr("class", "pageSearchVal-Pivot" + classSimpleName + "Hidden ")
				.text($elem.val())
				)
				;
	} else {
		$("#pageSearchVal-Pivot" + classSimpleName + "Hidden_" + $elem.val()).remove();
	}
	$("#pageSearchVal-Pivot" + classSimpleName + "_1").remove();
	var $list = $("#pageSearchVal-Pivot" + classSimpleName);
	var $listHidden = $("#pageSearchVal-Pivot" + classSimpleName + "Hidden");
	if($listHidden.children().length > 0) {
		var pivotVal = '';
		$listHidden.children().each(function(index, pivotElem) {
			if(pivotVal)
				pivotVal += ",";
			pivotVal += pivotElem.innerText;
		});
		$list.append($("<div>")
				.attr("id", "pageSearchVal-Pivot" + classSimpleName + "_1")
				.attr("class", "pageSearchVal pageSearchVal-Pivot" + classSimpleName + " ")
				.text("facet.pivot={!range=r1}" + pivotVal)
				)
				;
	}
	searchPage(classSimpleName);
}

function facetFieldListChange(classSimpleName, elem) {
	var $elem = $(elem);
	var $listHidden = $("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
	if($elem.is(":checked")) {
		$listHidden.append($("<div>")
				.attr("id", "pageSearchVal-FieldList" + classSimpleName + "Hidden_" + $elem.val())
				.attr("class", "pageSearchVal-FieldList" + classSimpleName + "Hidden ")
				.text($elem.val())
				)
				;
	} else {
		$("#pageSearchVal-FieldList" + classSimpleName + "Hidden_" + $elem.val()).remove();
	}
	$("#pageSearchVal-FieldList" + classSimpleName + "_1").remove();
	var $list = $("#pageSearchVal-FieldList" + classSimpleName);
	var $listHidden = $("#pageSearchVal-FieldList" + classSimpleName + "Hidden");
	if($listHidden.children().length > 0) {
		$list.append($("<div>")
				.attr("id", "pageSearchVal-FieldList" + classSimpleName + "_1")
				.attr("class", "pageSearchVal pageSearchVal-FieldList" + classSimpleName + " ")
				.text("fl=" + $listHidden.children().toArray().map(elem => elem.innerText).join(","))
				)
				;
	}
	searchPage(classSimpleName);
}

function facetStatsChange(classSimpleName, elem) {
	var $elem = $(elem);
	var $list = $("#pageSearchVal-Stats" + classSimpleName);
	if($elem.is(":checked")) {
		$list.append($("<div>")
				.attr("id", "pageSearchVal-Stats" + classSimpleName + "_" + $elem.val())
				.attr("class", "pageSearchVal pageSearchVal-Stats" + classSimpleName + "_" + $elem.val() + " ")
				.text("stats.field=" + $elem.val())
				)
				;
	} else {
		$("#pageSearchVal-Stats" + classSimpleName + "_" + $elem.val()).remove();
	}
	searchPage(classSimpleName);
}

function searchPage(classSimpleName, success, error) {
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};
	var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
	var uri = location.pathname + queryParams;
	$.get(uri, {}, function(data) {
		var $response = $("<html/>").html(data);
		$('.pageFacetField').each(function(index, facetField) {
			var $facetField = $(facetField);
			$facetField.replaceWith($response.find("." + $facetField.attr("id")));
		});
		$('.pageStatsField').each(function(index, statsField) {
			var $statsField = $(statsField);
			$statsField.replaceWith($response.find("." + $statsField.attr("id")));
		});
		$(".pageContent").replaceWith($response.find(".pageContent"));
		window['pageGraph' + classSimpleName](classSimpleName)
		success(data);
	}, 'html');
	window.history.replaceState('', '', uri);
}

function searchEscapeQueryChars(s) {
	var sb = "";
	for (let i = 0; i < s.length; i++) {
		var c = s[i];
		// These characters are part of the query syntax and must be escaped
		if (c == '\\' || c == '+' || c == '-' || c == '!' || c == '(' || c == ')' || c == ':' || c == '^'
				|| c == '[' || c == ']' || c == '\"' || c == '{' || c == '}' || c == '~' || c == '*' || c == '?'
				|| c == '|' || c == '&' || c == ';' || c == '/' || /\s/.test(c)) {
			sb += '\\';
		}
		sb += c;
	}
	return sb;
}

///////////
// other //
///////////

$(document).keypress(function(e) {
    if (e.keyCode == 27) {
            $('.w3-modal').filter(':visible').hide();
    }
});

function addGlow($input) {
    $input.addClass('glowSuccess');
    $input.removeClass('glowError');
}

function removeGlow($input) {
    $input.removeClass('glowSuccess');
    $input.removeClass('glowError');
}

function addError($input) {
    $input.removeClass('glowSuccess');
    $input.addClass('glowError');
}

function ajouterRemplacer($input) {
    var idListe = $input.attr('data-id'); 
            $liste = null; 
    if(idListe != null) {
    }
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    $.ajax({
            url: $form.attr('action')
            , type: 'GET'
            , timeout: 10000
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var key in json) {
                            if (data.hasOwnProperty(key)) {
                                    var str = data[key];
                                    $elem = $('#' + idListe); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }
                    $icone.removeClass('w3-spin-fast');
            } 
            , error: function()  { 
                    $icone.removeClass('w3-spin-fast');
            } 
    }); 
    return false; 
}

function search($input) {
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    window.location.href = $form.attr('action') + '?q=' + encodeURIComponent($input.attr('name') + ':' + encodeURIComponent($input.val()));
    return false; 
}

function suggere($input) {
    var idListe = $input.attr('data-id'); 
            $liste = null; 
    if(idListe != null) {
            $liste = $('#' + idListe); 
    }
    $form = $input.closest('form');
    $icone = $input.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.show();
    $.ajax({
            url: $form.attr('action')
            , type: 'GET'
            , timeout: 5000
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var id in json) {
                            if (json.hasOwnProperty(id)) {
                                    var str = json[id];
                                    $elem = $('#' + id); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }
//                  if($liste != null) {
//                          $liste.replaceWith(responseText); 
//                  }
                    $icone.removeClass('w3-spin-fast');
            } 
            , error: function()  { 
                    $icone.removeClass('w3-spin-fast');
            } 
    }); 
    return false; 
}

function envoyerFormulaire($inputEnfant, $lueur) {
    $form = $inputEnfant.closest('form');
    $icone = $form.prev('i');
    $icone.addClass('w3-spin-fast');
    $icone.removeClass('w3-hide');
    $.ajax({
            url: $form.attr('action')
            , type: 'POST'
            , contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
            , data: $form.serialize()
            , success: function(json, statusText, xhr, $form) { 
                    for (var id in json) {
                            if (json.hasOwnProperty(id)) {
                                    var str = json[id];
                                    $elem = $('#' + id); 
                                    if($elem != null) {
                                            $elem.replaceWith(str); 
                                    }
                            }
                    }

//                  var idParent = $inputEnfant.attr('data-idParent'); 
//                  if(idParent != null) {
//                          $inputParent = $('#' + idParent); 
//                          if(idParent != null) {
//                                  $inputEnfant.prop('checked', $inputEnfant.prop('checked')); 
//                                  envoyerFormulaire($inputParent, $lueur); 
//                          }
//                  }
//                  else if($lueur != null)
                            $lueur.addClass('glowSuccess');
                            $icone.removeClass('w3-spin-fast');
                            $icone.addClass('w3-hide');
            } 
            , error: function()  { 
                    $lueur.addClass('glowError');
                    document.getElementById('modalError').style.display='block'; 
                    $icone.removeClass('w3-spin-fast');
                    $icone.addClass('w3-hide');
            } 
    }); 
    return false; 
}

//Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction(s) {
    var x = document.getElementById(s);
    if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
    } else {
            x.className = x.className.replace(" w3-show", "");
    }
}

function patchSiteUserBase($formFilters, $formValues) {
    var filters = [];

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
            filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
            filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterUserId = $formFilters.find('.valueUserId').val();
    if(filterUserId != null && filterUserId !== '')
            filters.push({ name: 'fq', value: 'userId:' + filterUserId });

    var filterSeeArchived = $formFilters.find('.valueSeeArchived').prop('checked');
    if(filterSeeArchived != null && filterSeeArchived === true)
            filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

    var filterSeeDeleted = $formFilters.find('.valueSeeDeleted').prop('checked');
    if(filterSeeDeleted != null && filterSeeDeleted === true)
            filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
            filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
            filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterArchived = $formFilters.find('.valueArchived').prop('checked');
    if(filterArchived != null && filterArchived === true)
            filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterDeleted = $formFilters.find('.valueDeleted').prop('checked');
    if(filterDeleted != null && filterDeleted === true)
            filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
            filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
            filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
            filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterUserName = $formFilters.find('.valueUserName').val();
    if(filterUserName != null && filterUserName !== '')
            filters.push({ name: 'fq', value: 'userName:' + filterUserName });

    var filterUserEmail = $formFilters.find('.valueUserEmail').val();
    if(filterUserEmail != null && filterUserEmail !== '')
            filters.push({ name: 'fq', value: 'userEmail:' + filterUserEmail });

    var filterUserFirstName = $formFilters.find('.valueUserFirstName').val();
    if(filterUserFirstName != null && filterUserFirstName !== '')
            filters.push({ name: 'fq', value: 'userFirstName:' + filterUserFirstName });

    var filterUserLastName = $formFilters.find('.valueUserLastName').val();
    if(filterUserLastName != null && filterUserLastName !== '')
            filters.push({ name: 'fq', value: 'userLastName:' + filterUserLastName });

    var filterUserFullName = $formFilters.find('.valueUserFullName').val();
    if(filterUserFullName != null && filterUserFullName !== '')
            filters.push({ name: 'fq', value: 'userFullName:' + filterUserFullName });

    var filterUserSite = $formFilters.find('.valueUserSite').val();
    if(filterUserSite != null && filterUserSite !== '')
            filters.push({ name: 'fq', value: 'userSite:' + filterUserSite });

    var filterUserReceiveEmails = $formFilters.find('.valueUserReceiveEmails').prop('checked');
    if(filterUserReceiveEmails != null && filterUserReceiveEmails === true)
            filters.push({ name: 'fq', value: 'userReceiveEmails:' + filterUserReceiveEmails });

    var values = {};

    var setCreated = $formValues.find('.setCreated').val();
    if(setCreated != null && setCreated !== '')
            values['setCreated'] = setCreated;
    var addCreated = $formValues.find('.addCreated').val();
    if(addCreated != null && addCreated !== '')
            values['addCreated'] = addCreated;
    var removeCreated = $formValues.find('.removeCreated').val();
    if(removeCreated != null && removeCreated !== '')
            values['removeCreated'] = removeCreated;

    var setModified = $formValues.find('.setModified').val();
    if(setModified != null && setModified !== '')
            values['setModified'] = setModified;
    var addModified = $formValues.find('.addModified').val();
    if(addModified != null && addModified !== '')
            values['addModified'] = addModified;
    var removeModified = $formValues.find('.removeModified').val();
    if(removeModified != null && removeModified !== '')
            values['removeModified'] = removeModified;

    var setUserId = $formValues.find('.setUserId').val();
    if(setUserId != null && setUserId !== '')
            values['setUserId'] = setUserId;
    var addUserId = $formValues.find('.addUserId').val();
    if(addUserId != null && addUserId !== '')
            values['addUserId'] = addUserId;
    var removeUserId = $formValues.find('.removeUserId').val();
    if(removeUserId != null && removeUserId !== '')
            values['removeUserId'] = removeUserId;

    var setSeeArchived = $formValues.find('.setSeeArchived').prop('checked');
    if(setSeeArchived != null && setSeeArchived !== '')
            values['setSeeArchived'] = setSeeArchived;
    var addSeeArchived = $formValues.find('.addSeeArchived').prop('checked');
    if(addSeeArchived != null && addSeeArchived !== '')
            values['addSeeArchived'] = addSeeArchived;
    var removeSeeArchived = $formValues.find('.removeSeeArchived').prop('checked');
    if(removeSeeArchived != null && removeSeeArchived !== '')
            values['removeSeeArchived'] = removeSeeArchived;

    var setSeeDeleted = $formValues.find('.setSeeDeleted').prop('checked');
    if(setSeeDeleted != null && setSeeDeleted !== '')
            values['setSeeDeleted'] = setSeeDeleted;
    var addSeeDeleted = $formValues.find('.addSeeDeleted').prop('checked');
    if(addSeeDeleted != null && addSeeDeleted !== '')
            values['addSeeDeleted'] = addSeeDeleted;
    var removeSeeDeleted = $formValues.find('.removeSeeDeleted').prop('checked');
    if(removeSeeDeleted != null && removeSeeDeleted !== '')
            values['removeSeeDeleted'] = removeSeeDeleted;

    $.ajax({
            url: '/enUS/api/user?' + $.param(filters)
            , dataType: 'json'
            , type: 'PATCH'
            , contentType: 'application/json; charset=utf-8'
            , data: JSON.stringify(values)
            , success: function( data, textStatus, jQxhr ) {
                    $.each( values, function( key, value ) {
                            $formValues.find('.' + key).removeClass('glowError');
                            $formValues.find('.' + key).addClass('glowSuccess');
                    });
            }
            , error: function( jqXhr, textStatus, errorThrown ) {
                    $.each( values, function( key, value ) {
                            $formValues.find('.' + key).removeClass('glowSuccess');
                            $formValues.find('.' + key).addClass('glowError');
                    });
            }
    });
}

function patchClusterBase($formulaireFiltres, $formulaireValeurs) {
    var filtres = [];

    var filtreCree = $formulaireFiltres.find('.valeurCree').val();
    if(filtreCree != null && filtreCree !== '')
            filtres.push({ name: 'fq', value: 'cree:' + filtreCree });

    var filtreModifie = $formulaireFiltres.find('.valeurModifie').val();
    if(filtreModifie != null && filtreModifie !== '')
            filtres.push({ name: 'fq', value: 'modifie:' + filtreModifie });

    var filtrePk = $formulaireFiltres.find('.valeurPk').val();
    if(filtrePk != null && filtrePk !== '')
            filtres.push({ name: 'fq', value: 'pk:' + filtrePk });

    var filtreId = $formulaireFiltres.find('.valeurId').val();
    if(filtreId != null && filtreId !== '')
            filtres.push({ name: 'fq', value: 'id:' + filtreId });

    var filtreArchive = $formulaireFiltres.find('.valeurArchive').prop('checked');
    if(filtreArchive != null && filtreArchive === true)
            filtres.push({ name: 'fq', value: 'archive:' + filtreArchive });

    var filtreSupprime = $formulaireFiltres.find('.valeurSupprime').prop('checked');
    if(filtreSupprime != null && filtreSupprime === true)
            filtres.push({ name: 'fq', value: 'supprime:' + filtreSupprime });

    var filtreClasseNomCanonique = $formulaireFiltres.find('.valeurClasseNomCanonique').val();
    if(filtreClasseNomCanonique != null && filtreClasseNomCanonique !== '')
            filtres.push({ name: 'fq', value: 'classeNomCanonique:' + filtreClasseNomCanonique });

    var filtreClasseNomSimple = $formulaireFiltres.find('.valeurClasseNomSimple').val();
    if(filtreClasseNomSimple != null && filtreClasseNomSimple !== '')
            filtres.push({ name: 'fq', value: 'classeNomSimple:' + filtreClasseNomSimple });

    var filtreClasseNomsCanoniques = $formulaireFiltres.find('.valeurClasseNomsCanoniques').val();
    if(filtreClasseNomsCanoniques != null && filtreClasseNomsCanoniques !== '')
            filtres.push({ name: 'fq', value: 'classeNomsCanoniques:' + filtreClasseNomsCanoniques });

    var valeurs = {};

    var setCree = $formulaireValeurs.find('.setCree').val();
    if(setCree != null && setCree !== '')
            valeurs['setCree'] = setCree;
    var addCree = $formulaireValeurs.find('.addCree').val();
    if(addCree != null && addCree !== '')
            valeurs['addCree'] = addCree;
    var removeCree = $formulaireValeurs.find('.removeCree').val();
    if(removeCree != null && removeCree !== '')
            valeurs['removeCree'] = removeCree;

    var setModifie = $formulaireValeurs.find('.setModifie').val();
    if(setModifie != null && setModifie !== '')
            valeurs['setModifie'] = setModifie;
    var addModifie = $formulaireValeurs.find('.addModifie').val();
    if(addModifie != null && addModifie !== '')
            valeurs['addModifie'] = addModifie;
    var removeModifie = $formulaireValeurs.find('.removeModifie').val();
    if(removeModifie != null && removeModifie !== '')
            valeurs['removeModifie'] = removeModifie;

    $.ajax({
            url: '/frFR/api/cluster?' + $.param(filtres)
            , dataType: 'json'
            , type: 'PATCH'
            , contentType: 'application/json; charset=utf-8'
            , data: JSON.stringify(valeurs)
            , success: function( data, textStatus, jQxhr ) {
                    $.each( valeurs, function( key, value ) {
                            $formulaireValeurs.find('.' + key).removeClass('lueurErreur');
                            $formulaireValeurs.find('.' + key).addClass('lueurSucces');
                    });
            }
            , error: function( jqXhr, textStatus, errorThrown ) {
                    $.each( valeurs, function( key, value ) {
                            $formulaireValeurs.find('.' + key).removeClass('lueurSucces');
                            $formulaireValeurs.find('.' + key).addClass('lueurErreur');
                    });
            }
    });
}

/*
jQuery deparam is an extraction of the deparam method from Ben Alman's jQuery BBQ
http://benalman.com/projects/jquery-bbq-plugin/
*/
(function ($) {
$.deparam = function (params, coerce) {
var obj = [],
  coerce_types = { 'true': !0, 'false': !1, 'null': null };

// Iterate over all name=value pairs.
$.each(params.replace(/\+/g, ' ').split('&'), function (j,v) {
var param = v.split('='),
    key = decodeURIComponent(param[0]),
    val,
    cur = obj,
    i = 0,
      
    // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
    // into its component parts.
    keys = key.split(']['),
    keys_last = keys.length - 1;
  
// Basic 'foo' style key.
keys_last = 0;

// Are we dealing with a name=value pair, or just a name?
if (param.length === 2) {
  val = decodeURIComponent(param[1]);
    
  // Coerce values.
  if (coerce) {
    val = val && !isNaN(val)              ? +val              // number
        : val === 'undefined'             ? undefined         // undefined
        : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
        : val;                                                // string
  }

  // Simple key, even simpler rules, since only scalars and shallow
  // arrays are allowed.

  // val is a scalar.
  obj.push({name: key, 'value': val});
} else if (key) {
  // No value was defined, so set something meaningful.
  obj.push({name: key, value: (coerce ? undefined : '')});
}
});

return obj;
};
})(jQuery);

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

function pageGraphTrafficFlowObserved2(apiRequest) {
	var data = [];
	var layout = {};
	layout['showlegend'] = true;
	layout['dragmode'] = 'zoom';
	layout['uirevision'] = 'true';
	if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
		layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] }, zoom: window['DEFAULT_MAP_ZOOM'] };
	else if(window['DEFAULT_MAP_ZOOM'])
		layout['mapbox'] = { style: 'open-street-map', zoom: window['DEFAULT_MAP_ZOOM'] };
	else if(window['DEFAULT_MAP_LOCATION'])
		layout['mapbox'] = { style: 'open-street-map', center: { lat: window['DEFAULT_MAP_LOCATION']['lat'], lon: window['DEFAULT_MAP_LOCATION']['lon'] } };
	else
		layout['mapbox'] = { style: 'open-street-map' };
	layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
	var trace = {};
	trace['showlegend'] = true;
	trace['type'] = 'scattermapbox';
	var colors = [];
	var lat = [];
	var lon = [];
	var text = [];
	var customdata = [];
	trace['lat'] = lat;
	trace['lon'] = lon;
	trace['text'] = text;
	trace['customdata'] = customdata;
	trace['marker'] = { color: colors, size: 10 };

	data.push({
		type: 'scattermapbox'
		, lat: [55.63271352675811, 55.6328803799553, 55.63307851322209, 55.633165023015664]
		, lon: [13.491925461716146, 13.491959719458668, 13.492001830794774, 13.49203583929166]
		, mode: 'lines'
		, line:{
			width: 2,
			color: 'red'
		}
	});

	data.push({
		type: 'scattermapbox'
		, lat: [55.63326306524109, 55.63330503030353, 55.633425750604616, 55.63359752341646]
		, lon: [13.492094186839967, 13.49212323459849, 13.49224266648859, 13.49241399185663]
		, mode: 'lines'
		, line:{
			width: 2,
			color: 'red'
		}
	});

	data.push({
		type: 'scattermapbox'
		, lat: [55.633599977927105, 55.63370944475262, 55.63372646415785]
		, lon: [13.492416280489497, 13.492519465989837, 13.492544230047926]
		, mode: 'lines'
		, line:{
			width: 2,
			color: 'red'
		}
	});
//
//	data.push({
//		type: 'scattermapbox'
//		, lat: [55.63384939609901, 55.633875165438056, 55.634140281266916]
//		, lon: [13.492697416863956, 13.492724863479838, 13.492952500168899]
//		, mode: 'lines'
//		, line:{
//			width: 2,
//			color: 'green'
//		}
//	});
//
//	data.push({
//		type: 'scattermapbox'
//		, lat: [55.63414273186631, 55.63472632914901, 55.63509159275175]
//		, lon: [13.492954471292927, 13.49341596662811, 13.493668683273997]
//		, mode: 'lines'
//		, line:{
//			width: 2,
//			color: 'blue'
//		}
//	});
//
//	data.push({
//		type: 'scattermapbox'
//		, lat: [55.63388689055707, 55.63383866352221, 55.63381227119676, 55.633800109877335, 55.63378863975465, 55.63377785887736, 55.633767859019244, 55.63370621199576, 55.63371215221394, 55.63371287672952, 55.633712074241565, 55.63370965492635, 55.633705796480186, 55.63376534098908, 55.6337834129885, 55.63379312370555, 55.63380313322735, 55.633813623152065, 55.633824501703515, 55.633885178409066, 55.63387923039151, 55.63387876754385, 55.63387983169902, 55.63388250877847]
//		, lon: [13.492611304455265, 13.492752794694571, 13.49273315616578, 13.492730763615159, 13.492733428057525, 13.492740990703231, 13.492753606885252, 13.492629362383209, 13.492615472331352, 13.49260861353063, 13.492601813364129, 13.492595075281741, 13.492588233600983, 13.492460924160683, 13.492476275049242, 13.492476696442864, 13.49247218169007, 13.492462882673642, 13.492448644053335, 13.492574355652383, 13.492587610628993, 13.492593823968758, 13.492599978673477, 13.4926057537232]
//		, mode: 'lines'
//		, line:{
//			width: 2,
//			color: 'purple'
//		}
//	});

	Plotly.react('htmBodyGraphMapResultPage2', data, layout);
}
