
// Search //

async function searchSimulationReport($formFilters, success, error) {
	var filters = searchSimulationReportFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSimulationReportVals(filters, success, error);
}

function searchSimulationReportFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterReportName = $formFilters.find('.valueReportName').val();
		if(filterReportName != null && filterReportName !== '')
			filters.push({ name: 'fq', value: 'reportName:' + filterReportName });

		var filterSimulationKey = $formFilters.find('.valueSimulationKey').val();
		if(filterSimulationKey != null && filterSimulationKey !== '')
			filters.push({ name: 'fq', value: 'simulationKey:' + filterSimulationKey });

		var filterSmartTrafficLightKey = $formFilters.find('.valueSmartTrafficLightKey').val();
		if(filterSmartTrafficLightKey != null && filterSmartTrafficLightKey !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightKey:' + filterSmartTrafficLightKey });

		var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
		if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

		var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
		if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

		var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
		if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

		var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
		if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

		var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
		if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

		var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
		if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

		var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
		if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

		var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
		if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

		var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
		if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

		var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
		if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

		var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
		if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

		var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
		if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

		var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
		if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

		var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
		if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

		var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
		if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

		var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
		if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

		var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
		if(filterParamStepSize != null && filterParamStepSize !== '')
			filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

		var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
		if(filterParamRunTime != null && filterParamRunTime !== '')
			filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

		var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
		if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
			filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

		var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
		if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
			filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterUpdatedPerformanceWaitWestEastVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
		if(filterUpdatedPerformanceWaitWestEastVehicleSec != null && filterUpdatedPerformanceWaitWestEastVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitWestEastVehicleSec:' + filterUpdatedPerformanceWaitWestEastVehicleSec });

		var filterUpdatedPerformanceWaitSouthNorthVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
		if(filterUpdatedPerformanceWaitSouthNorthVehicleSec != null && filterUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitSouthNorthVehicleSec:' + filterUpdatedPerformanceWaitSouthNorthVehicleSec });

		var filterUpdatedPerformanceWaitAllVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
		if(filterUpdatedPerformanceWaitAllVehicleSec != null && filterUpdatedPerformanceWaitAllVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehicleSec:' + filterUpdatedPerformanceWaitAllVehicleSec });

		var filterUpdatedPerformanceWaitAllPedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllPedestrianSec != null && filterUpdatedPerformanceWaitAllPedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllPedestrianSec:' + filterUpdatedPerformanceWaitAllPedestrianSec });

		var filterUpdatedPerformanceWaitAllVehiclePedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllVehiclePedestrianSec != null && filterUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehiclePedestrianSec:' + filterUpdatedPerformanceWaitAllVehiclePedestrianSec });

		var filterAvgQueueLengthWestEastVehicle = $formFilters.find('.valueAvgQueueLengthWestEastVehicle').val();
		if(filterAvgQueueLengthWestEastVehicle != null && filterAvgQueueLengthWestEastVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastVehicle:' + filterAvgQueueLengthWestEastVehicle });

		var filterAvgQueueLengthSouthNorthVehicle = $formFilters.find('.valueAvgQueueLengthSouthNorthVehicle').val();
		if(filterAvgQueueLengthSouthNorthVehicle != null && filterAvgQueueLengthSouthNorthVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthSouthNorthVehicle:' + filterAvgQueueLengthSouthNorthVehicle });

		var filterAvgQueueLengthNorthSouthPedestrian = $formFilters.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
		if(filterAvgQueueLengthNorthSouthPedestrian != null && filterAvgQueueLengthNorthSouthPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthNorthSouthPedestrian:' + filterAvgQueueLengthNorthSouthPedestrian });

		var filterAvgQueueLengthWestEastPedestrian = $formFilters.find('.valueAvgQueueLengthWestEastPedestrian').val();
		if(filterAvgQueueLengthWestEastPedestrian != null && filterAvgQueueLengthWestEastPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastPedestrian:' + filterAvgQueueLengthWestEastPedestrian });

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

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
		if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

		var filterParamLam = $formFilters.find('.valueParamLam').val();
		if(filterParamLam != null && filterParamLam !== '')
			filters.push({ name: 'fq', value: 'paramLam:' + filterParamLam });

		var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
		if(filterParamDemandScale != null && filterParamDemandScale !== '')
			filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });

		var filterParamInitialPar = $formFilters.find('.valueParamInitialPar').val();
		if(filterParamInitialPar != null && filterParamInitialPar !== '')
			filters.push({ name: 'fq', value: 'paramInitialPar:' + filterParamInitialPar });

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });
	}
	return filters;
}

function searchSimulationReportVals(filters, success, error) {


	$.ajax({
		url: '/api/simulation-report?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSimulationReportObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-file-chart-column ');
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
	searchSimulationReportVals($formFilters, success, error);
}

function suggestSimulationReportSimulationKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-traffic-light-stop ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['reportKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_simulationKey_' + pk + '_reportKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSimulationKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_simulationKey_" + pk + "_reportKeys_" + o['pk'] + "'); patchSimulationReportVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SimulationKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(relate)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SimulationReportForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchTrafficSimulationVals(filters, success, error);
}

function suggestSimulationReportSmartTrafficLightKey(filters, $list, pk = null, relate=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-traffic-light-stop ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['reportKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_smartTrafficLightKey_' + pk + '_reportKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueSmartTrafficLightKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_smartTrafficLightKey_" + pk + "_reportKeys_" + o['pk'] + "'); patchSimulationReportVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'SmartTrafficLightKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(relate)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SimulationReportForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSmartTrafficLightVals(filters, success, error);
}

// GET //

async function getSimulationReport(pk) {
	$.ajax({
		url: '/api/simulation-report/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSimulationReport($formFilters, $formValues, pk, success, error) {
	var filters = patchSimulationReportFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueReportName = $formValues.find('.valueReportName').val();
	var removeReportName = $formValues.find('.removeReportName').val() === 'true';
	var setReportName = removeReportName ? null : $formValues.find('.setReportName').val();
	var addReportName = $formValues.find('.addReportName').val();
	if(removeReportName || setReportName != null && setReportName !== '')
		vals['setReportName'] = setReportName;
	if(addReportName != null && addReportName !== '')
		vals['addReportName'] = addReportName;
	var removeReportName = $formValues.find('.removeReportName').val();
	if(removeReportName != null && removeReportName !== '')
		vals['removeReportName'] = removeReportName;

	var valueSimulationKey = $formValues.find('input.valueSimulationKey:checked').val();
	if(valueSimulationKey != null && valueSimulationKey !== '')
		vals['setSimulationKey'] = valueSimulationKey;

	var valueSmartTrafficLightKey = $formValues.find('input.valueSmartTrafficLightKey:checked').val();
	if(valueSmartTrafficLightKey != null && valueSmartTrafficLightKey !== '')
		vals['setSmartTrafficLightKey'] = valueSmartTrafficLightKey;

	var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val() === 'true';
	var setParamAvgVehiclePerMinFromWestToEast = removeParamAvgVehiclePerMinFromWestToEast ? null : $formValues.find('.setParamAvgVehiclePerMinFromWestToEast').val();
	var addParamAvgVehiclePerMinFromWestToEast = $formValues.find('.addParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast || setParamAvgVehiclePerMinFromWestToEast != null && setParamAvgVehiclePerMinFromWestToEast !== '')
		vals['setParamAvgVehiclePerMinFromWestToEast'] = setParamAvgVehiclePerMinFromWestToEast;
	if(addParamAvgVehiclePerMinFromWestToEast != null && addParamAvgVehiclePerMinFromWestToEast !== '')
		vals['addParamAvgVehiclePerMinFromWestToEast'] = addParamAvgVehiclePerMinFromWestToEast;
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast != null && removeParamAvgVehiclePerMinFromWestToEast !== '')
		vals['removeParamAvgVehiclePerMinFromWestToEast'] = removeParamAvgVehiclePerMinFromWestToEast;

	var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val() === 'true';
	var setParamAvgVehiclePerMinFromSouthToNorth = removeParamAvgVehiclePerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgVehiclePerMinFromSouthToNorth').val();
	var addParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.addParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth || setParamAvgVehiclePerMinFromSouthToNorth != null && setParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['setParamAvgVehiclePerMinFromSouthToNorth'] = setParamAvgVehiclePerMinFromSouthToNorth;
	if(addParamAvgVehiclePerMinFromSouthToNorth != null && addParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['addParamAvgVehiclePerMinFromSouthToNorth'] = addParamAvgVehiclePerMinFromSouthToNorth;
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth != null && removeParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['removeParamAvgVehiclePerMinFromSouthToNorth'] = removeParamAvgVehiclePerMinFromSouthToNorth;

	var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val() === 'true';
	var setParamVehicleDemandScalingFactor = removeParamVehicleDemandScalingFactor ? null : $formValues.find('.setParamVehicleDemandScalingFactor').val();
	var addParamVehicleDemandScalingFactor = $formValues.find('.addParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor || setParamVehicleDemandScalingFactor != null && setParamVehicleDemandScalingFactor !== '')
		vals['setParamVehicleDemandScalingFactor'] = setParamVehicleDemandScalingFactor;
	if(addParamVehicleDemandScalingFactor != null && addParamVehicleDemandScalingFactor !== '')
		vals['addParamVehicleDemandScalingFactor'] = addParamVehicleDemandScalingFactor;
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor != null && removeParamVehicleDemandScalingFactor !== '')
		vals['removeParamVehicleDemandScalingFactor'] = removeParamVehicleDemandScalingFactor;

	var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val() === 'true';
	var setParamAvgPedestrianPerMinFromWestToEast = removeParamAvgPedestrianPerMinFromWestToEast ? null : $formValues.find('.setParamAvgPedestrianPerMinFromWestToEast').val();
	var addParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.addParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast || setParamAvgPedestrianPerMinFromWestToEast != null && setParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['setParamAvgPedestrianPerMinFromWestToEast'] = setParamAvgPedestrianPerMinFromWestToEast;
	if(addParamAvgPedestrianPerMinFromWestToEast != null && addParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['addParamAvgPedestrianPerMinFromWestToEast'] = addParamAvgPedestrianPerMinFromWestToEast;
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast != null && removeParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['removeParamAvgPedestrianPerMinFromWestToEast'] = removeParamAvgPedestrianPerMinFromWestToEast;

	var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val() === 'true';
	var setParamAvgPedestrianPerMinFromSouthToNorth = removeParamAvgPedestrianPerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgPedestrianPerMinFromSouthToNorth').val();
	var addParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.addParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth || setParamAvgPedestrianPerMinFromSouthToNorth != null && setParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['setParamAvgPedestrianPerMinFromSouthToNorth'] = setParamAvgPedestrianPerMinFromSouthToNorth;
	if(addParamAvgPedestrianPerMinFromSouthToNorth != null && addParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['addParamAvgPedestrianPerMinFromSouthToNorth'] = addParamAvgPedestrianPerMinFromSouthToNorth;
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth != null && removeParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['removeParamAvgPedestrianPerMinFromSouthToNorth'] = removeParamAvgPedestrianPerMinFromSouthToNorth;

	var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val() === 'true';
	var setParamPedestrianDemandScalingFactor = removeParamPedestrianDemandScalingFactor ? null : $formValues.find('.setParamPedestrianDemandScalingFactor').val();
	var addParamPedestrianDemandScalingFactor = $formValues.find('.addParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor || setParamPedestrianDemandScalingFactor != null && setParamPedestrianDemandScalingFactor !== '')
		vals['setParamPedestrianDemandScalingFactor'] = setParamPedestrianDemandScalingFactor;
	if(addParamPedestrianDemandScalingFactor != null && addParamPedestrianDemandScalingFactor !== '')
		vals['addParamPedestrianDemandScalingFactor'] = addParamPedestrianDemandScalingFactor;
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor != null && removeParamPedestrianDemandScalingFactor !== '')
		vals['removeParamPedestrianDemandScalingFactor'] = removeParamPedestrianDemandScalingFactor;

	var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val() === 'true';
	var setParamMinGreenTimeSecWestEast = removeParamMinGreenTimeSecWestEast ? null : $formValues.find('.setParamMinGreenTimeSecWestEast').val();
	var addParamMinGreenTimeSecWestEast = $formValues.find('.addParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast || setParamMinGreenTimeSecWestEast != null && setParamMinGreenTimeSecWestEast !== '')
		vals['setParamMinGreenTimeSecWestEast'] = setParamMinGreenTimeSecWestEast;
	if(addParamMinGreenTimeSecWestEast != null && addParamMinGreenTimeSecWestEast !== '')
		vals['addParamMinGreenTimeSecWestEast'] = addParamMinGreenTimeSecWestEast;
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast != null && removeParamMinGreenTimeSecWestEast !== '')
		vals['removeParamMinGreenTimeSecWestEast'] = removeParamMinGreenTimeSecWestEast;

	var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val() === 'true';
	var setParamMaxGreenTimeSecWestEast = removeParamMaxGreenTimeSecWestEast ? null : $formValues.find('.setParamMaxGreenTimeSecWestEast').val();
	var addParamMaxGreenTimeSecWestEast = $formValues.find('.addParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast || setParamMaxGreenTimeSecWestEast != null && setParamMaxGreenTimeSecWestEast !== '')
		vals['setParamMaxGreenTimeSecWestEast'] = setParamMaxGreenTimeSecWestEast;
	if(addParamMaxGreenTimeSecWestEast != null && addParamMaxGreenTimeSecWestEast !== '')
		vals['addParamMaxGreenTimeSecWestEast'] = addParamMaxGreenTimeSecWestEast;
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast != null && removeParamMaxGreenTimeSecWestEast !== '')
		vals['removeParamMaxGreenTimeSecWestEast'] = removeParamMaxGreenTimeSecWestEast;

	var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val() === 'true';
	var setParamMinGreenTimeSecSouthNorth = removeParamMinGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMinGreenTimeSecSouthNorth').val();
	var addParamMinGreenTimeSecSouthNorth = $formValues.find('.addParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth || setParamMinGreenTimeSecSouthNorth != null && setParamMinGreenTimeSecSouthNorth !== '')
		vals['setParamMinGreenTimeSecSouthNorth'] = setParamMinGreenTimeSecSouthNorth;
	if(addParamMinGreenTimeSecSouthNorth != null && addParamMinGreenTimeSecSouthNorth !== '')
		vals['addParamMinGreenTimeSecSouthNorth'] = addParamMinGreenTimeSecSouthNorth;
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth != null && removeParamMinGreenTimeSecSouthNorth !== '')
		vals['removeParamMinGreenTimeSecSouthNorth'] = removeParamMinGreenTimeSecSouthNorth;

	var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val() === 'true';
	var setParamMaxGreenTimeSecSouthNorth = removeParamMaxGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMaxGreenTimeSecSouthNorth').val();
	var addParamMaxGreenTimeSecSouthNorth = $formValues.find('.addParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth || setParamMaxGreenTimeSecSouthNorth != null && setParamMaxGreenTimeSecSouthNorth !== '')
		vals['setParamMaxGreenTimeSecSouthNorth'] = setParamMaxGreenTimeSecSouthNorth;
	if(addParamMaxGreenTimeSecSouthNorth != null && addParamMaxGreenTimeSecSouthNorth !== '')
		vals['addParamMaxGreenTimeSecSouthNorth'] = addParamMaxGreenTimeSecSouthNorth;
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth != null && removeParamMaxGreenTimeSecSouthNorth !== '')
		vals['removeParamMaxGreenTimeSecSouthNorth'] = removeParamMaxGreenTimeSecSouthNorth;

	var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val() === 'true';
	var setParamPedestrianWaitThresholdSecNorthSouth = removeParamPedestrianWaitThresholdSecNorthSouth ? null : $formValues.find('.setParamPedestrianWaitThresholdSecNorthSouth').val();
	var addParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.addParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth || setParamPedestrianWaitThresholdSecNorthSouth != null && setParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['setParamPedestrianWaitThresholdSecNorthSouth'] = setParamPedestrianWaitThresholdSecNorthSouth;
	if(addParamPedestrianWaitThresholdSecNorthSouth != null && addParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['addParamPedestrianWaitThresholdSecNorthSouth'] = addParamPedestrianWaitThresholdSecNorthSouth;
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth != null && removeParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['removeParamPedestrianWaitThresholdSecNorthSouth'] = removeParamPedestrianWaitThresholdSecNorthSouth;

	var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val() === 'true';
	var setParamPedestrianWaitThresholdSecWestEast = removeParamPedestrianWaitThresholdSecWestEast ? null : $formValues.find('.setParamPedestrianWaitThresholdSecWestEast').val();
	var addParamPedestrianWaitThresholdSecWestEast = $formValues.find('.addParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast || setParamPedestrianWaitThresholdSecWestEast != null && setParamPedestrianWaitThresholdSecWestEast !== '')
		vals['setParamPedestrianWaitThresholdSecWestEast'] = setParamPedestrianWaitThresholdSecWestEast;
	if(addParamPedestrianWaitThresholdSecWestEast != null && addParamPedestrianWaitThresholdSecWestEast !== '')
		vals['addParamPedestrianWaitThresholdSecWestEast'] = addParamPedestrianWaitThresholdSecWestEast;
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast != null && removeParamPedestrianWaitThresholdSecWestEast !== '')
		vals['removeParamPedestrianWaitThresholdSecWestEast'] = removeParamPedestrianWaitThresholdSecWestEast;

	var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val() === 'true';
	var setParamVehicleQueueThresholdWestEast = removeParamVehicleQueueThresholdWestEast ? null : $formValues.find('.setParamVehicleQueueThresholdWestEast').val();
	var addParamVehicleQueueThresholdWestEast = $formValues.find('.addParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast || setParamVehicleQueueThresholdWestEast != null && setParamVehicleQueueThresholdWestEast !== '')
		vals['setParamVehicleQueueThresholdWestEast'] = setParamVehicleQueueThresholdWestEast;
	if(addParamVehicleQueueThresholdWestEast != null && addParamVehicleQueueThresholdWestEast !== '')
		vals['addParamVehicleQueueThresholdWestEast'] = addParamVehicleQueueThresholdWestEast;
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast != null && removeParamVehicleQueueThresholdWestEast !== '')
		vals['removeParamVehicleQueueThresholdWestEast'] = removeParamVehicleQueueThresholdWestEast;

	var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val() === 'true';
	var setParamVehicleQueueThresholdSouthNorth = removeParamVehicleQueueThresholdSouthNorth ? null : $formValues.find('.setParamVehicleQueueThresholdSouthNorth').val();
	var addParamVehicleQueueThresholdSouthNorth = $formValues.find('.addParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth || setParamVehicleQueueThresholdSouthNorth != null && setParamVehicleQueueThresholdSouthNorth !== '')
		vals['setParamVehicleQueueThresholdSouthNorth'] = setParamVehicleQueueThresholdSouthNorth;
	if(addParamVehicleQueueThresholdSouthNorth != null && addParamVehicleQueueThresholdSouthNorth !== '')
		vals['addParamVehicleQueueThresholdSouthNorth'] = addParamVehicleQueueThresholdSouthNorth;
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth != null && removeParamVehicleQueueThresholdSouthNorth !== '')
		vals['removeParamVehicleQueueThresholdSouthNorth'] = removeParamVehicleQueueThresholdSouthNorth;

	var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val() === 'true';
	var setParamPedestrianQueueThresholdNorthSouth = removeParamPedestrianQueueThresholdNorthSouth ? null : $formValues.find('.setParamPedestrianQueueThresholdNorthSouth').val();
	var addParamPedestrianQueueThresholdNorthSouth = $formValues.find('.addParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth || setParamPedestrianQueueThresholdNorthSouth != null && setParamPedestrianQueueThresholdNorthSouth !== '')
		vals['setParamPedestrianQueueThresholdNorthSouth'] = setParamPedestrianQueueThresholdNorthSouth;
	if(addParamPedestrianQueueThresholdNorthSouth != null && addParamPedestrianQueueThresholdNorthSouth !== '')
		vals['addParamPedestrianQueueThresholdNorthSouth'] = addParamPedestrianQueueThresholdNorthSouth;
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth != null && removeParamPedestrianQueueThresholdNorthSouth !== '')
		vals['removeParamPedestrianQueueThresholdNorthSouth'] = removeParamPedestrianQueueThresholdNorthSouth;

	var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val() === 'true';
	var setParamPedestrianQueueThresholdWestEast = removeParamPedestrianQueueThresholdWestEast ? null : $formValues.find('.setParamPedestrianQueueThresholdWestEast').val();
	var addParamPedestrianQueueThresholdWestEast = $formValues.find('.addParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast || setParamPedestrianQueueThresholdWestEast != null && setParamPedestrianQueueThresholdWestEast !== '')
		vals['setParamPedestrianQueueThresholdWestEast'] = setParamPedestrianQueueThresholdWestEast;
	if(addParamPedestrianQueueThresholdWestEast != null && addParamPedestrianQueueThresholdWestEast !== '')
		vals['addParamPedestrianQueueThresholdWestEast'] = addParamPedestrianQueueThresholdWestEast;
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast != null && removeParamPedestrianQueueThresholdWestEast !== '')
		vals['removeParamPedestrianQueueThresholdWestEast'] = removeParamPedestrianQueueThresholdWestEast;

	var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val() === 'true';
	var setParamStepSize = removeParamStepSize ? null : $formValues.find('.setParamStepSize').val();
	var addParamStepSize = $formValues.find('.addParamStepSize').val();
	if(removeParamStepSize || setParamStepSize != null && setParamStepSize !== '')
		vals['setParamStepSize'] = setParamStepSize;
	if(addParamStepSize != null && addParamStepSize !== '')
		vals['addParamStepSize'] = addParamStepSize;
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val();
	if(removeParamStepSize != null && removeParamStepSize !== '')
		vals['removeParamStepSize'] = removeParamStepSize;

	var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val() === 'true';
	var setParamRunTime = removeParamRunTime ? null : $formValues.find('.setParamRunTime').val();
	var addParamRunTime = $formValues.find('.addParamRunTime').val();
	if(removeParamRunTime || setParamRunTime != null && setParamRunTime !== '')
		vals['setParamRunTime'] = setParamRunTime;
	if(addParamRunTime != null && addParamRunTime !== '')
		vals['addParamRunTime'] = addParamRunTime;
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val();
	if(removeParamRunTime != null && removeParamRunTime !== '')
		vals['removeParamRunTime'] = removeParamRunTime;

	var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val() === 'true';
	var setParamItersPerPar = removeParamItersPerPar ? null : $formValues.find('.setParamItersPerPar').val();
	var addParamItersPerPar = $formValues.find('.addParamItersPerPar').val();
	if(removeParamItersPerPar || setParamItersPerPar != null && setParamItersPerPar !== '')
		vals['setParamItersPerPar'] = setParamItersPerPar;
	if(addParamItersPerPar != null && addParamItersPerPar !== '')
		vals['addParamItersPerPar'] = addParamItersPerPar;
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val();
	if(removeParamItersPerPar != null && removeParamItersPerPar !== '')
		vals['removeParamItersPerPar'] = removeParamItersPerPar;

	var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val() === 'true';
	var setParamTotalIterNum = removeParamTotalIterNum ? null : $formValues.find('.setParamTotalIterNum').val();
	var addParamTotalIterNum = $formValues.find('.addParamTotalIterNum').val();
	if(removeParamTotalIterNum || setParamTotalIterNum != null && setParamTotalIterNum !== '')
		vals['setParamTotalIterNum'] = setParamTotalIterNum;
	if(addParamTotalIterNum != null && addParamTotalIterNum !== '')
		vals['addParamTotalIterNum'] = addParamTotalIterNum;
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val();
	if(removeParamTotalIterNum != null && removeParamTotalIterNum !== '')
		vals['removeParamTotalIterNum'] = removeParamTotalIterNum;

	var valueReportStatus = $formValues.find('.valueReportStatus').val();
	var removeReportStatus = $formValues.find('.removeReportStatus').val() === 'true';
	var setReportStatus = removeReportStatus ? null : $formValues.find('.setReportStatus').val();
	var addReportStatus = $formValues.find('.addReportStatus').val();
	if(removeReportStatus || setReportStatus != null && setReportStatus !== '')
		vals['setReportStatus'] = setReportStatus;
	if(addReportStatus != null && addReportStatus !== '')
		vals['addReportStatus'] = addReportStatus;
	var removeReportStatus = $formValues.find('.removeReportStatus').val();
	if(removeReportStatus != null && removeReportStatus !== '')
		vals['removeReportStatus'] = removeReportStatus;

	var valueReportProgress = $formValues.find('.valueReportProgress').val();
	var removeReportProgress = $formValues.find('.removeReportProgress').val() === 'true';
	var setReportProgress = removeReportProgress ? null : $formValues.find('.setReportProgress').val();
	var addReportProgress = $formValues.find('.addReportProgress').val();
	if(removeReportProgress || setReportProgress != null && setReportProgress !== '')
		vals['setReportProgress'] = setReportProgress;
	if(addReportProgress != null && addReportProgress !== '')
		vals['addReportProgress'] = addReportProgress;
	var removeReportProgress = $formValues.find('.removeReportProgress').val();
	if(removeReportProgress != null && removeReportProgress !== '')
		vals['removeReportProgress'] = removeReportProgress;

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val() === 'true';
	var setUpdatedParameters = removeUpdatedParameters ? null : $formValues.find('.setUpdatedParameters').val();
	var addUpdatedParameters = $formValues.find('.addUpdatedParameters').val();
	if(removeUpdatedParameters || setUpdatedParameters != null && setUpdatedParameters !== '')
		vals['setUpdatedParameters'] = setUpdatedParameters;
	if(addUpdatedParameters != null && addUpdatedParameters !== '')
		vals['addUpdatedParameters'] = addUpdatedParameters;
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val();
	if(removeUpdatedParameters != null && removeUpdatedParameters !== '')
		vals['removeUpdatedParameters'] = removeUpdatedParameters;

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitWestEastVehicleSec = removeUpdatedPerformanceWaitWestEastVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitWestEastVehicleSec').val();
	var addUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.addUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec || setUpdatedPerformanceWaitWestEastVehicleSec != null && setUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['setUpdatedPerformanceWaitWestEastVehicleSec'] = setUpdatedPerformanceWaitWestEastVehicleSec;
	if(addUpdatedPerformanceWaitWestEastVehicleSec != null && addUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['addUpdatedPerformanceWaitWestEastVehicleSec'] = addUpdatedPerformanceWaitWestEastVehicleSec;
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec != null && removeUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitWestEastVehicleSec'] = removeUpdatedPerformanceWaitWestEastVehicleSec;

	var valueUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	var removeUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitSouthNorthVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitSouthNorthVehicleSec = removeUpdatedPerformanceWaitSouthNorthVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	var addUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.addUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(removeUpdatedPerformanceWaitSouthNorthVehicleSec || setUpdatedPerformanceWaitSouthNorthVehicleSec != null && setUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['setUpdatedPerformanceWaitSouthNorthVehicleSec'] = setUpdatedPerformanceWaitSouthNorthVehicleSec;
	if(addUpdatedPerformanceWaitSouthNorthVehicleSec != null && addUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['addUpdatedPerformanceWaitSouthNorthVehicleSec'] = addUpdatedPerformanceWaitSouthNorthVehicleSec;
	var removeUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(removeUpdatedPerformanceWaitSouthNorthVehicleSec != null && removeUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitSouthNorthVehicleSec'] = removeUpdatedPerformanceWaitSouthNorthVehicleSec;

	var valueUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
	var removeUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitAllVehicleSec = removeUpdatedPerformanceWaitAllVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllVehicleSec').val();
	var addUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.addUpdatedPerformanceWaitAllVehicleSec').val();
	if(removeUpdatedPerformanceWaitAllVehicleSec || setUpdatedPerformanceWaitAllVehicleSec != null && setUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['setUpdatedPerformanceWaitAllVehicleSec'] = setUpdatedPerformanceWaitAllVehicleSec;
	if(addUpdatedPerformanceWaitAllVehicleSec != null && addUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['addUpdatedPerformanceWaitAllVehicleSec'] = addUpdatedPerformanceWaitAllVehicleSec;
	var removeUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehicleSec').val();
	if(removeUpdatedPerformanceWaitAllVehicleSec != null && removeUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitAllVehicleSec'] = removeUpdatedPerformanceWaitAllVehicleSec;

	var valueUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
	var removeUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllPedestrianSec').val() === 'true';
	var setUpdatedPerformanceWaitAllPedestrianSec = removeUpdatedPerformanceWaitAllPedestrianSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllPedestrianSec').val();
	var addUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.addUpdatedPerformanceWaitAllPedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllPedestrianSec || setUpdatedPerformanceWaitAllPedestrianSec != null && setUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['setUpdatedPerformanceWaitAllPedestrianSec'] = setUpdatedPerformanceWaitAllPedestrianSec;
	if(addUpdatedPerformanceWaitAllPedestrianSec != null && addUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['addUpdatedPerformanceWaitAllPedestrianSec'] = addUpdatedPerformanceWaitAllPedestrianSec;
	var removeUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllPedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllPedestrianSec != null && removeUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['removeUpdatedPerformanceWaitAllPedestrianSec'] = removeUpdatedPerformanceWaitAllPedestrianSec;

	var valueUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	var removeUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehiclePedestrianSec').val() === 'true';
	var setUpdatedPerformanceWaitAllVehiclePedestrianSec = removeUpdatedPerformanceWaitAllVehiclePedestrianSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	var addUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.addUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllVehiclePedestrianSec || setUpdatedPerformanceWaitAllVehiclePedestrianSec != null && setUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['setUpdatedPerformanceWaitAllVehiclePedestrianSec'] = setUpdatedPerformanceWaitAllVehiclePedestrianSec;
	if(addUpdatedPerformanceWaitAllVehiclePedestrianSec != null && addUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['addUpdatedPerformanceWaitAllVehiclePedestrianSec'] = addUpdatedPerformanceWaitAllVehiclePedestrianSec;
	var removeUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllVehiclePedestrianSec != null && removeUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['removeUpdatedPerformanceWaitAllVehiclePedestrianSec'] = removeUpdatedPerformanceWaitAllVehiclePedestrianSec;

	var valueAvgQueueLengthWestEastVehicle = $formValues.find('.valueAvgQueueLengthWestEastVehicle').val();
	var removeAvgQueueLengthWestEastVehicle = $formValues.find('.removeAvgQueueLengthWestEastVehicle').val() === 'true';
	var setAvgQueueLengthWestEastVehicle = removeAvgQueueLengthWestEastVehicle ? null : $formValues.find('.setAvgQueueLengthWestEastVehicle').val();
	var addAvgQueueLengthWestEastVehicle = $formValues.find('.addAvgQueueLengthWestEastVehicle').val();
	if(removeAvgQueueLengthWestEastVehicle || setAvgQueueLengthWestEastVehicle != null && setAvgQueueLengthWestEastVehicle !== '')
		vals['setAvgQueueLengthWestEastVehicle'] = setAvgQueueLengthWestEastVehicle;
	if(addAvgQueueLengthWestEastVehicle != null && addAvgQueueLengthWestEastVehicle !== '')
		vals['addAvgQueueLengthWestEastVehicle'] = addAvgQueueLengthWestEastVehicle;
	var removeAvgQueueLengthWestEastVehicle = $formValues.find('.removeAvgQueueLengthWestEastVehicle').val();
	if(removeAvgQueueLengthWestEastVehicle != null && removeAvgQueueLengthWestEastVehicle !== '')
		vals['removeAvgQueueLengthWestEastVehicle'] = removeAvgQueueLengthWestEastVehicle;

	var valueAvgQueueLengthSouthNorthVehicle = $formValues.find('.valueAvgQueueLengthSouthNorthVehicle').val();
	var removeAvgQueueLengthSouthNorthVehicle = $formValues.find('.removeAvgQueueLengthSouthNorthVehicle').val() === 'true';
	var setAvgQueueLengthSouthNorthVehicle = removeAvgQueueLengthSouthNorthVehicle ? null : $formValues.find('.setAvgQueueLengthSouthNorthVehicle').val();
	var addAvgQueueLengthSouthNorthVehicle = $formValues.find('.addAvgQueueLengthSouthNorthVehicle').val();
	if(removeAvgQueueLengthSouthNorthVehicle || setAvgQueueLengthSouthNorthVehicle != null && setAvgQueueLengthSouthNorthVehicle !== '')
		vals['setAvgQueueLengthSouthNorthVehicle'] = setAvgQueueLengthSouthNorthVehicle;
	if(addAvgQueueLengthSouthNorthVehicle != null && addAvgQueueLengthSouthNorthVehicle !== '')
		vals['addAvgQueueLengthSouthNorthVehicle'] = addAvgQueueLengthSouthNorthVehicle;
	var removeAvgQueueLengthSouthNorthVehicle = $formValues.find('.removeAvgQueueLengthSouthNorthVehicle').val();
	if(removeAvgQueueLengthSouthNorthVehicle != null && removeAvgQueueLengthSouthNorthVehicle !== '')
		vals['removeAvgQueueLengthSouthNorthVehicle'] = removeAvgQueueLengthSouthNorthVehicle;

	var valueAvgQueueLengthNorthSouthPedestrian = $formValues.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
	var removeAvgQueueLengthNorthSouthPedestrian = $formValues.find('.removeAvgQueueLengthNorthSouthPedestrian').val() === 'true';
	var setAvgQueueLengthNorthSouthPedestrian = removeAvgQueueLengthNorthSouthPedestrian ? null : $formValues.find('.setAvgQueueLengthNorthSouthPedestrian').val();
	var addAvgQueueLengthNorthSouthPedestrian = $formValues.find('.addAvgQueueLengthNorthSouthPedestrian').val();
	if(removeAvgQueueLengthNorthSouthPedestrian || setAvgQueueLengthNorthSouthPedestrian != null && setAvgQueueLengthNorthSouthPedestrian !== '')
		vals['setAvgQueueLengthNorthSouthPedestrian'] = setAvgQueueLengthNorthSouthPedestrian;
	if(addAvgQueueLengthNorthSouthPedestrian != null && addAvgQueueLengthNorthSouthPedestrian !== '')
		vals['addAvgQueueLengthNorthSouthPedestrian'] = addAvgQueueLengthNorthSouthPedestrian;
	var removeAvgQueueLengthNorthSouthPedestrian = $formValues.find('.removeAvgQueueLengthNorthSouthPedestrian').val();
	if(removeAvgQueueLengthNorthSouthPedestrian != null && removeAvgQueueLengthNorthSouthPedestrian !== '')
		vals['removeAvgQueueLengthNorthSouthPedestrian'] = removeAvgQueueLengthNorthSouthPedestrian;

	var valueAvgQueueLengthWestEastPedestrian = $formValues.find('.valueAvgQueueLengthWestEastPedestrian').val();
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val() === 'true';
	var setAvgQueueLengthWestEastPedestrian = removeAvgQueueLengthWestEastPedestrian ? null : $formValues.find('.setAvgQueueLengthWestEastPedestrian').val();
	var addAvgQueueLengthWestEastPedestrian = $formValues.find('.addAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian || setAvgQueueLengthWestEastPedestrian != null && setAvgQueueLengthWestEastPedestrian !== '')
		vals['setAvgQueueLengthWestEastPedestrian'] = setAvgQueueLengthWestEastPedestrian;
	if(addAvgQueueLengthWestEastPedestrian != null && addAvgQueueLengthWestEastPedestrian !== '')
		vals['addAvgQueueLengthWestEastPedestrian'] = addAvgQueueLengthWestEastPedestrian;
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian != null && removeAvgQueueLengthWestEastPedestrian !== '')
		vals['removeAvgQueueLengthWestEastPedestrian'] = removeAvgQueueLengthWestEastPedestrian;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	var removeSimulationName = $formValues.find('.removeSimulationName').val() === 'true';
	var setSimulationName = removeSimulationName ? null : $formValues.find('.setSimulationName').val();
	var addSimulationName = $formValues.find('.addSimulationName').val();
	if(removeSimulationName || setSimulationName != null && setSimulationName !== '')
		vals['setSimulationName'] = setSimulationName;
	if(addSimulationName != null && addSimulationName !== '')
		vals['addSimulationName'] = addSimulationName;
	var removeSimulationName = $formValues.find('.removeSimulationName').val();
	if(removeSimulationName != null && removeSimulationName !== '')
		vals['removeSimulationName'] = removeSimulationName;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val() === 'true';
	var setSmartTrafficLightName = removeSmartTrafficLightName ? null : $formValues.find('.setSmartTrafficLightName').val();
	var addSmartTrafficLightName = $formValues.find('.addSmartTrafficLightName').val();
	if(removeSmartTrafficLightName || setSmartTrafficLightName != null && setSmartTrafficLightName !== '')
		vals['setSmartTrafficLightName'] = setSmartTrafficLightName;
	if(addSmartTrafficLightName != null && addSmartTrafficLightName !== '')
		vals['addSmartTrafficLightName'] = addSmartTrafficLightName;
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val();
	if(removeSmartTrafficLightName != null && removeSmartTrafficLightName !== '')
		vals['removeSmartTrafficLightName'] = removeSmartTrafficLightName;

	var valueParamDemandScale = $formValues.find('.valueParamDemandScale').val();
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val() === 'true';
	var setParamDemandScale = removeParamDemandScale ? null : $formValues.find('.setParamDemandScale').val();
	var addParamDemandScale = $formValues.find('.addParamDemandScale').val();
	if(removeParamDemandScale || setParamDemandScale != null && setParamDemandScale !== '')
		vals['setParamDemandScale'] = setParamDemandScale;
	if(addParamDemandScale != null && addParamDemandScale !== '')
		vals['addParamDemandScale'] = addParamDemandScale;
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val();
	if(removeParamDemandScale != null && removeParamDemandScale !== '')
		vals['removeParamDemandScale'] = removeParamDemandScale;

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val() === 'true';
	var setUpdatedPerformance = removeUpdatedPerformance ? null : $formValues.find('.setUpdatedPerformance').val();
	var addUpdatedPerformance = $formValues.find('.addUpdatedPerformance').val();
	if(removeUpdatedPerformance || setUpdatedPerformance != null && setUpdatedPerformance !== '')
		vals['setUpdatedPerformance'] = setUpdatedPerformance;
	if(addUpdatedPerformance != null && addUpdatedPerformance !== '')
		vals['addUpdatedPerformance'] = addUpdatedPerformance;
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val();
	if(removeUpdatedPerformance != null && removeUpdatedPerformance !== '')
		vals['removeUpdatedPerformance'] = removeUpdatedPerformance;

	patchSimulationReportVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSimulationReportFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterReportName = $formFilters.find('.valueReportName').val();
		if(filterReportName != null && filterReportName !== '')
			filters.push({ name: 'fq', value: 'reportName:' + filterReportName });

		var filterSimulationKey = $formFilters.find('.valueSimulationKey').val();
		if(filterSimulationKey != null && filterSimulationKey !== '')
			filters.push({ name: 'fq', value: 'simulationKey:' + filterSimulationKey });

		var filterSmartTrafficLightKey = $formFilters.find('.valueSmartTrafficLightKey').val();
		if(filterSmartTrafficLightKey != null && filterSmartTrafficLightKey !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightKey:' + filterSmartTrafficLightKey });

		var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
		if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

		var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
		if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

		var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
		if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

		var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
		if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

		var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
		if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

		var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
		if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

		var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
		if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

		var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
		if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

		var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
		if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

		var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
		if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

		var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
		if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

		var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
		if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

		var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
		if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

		var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
		if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

		var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
		if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

		var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
		if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

		var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
		if(filterParamStepSize != null && filterParamStepSize !== '')
			filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

		var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
		if(filterParamRunTime != null && filterParamRunTime !== '')
			filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

		var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
		if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
			filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

		var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
		if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
			filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterUpdatedPerformanceWaitWestEastVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
		if(filterUpdatedPerformanceWaitWestEastVehicleSec != null && filterUpdatedPerformanceWaitWestEastVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitWestEastVehicleSec:' + filterUpdatedPerformanceWaitWestEastVehicleSec });

		var filterUpdatedPerformanceWaitSouthNorthVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
		if(filterUpdatedPerformanceWaitSouthNorthVehicleSec != null && filterUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitSouthNorthVehicleSec:' + filterUpdatedPerformanceWaitSouthNorthVehicleSec });

		var filterUpdatedPerformanceWaitAllVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
		if(filterUpdatedPerformanceWaitAllVehicleSec != null && filterUpdatedPerformanceWaitAllVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehicleSec:' + filterUpdatedPerformanceWaitAllVehicleSec });

		var filterUpdatedPerformanceWaitAllPedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllPedestrianSec != null && filterUpdatedPerformanceWaitAllPedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllPedestrianSec:' + filterUpdatedPerformanceWaitAllPedestrianSec });

		var filterUpdatedPerformanceWaitAllVehiclePedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllVehiclePedestrianSec != null && filterUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehiclePedestrianSec:' + filterUpdatedPerformanceWaitAllVehiclePedestrianSec });

		var filterAvgQueueLengthWestEastVehicle = $formFilters.find('.valueAvgQueueLengthWestEastVehicle').val();
		if(filterAvgQueueLengthWestEastVehicle != null && filterAvgQueueLengthWestEastVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastVehicle:' + filterAvgQueueLengthWestEastVehicle });

		var filterAvgQueueLengthSouthNorthVehicle = $formFilters.find('.valueAvgQueueLengthSouthNorthVehicle').val();
		if(filterAvgQueueLengthSouthNorthVehicle != null && filterAvgQueueLengthSouthNorthVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthSouthNorthVehicle:' + filterAvgQueueLengthSouthNorthVehicle });

		var filterAvgQueueLengthNorthSouthPedestrian = $formFilters.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
		if(filterAvgQueueLengthNorthSouthPedestrian != null && filterAvgQueueLengthNorthSouthPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthNorthSouthPedestrian:' + filterAvgQueueLengthNorthSouthPedestrian });

		var filterAvgQueueLengthWestEastPedestrian = $formFilters.find('.valueAvgQueueLengthWestEastPedestrian').val();
		if(filterAvgQueueLengthWestEastPedestrian != null && filterAvgQueueLengthWestEastPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastPedestrian:' + filterAvgQueueLengthWestEastPedestrian });

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

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
		if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

		var filterParamLam = $formFilters.find('.valueParamLam').val();
		if(filterParamLam != null && filterParamLam !== '')
			filters.push({ name: 'fq', value: 'paramLam:' + filterParamLam });

		var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
		if(filterParamDemandScale != null && filterParamDemandScale !== '')
			filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });

		var filterParamInitialPar = $formFilters.find('.valueParamInitialPar').val();
		if(filterParamInitialPar != null && filterParamInitialPar !== '')
			filters.push({ name: 'fq', value: 'paramInitialPar:' + filterParamInitialPar });

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });
	}
	return filters;
}

function patchSimulationReportVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSimulationReportVals(filters, vals, success, error);
}

function patchSimulationReportVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/simulation-report?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postSimulationReport($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueReportName = $formValues.find('.valueReportName').val();
	if(valueReportName != null && valueReportName !== '')
		vals['reportName'] = valueReportName;

	var valueSimulationKey = $formValues.find('.valueSimulationKey').val();
	if(valueSimulationKey != null && valueSimulationKey !== '')
		vals['simulationKey'] = valueSimulationKey;

	var valueSmartTrafficLightKey = $formValues.find('.valueSmartTrafficLightKey').val();
	if(valueSmartTrafficLightKey != null && valueSmartTrafficLightKey !== '')
		vals['smartTrafficLightKey'] = valueSmartTrafficLightKey;

	var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
	if(valueParamAvgVehiclePerMinFromWestToEast != null && valueParamAvgVehiclePerMinFromWestToEast !== '')
		vals['paramAvgVehiclePerMinFromWestToEast'] = valueParamAvgVehiclePerMinFromWestToEast;

	var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
	if(valueParamAvgVehiclePerMinFromSouthToNorth != null && valueParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['paramAvgVehiclePerMinFromSouthToNorth'] = valueParamAvgVehiclePerMinFromSouthToNorth;

	var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
	if(valueParamVehicleDemandScalingFactor != null && valueParamVehicleDemandScalingFactor !== '')
		vals['paramVehicleDemandScalingFactor'] = valueParamVehicleDemandScalingFactor;

	var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
	if(valueParamAvgPedestrianPerMinFromWestToEast != null && valueParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['paramAvgPedestrianPerMinFromWestToEast'] = valueParamAvgPedestrianPerMinFromWestToEast;

	var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(valueParamAvgPedestrianPerMinFromSouthToNorth != null && valueParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['paramAvgPedestrianPerMinFromSouthToNorth'] = valueParamAvgPedestrianPerMinFromSouthToNorth;

	var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
	if(valueParamPedestrianDemandScalingFactor != null && valueParamPedestrianDemandScalingFactor !== '')
		vals['paramPedestrianDemandScalingFactor'] = valueParamPedestrianDemandScalingFactor;

	var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
	if(valueParamMinGreenTimeSecWestEast != null && valueParamMinGreenTimeSecWestEast !== '')
		vals['paramMinGreenTimeSecWestEast'] = valueParamMinGreenTimeSecWestEast;

	var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
	if(valueParamMaxGreenTimeSecWestEast != null && valueParamMaxGreenTimeSecWestEast !== '')
		vals['paramMaxGreenTimeSecWestEast'] = valueParamMaxGreenTimeSecWestEast;

	var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
	if(valueParamMinGreenTimeSecSouthNorth != null && valueParamMinGreenTimeSecSouthNorth !== '')
		vals['paramMinGreenTimeSecSouthNorth'] = valueParamMinGreenTimeSecSouthNorth;

	var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
	if(valueParamMaxGreenTimeSecSouthNorth != null && valueParamMaxGreenTimeSecSouthNorth !== '')
		vals['paramMaxGreenTimeSecSouthNorth'] = valueParamMaxGreenTimeSecSouthNorth;

	var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
	if(valueParamPedestrianWaitThresholdSecNorthSouth != null && valueParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['paramPedestrianWaitThresholdSecNorthSouth'] = valueParamPedestrianWaitThresholdSecNorthSouth;

	var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
	if(valueParamPedestrianWaitThresholdSecWestEast != null && valueParamPedestrianWaitThresholdSecWestEast !== '')
		vals['paramPedestrianWaitThresholdSecWestEast'] = valueParamPedestrianWaitThresholdSecWestEast;

	var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
	if(valueParamVehicleQueueThresholdWestEast != null && valueParamVehicleQueueThresholdWestEast !== '')
		vals['paramVehicleQueueThresholdWestEast'] = valueParamVehicleQueueThresholdWestEast;

	var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
	if(valueParamVehicleQueueThresholdSouthNorth != null && valueParamVehicleQueueThresholdSouthNorth !== '')
		vals['paramVehicleQueueThresholdSouthNorth'] = valueParamVehicleQueueThresholdSouthNorth;

	var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
	if(valueParamPedestrianQueueThresholdNorthSouth != null && valueParamPedestrianQueueThresholdNorthSouth !== '')
		vals['paramPedestrianQueueThresholdNorthSouth'] = valueParamPedestrianQueueThresholdNorthSouth;

	var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
	if(valueParamPedestrianQueueThresholdWestEast != null && valueParamPedestrianQueueThresholdWestEast !== '')
		vals['paramPedestrianQueueThresholdWestEast'] = valueParamPedestrianQueueThresholdWestEast;

	var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
	if(valueParamStepSize != null && valueParamStepSize !== '')
		vals['paramStepSize'] = valueParamStepSize;

	var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
	if(valueParamRunTime != null && valueParamRunTime !== '')
		vals['paramRunTime'] = valueParamRunTime;

	var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
	if(valueParamItersPerPar != null && valueParamItersPerPar !== '')
		vals['paramItersPerPar'] = valueParamItersPerPar;

	var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
	if(valueParamTotalIterNum != null && valueParamTotalIterNum !== '')
		vals['paramTotalIterNum'] = valueParamTotalIterNum;

	var valueReportStatus = $formValues.find('.valueReportStatus').val();
	if(valueReportStatus != null && valueReportStatus !== '')
		vals['reportStatus'] = valueReportStatus;

	var valueReportProgress = $formValues.find('.valueReportProgress').val();
	if(valueReportProgress != null && valueReportProgress !== '')
		vals['reportProgress'] = valueReportProgress;

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	if(valueUpdatedParameters != null && valueUpdatedParameters !== '')
		vals['updatedParameters'] = valueUpdatedParameters;

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(valueUpdatedPerformanceWaitWestEastVehicleSec != null && valueUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['updatedPerformanceWaitWestEastVehicleSec'] = valueUpdatedPerformanceWaitWestEastVehicleSec;

	var valueUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(valueUpdatedPerformanceWaitSouthNorthVehicleSec != null && valueUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['updatedPerformanceWaitSouthNorthVehicleSec'] = valueUpdatedPerformanceWaitSouthNorthVehicleSec;

	var valueUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
	if(valueUpdatedPerformanceWaitAllVehicleSec != null && valueUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['updatedPerformanceWaitAllVehicleSec'] = valueUpdatedPerformanceWaitAllVehicleSec;

	var valueUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllPedestrianSec != null && valueUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['updatedPerformanceWaitAllPedestrianSec'] = valueUpdatedPerformanceWaitAllPedestrianSec;

	var valueUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllVehiclePedestrianSec != null && valueUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['updatedPerformanceWaitAllVehiclePedestrianSec'] = valueUpdatedPerformanceWaitAllVehiclePedestrianSec;

	var valueAvgQueueLengthWestEastVehicle = $formValues.find('.valueAvgQueueLengthWestEastVehicle').val();
	if(valueAvgQueueLengthWestEastVehicle != null && valueAvgQueueLengthWestEastVehicle !== '')
		vals['avgQueueLengthWestEastVehicle'] = valueAvgQueueLengthWestEastVehicle;

	var valueAvgQueueLengthSouthNorthVehicle = $formValues.find('.valueAvgQueueLengthSouthNorthVehicle').val();
	if(valueAvgQueueLengthSouthNorthVehicle != null && valueAvgQueueLengthSouthNorthVehicle !== '')
		vals['avgQueueLengthSouthNorthVehicle'] = valueAvgQueueLengthSouthNorthVehicle;

	var valueAvgQueueLengthNorthSouthPedestrian = $formValues.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
	if(valueAvgQueueLengthNorthSouthPedestrian != null && valueAvgQueueLengthNorthSouthPedestrian !== '')
		vals['avgQueueLengthNorthSouthPedestrian'] = valueAvgQueueLengthNorthSouthPedestrian;

	var valueAvgQueueLengthWestEastPedestrian = $formValues.find('.valueAvgQueueLengthWestEastPedestrian').val();
	if(valueAvgQueueLengthWestEastPedestrian != null && valueAvgQueueLengthWestEastPedestrian !== '')
		vals['avgQueueLengthWestEastPedestrian'] = valueAvgQueueLengthWestEastPedestrian;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	if(valueSimulationName != null && valueSimulationName !== '')
		vals['simulationName'] = valueSimulationName;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	if(valueSmartTrafficLightName != null && valueSmartTrafficLightName !== '')
		vals['smartTrafficLightName'] = valueSmartTrafficLightName;

	var valueParamDemandScale = $formValues.find('.valueParamDemandScale').val();
	if(valueParamDemandScale != null && valueParamDemandScale !== '')
		vals['paramDemandScale'] = valueParamDemandScale;

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	if(valueUpdatedPerformance != null && valueUpdatedPerformance !== '')
		vals['updatedPerformance'] = valueUpdatedPerformance;

	$.ajax({
		url: '/api/simulation-report'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSimulationReportVals(vals, success, error) {
	$.ajax({
		url: '/api/simulation-report'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSimulationReport($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSimulationReportVals(JSON.parse(json), success, error);
}

function putimportSimulationReportVals(json, success, error) {
	$.ajax({
		url: '/api/simulation-report-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PATCHRunSimulation //

async function patchrunsimulationSimulationReport($formFilters, $formValues, pk, success, error) {
	var filters = patchrunsimulationSimulationReportFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueReportName = $formValues.find('.valueReportName').val();
	var removeReportName = $formValues.find('.removeReportName').val() === 'true';
	var setReportName = removeReportName ? null : $formValues.find('.setReportName').val();
	var addReportName = $formValues.find('.addReportName').val();
	if(removeReportName || setReportName != null && setReportName !== '')
		vals['setReportName'] = setReportName;
	if(addReportName != null && addReportName !== '')
		vals['addReportName'] = addReportName;
	var removeReportName = $formValues.find('.removeReportName').val();
	if(removeReportName != null && removeReportName !== '')
		vals['removeReportName'] = removeReportName;

	var valueSimulationKey = $formValues.find('input.valueSimulationKey:checked').val();
	if(valueSimulationKey != null && valueSimulationKey !== '')
		vals['setSimulationKey'] = valueSimulationKey;

	var valueSmartTrafficLightKey = $formValues.find('input.valueSmartTrafficLightKey:checked').val();
	if(valueSmartTrafficLightKey != null && valueSmartTrafficLightKey !== '')
		vals['setSmartTrafficLightKey'] = valueSmartTrafficLightKey;

	var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val() === 'true';
	var setParamAvgVehiclePerMinFromWestToEast = removeParamAvgVehiclePerMinFromWestToEast ? null : $formValues.find('.setParamAvgVehiclePerMinFromWestToEast').val();
	var addParamAvgVehiclePerMinFromWestToEast = $formValues.find('.addParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast || setParamAvgVehiclePerMinFromWestToEast != null && setParamAvgVehiclePerMinFromWestToEast !== '')
		vals['setParamAvgVehiclePerMinFromWestToEast'] = setParamAvgVehiclePerMinFromWestToEast;
	if(addParamAvgVehiclePerMinFromWestToEast != null && addParamAvgVehiclePerMinFromWestToEast !== '')
		vals['addParamAvgVehiclePerMinFromWestToEast'] = addParamAvgVehiclePerMinFromWestToEast;
	var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val();
	if(removeParamAvgVehiclePerMinFromWestToEast != null && removeParamAvgVehiclePerMinFromWestToEast !== '')
		vals['removeParamAvgVehiclePerMinFromWestToEast'] = removeParamAvgVehiclePerMinFromWestToEast;

	var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val() === 'true';
	var setParamAvgVehiclePerMinFromSouthToNorth = removeParamAvgVehiclePerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgVehiclePerMinFromSouthToNorth').val();
	var addParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.addParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth || setParamAvgVehiclePerMinFromSouthToNorth != null && setParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['setParamAvgVehiclePerMinFromSouthToNorth'] = setParamAvgVehiclePerMinFromSouthToNorth;
	if(addParamAvgVehiclePerMinFromSouthToNorth != null && addParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['addParamAvgVehiclePerMinFromSouthToNorth'] = addParamAvgVehiclePerMinFromSouthToNorth;
	var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val();
	if(removeParamAvgVehiclePerMinFromSouthToNorth != null && removeParamAvgVehiclePerMinFromSouthToNorth !== '')
		vals['removeParamAvgVehiclePerMinFromSouthToNorth'] = removeParamAvgVehiclePerMinFromSouthToNorth;

	var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val() === 'true';
	var setParamVehicleDemandScalingFactor = removeParamVehicleDemandScalingFactor ? null : $formValues.find('.setParamVehicleDemandScalingFactor').val();
	var addParamVehicleDemandScalingFactor = $formValues.find('.addParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor || setParamVehicleDemandScalingFactor != null && setParamVehicleDemandScalingFactor !== '')
		vals['setParamVehicleDemandScalingFactor'] = setParamVehicleDemandScalingFactor;
	if(addParamVehicleDemandScalingFactor != null && addParamVehicleDemandScalingFactor !== '')
		vals['addParamVehicleDemandScalingFactor'] = addParamVehicleDemandScalingFactor;
	var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val();
	if(removeParamVehicleDemandScalingFactor != null && removeParamVehicleDemandScalingFactor !== '')
		vals['removeParamVehicleDemandScalingFactor'] = removeParamVehicleDemandScalingFactor;

	var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val() === 'true';
	var setParamAvgPedestrianPerMinFromWestToEast = removeParamAvgPedestrianPerMinFromWestToEast ? null : $formValues.find('.setParamAvgPedestrianPerMinFromWestToEast').val();
	var addParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.addParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast || setParamAvgPedestrianPerMinFromWestToEast != null && setParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['setParamAvgPedestrianPerMinFromWestToEast'] = setParamAvgPedestrianPerMinFromWestToEast;
	if(addParamAvgPedestrianPerMinFromWestToEast != null && addParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['addParamAvgPedestrianPerMinFromWestToEast'] = addParamAvgPedestrianPerMinFromWestToEast;
	var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val();
	if(removeParamAvgPedestrianPerMinFromWestToEast != null && removeParamAvgPedestrianPerMinFromWestToEast !== '')
		vals['removeParamAvgPedestrianPerMinFromWestToEast'] = removeParamAvgPedestrianPerMinFromWestToEast;

	var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val() === 'true';
	var setParamAvgPedestrianPerMinFromSouthToNorth = removeParamAvgPedestrianPerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgPedestrianPerMinFromSouthToNorth').val();
	var addParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.addParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth || setParamAvgPedestrianPerMinFromSouthToNorth != null && setParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['setParamAvgPedestrianPerMinFromSouthToNorth'] = setParamAvgPedestrianPerMinFromSouthToNorth;
	if(addParamAvgPedestrianPerMinFromSouthToNorth != null && addParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['addParamAvgPedestrianPerMinFromSouthToNorth'] = addParamAvgPedestrianPerMinFromSouthToNorth;
	var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val();
	if(removeParamAvgPedestrianPerMinFromSouthToNorth != null && removeParamAvgPedestrianPerMinFromSouthToNorth !== '')
		vals['removeParamAvgPedestrianPerMinFromSouthToNorth'] = removeParamAvgPedestrianPerMinFromSouthToNorth;

	var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val() === 'true';
	var setParamPedestrianDemandScalingFactor = removeParamPedestrianDemandScalingFactor ? null : $formValues.find('.setParamPedestrianDemandScalingFactor').val();
	var addParamPedestrianDemandScalingFactor = $formValues.find('.addParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor || setParamPedestrianDemandScalingFactor != null && setParamPedestrianDemandScalingFactor !== '')
		vals['setParamPedestrianDemandScalingFactor'] = setParamPedestrianDemandScalingFactor;
	if(addParamPedestrianDemandScalingFactor != null && addParamPedestrianDemandScalingFactor !== '')
		vals['addParamPedestrianDemandScalingFactor'] = addParamPedestrianDemandScalingFactor;
	var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val();
	if(removeParamPedestrianDemandScalingFactor != null && removeParamPedestrianDemandScalingFactor !== '')
		vals['removeParamPedestrianDemandScalingFactor'] = removeParamPedestrianDemandScalingFactor;

	var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val() === 'true';
	var setParamMinGreenTimeSecWestEast = removeParamMinGreenTimeSecWestEast ? null : $formValues.find('.setParamMinGreenTimeSecWestEast').val();
	var addParamMinGreenTimeSecWestEast = $formValues.find('.addParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast || setParamMinGreenTimeSecWestEast != null && setParamMinGreenTimeSecWestEast !== '')
		vals['setParamMinGreenTimeSecWestEast'] = setParamMinGreenTimeSecWestEast;
	if(addParamMinGreenTimeSecWestEast != null && addParamMinGreenTimeSecWestEast !== '')
		vals['addParamMinGreenTimeSecWestEast'] = addParamMinGreenTimeSecWestEast;
	var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val();
	if(removeParamMinGreenTimeSecWestEast != null && removeParamMinGreenTimeSecWestEast !== '')
		vals['removeParamMinGreenTimeSecWestEast'] = removeParamMinGreenTimeSecWestEast;

	var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val() === 'true';
	var setParamMaxGreenTimeSecWestEast = removeParamMaxGreenTimeSecWestEast ? null : $formValues.find('.setParamMaxGreenTimeSecWestEast').val();
	var addParamMaxGreenTimeSecWestEast = $formValues.find('.addParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast || setParamMaxGreenTimeSecWestEast != null && setParamMaxGreenTimeSecWestEast !== '')
		vals['setParamMaxGreenTimeSecWestEast'] = setParamMaxGreenTimeSecWestEast;
	if(addParamMaxGreenTimeSecWestEast != null && addParamMaxGreenTimeSecWestEast !== '')
		vals['addParamMaxGreenTimeSecWestEast'] = addParamMaxGreenTimeSecWestEast;
	var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val();
	if(removeParamMaxGreenTimeSecWestEast != null && removeParamMaxGreenTimeSecWestEast !== '')
		vals['removeParamMaxGreenTimeSecWestEast'] = removeParamMaxGreenTimeSecWestEast;

	var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val() === 'true';
	var setParamMinGreenTimeSecSouthNorth = removeParamMinGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMinGreenTimeSecSouthNorth').val();
	var addParamMinGreenTimeSecSouthNorth = $formValues.find('.addParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth || setParamMinGreenTimeSecSouthNorth != null && setParamMinGreenTimeSecSouthNorth !== '')
		vals['setParamMinGreenTimeSecSouthNorth'] = setParamMinGreenTimeSecSouthNorth;
	if(addParamMinGreenTimeSecSouthNorth != null && addParamMinGreenTimeSecSouthNorth !== '')
		vals['addParamMinGreenTimeSecSouthNorth'] = addParamMinGreenTimeSecSouthNorth;
	var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val();
	if(removeParamMinGreenTimeSecSouthNorth != null && removeParamMinGreenTimeSecSouthNorth !== '')
		vals['removeParamMinGreenTimeSecSouthNorth'] = removeParamMinGreenTimeSecSouthNorth;

	var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val() === 'true';
	var setParamMaxGreenTimeSecSouthNorth = removeParamMaxGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMaxGreenTimeSecSouthNorth').val();
	var addParamMaxGreenTimeSecSouthNorth = $formValues.find('.addParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth || setParamMaxGreenTimeSecSouthNorth != null && setParamMaxGreenTimeSecSouthNorth !== '')
		vals['setParamMaxGreenTimeSecSouthNorth'] = setParamMaxGreenTimeSecSouthNorth;
	if(addParamMaxGreenTimeSecSouthNorth != null && addParamMaxGreenTimeSecSouthNorth !== '')
		vals['addParamMaxGreenTimeSecSouthNorth'] = addParamMaxGreenTimeSecSouthNorth;
	var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val();
	if(removeParamMaxGreenTimeSecSouthNorth != null && removeParamMaxGreenTimeSecSouthNorth !== '')
		vals['removeParamMaxGreenTimeSecSouthNorth'] = removeParamMaxGreenTimeSecSouthNorth;

	var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val() === 'true';
	var setParamPedestrianWaitThresholdSecNorthSouth = removeParamPedestrianWaitThresholdSecNorthSouth ? null : $formValues.find('.setParamPedestrianWaitThresholdSecNorthSouth').val();
	var addParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.addParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth || setParamPedestrianWaitThresholdSecNorthSouth != null && setParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['setParamPedestrianWaitThresholdSecNorthSouth'] = setParamPedestrianWaitThresholdSecNorthSouth;
	if(addParamPedestrianWaitThresholdSecNorthSouth != null && addParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['addParamPedestrianWaitThresholdSecNorthSouth'] = addParamPedestrianWaitThresholdSecNorthSouth;
	var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val();
	if(removeParamPedestrianWaitThresholdSecNorthSouth != null && removeParamPedestrianWaitThresholdSecNorthSouth !== '')
		vals['removeParamPedestrianWaitThresholdSecNorthSouth'] = removeParamPedestrianWaitThresholdSecNorthSouth;

	var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val() === 'true';
	var setParamPedestrianWaitThresholdSecWestEast = removeParamPedestrianWaitThresholdSecWestEast ? null : $formValues.find('.setParamPedestrianWaitThresholdSecWestEast').val();
	var addParamPedestrianWaitThresholdSecWestEast = $formValues.find('.addParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast || setParamPedestrianWaitThresholdSecWestEast != null && setParamPedestrianWaitThresholdSecWestEast !== '')
		vals['setParamPedestrianWaitThresholdSecWestEast'] = setParamPedestrianWaitThresholdSecWestEast;
	if(addParamPedestrianWaitThresholdSecWestEast != null && addParamPedestrianWaitThresholdSecWestEast !== '')
		vals['addParamPedestrianWaitThresholdSecWestEast'] = addParamPedestrianWaitThresholdSecWestEast;
	var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val();
	if(removeParamPedestrianWaitThresholdSecWestEast != null && removeParamPedestrianWaitThresholdSecWestEast !== '')
		vals['removeParamPedestrianWaitThresholdSecWestEast'] = removeParamPedestrianWaitThresholdSecWestEast;

	var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val() === 'true';
	var setParamVehicleQueueThresholdWestEast = removeParamVehicleQueueThresholdWestEast ? null : $formValues.find('.setParamVehicleQueueThresholdWestEast').val();
	var addParamVehicleQueueThresholdWestEast = $formValues.find('.addParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast || setParamVehicleQueueThresholdWestEast != null && setParamVehicleQueueThresholdWestEast !== '')
		vals['setParamVehicleQueueThresholdWestEast'] = setParamVehicleQueueThresholdWestEast;
	if(addParamVehicleQueueThresholdWestEast != null && addParamVehicleQueueThresholdWestEast !== '')
		vals['addParamVehicleQueueThresholdWestEast'] = addParamVehicleQueueThresholdWestEast;
	var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val();
	if(removeParamVehicleQueueThresholdWestEast != null && removeParamVehicleQueueThresholdWestEast !== '')
		vals['removeParamVehicleQueueThresholdWestEast'] = removeParamVehicleQueueThresholdWestEast;

	var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val() === 'true';
	var setParamVehicleQueueThresholdSouthNorth = removeParamVehicleQueueThresholdSouthNorth ? null : $formValues.find('.setParamVehicleQueueThresholdSouthNorth').val();
	var addParamVehicleQueueThresholdSouthNorth = $formValues.find('.addParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth || setParamVehicleQueueThresholdSouthNorth != null && setParamVehicleQueueThresholdSouthNorth !== '')
		vals['setParamVehicleQueueThresholdSouthNorth'] = setParamVehicleQueueThresholdSouthNorth;
	if(addParamVehicleQueueThresholdSouthNorth != null && addParamVehicleQueueThresholdSouthNorth !== '')
		vals['addParamVehicleQueueThresholdSouthNorth'] = addParamVehicleQueueThresholdSouthNorth;
	var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val();
	if(removeParamVehicleQueueThresholdSouthNorth != null && removeParamVehicleQueueThresholdSouthNorth !== '')
		vals['removeParamVehicleQueueThresholdSouthNorth'] = removeParamVehicleQueueThresholdSouthNorth;

	var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val() === 'true';
	var setParamPedestrianQueueThresholdNorthSouth = removeParamPedestrianQueueThresholdNorthSouth ? null : $formValues.find('.setParamPedestrianQueueThresholdNorthSouth').val();
	var addParamPedestrianQueueThresholdNorthSouth = $formValues.find('.addParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth || setParamPedestrianQueueThresholdNorthSouth != null && setParamPedestrianQueueThresholdNorthSouth !== '')
		vals['setParamPedestrianQueueThresholdNorthSouth'] = setParamPedestrianQueueThresholdNorthSouth;
	if(addParamPedestrianQueueThresholdNorthSouth != null && addParamPedestrianQueueThresholdNorthSouth !== '')
		vals['addParamPedestrianQueueThresholdNorthSouth'] = addParamPedestrianQueueThresholdNorthSouth;
	var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val();
	if(removeParamPedestrianQueueThresholdNorthSouth != null && removeParamPedestrianQueueThresholdNorthSouth !== '')
		vals['removeParamPedestrianQueueThresholdNorthSouth'] = removeParamPedestrianQueueThresholdNorthSouth;

	var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val() === 'true';
	var setParamPedestrianQueueThresholdWestEast = removeParamPedestrianQueueThresholdWestEast ? null : $formValues.find('.setParamPedestrianQueueThresholdWestEast').val();
	var addParamPedestrianQueueThresholdWestEast = $formValues.find('.addParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast || setParamPedestrianQueueThresholdWestEast != null && setParamPedestrianQueueThresholdWestEast !== '')
		vals['setParamPedestrianQueueThresholdWestEast'] = setParamPedestrianQueueThresholdWestEast;
	if(addParamPedestrianQueueThresholdWestEast != null && addParamPedestrianQueueThresholdWestEast !== '')
		vals['addParamPedestrianQueueThresholdWestEast'] = addParamPedestrianQueueThresholdWestEast;
	var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val();
	if(removeParamPedestrianQueueThresholdWestEast != null && removeParamPedestrianQueueThresholdWestEast !== '')
		vals['removeParamPedestrianQueueThresholdWestEast'] = removeParamPedestrianQueueThresholdWestEast;

	var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val() === 'true';
	var setParamStepSize = removeParamStepSize ? null : $formValues.find('.setParamStepSize').val();
	var addParamStepSize = $formValues.find('.addParamStepSize').val();
	if(removeParamStepSize || setParamStepSize != null && setParamStepSize !== '')
		vals['setParamStepSize'] = setParamStepSize;
	if(addParamStepSize != null && addParamStepSize !== '')
		vals['addParamStepSize'] = addParamStepSize;
	var removeParamStepSize = $formValues.find('.removeParamStepSize').val();
	if(removeParamStepSize != null && removeParamStepSize !== '')
		vals['removeParamStepSize'] = removeParamStepSize;

	var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val() === 'true';
	var setParamRunTime = removeParamRunTime ? null : $formValues.find('.setParamRunTime').val();
	var addParamRunTime = $formValues.find('.addParamRunTime').val();
	if(removeParamRunTime || setParamRunTime != null && setParamRunTime !== '')
		vals['setParamRunTime'] = setParamRunTime;
	if(addParamRunTime != null && addParamRunTime !== '')
		vals['addParamRunTime'] = addParamRunTime;
	var removeParamRunTime = $formValues.find('.removeParamRunTime').val();
	if(removeParamRunTime != null && removeParamRunTime !== '')
		vals['removeParamRunTime'] = removeParamRunTime;

	var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val() === 'true';
	var setParamItersPerPar = removeParamItersPerPar ? null : $formValues.find('.setParamItersPerPar').val();
	var addParamItersPerPar = $formValues.find('.addParamItersPerPar').val();
	if(removeParamItersPerPar || setParamItersPerPar != null && setParamItersPerPar !== '')
		vals['setParamItersPerPar'] = setParamItersPerPar;
	if(addParamItersPerPar != null && addParamItersPerPar !== '')
		vals['addParamItersPerPar'] = addParamItersPerPar;
	var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val();
	if(removeParamItersPerPar != null && removeParamItersPerPar !== '')
		vals['removeParamItersPerPar'] = removeParamItersPerPar;

	var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val() === 'true';
	var setParamTotalIterNum = removeParamTotalIterNum ? null : $formValues.find('.setParamTotalIterNum').val();
	var addParamTotalIterNum = $formValues.find('.addParamTotalIterNum').val();
	if(removeParamTotalIterNum || setParamTotalIterNum != null && setParamTotalIterNum !== '')
		vals['setParamTotalIterNum'] = setParamTotalIterNum;
	if(addParamTotalIterNum != null && addParamTotalIterNum !== '')
		vals['addParamTotalIterNum'] = addParamTotalIterNum;
	var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val();
	if(removeParamTotalIterNum != null && removeParamTotalIterNum !== '')
		vals['removeParamTotalIterNum'] = removeParamTotalIterNum;

	var valueReportStatus = $formValues.find('.valueReportStatus').val();
	var removeReportStatus = $formValues.find('.removeReportStatus').val() === 'true';
	var setReportStatus = removeReportStatus ? null : $formValues.find('.setReportStatus').val();
	var addReportStatus = $formValues.find('.addReportStatus').val();
	if(removeReportStatus || setReportStatus != null && setReportStatus !== '')
		vals['setReportStatus'] = setReportStatus;
	if(addReportStatus != null && addReportStatus !== '')
		vals['addReportStatus'] = addReportStatus;
	var removeReportStatus = $formValues.find('.removeReportStatus').val();
	if(removeReportStatus != null && removeReportStatus !== '')
		vals['removeReportStatus'] = removeReportStatus;

	var valueReportProgress = $formValues.find('.valueReportProgress').val();
	var removeReportProgress = $formValues.find('.removeReportProgress').val() === 'true';
	var setReportProgress = removeReportProgress ? null : $formValues.find('.setReportProgress').val();
	var addReportProgress = $formValues.find('.addReportProgress').val();
	if(removeReportProgress || setReportProgress != null && setReportProgress !== '')
		vals['setReportProgress'] = setReportProgress;
	if(addReportProgress != null && addReportProgress !== '')
		vals['addReportProgress'] = addReportProgress;
	var removeReportProgress = $formValues.find('.removeReportProgress').val();
	if(removeReportProgress != null && removeReportProgress !== '')
		vals['removeReportProgress'] = removeReportProgress;

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val() === 'true';
	var setUpdatedParameters = removeUpdatedParameters ? null : $formValues.find('.setUpdatedParameters').val();
	var addUpdatedParameters = $formValues.find('.addUpdatedParameters').val();
	if(removeUpdatedParameters || setUpdatedParameters != null && setUpdatedParameters !== '')
		vals['setUpdatedParameters'] = setUpdatedParameters;
	if(addUpdatedParameters != null && addUpdatedParameters !== '')
		vals['addUpdatedParameters'] = addUpdatedParameters;
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val();
	if(removeUpdatedParameters != null && removeUpdatedParameters !== '')
		vals['removeUpdatedParameters'] = removeUpdatedParameters;

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitWestEastVehicleSec = removeUpdatedPerformanceWaitWestEastVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitWestEastVehicleSec').val();
	var addUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.addUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec || setUpdatedPerformanceWaitWestEastVehicleSec != null && setUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['setUpdatedPerformanceWaitWestEastVehicleSec'] = setUpdatedPerformanceWaitWestEastVehicleSec;
	if(addUpdatedPerformanceWaitWestEastVehicleSec != null && addUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['addUpdatedPerformanceWaitWestEastVehicleSec'] = addUpdatedPerformanceWaitWestEastVehicleSec;
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec != null && removeUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitWestEastVehicleSec'] = removeUpdatedPerformanceWaitWestEastVehicleSec;

	var valueUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	var removeUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitSouthNorthVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitSouthNorthVehicleSec = removeUpdatedPerformanceWaitSouthNorthVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	var addUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.addUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(removeUpdatedPerformanceWaitSouthNorthVehicleSec || setUpdatedPerformanceWaitSouthNorthVehicleSec != null && setUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['setUpdatedPerformanceWaitSouthNorthVehicleSec'] = setUpdatedPerformanceWaitSouthNorthVehicleSec;
	if(addUpdatedPerformanceWaitSouthNorthVehicleSec != null && addUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['addUpdatedPerformanceWaitSouthNorthVehicleSec'] = addUpdatedPerformanceWaitSouthNorthVehicleSec;
	var removeUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(removeUpdatedPerformanceWaitSouthNorthVehicleSec != null && removeUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitSouthNorthVehicleSec'] = removeUpdatedPerformanceWaitSouthNorthVehicleSec;

	var valueUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
	var removeUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitAllVehicleSec = removeUpdatedPerformanceWaitAllVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllVehicleSec').val();
	var addUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.addUpdatedPerformanceWaitAllVehicleSec').val();
	if(removeUpdatedPerformanceWaitAllVehicleSec || setUpdatedPerformanceWaitAllVehicleSec != null && setUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['setUpdatedPerformanceWaitAllVehicleSec'] = setUpdatedPerformanceWaitAllVehicleSec;
	if(addUpdatedPerformanceWaitAllVehicleSec != null && addUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['addUpdatedPerformanceWaitAllVehicleSec'] = addUpdatedPerformanceWaitAllVehicleSec;
	var removeUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehicleSec').val();
	if(removeUpdatedPerformanceWaitAllVehicleSec != null && removeUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['removeUpdatedPerformanceWaitAllVehicleSec'] = removeUpdatedPerformanceWaitAllVehicleSec;

	var valueUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
	var removeUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllPedestrianSec').val() === 'true';
	var setUpdatedPerformanceWaitAllPedestrianSec = removeUpdatedPerformanceWaitAllPedestrianSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllPedestrianSec').val();
	var addUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.addUpdatedPerformanceWaitAllPedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllPedestrianSec || setUpdatedPerformanceWaitAllPedestrianSec != null && setUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['setUpdatedPerformanceWaitAllPedestrianSec'] = setUpdatedPerformanceWaitAllPedestrianSec;
	if(addUpdatedPerformanceWaitAllPedestrianSec != null && addUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['addUpdatedPerformanceWaitAllPedestrianSec'] = addUpdatedPerformanceWaitAllPedestrianSec;
	var removeUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllPedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllPedestrianSec != null && removeUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['removeUpdatedPerformanceWaitAllPedestrianSec'] = removeUpdatedPerformanceWaitAllPedestrianSec;

	var valueUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	var removeUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehiclePedestrianSec').val() === 'true';
	var setUpdatedPerformanceWaitAllVehiclePedestrianSec = removeUpdatedPerformanceWaitAllVehiclePedestrianSec ? null : $formValues.find('.setUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	var addUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.addUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllVehiclePedestrianSec || setUpdatedPerformanceWaitAllVehiclePedestrianSec != null && setUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['setUpdatedPerformanceWaitAllVehiclePedestrianSec'] = setUpdatedPerformanceWaitAllVehiclePedestrianSec;
	if(addUpdatedPerformanceWaitAllVehiclePedestrianSec != null && addUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['addUpdatedPerformanceWaitAllVehiclePedestrianSec'] = addUpdatedPerformanceWaitAllVehiclePedestrianSec;
	var removeUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.removeUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(removeUpdatedPerformanceWaitAllVehiclePedestrianSec != null && removeUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['removeUpdatedPerformanceWaitAllVehiclePedestrianSec'] = removeUpdatedPerformanceWaitAllVehiclePedestrianSec;

	var valueAvgQueueLengthWestEastVehicle = $formValues.find('.valueAvgQueueLengthWestEastVehicle').val();
	var removeAvgQueueLengthWestEastVehicle = $formValues.find('.removeAvgQueueLengthWestEastVehicle').val() === 'true';
	var setAvgQueueLengthWestEastVehicle = removeAvgQueueLengthWestEastVehicle ? null : $formValues.find('.setAvgQueueLengthWestEastVehicle').val();
	var addAvgQueueLengthWestEastVehicle = $formValues.find('.addAvgQueueLengthWestEastVehicle').val();
	if(removeAvgQueueLengthWestEastVehicle || setAvgQueueLengthWestEastVehicle != null && setAvgQueueLengthWestEastVehicle !== '')
		vals['setAvgQueueLengthWestEastVehicle'] = setAvgQueueLengthWestEastVehicle;
	if(addAvgQueueLengthWestEastVehicle != null && addAvgQueueLengthWestEastVehicle !== '')
		vals['addAvgQueueLengthWestEastVehicle'] = addAvgQueueLengthWestEastVehicle;
	var removeAvgQueueLengthWestEastVehicle = $formValues.find('.removeAvgQueueLengthWestEastVehicle').val();
	if(removeAvgQueueLengthWestEastVehicle != null && removeAvgQueueLengthWestEastVehicle !== '')
		vals['removeAvgQueueLengthWestEastVehicle'] = removeAvgQueueLengthWestEastVehicle;

	var valueAvgQueueLengthSouthNorthVehicle = $formValues.find('.valueAvgQueueLengthSouthNorthVehicle').val();
	var removeAvgQueueLengthSouthNorthVehicle = $formValues.find('.removeAvgQueueLengthSouthNorthVehicle').val() === 'true';
	var setAvgQueueLengthSouthNorthVehicle = removeAvgQueueLengthSouthNorthVehicle ? null : $formValues.find('.setAvgQueueLengthSouthNorthVehicle').val();
	var addAvgQueueLengthSouthNorthVehicle = $formValues.find('.addAvgQueueLengthSouthNorthVehicle').val();
	if(removeAvgQueueLengthSouthNorthVehicle || setAvgQueueLengthSouthNorthVehicle != null && setAvgQueueLengthSouthNorthVehicle !== '')
		vals['setAvgQueueLengthSouthNorthVehicle'] = setAvgQueueLengthSouthNorthVehicle;
	if(addAvgQueueLengthSouthNorthVehicle != null && addAvgQueueLengthSouthNorthVehicle !== '')
		vals['addAvgQueueLengthSouthNorthVehicle'] = addAvgQueueLengthSouthNorthVehicle;
	var removeAvgQueueLengthSouthNorthVehicle = $formValues.find('.removeAvgQueueLengthSouthNorthVehicle').val();
	if(removeAvgQueueLengthSouthNorthVehicle != null && removeAvgQueueLengthSouthNorthVehicle !== '')
		vals['removeAvgQueueLengthSouthNorthVehicle'] = removeAvgQueueLengthSouthNorthVehicle;

	var valueAvgQueueLengthNorthSouthPedestrian = $formValues.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
	var removeAvgQueueLengthNorthSouthPedestrian = $formValues.find('.removeAvgQueueLengthNorthSouthPedestrian').val() === 'true';
	var setAvgQueueLengthNorthSouthPedestrian = removeAvgQueueLengthNorthSouthPedestrian ? null : $formValues.find('.setAvgQueueLengthNorthSouthPedestrian').val();
	var addAvgQueueLengthNorthSouthPedestrian = $formValues.find('.addAvgQueueLengthNorthSouthPedestrian').val();
	if(removeAvgQueueLengthNorthSouthPedestrian || setAvgQueueLengthNorthSouthPedestrian != null && setAvgQueueLengthNorthSouthPedestrian !== '')
		vals['setAvgQueueLengthNorthSouthPedestrian'] = setAvgQueueLengthNorthSouthPedestrian;
	if(addAvgQueueLengthNorthSouthPedestrian != null && addAvgQueueLengthNorthSouthPedestrian !== '')
		vals['addAvgQueueLengthNorthSouthPedestrian'] = addAvgQueueLengthNorthSouthPedestrian;
	var removeAvgQueueLengthNorthSouthPedestrian = $formValues.find('.removeAvgQueueLengthNorthSouthPedestrian').val();
	if(removeAvgQueueLengthNorthSouthPedestrian != null && removeAvgQueueLengthNorthSouthPedestrian !== '')
		vals['removeAvgQueueLengthNorthSouthPedestrian'] = removeAvgQueueLengthNorthSouthPedestrian;

	var valueAvgQueueLengthWestEastPedestrian = $formValues.find('.valueAvgQueueLengthWestEastPedestrian').val();
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val() === 'true';
	var setAvgQueueLengthWestEastPedestrian = removeAvgQueueLengthWestEastPedestrian ? null : $formValues.find('.setAvgQueueLengthWestEastPedestrian').val();
	var addAvgQueueLengthWestEastPedestrian = $formValues.find('.addAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian || setAvgQueueLengthWestEastPedestrian != null && setAvgQueueLengthWestEastPedestrian !== '')
		vals['setAvgQueueLengthWestEastPedestrian'] = setAvgQueueLengthWestEastPedestrian;
	if(addAvgQueueLengthWestEastPedestrian != null && addAvgQueueLengthWestEastPedestrian !== '')
		vals['addAvgQueueLengthWestEastPedestrian'] = addAvgQueueLengthWestEastPedestrian;
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian != null && removeAvgQueueLengthWestEastPedestrian !== '')
		vals['removeAvgQueueLengthWestEastPedestrian'] = removeAvgQueueLengthWestEastPedestrian;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	var removeSimulationName = $formValues.find('.removeSimulationName').val() === 'true';
	var setSimulationName = removeSimulationName ? null : $formValues.find('.setSimulationName').val();
	var addSimulationName = $formValues.find('.addSimulationName').val();
	if(removeSimulationName || setSimulationName != null && setSimulationName !== '')
		vals['setSimulationName'] = setSimulationName;
	if(addSimulationName != null && addSimulationName !== '')
		vals['addSimulationName'] = addSimulationName;
	var removeSimulationName = $formValues.find('.removeSimulationName').val();
	if(removeSimulationName != null && removeSimulationName !== '')
		vals['removeSimulationName'] = removeSimulationName;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val() === 'true';
	var setSmartTrafficLightName = removeSmartTrafficLightName ? null : $formValues.find('.setSmartTrafficLightName').val();
	var addSmartTrafficLightName = $formValues.find('.addSmartTrafficLightName').val();
	if(removeSmartTrafficLightName || setSmartTrafficLightName != null && setSmartTrafficLightName !== '')
		vals['setSmartTrafficLightName'] = setSmartTrafficLightName;
	if(addSmartTrafficLightName != null && addSmartTrafficLightName !== '')
		vals['addSmartTrafficLightName'] = addSmartTrafficLightName;
	var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val();
	if(removeSmartTrafficLightName != null && removeSmartTrafficLightName !== '')
		vals['removeSmartTrafficLightName'] = removeSmartTrafficLightName;

	var valueParamDemandScale = $formValues.find('.valueParamDemandScale').val();
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val() === 'true';
	var setParamDemandScale = removeParamDemandScale ? null : $formValues.find('.setParamDemandScale').val();
	var addParamDemandScale = $formValues.find('.addParamDemandScale').val();
	if(removeParamDemandScale || setParamDemandScale != null && setParamDemandScale !== '')
		vals['setParamDemandScale'] = setParamDemandScale;
	if(addParamDemandScale != null && addParamDemandScale !== '')
		vals['addParamDemandScale'] = addParamDemandScale;
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val();
	if(removeParamDemandScale != null && removeParamDemandScale !== '')
		vals['removeParamDemandScale'] = removeParamDemandScale;

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val() === 'true';
	var setUpdatedPerformance = removeUpdatedPerformance ? null : $formValues.find('.setUpdatedPerformance').val();
	var addUpdatedPerformance = $formValues.find('.addUpdatedPerformance').val();
	if(removeUpdatedPerformance || setUpdatedPerformance != null && setUpdatedPerformance !== '')
		vals['setUpdatedPerformance'] = setUpdatedPerformance;
	if(addUpdatedPerformance != null && addUpdatedPerformance !== '')
		vals['addUpdatedPerformance'] = addUpdatedPerformance;
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val();
	if(removeUpdatedPerformance != null && removeUpdatedPerformance !== '')
		vals['removeUpdatedPerformance'] = removeUpdatedPerformance;

	patchrunsimulationSimulationReportVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchrunsimulationSimulationReportFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterReportName = $formFilters.find('.valueReportName').val();
		if(filterReportName != null && filterReportName !== '')
			filters.push({ name: 'fq', value: 'reportName:' + filterReportName });

		var filterSimulationKey = $formFilters.find('.valueSimulationKey').val();
		if(filterSimulationKey != null && filterSimulationKey !== '')
			filters.push({ name: 'fq', value: 'simulationKey:' + filterSimulationKey });

		var filterSmartTrafficLightKey = $formFilters.find('.valueSmartTrafficLightKey').val();
		if(filterSmartTrafficLightKey != null && filterSmartTrafficLightKey !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightKey:' + filterSmartTrafficLightKey });

		var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
		if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

		var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
		if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

		var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
		if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

		var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
		if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

		var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
		if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
			filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

		var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
		if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

		var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
		if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

		var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
		if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

		var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
		if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

		var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
		if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

		var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
		if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

		var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
		if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

		var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
		if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

		var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
		if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
			filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

		var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
		if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

		var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
		if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
			filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

		var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
		if(filterParamStepSize != null && filterParamStepSize !== '')
			filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

		var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
		if(filterParamRunTime != null && filterParamRunTime !== '')
			filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

		var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
		if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
			filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

		var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
		if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
			filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterUpdatedPerformanceWaitWestEastVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
		if(filterUpdatedPerformanceWaitWestEastVehicleSec != null && filterUpdatedPerformanceWaitWestEastVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitWestEastVehicleSec:' + filterUpdatedPerformanceWaitWestEastVehicleSec });

		var filterUpdatedPerformanceWaitSouthNorthVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
		if(filterUpdatedPerformanceWaitSouthNorthVehicleSec != null && filterUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitSouthNorthVehicleSec:' + filterUpdatedPerformanceWaitSouthNorthVehicleSec });

		var filterUpdatedPerformanceWaitAllVehicleSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
		if(filterUpdatedPerformanceWaitAllVehicleSec != null && filterUpdatedPerformanceWaitAllVehicleSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehicleSec:' + filterUpdatedPerformanceWaitAllVehicleSec });

		var filterUpdatedPerformanceWaitAllPedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllPedestrianSec != null && filterUpdatedPerformanceWaitAllPedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllPedestrianSec:' + filterUpdatedPerformanceWaitAllPedestrianSec });

		var filterUpdatedPerformanceWaitAllVehiclePedestrianSec = $formFilters.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
		if(filterUpdatedPerformanceWaitAllVehiclePedestrianSec != null && filterUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
			filters.push({ name: 'fq', value: 'updatedPerformanceWaitAllVehiclePedestrianSec:' + filterUpdatedPerformanceWaitAllVehiclePedestrianSec });

		var filterAvgQueueLengthWestEastVehicle = $formFilters.find('.valueAvgQueueLengthWestEastVehicle').val();
		if(filterAvgQueueLengthWestEastVehicle != null && filterAvgQueueLengthWestEastVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastVehicle:' + filterAvgQueueLengthWestEastVehicle });

		var filterAvgQueueLengthSouthNorthVehicle = $formFilters.find('.valueAvgQueueLengthSouthNorthVehicle').val();
		if(filterAvgQueueLengthSouthNorthVehicle != null && filterAvgQueueLengthSouthNorthVehicle !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthSouthNorthVehicle:' + filterAvgQueueLengthSouthNorthVehicle });

		var filterAvgQueueLengthNorthSouthPedestrian = $formFilters.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
		if(filterAvgQueueLengthNorthSouthPedestrian != null && filterAvgQueueLengthNorthSouthPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthNorthSouthPedestrian:' + filterAvgQueueLengthNorthSouthPedestrian });

		var filterAvgQueueLengthWestEastPedestrian = $formFilters.find('.valueAvgQueueLengthWestEastPedestrian').val();
		if(filterAvgQueueLengthWestEastPedestrian != null && filterAvgQueueLengthWestEastPedestrian !== '')
			filters.push({ name: 'fq', value: 'avgQueueLengthWestEastPedestrian:' + filterAvgQueueLengthWestEastPedestrian });

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

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
		if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

		var filterParamLam = $formFilters.find('.valueParamLam').val();
		if(filterParamLam != null && filterParamLam !== '')
			filters.push({ name: 'fq', value: 'paramLam:' + filterParamLam });

		var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
		if(filterParamDemandScale != null && filterParamDemandScale !== '')
			filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });

		var filterParamInitialPar = $formFilters.find('.valueParamInitialPar').val();
		if(filterParamInitialPar != null && filterParamInitialPar !== '')
			filters.push({ name: 'fq', value: 'paramInitialPar:' + filterParamInitialPar });

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });
	}
	return filters;
}

function patchrunsimulationSimulationReportVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchrunsimulationSimulationReportVals(filters, vals, success, error);
}

function patchrunsimulationSimulationReportVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/run-simulation-report?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketSimulationReport(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSimulationReport', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SimulationReportForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-file-chart-column w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify simulation reports in ' + json.timeRemaining);
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

		window.eventBus.registerHandler('websocketTrafficSimulation', function (error, message) {
			$('#Page_simulationKey').trigger('oninput');
			$('#Page_simulationKey_add').text('add a traffic simulation');
			$('#Page_simulationKey_add').removeClass('w3-disabled');
			$('#Page_simulationKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSmartTrafficLight', function (error, message) {
			$('#Page_smartTrafficLightKey').trigger('oninput');
			$('#Page_smartTrafficLightKey_add').text('add a smart traffic light');
			$('#Page_smartTrafficLightKey_add').removeClass('w3-disabled');
			$('#Page_smartTrafficLightKey_add').attr('disabled', false);
		});
	}
}
async function websocketSimulationReportInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSimulationReportVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSimulationReport' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSimulationReport' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSimulationReport' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSimulationReport' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSimulationReport' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSimulationReport' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['reportName'];
			if(vars.includes('reportName')) {
				$('.inputSimulationReport' + pk + 'ReportName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ReportName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['simulationKey'];
			if(vars.includes('simulationKey')) {
				$('.inputSimulationReport' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['smartTrafficLightKey'];
			if(vars.includes('smartTrafficLightKey')) {
				$('.inputSimulationReport' + pk + 'SmartTrafficLightKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'SmartTrafficLightKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgVehiclePerMinFromWestToEast'];
			if(vars.includes('paramAvgVehiclePerMinFromWestToEast')) {
				$('.inputSimulationReport' + pk + 'ParamAvgVehiclePerMinFromWestToEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamAvgVehiclePerMinFromWestToEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgVehiclePerMinFromSouthToNorth'];
			if(vars.includes('paramAvgVehiclePerMinFromSouthToNorth')) {
				$('.inputSimulationReport' + pk + 'ParamAvgVehiclePerMinFromSouthToNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamAvgVehiclePerMinFromSouthToNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleDemandScalingFactor'];
			if(vars.includes('paramVehicleDemandScalingFactor')) {
				$('.inputSimulationReport' + pk + 'ParamVehicleDemandScalingFactor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamVehicleDemandScalingFactor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgPedestrianPerMinFromWestToEast'];
			if(vars.includes('paramAvgPedestrianPerMinFromWestToEast')) {
				$('.inputSimulationReport' + pk + 'ParamAvgPedestrianPerMinFromWestToEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamAvgPedestrianPerMinFromWestToEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramAvgPedestrianPerMinFromSouthToNorth'];
			if(vars.includes('paramAvgPedestrianPerMinFromSouthToNorth')) {
				$('.inputSimulationReport' + pk + 'ParamAvgPedestrianPerMinFromSouthToNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamAvgPedestrianPerMinFromSouthToNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianDemandScalingFactor'];
			if(vars.includes('paramPedestrianDemandScalingFactor')) {
				$('.inputSimulationReport' + pk + 'ParamPedestrianDemandScalingFactor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamPedestrianDemandScalingFactor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMinGreenTimeSecWestEast'];
			if(vars.includes('paramMinGreenTimeSecWestEast')) {
				$('.inputSimulationReport' + pk + 'ParamMinGreenTimeSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamMinGreenTimeSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMaxGreenTimeSecWestEast'];
			if(vars.includes('paramMaxGreenTimeSecWestEast')) {
				$('.inputSimulationReport' + pk + 'ParamMaxGreenTimeSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamMaxGreenTimeSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMinGreenTimeSecSouthNorth'];
			if(vars.includes('paramMinGreenTimeSecSouthNorth')) {
				$('.inputSimulationReport' + pk + 'ParamMinGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamMinGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramMaxGreenTimeSecSouthNorth'];
			if(vars.includes('paramMaxGreenTimeSecSouthNorth')) {
				$('.inputSimulationReport' + pk + 'ParamMaxGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamMaxGreenTimeSecSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianWaitThresholdSecNorthSouth'];
			if(vars.includes('paramPedestrianWaitThresholdSecNorthSouth')) {
				$('.inputSimulationReport' + pk + 'ParamPedestrianWaitThresholdSecNorthSouth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamPedestrianWaitThresholdSecNorthSouth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianWaitThresholdSecWestEast'];
			if(vars.includes('paramPedestrianWaitThresholdSecWestEast')) {
				$('.inputSimulationReport' + pk + 'ParamPedestrianWaitThresholdSecWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamPedestrianWaitThresholdSecWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleQueueThresholdWestEast'];
			if(vars.includes('paramVehicleQueueThresholdWestEast')) {
				$('.inputSimulationReport' + pk + 'ParamVehicleQueueThresholdWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamVehicleQueueThresholdWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramVehicleQueueThresholdSouthNorth'];
			if(vars.includes('paramVehicleQueueThresholdSouthNorth')) {
				$('.inputSimulationReport' + pk + 'ParamVehicleQueueThresholdSouthNorth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamVehicleQueueThresholdSouthNorth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianQueueThresholdNorthSouth'];
			if(vars.includes('paramPedestrianQueueThresholdNorthSouth')) {
				$('.inputSimulationReport' + pk + 'ParamPedestrianQueueThresholdNorthSouth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamPedestrianQueueThresholdNorthSouth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramPedestrianQueueThresholdWestEast'];
			if(vars.includes('paramPedestrianQueueThresholdWestEast')) {
				$('.inputSimulationReport' + pk + 'ParamPedestrianQueueThresholdWestEast').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamPedestrianQueueThresholdWestEast').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramStepSize'];
			if(vars.includes('paramStepSize')) {
				$('.inputSimulationReport' + pk + 'ParamStepSize').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamStepSize').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramRunTime'];
			if(vars.includes('paramRunTime')) {
				$('.inputSimulationReport' + pk + 'ParamRunTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamRunTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramItersPerPar'];
			if(vars.includes('paramItersPerPar')) {
				$('.inputSimulationReport' + pk + 'ParamItersPerPar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamItersPerPar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramTotalIterNum'];
			if(vars.includes('paramTotalIterNum')) {
				$('.inputSimulationReport' + pk + 'ParamTotalIterNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamTotalIterNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['reportStatus'];
			if(vars.includes('reportStatus')) {
				$('.inputSimulationReport' + pk + 'ReportStatus').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ReportStatus').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['reportProgress'];
			if(vars.includes('reportProgress')) {
				$('.inputSimulationReport' + pk + 'ReportProgress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ReportProgress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['updatedParameters'];
			if(vars.includes('updatedParameters')) {
				$('.inputSimulationReport' + pk + 'UpdatedParameters').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedParameters').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['updatedPerformanceWaitWestEastVehicleSec'];
			if(vars.includes('updatedPerformanceWaitWestEastVehicleSec')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformanceWaitWestEastVehicleSec').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformanceWaitWestEastVehicleSec').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['updatedPerformanceWaitSouthNorthVehicleSec'];
			if(vars.includes('updatedPerformanceWaitSouthNorthVehicleSec')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformanceWaitSouthNorthVehicleSec').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformanceWaitSouthNorthVehicleSec').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['updatedPerformanceWaitAllVehicleSec'];
			if(vars.includes('updatedPerformanceWaitAllVehicleSec')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformanceWaitAllVehicleSec').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformanceWaitAllVehicleSec').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['updatedPerformanceWaitAllPedestrianSec'];
			if(vars.includes('updatedPerformanceWaitAllPedestrianSec')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformanceWaitAllPedestrianSec').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformanceWaitAllPedestrianSec').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['updatedPerformanceWaitAllVehiclePedestrianSec'];
			if(vars.includes('updatedPerformanceWaitAllVehiclePedestrianSec')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformanceWaitAllVehiclePedestrianSec').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformanceWaitAllVehiclePedestrianSec').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['avgQueueLengthWestEastVehicle'];
			if(vars.includes('avgQueueLengthWestEastVehicle')) {
				$('.inputSimulationReport' + pk + 'AvgQueueLengthWestEastVehicle').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'AvgQueueLengthWestEastVehicle').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['avgQueueLengthSouthNorthVehicle'];
			if(vars.includes('avgQueueLengthSouthNorthVehicle')) {
				$('.inputSimulationReport' + pk + 'AvgQueueLengthSouthNorthVehicle').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'AvgQueueLengthSouthNorthVehicle').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['avgQueueLengthNorthSouthPedestrian'];
			if(vars.includes('avgQueueLengthNorthSouthPedestrian')) {
				$('.inputSimulationReport' + pk + 'AvgQueueLengthNorthSouthPedestrian').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'AvgQueueLengthNorthSouthPedestrian').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['avgQueueLengthWestEastPedestrian'];
			if(vars.includes('avgQueueLengthWestEastPedestrian')) {
				$('.inputSimulationReport' + pk + 'AvgQueueLengthWestEastPedestrian').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'AvgQueueLengthWestEastPedestrian').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSimulationReport' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSimulationReport' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSimulationReport' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSimulationReport' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSimulationReport' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSimulationReport' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSimulationReport' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSimulationReport' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSimulationReport' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSimulationReport' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSimulationReport' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSimulationReport' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSimulationReport' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSimulationReport' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['simulationName'];
			if(vars.includes('simulationName')) {
				$('.inputSimulationReport' + pk + 'SimulationName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'SimulationName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['smartTrafficLightName'];
			if(vars.includes('smartTrafficLightName')) {
				$('.inputSimulationReport' + pk + 'SmartTrafficLightName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'SmartTrafficLightName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramLam'];
			if(vars.includes('paramLam')) {
				$('.inputSimulationReport' + pk + 'ParamLam').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamLam').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramDemandScale'];
			if(vars.includes('paramDemandScale')) {
				$('.inputSimulationReport' + pk + 'ParamDemandScale').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamDemandScale').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['paramInitialPar'];
			if(vars.includes('paramInitialPar')) {
				$('.inputSimulationReport' + pk + 'ParamInitialPar').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'ParamInitialPar').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
						addGlow($(this));
				});
			}
			var val = o['updatedPerformance'];
			if(vars.includes('updatedPerformance')) {
				$('.inputSimulationReport' + pk + 'UpdatedPerformance').each(function() {
					if(val !== $(this).val())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
				$('.varSimulationReport' + pk + 'UpdatedPerformance').each(function() {
					if(val !== $(this).text())
						$(this).val(JSON.stringify(val));
						addGlow($(this));
				});
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
							colors.push('fuchsia');
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
					layout['title'] = 'SimulationReport';
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
				Plotly.react('htmBodyGraphBaseModelPage', data, layout);
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
	$('#fqSimulationReport_time').val(x);
	$('#fqSimulationReport_time').change();
	searchPage();
	}, speedRate);
}
