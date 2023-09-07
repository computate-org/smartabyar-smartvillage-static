
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

		var filterTime = $formFilters.find('.valueTime').val();
		if(filterTime != null && filterTime !== '')
			filters.push({ name: 'fq', value: 'time:' + filterTime });

		var filterDateTime = $formFilters.find('.valueDateTime').val();
		if(filterDateTime != null && filterDateTime !== '')
			filters.push({ name: 'fq', value: 'dateTime:' + filterDateTime });

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

		var filterTimeStepId = $formFilters.find('.valueTimeStepId').val();
		if(filterTimeStepId != null && filterTimeStepId !== '')
			filters.push({ name: 'fq', value: 'timeStepId:' + filterTimeStepId });
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

	if(pk != null && vars.length > 0) {
		var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
		var uri = location.pathname + queryParams;
		$.get(uri, {}, function(data) {
			var $response = $("<html/>").html(data);
				var inputCreated = null;
				var inputModified = null;
				var inputObjectId = null;
				var inputArchived = null;
				var inputDeleted = null;
				var inputTime = null;
				var inputDateTime = null;
				var inputStep = null;
				var inputLocation = null;
				var inputColor = null;
				var inputInheritPk = null;
				var inputClassCanonicalName = null;
				var inputClassSimpleName = null;
				var inputClassCanonicalNames = null;
				var inputSessionId = null;
				var inputUserKey = null;
				var inputSaves = null;
				var inputObjectTitle = null;
				var inputObjectSuggest = null;
				var inputObjectText = null;
				var inputPageUrlId = null;
				var inputPageUrlPk = null;
				var inputPageUrlApi = null;
				var inputId = null;
				var inputTimeStepId = null;
				var inputX = null;
				var inputY = null;

				if(vars.includes('created'))
				inputCreated = $response.find('.inputMapResult' + pk + 'Created');
				if(vars.includes('modified'))
				inputModified = $response.find('.inputMapResult' + pk + 'Modified');
				if(vars.includes('objectId'))
				inputObjectId = $response.find('.inputMapResult' + pk + 'ObjectId');
				if(vars.includes('archived'))
				inputArchived = $response.find('.inputMapResult' + pk + 'Archived');
				if(vars.includes('deleted'))
				inputDeleted = $response.find('.inputMapResult' + pk + 'Deleted');
				if(vars.includes('time'))
				inputTime = $response.find('.inputMapResult' + pk + 'Time');
				if(vars.includes('dateTime'))
				inputDateTime = $response.find('.inputMapResult' + pk + 'DateTime');
				if(vars.includes('step'))
				inputStep = $response.find('.inputMapResult' + pk + 'Step');
				if(vars.includes('location'))
				inputLocation = $response.find('.inputMapResult' + pk + 'Location');
				if(vars.includes('color'))
				inputColor = $response.find('.inputMapResult' + pk + 'Color');
				if(vars.includes('inheritPk'))
				inputInheritPk = $response.find('.inputMapResult' + pk + 'InheritPk');
				if(vars.includes('classCanonicalName'))
				inputClassCanonicalName = $response.find('.inputMapResult' + pk + 'ClassCanonicalName');
				if(vars.includes('classSimpleName'))
				inputClassSimpleName = $response.find('.inputMapResult' + pk + 'ClassSimpleName');
				if(vars.includes('classCanonicalNames'))
				inputClassCanonicalNames = $response.find('.inputMapResult' + pk + 'ClassCanonicalNames');
				if(vars.includes('sessionId'))
				inputSessionId = $response.find('.inputMapResult' + pk + 'SessionId');
				if(vars.includes('userKey'))
				inputUserKey = $response.find('.inputMapResult' + pk + 'UserKey');
				if(vars.includes('saves'))
				inputSaves = $response.find('.inputMapResult' + pk + 'Saves');
				if(vars.includes('objectTitle'))
				inputObjectTitle = $response.find('.inputMapResult' + pk + 'ObjectTitle');
				if(vars.includes('objectSuggest'))
				inputObjectSuggest = $response.find('.inputMapResult' + pk + 'ObjectSuggest');
				if(vars.includes('objectText'))
				inputObjectText = $response.find('.inputMapResult' + pk + 'ObjectText');
				if(vars.includes('pageUrlId'))
				inputPageUrlId = $response.find('.inputMapResult' + pk + 'PageUrlId');
				if(vars.includes('pageUrlPk'))
				inputPageUrlPk = $response.find('.inputMapResult' + pk + 'PageUrlPk');
				if(vars.includes('pageUrlApi'))
				inputPageUrlApi = $response.find('.inputMapResult' + pk + 'PageUrlApi');
				if(vars.includes('id'))
				inputId = $response.find('.inputMapResult' + pk + 'Id');
				if(vars.includes('timeStepId'))
				inputTimeStepId = $response.find('.inputMapResult' + pk + 'TimeStepId');
				if(vars.includes('x'))
				inputX = $response.find('.inputMapResult' + pk + 'X');
				if(vars.includes('y'))
				inputY = $response.find('.inputMapResult' + pk + 'Y');

				if(vars.includes('created')) {
					$('.inputMapResult' + pk + 'Created').each(function(index, fragment) {
						$(fragment).replaceWith(inputCreated);
					});
				}

				if(vars.includes('modified')) {
					$('.inputMapResult' + pk + 'Modified').each(function(index, fragment) {
						$(fragment).replaceWith(inputModified);
					});
				}

				if(vars.includes('objectId')) {
					$('.inputMapResult' + pk + 'ObjectId').each(function(index, fragment) {
						$(fragment).replaceWith(inputObjectId);
					});
				}

				if(vars.includes('archived')) {
					$('.inputMapResult' + pk + 'Archived').each(function(index, fragment) {
						$(fragment).replaceWith(inputArchived);
					});
				}

				if(vars.includes('deleted')) {
					$('.inputMapResult' + pk + 'Deleted').each(function(index, fragment) {
						$(fragment).replaceWith(inputDeleted);
					});
				}

				if(vars.includes('time')) {
					$('.inputMapResult' + pk + 'Time').each(function(index, fragment) {
						$(fragment).replaceWith(inputTime);
					});
				}

				if(vars.includes('dateTime')) {
					$('.inputMapResult' + pk + 'DateTime').each(function(index, fragment) {
						$(fragment).replaceWith(inputDateTime);
					});
				}

				if(vars.includes('step')) {
					$('.inputMapResult' + pk + 'Step').each(function(index, fragment) {
						$(fragment).replaceWith(inputStep);
					});
				}

				if(vars.includes('location')) {
					$('.inputMapResult' + pk + 'Location').each(function(index, fragment) {
						$(fragment).replaceWith(inputLocation);
					});
				}

				if(vars.includes('color')) {
					$('.inputMapResult' + pk + 'Color').each(function(index, fragment) {
						$(fragment).replaceWith(inputColor);
					});
				}

				if(vars.includes('inheritPk')) {
					$('.inputMapResult' + pk + 'InheritPk').each(function(index, fragment) {
						$(fragment).replaceWith(inputInheritPk);
					});
				}

				if(vars.includes('classCanonicalName')) {
					$('.inputMapResult' + pk + 'ClassCanonicalName').each(function(index, fragment) {
						$(fragment).replaceWith(inputClassCanonicalName);
					});
				}

				if(vars.includes('classSimpleName')) {
					$('.inputMapResult' + pk + 'ClassSimpleName').each(function(index, fragment) {
						$(fragment).replaceWith(inputClassSimpleName);
					});
				}

				if(vars.includes('classCanonicalNames')) {
					$('.inputMapResult' + pk + 'ClassCanonicalNames').each(function(index, fragment) {
						$(fragment).replaceWith(inputClassCanonicalNames);
					});
				}

				if(vars.includes('sessionId')) {
					$('.inputMapResult' + pk + 'SessionId').each(function(index, fragment) {
						$(fragment).replaceWith(inputSessionId);
					});
				}

				if(vars.includes('userKey')) {
					$('.inputMapResult' + pk + 'UserKey').each(function(index, fragment) {
						$(fragment).replaceWith(inputUserKey);
					});
				}

				if(vars.includes('saves')) {
					$('.inputMapResult' + pk + 'Saves').each(function(index, fragment) {
						$(fragment).replaceWith(inputSaves);
					});
				}

				if(vars.includes('objectTitle')) {
					$('.inputMapResult' + pk + 'ObjectTitle').each(function(index, fragment) {
						$(fragment).replaceWith(inputObjectTitle);
					});
				}

				if(vars.includes('objectSuggest')) {
					$('.inputMapResult' + pk + 'ObjectSuggest').each(function(index, fragment) {
						$(fragment).replaceWith(inputObjectSuggest);
					});
				}

				if(vars.includes('objectText')) {
					$('.inputMapResult' + pk + 'ObjectText').each(function(index, fragment) {
						$(fragment).replaceWith(inputObjectText);
					});
				}

				if(vars.includes('pageUrlId')) {
					$('.inputMapResult' + pk + 'PageUrlId').each(function(index, fragment) {
						$(fragment).replaceWith(inputPageUrlId);
					});
				}

				if(vars.includes('pageUrlPk')) {
					$('.inputMapResult' + pk + 'PageUrlPk').each(function(index, fragment) {
						$(fragment).replaceWith(inputPageUrlPk);
					});
				}

				if(vars.includes('pageUrlApi')) {
					$('.inputMapResult' + pk + 'PageUrlApi').each(function(index, fragment) {
						$(fragment).replaceWith(inputPageUrlApi);
					});
				}

				if(vars.includes('id')) {
					$('.inputMapResult' + pk + 'Id').each(function(index, fragment) {
						$(fragment).replaceWith(inputId);
					});
				}

				if(vars.includes('timeStepId')) {
					$('.inputMapResult' + pk + 'TimeStepId').each(function(index, fragment) {
						$(fragment).replaceWith(inputTimeStepId);
					});
				}

				if(vars.includes('x')) {
					$('.inputMapResult' + pk + 'X').each(function(index, fragment) {
						$(fragment).replaceWith(inputX);
					});
				}

				if(vars.includes('y')) {
					$('.inputMapResult' + pk + 'Y').each(function(index, fragment) {
						$(fragment).replaceWith(inputY);
					});
				}
		});
	}
}

function pageGraphMapResult(apiRequest) {
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
					layout['title'] = 'map results';
					layout['xaxis'] = {
						title: rangeVarFq.displayName
					}
					if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
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
							trace['mode'] = 'lines+markers';
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
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
								trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							}
							data.push(trace);
						});
					} else {
						layout['yaxis'] = {
							title: pivot1VarObj.displayName
						}
						pivot1Vals.forEach((pivot1Val) => {
							var pivot1 = pivot1Map[pivot1Val];
							var pivot1Counts = pivot1.ranges[rangeName].counts;
							var pivot2Map = pivot1.pivotMap;
							var trace = {};
							var facetField;
							trace['showlegend'] = true;
							trace['mode'] = 'lines+markers';
							trace['name'] = pivot1Val;
							if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
								trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
							} else {
								trace['x'] = Object.keys(pivot1Counts).map(key => key);
							}
							trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
							data.push(trace);
						});
					}
				}
				Plotly.react('htmBodyGraphBaseResultPage', data, layout);
			}
		}
	}
}

function animateStats() {
	$('#pageSearchVal-fqMapResult_time').text('');
	searchPage('MapResult', function() {
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
			searchPage('MapResult');
		}, speedRate);
	});
}
