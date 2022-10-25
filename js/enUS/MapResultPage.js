
// Search //

async function searchMapResult($formFilters, success, error) {
	var filters = searchMapResultFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchMapResultVals(filters, success, error);
}

function searchMapResultFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSimulationKey = $formFilters.find('.valueSimulationKey').val();
		if(filterSimulationKey != null && filterSimulationKey !== '')
			filters.push({ name: 'fq', value: 'simulationKey:' + filterSimulationKey });

		var filterSumocfgPath = $formFilters.find('.valueSumocfgPath').val();
		if(filterSumocfgPath != null && filterSumocfgPath !== '')
			filters.push({ name: 'fq', value: 'sumocfgPath:' + filterSumocfgPath });

		var filterTimeStepId = $formFilters.find('.valueTimeStepId').val();
		if(filterTimeStepId != null && filterTimeStepId !== '')
			filters.push({ name: 'fq', value: 'timeStepId:' + filterTimeStepId });

		var filterTime = $formFilters.find('.valueTime').val();
		if(filterTime != null && filterTime !== '')
			filters.push({ name: 'fq', value: 'time:' + filterTime });

		var $filterStepCheckbox = $formFilters.find('input.valueStep[type = "checkbox"]');
		var $filterStepSelect = $formFilters.find('select.valueStep');
		var filterStep = $filterStepSelect.length ? $filterStepSelect.val() : $filterStepCheckbox.prop('checked');
		var filterStepSelectVal = $formFilters.find('select.filterStep').val();
		var filterStep = null;
		if(filterStepSelectVal !== '')
			filterStep = filterStepSelectVal == 'true';
		if(filterStep != null && filterStep === true)
			filters.push({ name: 'fq', value: 'step:' + filterStep });

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

		var filterColor = $formFilters.find('.valueColor').val();
		if(filterColor != null && filterColor !== '')
			filters.push({ name: 'fq', value: 'color:' + filterColor });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });
	}
	return filters;
}

function searchMapResultVals(filters, success, error) {

	$.ajax({
		url: '/api/map-result?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMapResultObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-map-location-dot ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMapResultVals($formFilters, success, error);
}

// GET //

async function getMapResult() {
	$.ajax({
		url: '/api/map-result/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

async function websocketMapResult(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMapResult', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#MapResultForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-map-location-dot w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify map results in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-2017-shaded-spruce ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});
	}
}
async function websocketMapResultInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchMapResultVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputMapResult' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputMapResult' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputMapResult' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputMapResult' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputMapResult' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Deleted'));
			}
			var val = o['simulationName'];
			if(vars.includes('simulationName')) {
				$('.inputMapResult' + pk + 'SimulationName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'SimulationName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'SimulationName'));
			}
			var val = o['simulationKey'];
			if(vars.includes('simulationKey')) {
				$('.inputMapResult' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'SimulationKey'));
			}
			var val = o['sumocfgPath'];
			if(vars.includes('sumocfgPath')) {
				$('.inputMapResult' + pk + 'SumocfgPath').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'SumocfgPath').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'SumocfgPath'));
			}
			var val = o['timeStepId'];
			if(vars.includes('timeStepId')) {
				$('.inputMapResult' + pk + 'TimeStepId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'TimeStepId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'TimeStepId'));
			}
			var val = o['time'];
			if(vars.includes('time')) {
				$('.inputMapResult' + pk + 'Time').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Time').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Time'));
			}
			var val = o['step'];
			if(vars.includes('step')) {
				$('.inputMapResult' + pk + 'Step').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Step').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Step'));
			}
			var val = o['location'];
			if(vars.includes('location')) {
				$('.inputMapResult' + pk + 'Location').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Location').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Location'));
			}
			var val = o['color'];
			if(vars.includes('color')) {
				$('.inputMapResult' + pk + 'Color').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Color').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Color'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputMapResult' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputMapResult' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputMapResult' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputMapResult' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputMapResult' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputMapResult' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputMapResult' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputMapResult' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputMapResult' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputMapResult' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputMapResult' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputMapResult' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputMapResult' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputMapResult' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Id'));
			}
			var val = o['x'];
			if(vars.includes('x')) {
				$('.inputMapResult' + pk + 'X').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'X').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'X'));
			}
			var val = o['y'];
			if(vars.includes('y')) {
				$('.inputMapResult' + pk + 'Y').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMapResult' + pk + 'Y').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMapResult' + pk + 'Y'));
			}
		});
	}
}

function pageGraph(apiRequest) {
	var r = $('.pageForm .pageResponse').val();
	if(r) {
	var json = JSON.parse(r);
		if(json['facetCounts']) {
			var facetCounts = json.facetCounts;
			if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
				var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
				var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
				var rangeName;
				var rangeVar;
				var rangeVarFq;
				var rangeCounts;
				var rangeVals;
				if(range) {
					rangeName = range.name;
					rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
					rangeVarFq = window.varsFq[rangeVar];
					rangeCounts = range.counts;
					rangeVals = Object.keys(rangeCounts).map(key => key);
				}
				var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
				var pivot1VarIndexed = pivot1Name;
				if(pivot1VarIndexed.includes(','))
					pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
				var pivot1VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot1VarIndexed);
				var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
				var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
				var pivot1Vals = Object.keys(pivot1Map);
				var data = [];
				var layout = {};
				if(pivot1VarObj.classSimpleName === 'Point') {
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
					json.response.docs.forEach((record) => {
						var location = record.fields[pivot1VarIndexed];
						if(location) {
							var locationParts = location.split(',');
							text.push('pivot1Val');
							lat.push(parseFloat(locationParts[0]));
							lon.push(parseFloat(locationParts[1]));
							colors.push(record.fields[window.varsFq['color'].varIndexed]);
							var vals = {};
							var hovertemplate = '';
							Object.entries(window.varsFq).forEach(([key, data]) => {
								if(data.displayName) {
									vals[data.var] = record.fields[data.varStored];
									hovertemplate += '<b>' + data.displayName + ': %{customdata.' + data.var + '}</b><br>';
								}
								customdata.push(vals);
							});
							customdata.push(vals);
							trace['hovertemplate'] = hovertemplate;
						}
					});
					trace['marker'] = { color: colors, size: 10 };
					data.push(trace);
				} else if(range) {
					layout['title'] = 'MapResult';
					layout['xaxis'] = {
						title: rangeVarFq.displayName
					}
					if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap) {
						var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
						var pivot2VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot2VarIndexed);
						var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
						layout['yaxis'] = {
							title: pivot2VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'markers';
							trace['name'] = pivot1Val;
							trace['x'] = Object.keys(pivot1Counts).map(key => key);
							if(pivot2Map) {
								var xs = [];
								var ys = [];
								var pivot2Vals = Object.keys(pivot2Map);
								pivot2Vals.forEach((pivot2Val) => {
									var pivot2 = pivot2Map[pivot2Val];
									var pivot2Counts = pivot2.ranges[rangeName].counts;
									Object.entries(pivot2Counts).forEach(([key, count]) => {
										xs.push(key);
										ys.push(parseFloat(pivot2Val));
									});
								});
								trace['y'] = ys;
								trace['x'] = xs;
							} else {
									var pivot1 = pivot1Map[pivot1Val];
									var pivot1Counts = pivot1.ranges[rangeName].counts;
									trace['x'] = Object.keys(pivot1Counts).map(key => key);
									trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							}
							data.push(trace);
						});
					} else {
						layout['yaxis'] = {
							title: pivot1VarObj.displayName
						}
						var trace = {};
						trace['showlegend'] = true;
						trace['mode'] = 'lines+markers';
						trace['name'] = 'MapResult';
						var ys = [];
						trace['x'] = Object.keys(pivot1Counts).map(key => key);
						pivot1Vals.forEach((pivot1Val) => {
							ys.push(parseFloat(pivot1Val));
						});
						trace['y'] = ys;
						data.push(trace);
					}
				}
				Plotly.react('htmBodyGraphBaseResultPage', data, layout);
			}
		}
	}
}

function animateStats() {
	let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
	let xStep = parseFloat($('#animateStatsStep').val());
	let xMin = parseFloat($('#animateStatsMin').val());
	let xMax = parseFloat($('#animateStatsMax').val());
	let x = xMin;

	let animateInterval = window.setInterval(() => {
	x = x + xStep;
	if (x > xMax || x < 0) {
		clearInterval(animateInterval);
	}
	$('#fqMapResult_time').val(x);
	$('#fqMapResult_time').change();
	searchPage();
	}, speedRate);
}
