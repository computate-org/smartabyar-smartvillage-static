
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

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

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

		var filterUpdatedParameters1 = $formFilters.find('.valueUpdatedParameters1').val();
		if(filterUpdatedParameters1 != null && filterUpdatedParameters1 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters1:' + filterUpdatedParameters1 });

		var filterUpdatedParameters2 = $formFilters.find('.valueUpdatedParameters2').val();
		if(filterUpdatedParameters2 != null && filterUpdatedParameters2 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters2:' + filterUpdatedParameters2 });

		var filterUpdatedParameters3 = $formFilters.find('.valueUpdatedParameters3').val();
		if(filterUpdatedParameters3 != null && filterUpdatedParameters3 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters3:' + filterUpdatedParameters3 });

		var filterUpdatedParameters4 = $formFilters.find('.valueUpdatedParameters4').val();
		if(filterUpdatedParameters4 != null && filterUpdatedParameters4 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters4:' + filterUpdatedParameters4 });

		var filterUpdatedParameters5 = $formFilters.find('.valueUpdatedParameters5').val();
		if(filterUpdatedParameters5 != null && filterUpdatedParameters5 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters5:' + filterUpdatedParameters5 });

		var filterUpdatedParameters6 = $formFilters.find('.valueUpdatedParameters6').val();
		if(filterUpdatedParameters6 != null && filterUpdatedParameters6 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters6:' + filterUpdatedParameters6 });

		var filterUpdatedParameters7 = $formFilters.find('.valueUpdatedParameters7').val();
		if(filterUpdatedParameters7 != null && filterUpdatedParameters7 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters7:' + filterUpdatedParameters7 });

		var filterUpdatedParameters8 = $formFilters.find('.valueUpdatedParameters8').val();
		if(filterUpdatedParameters8 != null && filterUpdatedParameters8 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters8:' + filterUpdatedParameters8 });

		var filterUpdatedParameters9 = $formFilters.find('.valueUpdatedParameters9').val();
		if(filterUpdatedParameters9 != null && filterUpdatedParameters9 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters9:' + filterUpdatedParameters9 });

		var filterUpdatedParameters10 = $formFilters.find('.valueUpdatedParameters10').val();
		if(filterUpdatedParameters10 != null && filterUpdatedParameters10 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters10:' + filterUpdatedParameters10 });

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

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });

		var filterAreaServed = $formFilters.find('.valueAreaServed').val();
		if(filterAreaServed != null && filterAreaServed !== '')
			filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightId = $formFilters.find('.valueSmartTrafficLightId').val();
		if(filterSmartTrafficLightId != null && filterSmartTrafficLightId !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightId:' + filterSmartTrafficLightId });

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

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterAverageQueueLength = $formFilters.find('.valueAverageQueueLength').val();
		if(filterAverageQueueLength != null && filterAverageQueueLength !== '')
			filters.push({ name: 'fq', value: 'averageQueueLength:' + filterAverageQueueLength });
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

	var valueLocation = $formValues.find('.valueLocation').val();
	var removeLocation = $formValues.find('.removeLocation').val() === 'true';
	var setLocation = removeLocation ? null : $formValues.find('.setLocation').val();
	var addLocation = $formValues.find('.addLocation').val();
	if(removeLocation || setLocation != null && setLocation !== '')
		vals['setLocation'] = setLocation;
	if(addLocation != null && addLocation !== '')
		vals['addLocation'] = addLocation;
	var removeLocation = $formValues.find('.removeLocation').val();
	if(removeLocation != null && removeLocation !== '')
		vals['removeLocation'] = removeLocation;

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

	var valueUpdatedParameters1 = $formValues.find('.valueUpdatedParameters1').val();
	var removeUpdatedParameters1 = $formValues.find('.removeUpdatedParameters1').val() === 'true';
	var setUpdatedParameters1 = removeUpdatedParameters1 ? null : $formValues.find('.setUpdatedParameters1').val();
	var addUpdatedParameters1 = $formValues.find('.addUpdatedParameters1').val();
	if(removeUpdatedParameters1 || setUpdatedParameters1 != null && setUpdatedParameters1 !== '')
		vals['setUpdatedParameters1'] = JSON.parse(setUpdatedParameters1);
	if(addUpdatedParameters1 != null && addUpdatedParameters1 !== '')
		vals['addUpdatedParameters1'] = addUpdatedParameters1;
	var removeUpdatedParameters1 = $formValues.find('.removeUpdatedParameters1').val();
	if(removeUpdatedParameters1 != null && removeUpdatedParameters1 !== '')
		vals['removeUpdatedParameters1'] = removeUpdatedParameters1;

	var valueUpdatedParameters2 = $formValues.find('.valueUpdatedParameters2').val();
	var removeUpdatedParameters2 = $formValues.find('.removeUpdatedParameters2').val() === 'true';
	var setUpdatedParameters2 = removeUpdatedParameters2 ? null : $formValues.find('.setUpdatedParameters2').val();
	var addUpdatedParameters2 = $formValues.find('.addUpdatedParameters2').val();
	if(removeUpdatedParameters2 || setUpdatedParameters2 != null && setUpdatedParameters2 !== '')
		vals['setUpdatedParameters2'] = JSON.parse(setUpdatedParameters2);
	if(addUpdatedParameters2 != null && addUpdatedParameters2 !== '')
		vals['addUpdatedParameters2'] = addUpdatedParameters2;
	var removeUpdatedParameters2 = $formValues.find('.removeUpdatedParameters2').val();
	if(removeUpdatedParameters2 != null && removeUpdatedParameters2 !== '')
		vals['removeUpdatedParameters2'] = removeUpdatedParameters2;

	var valueUpdatedParameters3 = $formValues.find('.valueUpdatedParameters3').val();
	var removeUpdatedParameters3 = $formValues.find('.removeUpdatedParameters3').val() === 'true';
	var setUpdatedParameters3 = removeUpdatedParameters3 ? null : $formValues.find('.setUpdatedParameters3').val();
	var addUpdatedParameters3 = $formValues.find('.addUpdatedParameters3').val();
	if(removeUpdatedParameters3 || setUpdatedParameters3 != null && setUpdatedParameters3 !== '')
		vals['setUpdatedParameters3'] = JSON.parse(setUpdatedParameters3);
	if(addUpdatedParameters3 != null && addUpdatedParameters3 !== '')
		vals['addUpdatedParameters3'] = addUpdatedParameters3;
	var removeUpdatedParameters3 = $formValues.find('.removeUpdatedParameters3').val();
	if(removeUpdatedParameters3 != null && removeUpdatedParameters3 !== '')
		vals['removeUpdatedParameters3'] = removeUpdatedParameters3;

	var valueUpdatedParameters4 = $formValues.find('.valueUpdatedParameters4').val();
	var removeUpdatedParameters4 = $formValues.find('.removeUpdatedParameters4').val() === 'true';
	var setUpdatedParameters4 = removeUpdatedParameters4 ? null : $formValues.find('.setUpdatedParameters4').val();
	var addUpdatedParameters4 = $formValues.find('.addUpdatedParameters4').val();
	if(removeUpdatedParameters4 || setUpdatedParameters4 != null && setUpdatedParameters4 !== '')
		vals['setUpdatedParameters4'] = JSON.parse(setUpdatedParameters4);
	if(addUpdatedParameters4 != null && addUpdatedParameters4 !== '')
		vals['addUpdatedParameters4'] = addUpdatedParameters4;
	var removeUpdatedParameters4 = $formValues.find('.removeUpdatedParameters4').val();
	if(removeUpdatedParameters4 != null && removeUpdatedParameters4 !== '')
		vals['removeUpdatedParameters4'] = removeUpdatedParameters4;

	var valueUpdatedParameters5 = $formValues.find('.valueUpdatedParameters5').val();
	var removeUpdatedParameters5 = $formValues.find('.removeUpdatedParameters5').val() === 'true';
	var setUpdatedParameters5 = removeUpdatedParameters5 ? null : $formValues.find('.setUpdatedParameters5').val();
	var addUpdatedParameters5 = $formValues.find('.addUpdatedParameters5').val();
	if(removeUpdatedParameters5 || setUpdatedParameters5 != null && setUpdatedParameters5 !== '')
		vals['setUpdatedParameters5'] = JSON.parse(setUpdatedParameters5);
	if(addUpdatedParameters5 != null && addUpdatedParameters5 !== '')
		vals['addUpdatedParameters5'] = addUpdatedParameters5;
	var removeUpdatedParameters5 = $formValues.find('.removeUpdatedParameters5').val();
	if(removeUpdatedParameters5 != null && removeUpdatedParameters5 !== '')
		vals['removeUpdatedParameters5'] = removeUpdatedParameters5;

	var valueUpdatedParameters6 = $formValues.find('.valueUpdatedParameters6').val();
	var removeUpdatedParameters6 = $formValues.find('.removeUpdatedParameters6').val() === 'true';
	var setUpdatedParameters6 = removeUpdatedParameters6 ? null : $formValues.find('.setUpdatedParameters6').val();
	var addUpdatedParameters6 = $formValues.find('.addUpdatedParameters6').val();
	if(removeUpdatedParameters6 || setUpdatedParameters6 != null && setUpdatedParameters6 !== '')
		vals['setUpdatedParameters6'] = JSON.parse(setUpdatedParameters6);
	if(addUpdatedParameters6 != null && addUpdatedParameters6 !== '')
		vals['addUpdatedParameters6'] = addUpdatedParameters6;
	var removeUpdatedParameters6 = $formValues.find('.removeUpdatedParameters6').val();
	if(removeUpdatedParameters6 != null && removeUpdatedParameters6 !== '')
		vals['removeUpdatedParameters6'] = removeUpdatedParameters6;

	var valueUpdatedParameters7 = $formValues.find('.valueUpdatedParameters7').val();
	var removeUpdatedParameters7 = $formValues.find('.removeUpdatedParameters7').val() === 'true';
	var setUpdatedParameters7 = removeUpdatedParameters7 ? null : $formValues.find('.setUpdatedParameters7').val();
	var addUpdatedParameters7 = $formValues.find('.addUpdatedParameters7').val();
	if(removeUpdatedParameters7 || setUpdatedParameters7 != null && setUpdatedParameters7 !== '')
		vals['setUpdatedParameters7'] = JSON.parse(setUpdatedParameters7);
	if(addUpdatedParameters7 != null && addUpdatedParameters7 !== '')
		vals['addUpdatedParameters7'] = addUpdatedParameters7;
	var removeUpdatedParameters7 = $formValues.find('.removeUpdatedParameters7').val();
	if(removeUpdatedParameters7 != null && removeUpdatedParameters7 !== '')
		vals['removeUpdatedParameters7'] = removeUpdatedParameters7;

	var valueUpdatedParameters8 = $formValues.find('.valueUpdatedParameters8').val();
	var removeUpdatedParameters8 = $formValues.find('.removeUpdatedParameters8').val() === 'true';
	var setUpdatedParameters8 = removeUpdatedParameters8 ? null : $formValues.find('.setUpdatedParameters8').val();
	var addUpdatedParameters8 = $formValues.find('.addUpdatedParameters8').val();
	if(removeUpdatedParameters8 || setUpdatedParameters8 != null && setUpdatedParameters8 !== '')
		vals['setUpdatedParameters8'] = JSON.parse(setUpdatedParameters8);
	if(addUpdatedParameters8 != null && addUpdatedParameters8 !== '')
		vals['addUpdatedParameters8'] = addUpdatedParameters8;
	var removeUpdatedParameters8 = $formValues.find('.removeUpdatedParameters8').val();
	if(removeUpdatedParameters8 != null && removeUpdatedParameters8 !== '')
		vals['removeUpdatedParameters8'] = removeUpdatedParameters8;

	var valueUpdatedParameters9 = $formValues.find('.valueUpdatedParameters9').val();
	var removeUpdatedParameters9 = $formValues.find('.removeUpdatedParameters9').val() === 'true';
	var setUpdatedParameters9 = removeUpdatedParameters9 ? null : $formValues.find('.setUpdatedParameters9').val();
	var addUpdatedParameters9 = $formValues.find('.addUpdatedParameters9').val();
	if(removeUpdatedParameters9 || setUpdatedParameters9 != null && setUpdatedParameters9 !== '')
		vals['setUpdatedParameters9'] = JSON.parse(setUpdatedParameters9);
	if(addUpdatedParameters9 != null && addUpdatedParameters9 !== '')
		vals['addUpdatedParameters9'] = addUpdatedParameters9;
	var removeUpdatedParameters9 = $formValues.find('.removeUpdatedParameters9').val();
	if(removeUpdatedParameters9 != null && removeUpdatedParameters9 !== '')
		vals['removeUpdatedParameters9'] = removeUpdatedParameters9;

	var valueUpdatedParameters10 = $formValues.find('.valueUpdatedParameters10').val();
	var removeUpdatedParameters10 = $formValues.find('.removeUpdatedParameters10').val() === 'true';
	var setUpdatedParameters10 = removeUpdatedParameters10 ? null : $formValues.find('.setUpdatedParameters10').val();
	var addUpdatedParameters10 = $formValues.find('.addUpdatedParameters10').val();
	if(removeUpdatedParameters10 || setUpdatedParameters10 != null && setUpdatedParameters10 !== '')
		vals['setUpdatedParameters10'] = JSON.parse(setUpdatedParameters10);
	if(addUpdatedParameters10 != null && addUpdatedParameters10 !== '')
		vals['addUpdatedParameters10'] = addUpdatedParameters10;
	var removeUpdatedParameters10 = $formValues.find('.removeUpdatedParameters10').val();
	if(removeUpdatedParameters10 != null && removeUpdatedParameters10 !== '')
		vals['removeUpdatedParameters10'] = removeUpdatedParameters10;

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitWestEastVehicleSec = removeUpdatedPerformanceWaitWestEastVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitWestEastVehicleSec').val();
	var addUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.addUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec || setUpdatedPerformanceWaitWestEastVehicleSec != null && setUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['setUpdatedPerformanceWaitWestEastVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitWestEastVehicleSec);
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
		vals['setUpdatedPerformanceWaitSouthNorthVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitSouthNorthVehicleSec);
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
		vals['setUpdatedPerformanceWaitAllVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitAllVehicleSec);
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
		vals['setUpdatedPerformanceWaitAllPedestrianSec'] = JSON.parse(setUpdatedPerformanceWaitAllPedestrianSec);
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
		vals['setUpdatedPerformanceWaitAllVehiclePedestrianSec'] = JSON.parse(setUpdatedPerformanceWaitAllVehiclePedestrianSec);
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
		vals['setAvgQueueLengthWestEastVehicle'] = JSON.parse(setAvgQueueLengthWestEastVehicle);
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
		vals['setAvgQueueLengthSouthNorthVehicle'] = JSON.parse(setAvgQueueLengthSouthNorthVehicle);
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
		vals['setAvgQueueLengthNorthSouthPedestrian'] = JSON.parse(setAvgQueueLengthNorthSouthPedestrian);
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
		vals['setAvgQueueLengthWestEastPedestrian'] = JSON.parse(setAvgQueueLengthWestEastPedestrian);
	if(addAvgQueueLengthWestEastPedestrian != null && addAvgQueueLengthWestEastPedestrian !== '')
		vals['addAvgQueueLengthWestEastPedestrian'] = addAvgQueueLengthWestEastPedestrian;
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian != null && removeAvgQueueLengthWestEastPedestrian !== '')
		vals['removeAvgQueueLengthWestEastPedestrian'] = removeAvgQueueLengthWestEastPedestrian;

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

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val() === 'true';
	var setUpdatedPerformance = removeUpdatedPerformance ? null : $formValues.find('.setUpdatedPerformance').val();
	var addUpdatedPerformance = $formValues.find('.addUpdatedPerformance').val();
	if(removeUpdatedPerformance || setUpdatedPerformance != null && setUpdatedPerformance !== '')
		vals['setUpdatedPerformance'] = JSON.parse(setUpdatedPerformance);
	if(addUpdatedPerformance != null && addUpdatedPerformance !== '')
		vals['addUpdatedPerformance'] = addUpdatedPerformance;
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val();
	if(removeUpdatedPerformance != null && removeUpdatedPerformance !== '')
		vals['removeUpdatedPerformance'] = removeUpdatedPerformance;

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

	var valueSmartTrafficLightId = $formValues.find('.valueSmartTrafficLightId').val();
	var removeSmartTrafficLightId = $formValues.find('.removeSmartTrafficLightId').val() === 'true';
	var setSmartTrafficLightId = removeSmartTrafficLightId ? null : $formValues.find('.setSmartTrafficLightId').val();
	var addSmartTrafficLightId = $formValues.find('.addSmartTrafficLightId').val();
	if(removeSmartTrafficLightId || setSmartTrafficLightId != null && setSmartTrafficLightId !== '')
		vals['setSmartTrafficLightId'] = setSmartTrafficLightId;
	if(addSmartTrafficLightId != null && addSmartTrafficLightId !== '')
		vals['addSmartTrafficLightId'] = addSmartTrafficLightId;
	var removeSmartTrafficLightId = $formValues.find('.removeSmartTrafficLightId').val();
	if(removeSmartTrafficLightId != null && removeSmartTrafficLightId !== '')
		vals['removeSmartTrafficLightId'] = removeSmartTrafficLightId;

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
		vals['setParamDemandScale'] = JSON.parse(setParamDemandScale);
	if(addParamDemandScale != null && addParamDemandScale !== '')
		vals['addParamDemandScale'] = addParamDemandScale;
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val();
	if(removeParamDemandScale != null && removeParamDemandScale !== '')
		vals['removeParamDemandScale'] = removeParamDemandScale;

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val() === 'true';
	var setUpdatedParameters = removeUpdatedParameters ? null : $formValues.find('.setUpdatedParameters').val();
	var addUpdatedParameters = $formValues.find('.addUpdatedParameters').val();
	if(removeUpdatedParameters || setUpdatedParameters != null && setUpdatedParameters !== '')
		vals['setUpdatedParameters'] = JSON.parse(setUpdatedParameters);
	if(addUpdatedParameters != null && addUpdatedParameters !== '')
		vals['addUpdatedParameters'] = addUpdatedParameters;
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val();
	if(removeUpdatedParameters != null && removeUpdatedParameters !== '')
		vals['removeUpdatedParameters'] = removeUpdatedParameters;

	var valueAverageQueueLength = $formValues.find('.valueAverageQueueLength').val();
	var removeAverageQueueLength = $formValues.find('.removeAverageQueueLength').val() === 'true';
	var setAverageQueueLength = removeAverageQueueLength ? null : $formValues.find('.setAverageQueueLength').val();
	var addAverageQueueLength = $formValues.find('.addAverageQueueLength').val();
	if(removeAverageQueueLength || setAverageQueueLength != null && setAverageQueueLength !== '')
		vals['setAverageQueueLength'] = JSON.parse(setAverageQueueLength);
	if(addAverageQueueLength != null && addAverageQueueLength !== '')
		vals['addAverageQueueLength'] = addAverageQueueLength;
	var removeAverageQueueLength = $formValues.find('.removeAverageQueueLength').val();
	if(removeAverageQueueLength != null && removeAverageQueueLength !== '')
		vals['removeAverageQueueLength'] = removeAverageQueueLength;

	patchSimulationReportVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSimulationReportFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

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

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

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

		var filterUpdatedParameters1 = $formFilters.find('.valueUpdatedParameters1').val();
		if(filterUpdatedParameters1 != null && filterUpdatedParameters1 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters1:' + filterUpdatedParameters1 });

		var filterUpdatedParameters2 = $formFilters.find('.valueUpdatedParameters2').val();
		if(filterUpdatedParameters2 != null && filterUpdatedParameters2 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters2:' + filterUpdatedParameters2 });

		var filterUpdatedParameters3 = $formFilters.find('.valueUpdatedParameters3').val();
		if(filterUpdatedParameters3 != null && filterUpdatedParameters3 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters3:' + filterUpdatedParameters3 });

		var filterUpdatedParameters4 = $formFilters.find('.valueUpdatedParameters4').val();
		if(filterUpdatedParameters4 != null && filterUpdatedParameters4 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters4:' + filterUpdatedParameters4 });

		var filterUpdatedParameters5 = $formFilters.find('.valueUpdatedParameters5').val();
		if(filterUpdatedParameters5 != null && filterUpdatedParameters5 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters5:' + filterUpdatedParameters5 });

		var filterUpdatedParameters6 = $formFilters.find('.valueUpdatedParameters6').val();
		if(filterUpdatedParameters6 != null && filterUpdatedParameters6 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters6:' + filterUpdatedParameters6 });

		var filterUpdatedParameters7 = $formFilters.find('.valueUpdatedParameters7').val();
		if(filterUpdatedParameters7 != null && filterUpdatedParameters7 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters7:' + filterUpdatedParameters7 });

		var filterUpdatedParameters8 = $formFilters.find('.valueUpdatedParameters8').val();
		if(filterUpdatedParameters8 != null && filterUpdatedParameters8 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters8:' + filterUpdatedParameters8 });

		var filterUpdatedParameters9 = $formFilters.find('.valueUpdatedParameters9').val();
		if(filterUpdatedParameters9 != null && filterUpdatedParameters9 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters9:' + filterUpdatedParameters9 });

		var filterUpdatedParameters10 = $formFilters.find('.valueUpdatedParameters10').val();
		if(filterUpdatedParameters10 != null && filterUpdatedParameters10 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters10:' + filterUpdatedParameters10 });

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

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });

		var filterAreaServed = $formFilters.find('.valueAreaServed').val();
		if(filterAreaServed != null && filterAreaServed !== '')
			filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightId = $formFilters.find('.valueSmartTrafficLightId').val();
		if(filterSmartTrafficLightId != null && filterSmartTrafficLightId !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightId:' + filterSmartTrafficLightId });

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

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterAverageQueueLength = $formFilters.find('.valueAverageQueueLength').val();
		if(filterAverageQueueLength != null && filterAverageQueueLength !== '')
			filters.push({ name: 'fq', value: 'averageQueueLength:' + filterAverageQueueLength });
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

	var valueLocation = $formValues.find('.valueLocation').val();
	if(valueLocation != null && valueLocation !== '')
		vals['location'] = valueLocation;

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

	var valueUpdatedParameters1 = $formValues.find('.valueUpdatedParameters1').val();
	if(valueUpdatedParameters1 != null && valueUpdatedParameters1 !== '')
		vals['updatedParameters1'] = JSON.parse(valueUpdatedParameters1);

	var valueUpdatedParameters2 = $formValues.find('.valueUpdatedParameters2').val();
	if(valueUpdatedParameters2 != null && valueUpdatedParameters2 !== '')
		vals['updatedParameters2'] = JSON.parse(valueUpdatedParameters2);

	var valueUpdatedParameters3 = $formValues.find('.valueUpdatedParameters3').val();
	if(valueUpdatedParameters3 != null && valueUpdatedParameters3 !== '')
		vals['updatedParameters3'] = JSON.parse(valueUpdatedParameters3);

	var valueUpdatedParameters4 = $formValues.find('.valueUpdatedParameters4').val();
	if(valueUpdatedParameters4 != null && valueUpdatedParameters4 !== '')
		vals['updatedParameters4'] = JSON.parse(valueUpdatedParameters4);

	var valueUpdatedParameters5 = $formValues.find('.valueUpdatedParameters5').val();
	if(valueUpdatedParameters5 != null && valueUpdatedParameters5 !== '')
		vals['updatedParameters5'] = JSON.parse(valueUpdatedParameters5);

	var valueUpdatedParameters6 = $formValues.find('.valueUpdatedParameters6').val();
	if(valueUpdatedParameters6 != null && valueUpdatedParameters6 !== '')
		vals['updatedParameters6'] = JSON.parse(valueUpdatedParameters6);

	var valueUpdatedParameters7 = $formValues.find('.valueUpdatedParameters7').val();
	if(valueUpdatedParameters7 != null && valueUpdatedParameters7 !== '')
		vals['updatedParameters7'] = JSON.parse(valueUpdatedParameters7);

	var valueUpdatedParameters8 = $formValues.find('.valueUpdatedParameters8').val();
	if(valueUpdatedParameters8 != null && valueUpdatedParameters8 !== '')
		vals['updatedParameters8'] = JSON.parse(valueUpdatedParameters8);

	var valueUpdatedParameters9 = $formValues.find('.valueUpdatedParameters9').val();
	if(valueUpdatedParameters9 != null && valueUpdatedParameters9 !== '')
		vals['updatedParameters9'] = JSON.parse(valueUpdatedParameters9);

	var valueUpdatedParameters10 = $formValues.find('.valueUpdatedParameters10').val();
	if(valueUpdatedParameters10 != null && valueUpdatedParameters10 !== '')
		vals['updatedParameters10'] = JSON.parse(valueUpdatedParameters10);

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(valueUpdatedPerformanceWaitWestEastVehicleSec != null && valueUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['updatedPerformanceWaitWestEastVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitWestEastVehicleSec);

	var valueUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(valueUpdatedPerformanceWaitSouthNorthVehicleSec != null && valueUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['updatedPerformanceWaitSouthNorthVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitSouthNorthVehicleSec);

	var valueUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
	if(valueUpdatedPerformanceWaitAllVehicleSec != null && valueUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['updatedPerformanceWaitAllVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitAllVehicleSec);

	var valueUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllPedestrianSec != null && valueUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['updatedPerformanceWaitAllPedestrianSec'] = JSON.parse(valueUpdatedPerformanceWaitAllPedestrianSec);

	var valueUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllVehiclePedestrianSec != null && valueUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['updatedPerformanceWaitAllVehiclePedestrianSec'] = JSON.parse(valueUpdatedPerformanceWaitAllVehiclePedestrianSec);

	var valueAvgQueueLengthWestEastVehicle = $formValues.find('.valueAvgQueueLengthWestEastVehicle').val();
	if(valueAvgQueueLengthWestEastVehicle != null && valueAvgQueueLengthWestEastVehicle !== '')
		vals['avgQueueLengthWestEastVehicle'] = JSON.parse(valueAvgQueueLengthWestEastVehicle);

	var valueAvgQueueLengthSouthNorthVehicle = $formValues.find('.valueAvgQueueLengthSouthNorthVehicle').val();
	if(valueAvgQueueLengthSouthNorthVehicle != null && valueAvgQueueLengthSouthNorthVehicle !== '')
		vals['avgQueueLengthSouthNorthVehicle'] = JSON.parse(valueAvgQueueLengthSouthNorthVehicle);

	var valueAvgQueueLengthNorthSouthPedestrian = $formValues.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
	if(valueAvgQueueLengthNorthSouthPedestrian != null && valueAvgQueueLengthNorthSouthPedestrian !== '')
		vals['avgQueueLengthNorthSouthPedestrian'] = JSON.parse(valueAvgQueueLengthNorthSouthPedestrian);

	var valueAvgQueueLengthWestEastPedestrian = $formValues.find('.valueAvgQueueLengthWestEastPedestrian').val();
	if(valueAvgQueueLengthWestEastPedestrian != null && valueAvgQueueLengthWestEastPedestrian !== '')
		vals['avgQueueLengthWestEastPedestrian'] = JSON.parse(valueAvgQueueLengthWestEastPedestrian);

	var valueReportStatus = $formValues.find('.valueReportStatus').val();
	if(valueReportStatus != null && valueReportStatus !== '')
		vals['reportStatus'] = valueReportStatus;

	var valueReportProgress = $formValues.find('.valueReportProgress').val();
	if(valueReportProgress != null && valueReportProgress !== '')
		vals['reportProgress'] = valueReportProgress;

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

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	if(valueUpdatedPerformance != null && valueUpdatedPerformance !== '')
		vals['updatedPerformance'] = JSON.parse(valueUpdatedPerformance);

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	if(valueSimulationName != null && valueSimulationName !== '')
		vals['simulationName'] = valueSimulationName;

	var valueSmartTrafficLightId = $formValues.find('.valueSmartTrafficLightId').val();
	if(valueSmartTrafficLightId != null && valueSmartTrafficLightId !== '')
		vals['smartTrafficLightId'] = valueSmartTrafficLightId;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	if(valueSmartTrafficLightName != null && valueSmartTrafficLightName !== '')
		vals['smartTrafficLightName'] = valueSmartTrafficLightName;

	var valueParamDemandScale = $formValues.find('.valueParamDemandScale').val();
	if(valueParamDemandScale != null && valueParamDemandScale !== '')
		vals['paramDemandScale'] = JSON.parse(valueParamDemandScale);

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	if(valueUpdatedParameters != null && valueUpdatedParameters !== '')
		vals['updatedParameters'] = JSON.parse(valueUpdatedParameters);

	var valueAverageQueueLength = $formValues.find('.valueAverageQueueLength').val();
	if(valueAverageQueueLength != null && valueAverageQueueLength !== '')
		vals['averageQueueLength'] = JSON.parse(valueAverageQueueLength);

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

// PUTCopy //

async function putcopySimulationReport($formValues, pk, success, error) {
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

	var valueLocation = $formValues.find('.valueLocation').val();
	if(valueLocation != null && valueLocation !== '')
		vals['location'] = valueLocation;

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

	var valueUpdatedParameters1 = $formValues.find('.valueUpdatedParameters1').val();
	if(valueUpdatedParameters1 != null && valueUpdatedParameters1 !== '')
		vals['updatedParameters1'] = JSON.parse(valueUpdatedParameters1);

	var valueUpdatedParameters2 = $formValues.find('.valueUpdatedParameters2').val();
	if(valueUpdatedParameters2 != null && valueUpdatedParameters2 !== '')
		vals['updatedParameters2'] = JSON.parse(valueUpdatedParameters2);

	var valueUpdatedParameters3 = $formValues.find('.valueUpdatedParameters3').val();
	if(valueUpdatedParameters3 != null && valueUpdatedParameters3 !== '')
		vals['updatedParameters3'] = JSON.parse(valueUpdatedParameters3);

	var valueUpdatedParameters4 = $formValues.find('.valueUpdatedParameters4').val();
	if(valueUpdatedParameters4 != null && valueUpdatedParameters4 !== '')
		vals['updatedParameters4'] = JSON.parse(valueUpdatedParameters4);

	var valueUpdatedParameters5 = $formValues.find('.valueUpdatedParameters5').val();
	if(valueUpdatedParameters5 != null && valueUpdatedParameters5 !== '')
		vals['updatedParameters5'] = JSON.parse(valueUpdatedParameters5);

	var valueUpdatedParameters6 = $formValues.find('.valueUpdatedParameters6').val();
	if(valueUpdatedParameters6 != null && valueUpdatedParameters6 !== '')
		vals['updatedParameters6'] = JSON.parse(valueUpdatedParameters6);

	var valueUpdatedParameters7 = $formValues.find('.valueUpdatedParameters7').val();
	if(valueUpdatedParameters7 != null && valueUpdatedParameters7 !== '')
		vals['updatedParameters7'] = JSON.parse(valueUpdatedParameters7);

	var valueUpdatedParameters8 = $formValues.find('.valueUpdatedParameters8').val();
	if(valueUpdatedParameters8 != null && valueUpdatedParameters8 !== '')
		vals['updatedParameters8'] = JSON.parse(valueUpdatedParameters8);

	var valueUpdatedParameters9 = $formValues.find('.valueUpdatedParameters9').val();
	if(valueUpdatedParameters9 != null && valueUpdatedParameters9 !== '')
		vals['updatedParameters9'] = JSON.parse(valueUpdatedParameters9);

	var valueUpdatedParameters10 = $formValues.find('.valueUpdatedParameters10').val();
	if(valueUpdatedParameters10 != null && valueUpdatedParameters10 !== '')
		vals['updatedParameters10'] = JSON.parse(valueUpdatedParameters10);

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(valueUpdatedPerformanceWaitWestEastVehicleSec != null && valueUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['updatedPerformanceWaitWestEastVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitWestEastVehicleSec);

	var valueUpdatedPerformanceWaitSouthNorthVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitSouthNorthVehicleSec').val();
	if(valueUpdatedPerformanceWaitSouthNorthVehicleSec != null && valueUpdatedPerformanceWaitSouthNorthVehicleSec !== '')
		vals['updatedPerformanceWaitSouthNorthVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitSouthNorthVehicleSec);

	var valueUpdatedPerformanceWaitAllVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehicleSec').val();
	if(valueUpdatedPerformanceWaitAllVehicleSec != null && valueUpdatedPerformanceWaitAllVehicleSec !== '')
		vals['updatedPerformanceWaitAllVehicleSec'] = JSON.parse(valueUpdatedPerformanceWaitAllVehicleSec);

	var valueUpdatedPerformanceWaitAllPedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllPedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllPedestrianSec != null && valueUpdatedPerformanceWaitAllPedestrianSec !== '')
		vals['updatedPerformanceWaitAllPedestrianSec'] = JSON.parse(valueUpdatedPerformanceWaitAllPedestrianSec);

	var valueUpdatedPerformanceWaitAllVehiclePedestrianSec = $formValues.find('.valueUpdatedPerformanceWaitAllVehiclePedestrianSec').val();
	if(valueUpdatedPerformanceWaitAllVehiclePedestrianSec != null && valueUpdatedPerformanceWaitAllVehiclePedestrianSec !== '')
		vals['updatedPerformanceWaitAllVehiclePedestrianSec'] = JSON.parse(valueUpdatedPerformanceWaitAllVehiclePedestrianSec);

	var valueAvgQueueLengthWestEastVehicle = $formValues.find('.valueAvgQueueLengthWestEastVehicle').val();
	if(valueAvgQueueLengthWestEastVehicle != null && valueAvgQueueLengthWestEastVehicle !== '')
		vals['avgQueueLengthWestEastVehicle'] = JSON.parse(valueAvgQueueLengthWestEastVehicle);

	var valueAvgQueueLengthSouthNorthVehicle = $formValues.find('.valueAvgQueueLengthSouthNorthVehicle').val();
	if(valueAvgQueueLengthSouthNorthVehicle != null && valueAvgQueueLengthSouthNorthVehicle !== '')
		vals['avgQueueLengthSouthNorthVehicle'] = JSON.parse(valueAvgQueueLengthSouthNorthVehicle);

	var valueAvgQueueLengthNorthSouthPedestrian = $formValues.find('.valueAvgQueueLengthNorthSouthPedestrian').val();
	if(valueAvgQueueLengthNorthSouthPedestrian != null && valueAvgQueueLengthNorthSouthPedestrian !== '')
		vals['avgQueueLengthNorthSouthPedestrian'] = JSON.parse(valueAvgQueueLengthNorthSouthPedestrian);

	var valueAvgQueueLengthWestEastPedestrian = $formValues.find('.valueAvgQueueLengthWestEastPedestrian').val();
	if(valueAvgQueueLengthWestEastPedestrian != null && valueAvgQueueLengthWestEastPedestrian !== '')
		vals['avgQueueLengthWestEastPedestrian'] = JSON.parse(valueAvgQueueLengthWestEastPedestrian);

	var valueReportStatus = $formValues.find('.valueReportStatus').val();
	if(valueReportStatus != null && valueReportStatus !== '')
		vals['reportStatus'] = valueReportStatus;

	var valueReportProgress = $formValues.find('.valueReportProgress').val();
	if(valueReportProgress != null && valueReportProgress !== '')
		vals['reportProgress'] = valueReportProgress;

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

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	if(valueUpdatedPerformance != null && valueUpdatedPerformance !== '')
		vals['updatedPerformance'] = JSON.parse(valueUpdatedPerformance);

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	if(valueSimulationName != null && valueSimulationName !== '')
		vals['simulationName'] = valueSimulationName;

	var valueSmartTrafficLightId = $formValues.find('.valueSmartTrafficLightId').val();
	if(valueSmartTrafficLightId != null && valueSmartTrafficLightId !== '')
		vals['smartTrafficLightId'] = valueSmartTrafficLightId;

	var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
	if(valueSmartTrafficLightName != null && valueSmartTrafficLightName !== '')
		vals['smartTrafficLightName'] = valueSmartTrafficLightName;

	var valueParamDemandScale = $formValues.find('.valueParamDemandScale').val();
	if(valueParamDemandScale != null && valueParamDemandScale !== '')
		vals['paramDemandScale'] = JSON.parse(valueParamDemandScale);

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	if(valueUpdatedParameters != null && valueUpdatedParameters !== '')
		vals['updatedParameters'] = JSON.parse(valueUpdatedParameters);

	var valueAverageQueueLength = $formValues.find('.valueAverageQueueLength').val();
	if(valueAverageQueueLength != null && valueAverageQueueLength !== '')
		vals['averageQueueLength'] = JSON.parse(valueAverageQueueLength);

	putcopySimulationReportVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySimulationReportVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/simulation-report/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCHRunSimulation //

async function patchrunsimulationSimulationReport($formFilters, $formValues, pk, success, error) {
	var filters = patchrunsimulationSimulationReportFilters($formFilters);

	var vals = {};

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

	var valueLocation = $formValues.find('.valueLocation').val();
	var removeLocation = $formValues.find('.removeLocation').val() === 'true';
	var setLocation = removeLocation ? null : $formValues.find('.setLocation').val();
	var addLocation = $formValues.find('.addLocation').val();
	if(removeLocation || setLocation != null && setLocation !== '')
		vals['setLocation'] = setLocation;
	if(addLocation != null && addLocation !== '')
		vals['addLocation'] = addLocation;
	var removeLocation = $formValues.find('.removeLocation').val();
	if(removeLocation != null && removeLocation !== '')
		vals['removeLocation'] = removeLocation;

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

	var valueUpdatedParameters1 = $formValues.find('.valueUpdatedParameters1').val();
	var removeUpdatedParameters1 = $formValues.find('.removeUpdatedParameters1').val() === 'true';
	var setUpdatedParameters1 = removeUpdatedParameters1 ? null : $formValues.find('.setUpdatedParameters1').val();
	var addUpdatedParameters1 = $formValues.find('.addUpdatedParameters1').val();
	if(removeUpdatedParameters1 || setUpdatedParameters1 != null && setUpdatedParameters1 !== '')
		vals['setUpdatedParameters1'] = JSON.parse(setUpdatedParameters1);
	if(addUpdatedParameters1 != null && addUpdatedParameters1 !== '')
		vals['addUpdatedParameters1'] = addUpdatedParameters1;
	var removeUpdatedParameters1 = $formValues.find('.removeUpdatedParameters1').val();
	if(removeUpdatedParameters1 != null && removeUpdatedParameters1 !== '')
		vals['removeUpdatedParameters1'] = removeUpdatedParameters1;

	var valueUpdatedParameters2 = $formValues.find('.valueUpdatedParameters2').val();
	var removeUpdatedParameters2 = $formValues.find('.removeUpdatedParameters2').val() === 'true';
	var setUpdatedParameters2 = removeUpdatedParameters2 ? null : $formValues.find('.setUpdatedParameters2').val();
	var addUpdatedParameters2 = $formValues.find('.addUpdatedParameters2').val();
	if(removeUpdatedParameters2 || setUpdatedParameters2 != null && setUpdatedParameters2 !== '')
		vals['setUpdatedParameters2'] = JSON.parse(setUpdatedParameters2);
	if(addUpdatedParameters2 != null && addUpdatedParameters2 !== '')
		vals['addUpdatedParameters2'] = addUpdatedParameters2;
	var removeUpdatedParameters2 = $formValues.find('.removeUpdatedParameters2').val();
	if(removeUpdatedParameters2 != null && removeUpdatedParameters2 !== '')
		vals['removeUpdatedParameters2'] = removeUpdatedParameters2;

	var valueUpdatedParameters3 = $formValues.find('.valueUpdatedParameters3').val();
	var removeUpdatedParameters3 = $formValues.find('.removeUpdatedParameters3').val() === 'true';
	var setUpdatedParameters3 = removeUpdatedParameters3 ? null : $formValues.find('.setUpdatedParameters3').val();
	var addUpdatedParameters3 = $formValues.find('.addUpdatedParameters3').val();
	if(removeUpdatedParameters3 || setUpdatedParameters3 != null && setUpdatedParameters3 !== '')
		vals['setUpdatedParameters3'] = JSON.parse(setUpdatedParameters3);
	if(addUpdatedParameters3 != null && addUpdatedParameters3 !== '')
		vals['addUpdatedParameters3'] = addUpdatedParameters3;
	var removeUpdatedParameters3 = $formValues.find('.removeUpdatedParameters3').val();
	if(removeUpdatedParameters3 != null && removeUpdatedParameters3 !== '')
		vals['removeUpdatedParameters3'] = removeUpdatedParameters3;

	var valueUpdatedParameters4 = $formValues.find('.valueUpdatedParameters4').val();
	var removeUpdatedParameters4 = $formValues.find('.removeUpdatedParameters4').val() === 'true';
	var setUpdatedParameters4 = removeUpdatedParameters4 ? null : $formValues.find('.setUpdatedParameters4').val();
	var addUpdatedParameters4 = $formValues.find('.addUpdatedParameters4').val();
	if(removeUpdatedParameters4 || setUpdatedParameters4 != null && setUpdatedParameters4 !== '')
		vals['setUpdatedParameters4'] = JSON.parse(setUpdatedParameters4);
	if(addUpdatedParameters4 != null && addUpdatedParameters4 !== '')
		vals['addUpdatedParameters4'] = addUpdatedParameters4;
	var removeUpdatedParameters4 = $formValues.find('.removeUpdatedParameters4').val();
	if(removeUpdatedParameters4 != null && removeUpdatedParameters4 !== '')
		vals['removeUpdatedParameters4'] = removeUpdatedParameters4;

	var valueUpdatedParameters5 = $formValues.find('.valueUpdatedParameters5').val();
	var removeUpdatedParameters5 = $formValues.find('.removeUpdatedParameters5').val() === 'true';
	var setUpdatedParameters5 = removeUpdatedParameters5 ? null : $formValues.find('.setUpdatedParameters5').val();
	var addUpdatedParameters5 = $formValues.find('.addUpdatedParameters5').val();
	if(removeUpdatedParameters5 || setUpdatedParameters5 != null && setUpdatedParameters5 !== '')
		vals['setUpdatedParameters5'] = JSON.parse(setUpdatedParameters5);
	if(addUpdatedParameters5 != null && addUpdatedParameters5 !== '')
		vals['addUpdatedParameters5'] = addUpdatedParameters5;
	var removeUpdatedParameters5 = $formValues.find('.removeUpdatedParameters5').val();
	if(removeUpdatedParameters5 != null && removeUpdatedParameters5 !== '')
		vals['removeUpdatedParameters5'] = removeUpdatedParameters5;

	var valueUpdatedParameters6 = $formValues.find('.valueUpdatedParameters6').val();
	var removeUpdatedParameters6 = $formValues.find('.removeUpdatedParameters6').val() === 'true';
	var setUpdatedParameters6 = removeUpdatedParameters6 ? null : $formValues.find('.setUpdatedParameters6').val();
	var addUpdatedParameters6 = $formValues.find('.addUpdatedParameters6').val();
	if(removeUpdatedParameters6 || setUpdatedParameters6 != null && setUpdatedParameters6 !== '')
		vals['setUpdatedParameters6'] = JSON.parse(setUpdatedParameters6);
	if(addUpdatedParameters6 != null && addUpdatedParameters6 !== '')
		vals['addUpdatedParameters6'] = addUpdatedParameters6;
	var removeUpdatedParameters6 = $formValues.find('.removeUpdatedParameters6').val();
	if(removeUpdatedParameters6 != null && removeUpdatedParameters6 !== '')
		vals['removeUpdatedParameters6'] = removeUpdatedParameters6;

	var valueUpdatedParameters7 = $formValues.find('.valueUpdatedParameters7').val();
	var removeUpdatedParameters7 = $formValues.find('.removeUpdatedParameters7').val() === 'true';
	var setUpdatedParameters7 = removeUpdatedParameters7 ? null : $formValues.find('.setUpdatedParameters7').val();
	var addUpdatedParameters7 = $formValues.find('.addUpdatedParameters7').val();
	if(removeUpdatedParameters7 || setUpdatedParameters7 != null && setUpdatedParameters7 !== '')
		vals['setUpdatedParameters7'] = JSON.parse(setUpdatedParameters7);
	if(addUpdatedParameters7 != null && addUpdatedParameters7 !== '')
		vals['addUpdatedParameters7'] = addUpdatedParameters7;
	var removeUpdatedParameters7 = $formValues.find('.removeUpdatedParameters7').val();
	if(removeUpdatedParameters7 != null && removeUpdatedParameters7 !== '')
		vals['removeUpdatedParameters7'] = removeUpdatedParameters7;

	var valueUpdatedParameters8 = $formValues.find('.valueUpdatedParameters8').val();
	var removeUpdatedParameters8 = $formValues.find('.removeUpdatedParameters8').val() === 'true';
	var setUpdatedParameters8 = removeUpdatedParameters8 ? null : $formValues.find('.setUpdatedParameters8').val();
	var addUpdatedParameters8 = $formValues.find('.addUpdatedParameters8').val();
	if(removeUpdatedParameters8 || setUpdatedParameters8 != null && setUpdatedParameters8 !== '')
		vals['setUpdatedParameters8'] = JSON.parse(setUpdatedParameters8);
	if(addUpdatedParameters8 != null && addUpdatedParameters8 !== '')
		vals['addUpdatedParameters8'] = addUpdatedParameters8;
	var removeUpdatedParameters8 = $formValues.find('.removeUpdatedParameters8').val();
	if(removeUpdatedParameters8 != null && removeUpdatedParameters8 !== '')
		vals['removeUpdatedParameters8'] = removeUpdatedParameters8;

	var valueUpdatedParameters9 = $formValues.find('.valueUpdatedParameters9').val();
	var removeUpdatedParameters9 = $formValues.find('.removeUpdatedParameters9').val() === 'true';
	var setUpdatedParameters9 = removeUpdatedParameters9 ? null : $formValues.find('.setUpdatedParameters9').val();
	var addUpdatedParameters9 = $formValues.find('.addUpdatedParameters9').val();
	if(removeUpdatedParameters9 || setUpdatedParameters9 != null && setUpdatedParameters9 !== '')
		vals['setUpdatedParameters9'] = JSON.parse(setUpdatedParameters9);
	if(addUpdatedParameters9 != null && addUpdatedParameters9 !== '')
		vals['addUpdatedParameters9'] = addUpdatedParameters9;
	var removeUpdatedParameters9 = $formValues.find('.removeUpdatedParameters9').val();
	if(removeUpdatedParameters9 != null && removeUpdatedParameters9 !== '')
		vals['removeUpdatedParameters9'] = removeUpdatedParameters9;

	var valueUpdatedParameters10 = $formValues.find('.valueUpdatedParameters10').val();
	var removeUpdatedParameters10 = $formValues.find('.removeUpdatedParameters10').val() === 'true';
	var setUpdatedParameters10 = removeUpdatedParameters10 ? null : $formValues.find('.setUpdatedParameters10').val();
	var addUpdatedParameters10 = $formValues.find('.addUpdatedParameters10').val();
	if(removeUpdatedParameters10 || setUpdatedParameters10 != null && setUpdatedParameters10 !== '')
		vals['setUpdatedParameters10'] = JSON.parse(setUpdatedParameters10);
	if(addUpdatedParameters10 != null && addUpdatedParameters10 !== '')
		vals['addUpdatedParameters10'] = addUpdatedParameters10;
	var removeUpdatedParameters10 = $formValues.find('.removeUpdatedParameters10').val();
	if(removeUpdatedParameters10 != null && removeUpdatedParameters10 !== '')
		vals['removeUpdatedParameters10'] = removeUpdatedParameters10;

	var valueUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.valueUpdatedPerformanceWaitWestEastVehicleSec').val();
	var removeUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.removeUpdatedPerformanceWaitWestEastVehicleSec').val() === 'true';
	var setUpdatedPerformanceWaitWestEastVehicleSec = removeUpdatedPerformanceWaitWestEastVehicleSec ? null : $formValues.find('.setUpdatedPerformanceWaitWestEastVehicleSec').val();
	var addUpdatedPerformanceWaitWestEastVehicleSec = $formValues.find('.addUpdatedPerformanceWaitWestEastVehicleSec').val();
	if(removeUpdatedPerformanceWaitWestEastVehicleSec || setUpdatedPerformanceWaitWestEastVehicleSec != null && setUpdatedPerformanceWaitWestEastVehicleSec !== '')
		vals['setUpdatedPerformanceWaitWestEastVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitWestEastVehicleSec);
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
		vals['setUpdatedPerformanceWaitSouthNorthVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitSouthNorthVehicleSec);
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
		vals['setUpdatedPerformanceWaitAllVehicleSec'] = JSON.parse(setUpdatedPerformanceWaitAllVehicleSec);
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
		vals['setUpdatedPerformanceWaitAllPedestrianSec'] = JSON.parse(setUpdatedPerformanceWaitAllPedestrianSec);
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
		vals['setUpdatedPerformanceWaitAllVehiclePedestrianSec'] = JSON.parse(setUpdatedPerformanceWaitAllVehiclePedestrianSec);
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
		vals['setAvgQueueLengthWestEastVehicle'] = JSON.parse(setAvgQueueLengthWestEastVehicle);
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
		vals['setAvgQueueLengthSouthNorthVehicle'] = JSON.parse(setAvgQueueLengthSouthNorthVehicle);
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
		vals['setAvgQueueLengthNorthSouthPedestrian'] = JSON.parse(setAvgQueueLengthNorthSouthPedestrian);
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
		vals['setAvgQueueLengthWestEastPedestrian'] = JSON.parse(setAvgQueueLengthWestEastPedestrian);
	if(addAvgQueueLengthWestEastPedestrian != null && addAvgQueueLengthWestEastPedestrian !== '')
		vals['addAvgQueueLengthWestEastPedestrian'] = addAvgQueueLengthWestEastPedestrian;
	var removeAvgQueueLengthWestEastPedestrian = $formValues.find('.removeAvgQueueLengthWestEastPedestrian').val();
	if(removeAvgQueueLengthWestEastPedestrian != null && removeAvgQueueLengthWestEastPedestrian !== '')
		vals['removeAvgQueueLengthWestEastPedestrian'] = removeAvgQueueLengthWestEastPedestrian;

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

	var valueUpdatedPerformance = $formValues.find('.valueUpdatedPerformance').val();
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val() === 'true';
	var setUpdatedPerformance = removeUpdatedPerformance ? null : $formValues.find('.setUpdatedPerformance').val();
	var addUpdatedPerformance = $formValues.find('.addUpdatedPerformance').val();
	if(removeUpdatedPerformance || setUpdatedPerformance != null && setUpdatedPerformance !== '')
		vals['setUpdatedPerformance'] = JSON.parse(setUpdatedPerformance);
	if(addUpdatedPerformance != null && addUpdatedPerformance !== '')
		vals['addUpdatedPerformance'] = addUpdatedPerformance;
	var removeUpdatedPerformance = $formValues.find('.removeUpdatedPerformance').val();
	if(removeUpdatedPerformance != null && removeUpdatedPerformance !== '')
		vals['removeUpdatedPerformance'] = removeUpdatedPerformance;

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

	var valueSmartTrafficLightId = $formValues.find('.valueSmartTrafficLightId').val();
	var removeSmartTrafficLightId = $formValues.find('.removeSmartTrafficLightId').val() === 'true';
	var setSmartTrafficLightId = removeSmartTrafficLightId ? null : $formValues.find('.setSmartTrafficLightId').val();
	var addSmartTrafficLightId = $formValues.find('.addSmartTrafficLightId').val();
	if(removeSmartTrafficLightId || setSmartTrafficLightId != null && setSmartTrafficLightId !== '')
		vals['setSmartTrafficLightId'] = setSmartTrafficLightId;
	if(addSmartTrafficLightId != null && addSmartTrafficLightId !== '')
		vals['addSmartTrafficLightId'] = addSmartTrafficLightId;
	var removeSmartTrafficLightId = $formValues.find('.removeSmartTrafficLightId').val();
	if(removeSmartTrafficLightId != null && removeSmartTrafficLightId !== '')
		vals['removeSmartTrafficLightId'] = removeSmartTrafficLightId;

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
		vals['setParamDemandScale'] = JSON.parse(setParamDemandScale);
	if(addParamDemandScale != null && addParamDemandScale !== '')
		vals['addParamDemandScale'] = addParamDemandScale;
	var removeParamDemandScale = $formValues.find('.removeParamDemandScale').val();
	if(removeParamDemandScale != null && removeParamDemandScale !== '')
		vals['removeParamDemandScale'] = removeParamDemandScale;

	var valueUpdatedParameters = $formValues.find('.valueUpdatedParameters').val();
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val() === 'true';
	var setUpdatedParameters = removeUpdatedParameters ? null : $formValues.find('.setUpdatedParameters').val();
	var addUpdatedParameters = $formValues.find('.addUpdatedParameters').val();
	if(removeUpdatedParameters || setUpdatedParameters != null && setUpdatedParameters !== '')
		vals['setUpdatedParameters'] = JSON.parse(setUpdatedParameters);
	if(addUpdatedParameters != null && addUpdatedParameters !== '')
		vals['addUpdatedParameters'] = addUpdatedParameters;
	var removeUpdatedParameters = $formValues.find('.removeUpdatedParameters').val();
	if(removeUpdatedParameters != null && removeUpdatedParameters !== '')
		vals['removeUpdatedParameters'] = removeUpdatedParameters;

	var valueAverageQueueLength = $formValues.find('.valueAverageQueueLength').val();
	var removeAverageQueueLength = $formValues.find('.removeAverageQueueLength').val() === 'true';
	var setAverageQueueLength = removeAverageQueueLength ? null : $formValues.find('.setAverageQueueLength').val();
	var addAverageQueueLength = $formValues.find('.addAverageQueueLength').val();
	if(removeAverageQueueLength || setAverageQueueLength != null && setAverageQueueLength !== '')
		vals['setAverageQueueLength'] = JSON.parse(setAverageQueueLength);
	if(addAverageQueueLength != null && addAverageQueueLength !== '')
		vals['addAverageQueueLength'] = addAverageQueueLength;
	var removeAverageQueueLength = $formValues.find('.removeAverageQueueLength').val();
	if(removeAverageQueueLength != null && removeAverageQueueLength !== '')
		vals['removeAverageQueueLength'] = removeAverageQueueLength;

	patchrunsimulationSimulationReportVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchrunsimulationSimulationReportFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

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

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

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

		var filterUpdatedParameters1 = $formFilters.find('.valueUpdatedParameters1').val();
		if(filterUpdatedParameters1 != null && filterUpdatedParameters1 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters1:' + filterUpdatedParameters1 });

		var filterUpdatedParameters2 = $formFilters.find('.valueUpdatedParameters2').val();
		if(filterUpdatedParameters2 != null && filterUpdatedParameters2 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters2:' + filterUpdatedParameters2 });

		var filterUpdatedParameters3 = $formFilters.find('.valueUpdatedParameters3').val();
		if(filterUpdatedParameters3 != null && filterUpdatedParameters3 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters3:' + filterUpdatedParameters3 });

		var filterUpdatedParameters4 = $formFilters.find('.valueUpdatedParameters4').val();
		if(filterUpdatedParameters4 != null && filterUpdatedParameters4 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters4:' + filterUpdatedParameters4 });

		var filterUpdatedParameters5 = $formFilters.find('.valueUpdatedParameters5').val();
		if(filterUpdatedParameters5 != null && filterUpdatedParameters5 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters5:' + filterUpdatedParameters5 });

		var filterUpdatedParameters6 = $formFilters.find('.valueUpdatedParameters6').val();
		if(filterUpdatedParameters6 != null && filterUpdatedParameters6 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters6:' + filterUpdatedParameters6 });

		var filterUpdatedParameters7 = $formFilters.find('.valueUpdatedParameters7').val();
		if(filterUpdatedParameters7 != null && filterUpdatedParameters7 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters7:' + filterUpdatedParameters7 });

		var filterUpdatedParameters8 = $formFilters.find('.valueUpdatedParameters8').val();
		if(filterUpdatedParameters8 != null && filterUpdatedParameters8 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters8:' + filterUpdatedParameters8 });

		var filterUpdatedParameters9 = $formFilters.find('.valueUpdatedParameters9').val();
		if(filterUpdatedParameters9 != null && filterUpdatedParameters9 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters9:' + filterUpdatedParameters9 });

		var filterUpdatedParameters10 = $formFilters.find('.valueUpdatedParameters10').val();
		if(filterUpdatedParameters10 != null && filterUpdatedParameters10 !== '')
			filters.push({ name: 'fq', value: 'updatedParameters10:' + filterUpdatedParameters10 });

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

		var filterReportStatus = $formFilters.find('.valueReportStatus').val();
		if(filterReportStatus != null && filterReportStatus !== '')
			filters.push({ name: 'fq', value: 'reportStatus:' + filterReportStatus });

		var filterReportProgress = $formFilters.find('.valueReportProgress').val();
		if(filterReportProgress != null && filterReportProgress !== '')
			filters.push({ name: 'fq', value: 'reportProgress:' + filterReportProgress });

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

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

		var filterUpdatedPerformance = $formFilters.find('.valueUpdatedPerformance').val();
		if(filterUpdatedPerformance != null && filterUpdatedPerformance !== '')
			filters.push({ name: 'fq', value: 'updatedPerformance:' + filterUpdatedPerformance });

		var filterAreaServed = $formFilters.find('.valueAreaServed').val();
		if(filterAreaServed != null && filterAreaServed !== '')
			filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

		var filterSimulationName = $formFilters.find('.valueSimulationName').val();
		if(filterSimulationName != null && filterSimulationName !== '')
			filters.push({ name: 'fq', value: 'simulationName:' + filterSimulationName });

		var filterSmartTrafficLightId = $formFilters.find('.valueSmartTrafficLightId').val();
		if(filterSmartTrafficLightId != null && filterSmartTrafficLightId !== '')
			filters.push({ name: 'fq', value: 'smartTrafficLightId:' + filterSmartTrafficLightId });

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

		var filterUpdatedParameters = $formFilters.find('.valueUpdatedParameters').val();
		if(filterUpdatedParameters != null && filterUpdatedParameters !== '')
			filters.push({ name: 'fq', value: 'updatedParameters:' + filterUpdatedParameters });

		var filterAverageQueueLength = $formFilters.find('.valueAverageQueueLength').val();
		if(filterAverageQueueLength != null && filterAverageQueueLength !== '')
			filters.push({ name: 'fq', value: 'averageQueueLength:' + filterAverageQueueLength });
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
				var inputReportName = null;
				var inputLocation = null;
				var inputSimulationKey = null;
				var inputSmartTrafficLightKey = null;
				var inputParamAvgVehiclePerMinFromWestToEast = null;
				var inputParamAvgVehiclePerMinFromSouthToNorth = null;
				var inputParamVehicleDemandScalingFactor = null;
				var inputParamAvgPedestrianPerMinFromWestToEast = null;
				var inputParamAvgPedestrianPerMinFromSouthToNorth = null;
				var inputParamPedestrianDemandScalingFactor = null;
				var inputParamMinGreenTimeSecWestEast = null;
				var inputParamMaxGreenTimeSecWestEast = null;
				var inputParamMinGreenTimeSecSouthNorth = null;
				var inputParamMaxGreenTimeSecSouthNorth = null;
				var inputParamPedestrianWaitThresholdSecNorthSouth = null;
				var inputParamPedestrianWaitThresholdSecWestEast = null;
				var inputParamVehicleQueueThresholdWestEast = null;
				var inputParamVehicleQueueThresholdSouthNorth = null;
				var inputParamPedestrianQueueThresholdNorthSouth = null;
				var inputParamPedestrianQueueThresholdWestEast = null;
				var inputParamStepSize = null;
				var inputParamRunTime = null;
				var inputParamItersPerPar = null;
				var inputParamTotalIterNum = null;
				var inputUpdatedParameters1 = null;
				var inputUpdatedParameters2 = null;
				var inputUpdatedParameters3 = null;
				var inputUpdatedParameters4 = null;
				var inputUpdatedParameters5 = null;
				var inputUpdatedParameters6 = null;
				var inputUpdatedParameters7 = null;
				var inputUpdatedParameters8 = null;
				var inputUpdatedParameters9 = null;
				var inputUpdatedParameters10 = null;
				var inputUpdatedPerformanceWaitWestEastVehicleSec = null;
				var inputUpdatedPerformanceWaitSouthNorthVehicleSec = null;
				var inputUpdatedPerformanceWaitAllVehicleSec = null;
				var inputUpdatedPerformanceWaitAllPedestrianSec = null;
				var inputUpdatedPerformanceWaitAllVehiclePedestrianSec = null;
				var inputAvgQueueLengthWestEastVehicle = null;
				var inputAvgQueueLengthSouthNorthVehicle = null;
				var inputAvgQueueLengthNorthSouthPedestrian = null;
				var inputAvgQueueLengthWestEastPedestrian = null;
				var inputReportStatus = null;
				var inputReportProgress = null;
				var inputPk = null;
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
				var inputUpdatedPerformance = null;
				var inputAreaServed = null;
				var inputSimulationName = null;
				var inputSmartTrafficLightId = null;
				var inputSmartTrafficLightName = null;
				var inputParamLam = null;
				var inputParamDemandScale = null;
				var inputParamInitialPar = null;
				var inputUpdatedParameters = null;
				var inputAverageQueueLength = null;

				if(vars.includes('created'))
					inputCreated = $response.find('#Page_created');
				if(vars.includes('modified'))
					inputModified = $response.find('#Page_modified');
				if(vars.includes('objectId'))
					inputObjectId = $response.find('#Page_objectId');
				if(vars.includes('archived'))
					inputArchived = $response.find('#Page_archived');
				if(vars.includes('deleted'))
					inputDeleted = $response.find('#Page_deleted');
				if(vars.includes('reportName'))
					inputReportName = $response.find('#Page_reportName');
				if(vars.includes('location'))
					inputLocation = $response.find('#Page_location');
				if(vars.includes('simulationKey'))
					inputSimulationKey = $response.find('#Page_simulationKey');
				if(vars.includes('smartTrafficLightKey'))
					inputSmartTrafficLightKey = $response.find('#Page_smartTrafficLightKey');
				if(vars.includes('paramAvgVehiclePerMinFromWestToEast'))
					inputParamAvgVehiclePerMinFromWestToEast = $response.find('#Page_paramAvgVehiclePerMinFromWestToEast');
				if(vars.includes('paramAvgVehiclePerMinFromSouthToNorth'))
					inputParamAvgVehiclePerMinFromSouthToNorth = $response.find('#Page_paramAvgVehiclePerMinFromSouthToNorth');
				if(vars.includes('paramVehicleDemandScalingFactor'))
					inputParamVehicleDemandScalingFactor = $response.find('#Page_paramVehicleDemandScalingFactor');
				if(vars.includes('paramAvgPedestrianPerMinFromWestToEast'))
					inputParamAvgPedestrianPerMinFromWestToEast = $response.find('#Page_paramAvgPedestrianPerMinFromWestToEast');
				if(vars.includes('paramAvgPedestrianPerMinFromSouthToNorth'))
					inputParamAvgPedestrianPerMinFromSouthToNorth = $response.find('#Page_paramAvgPedestrianPerMinFromSouthToNorth');
				if(vars.includes('paramPedestrianDemandScalingFactor'))
					inputParamPedestrianDemandScalingFactor = $response.find('#Page_paramPedestrianDemandScalingFactor');
				if(vars.includes('paramMinGreenTimeSecWestEast'))
					inputParamMinGreenTimeSecWestEast = $response.find('#Page_paramMinGreenTimeSecWestEast');
				if(vars.includes('paramMaxGreenTimeSecWestEast'))
					inputParamMaxGreenTimeSecWestEast = $response.find('#Page_paramMaxGreenTimeSecWestEast');
				if(vars.includes('paramMinGreenTimeSecSouthNorth'))
					inputParamMinGreenTimeSecSouthNorth = $response.find('#Page_paramMinGreenTimeSecSouthNorth');
				if(vars.includes('paramMaxGreenTimeSecSouthNorth'))
					inputParamMaxGreenTimeSecSouthNorth = $response.find('#Page_paramMaxGreenTimeSecSouthNorth');
				if(vars.includes('paramPedestrianWaitThresholdSecNorthSouth'))
					inputParamPedestrianWaitThresholdSecNorthSouth = $response.find('#Page_paramPedestrianWaitThresholdSecNorthSouth');
				if(vars.includes('paramPedestrianWaitThresholdSecWestEast'))
					inputParamPedestrianWaitThresholdSecWestEast = $response.find('#Page_paramPedestrianWaitThresholdSecWestEast');
				if(vars.includes('paramVehicleQueueThresholdWestEast'))
					inputParamVehicleQueueThresholdWestEast = $response.find('#Page_paramVehicleQueueThresholdWestEast');
				if(vars.includes('paramVehicleQueueThresholdSouthNorth'))
					inputParamVehicleQueueThresholdSouthNorth = $response.find('#Page_paramVehicleQueueThresholdSouthNorth');
				if(vars.includes('paramPedestrianQueueThresholdNorthSouth'))
					inputParamPedestrianQueueThresholdNorthSouth = $response.find('#Page_paramPedestrianQueueThresholdNorthSouth');
				if(vars.includes('paramPedestrianQueueThresholdWestEast'))
					inputParamPedestrianQueueThresholdWestEast = $response.find('#Page_paramPedestrianQueueThresholdWestEast');
				if(vars.includes('paramStepSize'))
					inputParamStepSize = $response.find('#Page_paramStepSize');
				if(vars.includes('paramRunTime'))
					inputParamRunTime = $response.find('#Page_paramRunTime');
				if(vars.includes('paramItersPerPar'))
					inputParamItersPerPar = $response.find('#Page_paramItersPerPar');
				if(vars.includes('paramTotalIterNum'))
					inputParamTotalIterNum = $response.find('#Page_paramTotalIterNum');
				if(vars.includes('updatedParameters1'))
					inputUpdatedParameters1 = $response.find('#Page_updatedParameters1');
				if(vars.includes('updatedParameters2'))
					inputUpdatedParameters2 = $response.find('#Page_updatedParameters2');
				if(vars.includes('updatedParameters3'))
					inputUpdatedParameters3 = $response.find('#Page_updatedParameters3');
				if(vars.includes('updatedParameters4'))
					inputUpdatedParameters4 = $response.find('#Page_updatedParameters4');
				if(vars.includes('updatedParameters5'))
					inputUpdatedParameters5 = $response.find('#Page_updatedParameters5');
				if(vars.includes('updatedParameters6'))
					inputUpdatedParameters6 = $response.find('#Page_updatedParameters6');
				if(vars.includes('updatedParameters7'))
					inputUpdatedParameters7 = $response.find('#Page_updatedParameters7');
				if(vars.includes('updatedParameters8'))
					inputUpdatedParameters8 = $response.find('#Page_updatedParameters8');
				if(vars.includes('updatedParameters9'))
					inputUpdatedParameters9 = $response.find('#Page_updatedParameters9');
				if(vars.includes('updatedParameters10'))
					inputUpdatedParameters10 = $response.find('#Page_updatedParameters10');
				if(vars.includes('updatedPerformanceWaitWestEastVehicleSec'))
					inputUpdatedPerformanceWaitWestEastVehicleSec = $response.find('#Page_updatedPerformanceWaitWestEastVehicleSec');
				if(vars.includes('updatedPerformanceWaitSouthNorthVehicleSec'))
					inputUpdatedPerformanceWaitSouthNorthVehicleSec = $response.find('#Page_updatedPerformanceWaitSouthNorthVehicleSec');
				if(vars.includes('updatedPerformanceWaitAllVehicleSec'))
					inputUpdatedPerformanceWaitAllVehicleSec = $response.find('#Page_updatedPerformanceWaitAllVehicleSec');
				if(vars.includes('updatedPerformanceWaitAllPedestrianSec'))
					inputUpdatedPerformanceWaitAllPedestrianSec = $response.find('#Page_updatedPerformanceWaitAllPedestrianSec');
				if(vars.includes('updatedPerformanceWaitAllVehiclePedestrianSec'))
					inputUpdatedPerformanceWaitAllVehiclePedestrianSec = $response.find('#Page_updatedPerformanceWaitAllVehiclePedestrianSec');
				if(vars.includes('avgQueueLengthWestEastVehicle'))
					inputAvgQueueLengthWestEastVehicle = $response.find('#Page_avgQueueLengthWestEastVehicle');
				if(vars.includes('avgQueueLengthSouthNorthVehicle'))
					inputAvgQueueLengthSouthNorthVehicle = $response.find('#Page_avgQueueLengthSouthNorthVehicle');
				if(vars.includes('avgQueueLengthNorthSouthPedestrian'))
					inputAvgQueueLengthNorthSouthPedestrian = $response.find('#Page_avgQueueLengthNorthSouthPedestrian');
				if(vars.includes('avgQueueLengthWestEastPedestrian'))
					inputAvgQueueLengthWestEastPedestrian = $response.find('#Page_avgQueueLengthWestEastPedestrian');
				if(vars.includes('reportStatus'))
					inputReportStatus = $response.find('#Page_reportStatus');
				if(vars.includes('reportProgress'))
					inputReportProgress = $response.find('#Page_reportProgress');
				if(vars.includes('pk'))
					inputPk = $response.find('#Page_pk');
				if(vars.includes('inheritPk'))
					inputInheritPk = $response.find('#Page_inheritPk');
				if(vars.includes('classCanonicalName'))
					inputClassCanonicalName = $response.find('#Page_classCanonicalName');
				if(vars.includes('classSimpleName'))
					inputClassSimpleName = $response.find('#Page_classSimpleName');
				if(vars.includes('classCanonicalNames'))
					inputClassCanonicalNames = $response.find('#Page_classCanonicalNames');
				if(vars.includes('sessionId'))
					inputSessionId = $response.find('#Page_sessionId');
				if(vars.includes('userKey'))
					inputUserKey = $response.find('#Page_userKey');
				if(vars.includes('saves'))
					inputSaves = $response.find('#Page_saves');
				if(vars.includes('objectTitle'))
					inputObjectTitle = $response.find('#Page_objectTitle');
				if(vars.includes('objectSuggest'))
					inputObjectSuggest = $response.find('#Page_objectSuggest');
				if(vars.includes('objectText'))
					inputObjectText = $response.find('#Page_objectText');
				if(vars.includes('pageUrlId'))
					inputPageUrlId = $response.find('#Page_pageUrlId');
				if(vars.includes('pageUrlPk'))
					inputPageUrlPk = $response.find('#Page_pageUrlPk');
				if(vars.includes('pageUrlApi'))
					inputPageUrlApi = $response.find('#Page_pageUrlApi');
				if(vars.includes('id'))
					inputId = $response.find('#Page_id');
				if(vars.includes('updatedPerformance'))
					inputUpdatedPerformance = $response.find('#Page_updatedPerformance');
				if(vars.includes('areaServed'))
					inputAreaServed = $response.find('#Page_areaServed');
				if(vars.includes('simulationName'))
					inputSimulationName = $response.find('#Page_simulationName');
				if(vars.includes('smartTrafficLightId'))
					inputSmartTrafficLightId = $response.find('#Page_smartTrafficLightId');
				if(vars.includes('smartTrafficLightName'))
					inputSmartTrafficLightName = $response.find('#Page_smartTrafficLightName');
				if(vars.includes('paramLam'))
					inputParamLam = $response.find('#Page_paramLam');
				if(vars.includes('paramDemandScale'))
					inputParamDemandScale = $response.find('#Page_paramDemandScale');
				if(vars.includes('paramInitialPar'))
					inputParamInitialPar = $response.find('#Page_paramInitialPar');
				if(vars.includes('updatedParameters'))
					inputUpdatedParameters = $response.find('#Page_updatedParameters');
				if(vars.includes('averageQueueLength'))
					inputAverageQueueLength = $response.find('#Page_averageQueueLength');

				if(inputCreated) {
					inputCreated.replaceAll('#Page_created');
					addGlow($('#Page_created'));
				}

				if(inputModified) {
					inputModified.replaceAll('#Page_modified');
					addGlow($('#Page_modified'));
				}

				if(inputObjectId) {
					inputObjectId.replaceAll('#Page_objectId');
					addGlow($('#Page_objectId'));
				}

				if(inputArchived) {
					inputArchived.replaceAll('#Page_archived');
					addGlow($('#Page_archived'));
				}

				if(inputDeleted) {
					inputDeleted.replaceAll('#Page_deleted');
					addGlow($('#Page_deleted'));
				}

				if(inputReportName) {
					inputReportName.replaceAll('#Page_reportName');
					addGlow($('#Page_reportName'));
				}

				if(inputLocation) {
					inputLocation.replaceAll('#Page_location');
					addGlow($('#Page_location'));
				}

				if(inputSimulationKey) {
					inputSimulationKey.replaceAll('#Page_simulationKey');
					addGlow($('#Page_simulationKey'));
				}

				if(inputSmartTrafficLightKey) {
					inputSmartTrafficLightKey.replaceAll('#Page_smartTrafficLightKey');
					addGlow($('#Page_smartTrafficLightKey'));
				}

				if(inputParamAvgVehiclePerMinFromWestToEast) {
					inputParamAvgVehiclePerMinFromWestToEast.replaceAll('#Page_paramAvgVehiclePerMinFromWestToEast');
					addGlow($('#Page_paramAvgVehiclePerMinFromWestToEast'));
				}

				if(inputParamAvgVehiclePerMinFromSouthToNorth) {
					inputParamAvgVehiclePerMinFromSouthToNorth.replaceAll('#Page_paramAvgVehiclePerMinFromSouthToNorth');
					addGlow($('#Page_paramAvgVehiclePerMinFromSouthToNorth'));
				}

				if(inputParamVehicleDemandScalingFactor) {
					inputParamVehicleDemandScalingFactor.replaceAll('#Page_paramVehicleDemandScalingFactor');
					addGlow($('#Page_paramVehicleDemandScalingFactor'));
				}

				if(inputParamAvgPedestrianPerMinFromWestToEast) {
					inputParamAvgPedestrianPerMinFromWestToEast.replaceAll('#Page_paramAvgPedestrianPerMinFromWestToEast');
					addGlow($('#Page_paramAvgPedestrianPerMinFromWestToEast'));
				}

				if(inputParamAvgPedestrianPerMinFromSouthToNorth) {
					inputParamAvgPedestrianPerMinFromSouthToNorth.replaceAll('#Page_paramAvgPedestrianPerMinFromSouthToNorth');
					addGlow($('#Page_paramAvgPedestrianPerMinFromSouthToNorth'));
				}

				if(inputParamPedestrianDemandScalingFactor) {
					inputParamPedestrianDemandScalingFactor.replaceAll('#Page_paramPedestrianDemandScalingFactor');
					addGlow($('#Page_paramPedestrianDemandScalingFactor'));
				}

				if(inputParamMinGreenTimeSecWestEast) {
					inputParamMinGreenTimeSecWestEast.replaceAll('#Page_paramMinGreenTimeSecWestEast');
					addGlow($('#Page_paramMinGreenTimeSecWestEast'));
				}

				if(inputParamMaxGreenTimeSecWestEast) {
					inputParamMaxGreenTimeSecWestEast.replaceAll('#Page_paramMaxGreenTimeSecWestEast');
					addGlow($('#Page_paramMaxGreenTimeSecWestEast'));
				}

				if(inputParamMinGreenTimeSecSouthNorth) {
					inputParamMinGreenTimeSecSouthNorth.replaceAll('#Page_paramMinGreenTimeSecSouthNorth');
					addGlow($('#Page_paramMinGreenTimeSecSouthNorth'));
				}

				if(inputParamMaxGreenTimeSecSouthNorth) {
					inputParamMaxGreenTimeSecSouthNorth.replaceAll('#Page_paramMaxGreenTimeSecSouthNorth');
					addGlow($('#Page_paramMaxGreenTimeSecSouthNorth'));
				}

				if(inputParamPedestrianWaitThresholdSecNorthSouth) {
					inputParamPedestrianWaitThresholdSecNorthSouth.replaceAll('#Page_paramPedestrianWaitThresholdSecNorthSouth');
					addGlow($('#Page_paramPedestrianWaitThresholdSecNorthSouth'));
				}

				if(inputParamPedestrianWaitThresholdSecWestEast) {
					inputParamPedestrianWaitThresholdSecWestEast.replaceAll('#Page_paramPedestrianWaitThresholdSecWestEast');
					addGlow($('#Page_paramPedestrianWaitThresholdSecWestEast'));
				}

				if(inputParamVehicleQueueThresholdWestEast) {
					inputParamVehicleQueueThresholdWestEast.replaceAll('#Page_paramVehicleQueueThresholdWestEast');
					addGlow($('#Page_paramVehicleQueueThresholdWestEast'));
				}

				if(inputParamVehicleQueueThresholdSouthNorth) {
					inputParamVehicleQueueThresholdSouthNorth.replaceAll('#Page_paramVehicleQueueThresholdSouthNorth');
					addGlow($('#Page_paramVehicleQueueThresholdSouthNorth'));
				}

				if(inputParamPedestrianQueueThresholdNorthSouth) {
					inputParamPedestrianQueueThresholdNorthSouth.replaceAll('#Page_paramPedestrianQueueThresholdNorthSouth');
					addGlow($('#Page_paramPedestrianQueueThresholdNorthSouth'));
				}

				if(inputParamPedestrianQueueThresholdWestEast) {
					inputParamPedestrianQueueThresholdWestEast.replaceAll('#Page_paramPedestrianQueueThresholdWestEast');
					addGlow($('#Page_paramPedestrianQueueThresholdWestEast'));
				}

				if(inputParamStepSize) {
					inputParamStepSize.replaceAll('#Page_paramStepSize');
					addGlow($('#Page_paramStepSize'));
				}

				if(inputParamRunTime) {
					inputParamRunTime.replaceAll('#Page_paramRunTime');
					addGlow($('#Page_paramRunTime'));
				}

				if(inputParamItersPerPar) {
					inputParamItersPerPar.replaceAll('#Page_paramItersPerPar');
					addGlow($('#Page_paramItersPerPar'));
				}

				if(inputParamTotalIterNum) {
					inputParamTotalIterNum.replaceAll('#Page_paramTotalIterNum');
					addGlow($('#Page_paramTotalIterNum'));
				}

				if(inputUpdatedParameters1) {
					inputUpdatedParameters1.replaceAll('#Page_updatedParameters1');
					addGlow($('#Page_updatedParameters1'));
				}

				if(inputUpdatedParameters2) {
					inputUpdatedParameters2.replaceAll('#Page_updatedParameters2');
					addGlow($('#Page_updatedParameters2'));
				}

				if(inputUpdatedParameters3) {
					inputUpdatedParameters3.replaceAll('#Page_updatedParameters3');
					addGlow($('#Page_updatedParameters3'));
				}

				if(inputUpdatedParameters4) {
					inputUpdatedParameters4.replaceAll('#Page_updatedParameters4');
					addGlow($('#Page_updatedParameters4'));
				}

				if(inputUpdatedParameters5) {
					inputUpdatedParameters5.replaceAll('#Page_updatedParameters5');
					addGlow($('#Page_updatedParameters5'));
				}

				if(inputUpdatedParameters6) {
					inputUpdatedParameters6.replaceAll('#Page_updatedParameters6');
					addGlow($('#Page_updatedParameters6'));
				}

				if(inputUpdatedParameters7) {
					inputUpdatedParameters7.replaceAll('#Page_updatedParameters7');
					addGlow($('#Page_updatedParameters7'));
				}

				if(inputUpdatedParameters8) {
					inputUpdatedParameters8.replaceAll('#Page_updatedParameters8');
					addGlow($('#Page_updatedParameters8'));
				}

				if(inputUpdatedParameters9) {
					inputUpdatedParameters9.replaceAll('#Page_updatedParameters9');
					addGlow($('#Page_updatedParameters9'));
				}

				if(inputUpdatedParameters10) {
					inputUpdatedParameters10.replaceAll('#Page_updatedParameters10');
					addGlow($('#Page_updatedParameters10'));
				}

				if(inputUpdatedPerformanceWaitWestEastVehicleSec) {
					inputUpdatedPerformanceWaitWestEastVehicleSec.replaceAll('#Page_updatedPerformanceWaitWestEastVehicleSec');
					addGlow($('#Page_updatedPerformanceWaitWestEastVehicleSec'));
				}

				if(inputUpdatedPerformanceWaitSouthNorthVehicleSec) {
					inputUpdatedPerformanceWaitSouthNorthVehicleSec.replaceAll('#Page_updatedPerformanceWaitSouthNorthVehicleSec');
					addGlow($('#Page_updatedPerformanceWaitSouthNorthVehicleSec'));
				}

				if(inputUpdatedPerformanceWaitAllVehicleSec) {
					inputUpdatedPerformanceWaitAllVehicleSec.replaceAll('#Page_updatedPerformanceWaitAllVehicleSec');
					addGlow($('#Page_updatedPerformanceWaitAllVehicleSec'));
				}

				if(inputUpdatedPerformanceWaitAllPedestrianSec) {
					inputUpdatedPerformanceWaitAllPedestrianSec.replaceAll('#Page_updatedPerformanceWaitAllPedestrianSec');
					addGlow($('#Page_updatedPerformanceWaitAllPedestrianSec'));
				}

				if(inputUpdatedPerformanceWaitAllVehiclePedestrianSec) {
					inputUpdatedPerformanceWaitAllVehiclePedestrianSec.replaceAll('#Page_updatedPerformanceWaitAllVehiclePedestrianSec');
					addGlow($('#Page_updatedPerformanceWaitAllVehiclePedestrianSec'));
				}

				if(inputAvgQueueLengthWestEastVehicle) {
					inputAvgQueueLengthWestEastVehicle.replaceAll('#Page_avgQueueLengthWestEastVehicle');
					addGlow($('#Page_avgQueueLengthWestEastVehicle'));
				}

				if(inputAvgQueueLengthSouthNorthVehicle) {
					inputAvgQueueLengthSouthNorthVehicle.replaceAll('#Page_avgQueueLengthSouthNorthVehicle');
					addGlow($('#Page_avgQueueLengthSouthNorthVehicle'));
				}

				if(inputAvgQueueLengthNorthSouthPedestrian) {
					inputAvgQueueLengthNorthSouthPedestrian.replaceAll('#Page_avgQueueLengthNorthSouthPedestrian');
					addGlow($('#Page_avgQueueLengthNorthSouthPedestrian'));
				}

				if(inputAvgQueueLengthWestEastPedestrian) {
					inputAvgQueueLengthWestEastPedestrian.replaceAll('#Page_avgQueueLengthWestEastPedestrian');
					addGlow($('#Page_avgQueueLengthWestEastPedestrian'));
				}

				if(inputReportStatus) {
					inputReportStatus.replaceAll('#Page_reportStatus');
					addGlow($('#Page_reportStatus'));
				}

				if(inputReportProgress) {
					inputReportProgress.replaceAll('#Page_reportProgress');
					addGlow($('#Page_reportProgress'));
				}

				if(inputPk) {
					inputPk.replaceAll('#Page_pk');
					addGlow($('#Page_pk'));
				}

				if(inputInheritPk) {
					inputInheritPk.replaceAll('#Page_inheritPk');
					addGlow($('#Page_inheritPk'));
				}

				if(inputClassCanonicalName) {
					inputClassCanonicalName.replaceAll('#Page_classCanonicalName');
					addGlow($('#Page_classCanonicalName'));
				}

				if(inputClassSimpleName) {
					inputClassSimpleName.replaceAll('#Page_classSimpleName');
					addGlow($('#Page_classSimpleName'));
				}

				if(inputClassCanonicalNames) {
					inputClassCanonicalNames.replaceAll('#Page_classCanonicalNames');
					addGlow($('#Page_classCanonicalNames'));
				}

				if(inputSessionId) {
					inputSessionId.replaceAll('#Page_sessionId');
					addGlow($('#Page_sessionId'));
				}

				if(inputUserKey) {
					inputUserKey.replaceAll('#Page_userKey');
					addGlow($('#Page_userKey'));
				}

				if(inputSaves) {
					inputSaves.replaceAll('#Page_saves');
					addGlow($('#Page_saves'));
				}

				if(inputObjectTitle) {
					inputObjectTitle.replaceAll('#Page_objectTitle');
					addGlow($('#Page_objectTitle'));
				}

				if(inputObjectSuggest) {
					inputObjectSuggest.replaceAll('#Page_objectSuggest');
					addGlow($('#Page_objectSuggest'));
				}

				if(inputObjectText) {
					inputObjectText.replaceAll('#Page_objectText');
					addGlow($('#Page_objectText'));
				}

				if(inputPageUrlId) {
					inputPageUrlId.replaceAll('#Page_pageUrlId');
					addGlow($('#Page_pageUrlId'));
				}

				if(inputPageUrlPk) {
					inputPageUrlPk.replaceAll('#Page_pageUrlPk');
					addGlow($('#Page_pageUrlPk'));
				}

				if(inputPageUrlApi) {
					inputPageUrlApi.replaceAll('#Page_pageUrlApi');
					addGlow($('#Page_pageUrlApi'));
				}

				if(inputId) {
					inputId.replaceAll('#Page_id');
					addGlow($('#Page_id'));
				}

				if(inputUpdatedPerformance) {
					inputUpdatedPerformance.replaceAll('#Page_updatedPerformance');
					addGlow($('#Page_updatedPerformance'));
				}

				if(inputAreaServed) {
					inputAreaServed.replaceAll('#Page_areaServed');
					addGlow($('#Page_areaServed'));
				}

				if(inputSimulationName) {
					inputSimulationName.replaceAll('#Page_simulationName');
					addGlow($('#Page_simulationName'));
				}

				if(inputSmartTrafficLightId) {
					inputSmartTrafficLightId.replaceAll('#Page_smartTrafficLightId');
					addGlow($('#Page_smartTrafficLightId'));
				}

				if(inputSmartTrafficLightName) {
					inputSmartTrafficLightName.replaceAll('#Page_smartTrafficLightName');
					addGlow($('#Page_smartTrafficLightName'));
				}

				if(inputParamLam) {
					inputParamLam.replaceAll('#Page_paramLam');
					addGlow($('#Page_paramLam'));
				}

				if(inputParamDemandScale) {
					inputParamDemandScale.replaceAll('#Page_paramDemandScale');
					addGlow($('#Page_paramDemandScale'));
				}

				if(inputParamInitialPar) {
					inputParamInitialPar.replaceAll('#Page_paramInitialPar');
					addGlow($('#Page_paramInitialPar'));
				}

				if(inputUpdatedParameters) {
					inputUpdatedParameters.replaceAll('#Page_updatedParameters');
					addGlow($('#Page_updatedParameters'));
				}

				if(inputAverageQueueLength) {
					inputAverageQueueLength.replaceAll('#Page_averageQueueLength');
					addGlow($('#Page_averageQueueLength'));
				}
		});
	}
}

function pageGraphSimulationReport(apiRequest) {
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
				if(range) {
					layout['title'] = 'simulation reports';
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

		// Graph Location
		var map = L.map('htmBodyGraphLocationBaseModelPage');
		var data = [];
		var layout = {};
		layout['showlegend'] = true;
		layout['dragmode'] = 'zoom';
		layout['uirevision'] = 'true';
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
			map.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
		else if(window['DEFAULT_MAP_ZOOM'])
			map.setView(null, window['DEFAULT_MAP_ZOOM']);
		else if(window['DEFAULT_MAP_LOCATION'])
			map.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

		layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
		$.each( window.listSimulationReport, function(index, simulationReport) {
			if(simulationReport.areaServed) {
				var shapes = [];
				var features = [];
				if(Array.isArray(simulationReport.areaServed))
					shapes = shapes.concat(simulationReport.areaServed);
				else
					shapes.push(simulationReport.areaServed);
				shapes.forEach(shape => {
					features.push({
						"type": "Feature"
						, "properties": simulationReport
						, "geometry": shape
					});
				});
				function onEachFeature(feature, layer) {
					let popupContent = `<p>${feature.properties.objectTitle} is a ${feature.geometry.type}</p>`;
					layer.bindPopup(popupContent);
				}
				var geojsonLayer = L.geoJSON(features, {onEachFeature}).addTo(map);
			}
		});
	}
}

function animateStats() {
	$('#pageSearchVal-fqSimulationReport_time').text('');
	searchPage('SimulationReport', function() {
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
			searchPage('SimulationReport');
		}, speedRate);
	});
}
