
// Search //

async function searchIotNode($formFilters, success, error) {
	var filters = searchIotNodeFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchIotNodeVals(filters, success, error);
}

function searchIotNodeFilters($formFilters) {
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

		var filterNodeName = $formFilters.find('.valueNodeName').val();
		if(filterNodeName != null && filterNodeName !== '')
			filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

		var filterNodeType = $formFilters.find('.valueNodeType').val();
		if(filterNodeType != null && filterNodeType !== '')
			filters.push({ name: 'fq', value: 'nodeType:' + filterNodeType });

		var filterNodeId = $formFilters.find('.valueNodeId').val();
		if(filterNodeId != null && filterNodeId !== '')
			filters.push({ name: 'fq', value: 'nodeId:' + filterNodeId });

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

		var filterJson_moisture = $formFilters.find('.valueJson_moisture').val();
		if(filterJson_moisture != null && filterJson_moisture !== '')
			filters.push({ name: 'fq', value: 'json_moisture:' + filterJson_moisture });

		var filterJson_moisture0 = $formFilters.find('.valueJson_moisture0').val();
		if(filterJson_moisture0 != null && filterJson_moisture0 !== '')
			filters.push({ name: 'fq', value: 'json_moisture0:' + filterJson_moisture0 });

		var filterJson_moisture1 = $formFilters.find('.valueJson_moisture1').val();
		if(filterJson_moisture1 != null && filterJson_moisture1 !== '')
			filters.push({ name: 'fq', value: 'json_moisture1:' + filterJson_moisture1 });

		var filterJson_temperature = $formFilters.find('.valueJson_temperature').val();
		if(filterJson_temperature != null && filterJson_temperature !== '')
			filters.push({ name: 'fq', value: 'json_temperature:' + filterJson_temperature });

		var filterJson_temperature0 = $formFilters.find('.valueJson_temperature0').val();
		if(filterJson_temperature0 != null && filterJson_temperature0 !== '')
			filters.push({ name: 'fq', value: 'json_temperature0:' + filterJson_temperature0 });

		var filterJson_temperatureAverage = $formFilters.find('.valueJson_temperatureAverage').val();
		if(filterJson_temperatureAverage != null && filterJson_temperatureAverage !== '')
			filters.push({ name: 'fq', value: 'json_temperatureAverage:' + filterJson_temperatureAverage });

		var filterJson_badConditionsCounter = $formFilters.find('.valueJson_badConditionsCounter').val();
		if(filterJson_badConditionsCounter != null && filterJson_badConditionsCounter !== '')
			filters.push({ name: 'fq', value: 'json_badConditionsCounter:' + filterJson_badConditionsCounter });

		var filterJson_door = $formFilters.find('.valueJson_door').val();
		if(filterJson_door != null && filterJson_door !== '')
			filters.push({ name: 'fq', value: 'json_door:' + filterJson_door });

		var $filterJson_alarmDoorCheckbox = $formFilters.find('input.valueJson_alarmDoor[type = "checkbox"]');
		var $filterJson_alarmDoorSelect = $formFilters.find('select.valueJson_alarmDoor');
		var filterJson_alarmDoor = $filterJson_alarmDoorSelect.length ? $filterJson_alarmDoorSelect.val() : $filterJson_alarmDoorCheckbox.prop('checked');
		var filterJson_alarmDoorSelectVal = $formFilters.find('select.filterJson_alarmDoor').val();
		var filterJson_alarmDoor = null;
		if(filterJson_alarmDoorSelectVal !== '')
			filterJson_alarmDoor = filterJson_alarmDoorSelectVal == 'true';
		if(filterJson_alarmDoor != null && filterJson_alarmDoor === true)
			filters.push({ name: 'fq', value: 'json_alarmDoor:' + filterJson_alarmDoor });

		var filterJson_flood = $formFilters.find('.valueJson_flood').val();
		if(filterJson_flood != null && filterJson_flood !== '')
			filters.push({ name: 'fq', value: 'json_flood:' + filterJson_flood });

		var $filterJson_alarmFloodCheckbox = $formFilters.find('input.valueJson_alarmFlood[type = "checkbox"]');
		var $filterJson_alarmFloodSelect = $formFilters.find('select.valueJson_alarmFlood');
		var filterJson_alarmFlood = $filterJson_alarmFloodSelect.length ? $filterJson_alarmFloodSelect.val() : $filterJson_alarmFloodCheckbox.prop('checked');
		var filterJson_alarmFloodSelectVal = $formFilters.find('select.filterJson_alarmFlood').val();
		var filterJson_alarmFlood = null;
		if(filterJson_alarmFloodSelectVal !== '')
			filterJson_alarmFlood = filterJson_alarmFloodSelectVal == 'true';
		if(filterJson_alarmFlood != null && filterJson_alarmFlood === true)
			filters.push({ name: 'fq', value: 'json_alarmFlood:' + filterJson_alarmFlood });

		var filterJson_lux2 = $formFilters.find('.valueJson_lux2').val();
		if(filterJson_lux2 != null && filterJson_lux2 !== '')
			filters.push({ name: 'fq', value: 'json_lux2:' + filterJson_lux2 });

		var filterJson_illuminance = $formFilters.find('.valueJson_illuminance').val();
		if(filterJson_illuminance != null && filterJson_illuminance !== '')
			filters.push({ name: 'fq', value: 'json_illuminance:' + filterJson_illuminance });

		var filterJson_resistance0 = $formFilters.find('.valueJson_resistance0').val();
		if(filterJson_resistance0 != null && filterJson_resistance0 !== '')
			filters.push({ name: 'fq', value: 'json_resistance0:' + filterJson_resistance0 });

		var filterJson_resistance1 = $formFilters.find('.valueJson_resistance1').val();
		if(filterJson_resistance1 != null && filterJson_resistance1 !== '')
			filters.push({ name: 'fq', value: 'json_resistance1:' + filterJson_resistance1 });

		var filterJson_frequency = $formFilters.find('.valueJson_frequency').val();
		if(filterJson_frequency != null && filterJson_frequency !== '')
			filters.push({ name: 'fq', value: 'json_frequency:' + filterJson_frequency });

		var filterJson_devEui = $formFilters.find('.valueJson_devEui').val();
		if(filterJson_devEui != null && filterJson_devEui !== '')
			filters.push({ name: 'fq', value: 'json_devEui:' + filterJson_devEui });

		var filterJson_bandwidth = $formFilters.find('.valueJson_bandwidth').val();
		if(filterJson_bandwidth != null && filterJson_bandwidth !== '')
			filters.push({ name: 'fq', value: 'json_bandwidth:' + filterJson_bandwidth });

		var filterJson_dataRate = $formFilters.find('.valueJson_dataRate').val();
		if(filterJson_dataRate != null && filterJson_dataRate !== '')
			filters.push({ name: 'fq', value: 'json_dataRate:' + filterJson_dataRate });

		var filterJson_frameCount = $formFilters.find('.valueJson_frameCount').val();
		if(filterJson_frameCount != null && filterJson_frameCount !== '')
			filters.push({ name: 'fq', value: 'json_frameCount:' + filterJson_frameCount });

		var filterJson_maxPayload = $formFilters.find('.valueJson_maxPayload').val();
		if(filterJson_maxPayload != null && filterJson_maxPayload !== '')
			filters.push({ name: 'fq', value: 'json_maxPayload:' + filterJson_maxPayload });

		var filterJson_bitsPerSecond = $formFilters.find('.valueJson_bitsPerSecond').val();
		if(filterJson_bitsPerSecond != null && filterJson_bitsPerSecond !== '')
			filters.push({ name: 'fq', value: 'json_bitsPerSecond:' + filterJson_bitsPerSecond });

		var filterJson_batteryVoltage = $formFilters.find('.valueJson_batteryVoltage').val();
		if(filterJson_batteryVoltage != null && filterJson_batteryVoltage !== '')
			filters.push({ name: 'fq', value: 'json_batteryVoltage:' + filterJson_batteryVoltage });

		var filterJson_spreadingFactor = $formFilters.find('.valueJson_spreadingFactor').val();
		if(filterJson_spreadingFactor != null && filterJson_spreadingFactor !== '')
			filters.push({ name: 'fq', value: 'json_spreadingFactor:' + filterJson_spreadingFactor });

		var $filterJson_dataRateAdaptiveCheckbox = $formFilters.find('input.valueJson_dataRateAdaptive[type = "checkbox"]');
		var $filterJson_dataRateAdaptiveSelect = $formFilters.find('select.valueJson_dataRateAdaptive');
		var filterJson_dataRateAdaptive = $filterJson_dataRateAdaptiveSelect.length ? $filterJson_dataRateAdaptiveSelect.val() : $filterJson_dataRateAdaptiveCheckbox.prop('checked');
		var filterJson_dataRateAdaptiveSelectVal = $formFilters.find('select.filterJson_dataRateAdaptive').val();
		var filterJson_dataRateAdaptive = null;
		if(filterJson_dataRateAdaptiveSelectVal !== '')
			filterJson_dataRateAdaptive = filterJson_dataRateAdaptiveSelectVal == 'true';
		if(filterJson_dataRateAdaptive != null && filterJson_dataRateAdaptive === true)
			filters.push({ name: 'fq', value: 'json_dataRateAdaptive:' + filterJson_dataRateAdaptive });

		var filterJson_swversion = $formFilters.find('.valueJson_swversion').val();
		if(filterJson_swversion != null && filterJson_swversion !== '')
			filters.push({ name: 'fq', value: 'json_swversion:' + filterJson_swversion });

		var filterJson_batteryLevel = $formFilters.find('.valueJson_batteryLevel').val();
		if(filterJson_batteryLevel != null && filterJson_batteryLevel !== '')
			filters.push({ name: 'fq', value: 'json_batteryLevel:' + filterJson_batteryLevel });

		var filterJson_startUpCount = $formFilters.find('.valueJson_startUpCount').val();
		if(filterJson_startUpCount != null && filterJson_startUpCount !== '')
			filters.push({ name: 'fq', value: 'json_startUpCount:' + filterJson_startUpCount });

		var filterJson_watchdogCount = $formFilters.find('.valueJson_watchdogCount').val();
		if(filterJson_watchdogCount != null && filterJson_watchdogCount !== '')
			filters.push({ name: 'fq', value: 'json_watchdogCount:' + filterJson_watchdogCount });

		var filterJson_historySequence = $formFilters.find('.valueJson_historySequence').val();
		if(filterJson_historySequence != null && filterJson_historySequence !== '')
			filters.push({ name: 'fq', value: 'json_historySequence:' + filterJson_historySequence });

		var filterJson_versionFirmware = $formFilters.find('.valueJson_versionFirmware').val();
		if(filterJson_versionFirmware != null && filterJson_versionFirmware !== '')
			filters.push({ name: 'fq', value: 'json_versionFirmware:' + filterJson_versionFirmware });

		var filterJson_stackTxFailRebootCount = $formFilters.find('.valueJson_stackTxFailRebootCount').val();
		if(filterJson_stackTxFailRebootCount != null && filterJson_stackTxFailRebootCount !== '')
			filters.push({ name: 'fq', value: 'json_stackTxFailRebootCount:' + filterJson_stackTxFailRebootCount });

		var filterJson_historySequencePrevious = $formFilters.find('.valueJson_historySequencePrevious').val();
		if(filterJson_historySequencePrevious != null && filterJson_historySequencePrevious !== '')
			filters.push({ name: 'fq', value: 'json_historySequencePrevious:' + filterJson_historySequencePrevious });

		var filterJson_snr = $formFilters.find('.valueJson_snr').val();
		if(filterJson_snr != null && filterJson_snr !== '')
			filters.push({ name: 'fq', value: 'json_snr:' + filterJson_snr });

		var filterJson_rssi = $formFilters.find('.valueJson_rssi').val();
		if(filterJson_rssi != null && filterJson_rssi !== '')
			filters.push({ name: 'fq', value: 'json_rssi:' + filterJson_rssi });

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

		var filterJson = $formFilters.find('.valueJson').val();
		if(filterJson != null && filterJson !== '')
			filters.push({ name: 'fq', value: 'json:' + filterJson });
	}
	return filters;
}

function searchIotNodeVals(filters, success, error) {

	$.ajax({
		url: '/api/iot-node?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestIotNodeObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-router ');
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
	searchIotNodeVals($formFilters, success, error);
}

// GET //

async function getIotNode(pk) {
	$.ajax({
		url: '/api/iot-node/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// PATCH //

async function patchIotNode($formFilters, $formValues, pk, success, error) {
	var filters = patchIotNodeFilters($formFilters);

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

	var valueNodeName = $formValues.find('.valueNodeName').val();
	var removeNodeName = $formValues.find('.removeNodeName').val() === 'true';
	var setNodeName = removeNodeName ? null : $formValues.find('.setNodeName').val();
	var addNodeName = $formValues.find('.addNodeName').val();
	if(removeNodeName || setNodeName != null && setNodeName !== '')
		vals['setNodeName'] = setNodeName;
	if(addNodeName != null && addNodeName !== '')
		vals['addNodeName'] = addNodeName;
	var removeNodeName = $formValues.find('.removeNodeName').val();
	if(removeNodeName != null && removeNodeName !== '')
		vals['removeNodeName'] = removeNodeName;

	var valueNodeType = $formValues.find('.valueNodeType').val();
	var removeNodeType = $formValues.find('.removeNodeType').val() === 'true';
	var setNodeType = removeNodeType ? null : $formValues.find('.setNodeType').val();
	var addNodeType = $formValues.find('.addNodeType').val();
	if(removeNodeType || setNodeType != null && setNodeType !== '')
		vals['setNodeType'] = setNodeType;
	if(addNodeType != null && addNodeType !== '')
		vals['addNodeType'] = addNodeType;
	var removeNodeType = $formValues.find('.removeNodeType').val();
	if(removeNodeType != null && removeNodeType !== '')
		vals['removeNodeType'] = removeNodeType;

	var valueNodeId = $formValues.find('.valueNodeId').val();
	var removeNodeId = $formValues.find('.removeNodeId').val() === 'true';
	var setNodeId = removeNodeId ? null : $formValues.find('.setNodeId').val();
	var addNodeId = $formValues.find('.addNodeId').val();
	if(removeNodeId || setNodeId != null && setNodeId !== '')
		vals['setNodeId'] = setNodeId;
	if(addNodeId != null && addNodeId !== '')
		vals['addNodeId'] = addNodeId;
	var removeNodeId = $formValues.find('.removeNodeId').val();
	if(removeNodeId != null && removeNodeId !== '')
		vals['removeNodeId'] = removeNodeId;

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

	var valueJson_moisture = $formValues.find('.valueJson_moisture').val();
	var removeJson_moisture = $formValues.find('.removeJson_moisture').val() === 'true';
	var setJson_moisture = removeJson_moisture ? null : $formValues.find('.setJson_moisture').val();
	var addJson_moisture = $formValues.find('.addJson_moisture').val();
	if(removeJson_moisture || setJson_moisture != null && setJson_moisture !== '')
		vals['setJson_moisture'] = setJson_moisture;
	if(addJson_moisture != null && addJson_moisture !== '')
		vals['addJson_moisture'] = addJson_moisture;
	var removeJson_moisture = $formValues.find('.removeJson_moisture').val();
	if(removeJson_moisture != null && removeJson_moisture !== '')
		vals['removeJson_moisture'] = removeJson_moisture;

	var valueJson_moisture0 = $formValues.find('.valueJson_moisture0').val();
	var removeJson_moisture0 = $formValues.find('.removeJson_moisture0').val() === 'true';
	var setJson_moisture0 = removeJson_moisture0 ? null : $formValues.find('.setJson_moisture0').val();
	var addJson_moisture0 = $formValues.find('.addJson_moisture0').val();
	if(removeJson_moisture0 || setJson_moisture0 != null && setJson_moisture0 !== '')
		vals['setJson_moisture0'] = setJson_moisture0;
	if(addJson_moisture0 != null && addJson_moisture0 !== '')
		vals['addJson_moisture0'] = addJson_moisture0;
	var removeJson_moisture0 = $formValues.find('.removeJson_moisture0').val();
	if(removeJson_moisture0 != null && removeJson_moisture0 !== '')
		vals['removeJson_moisture0'] = removeJson_moisture0;

	var valueJson_moisture1 = $formValues.find('.valueJson_moisture1').val();
	var removeJson_moisture1 = $formValues.find('.removeJson_moisture1').val() === 'true';
	var setJson_moisture1 = removeJson_moisture1 ? null : $formValues.find('.setJson_moisture1').val();
	var addJson_moisture1 = $formValues.find('.addJson_moisture1').val();
	if(removeJson_moisture1 || setJson_moisture1 != null && setJson_moisture1 !== '')
		vals['setJson_moisture1'] = setJson_moisture1;
	if(addJson_moisture1 != null && addJson_moisture1 !== '')
		vals['addJson_moisture1'] = addJson_moisture1;
	var removeJson_moisture1 = $formValues.find('.removeJson_moisture1').val();
	if(removeJson_moisture1 != null && removeJson_moisture1 !== '')
		vals['removeJson_moisture1'] = removeJson_moisture1;

	var valueJson_temperature = $formValues.find('.valueJson_temperature').val();
	var removeJson_temperature = $formValues.find('.removeJson_temperature').val() === 'true';
	var setJson_temperature = removeJson_temperature ? null : $formValues.find('.setJson_temperature').val();
	var addJson_temperature = $formValues.find('.addJson_temperature').val();
	if(removeJson_temperature || setJson_temperature != null && setJson_temperature !== '')
		vals['setJson_temperature'] = setJson_temperature;
	if(addJson_temperature != null && addJson_temperature !== '')
		vals['addJson_temperature'] = addJson_temperature;
	var removeJson_temperature = $formValues.find('.removeJson_temperature').val();
	if(removeJson_temperature != null && removeJson_temperature !== '')
		vals['removeJson_temperature'] = removeJson_temperature;

	var valueJson_temperature0 = $formValues.find('.valueJson_temperature0').val();
	var removeJson_temperature0 = $formValues.find('.removeJson_temperature0').val() === 'true';
	var setJson_temperature0 = removeJson_temperature0 ? null : $formValues.find('.setJson_temperature0').val();
	var addJson_temperature0 = $formValues.find('.addJson_temperature0').val();
	if(removeJson_temperature0 || setJson_temperature0 != null && setJson_temperature0 !== '')
		vals['setJson_temperature0'] = setJson_temperature0;
	if(addJson_temperature0 != null && addJson_temperature0 !== '')
		vals['addJson_temperature0'] = addJson_temperature0;
	var removeJson_temperature0 = $formValues.find('.removeJson_temperature0').val();
	if(removeJson_temperature0 != null && removeJson_temperature0 !== '')
		vals['removeJson_temperature0'] = removeJson_temperature0;

	var valueJson_temperatureAverage = $formValues.find('.valueJson_temperatureAverage').val();
	var removeJson_temperatureAverage = $formValues.find('.removeJson_temperatureAverage').val() === 'true';
	var setJson_temperatureAverage = removeJson_temperatureAverage ? null : $formValues.find('.setJson_temperatureAverage').val();
	var addJson_temperatureAverage = $formValues.find('.addJson_temperatureAverage').val();
	if(removeJson_temperatureAverage || setJson_temperatureAverage != null && setJson_temperatureAverage !== '')
		vals['setJson_temperatureAverage'] = setJson_temperatureAverage;
	if(addJson_temperatureAverage != null && addJson_temperatureAverage !== '')
		vals['addJson_temperatureAverage'] = addJson_temperatureAverage;
	var removeJson_temperatureAverage = $formValues.find('.removeJson_temperatureAverage').val();
	if(removeJson_temperatureAverage != null && removeJson_temperatureAverage !== '')
		vals['removeJson_temperatureAverage'] = removeJson_temperatureAverage;

	var valueJson_badConditionsCounter = $formValues.find('.valueJson_badConditionsCounter').val();
	var removeJson_badConditionsCounter = $formValues.find('.removeJson_badConditionsCounter').val() === 'true';
	var setJson_badConditionsCounter = removeJson_badConditionsCounter ? null : $formValues.find('.setJson_badConditionsCounter').val();
	var addJson_badConditionsCounter = $formValues.find('.addJson_badConditionsCounter').val();
	if(removeJson_badConditionsCounter || setJson_badConditionsCounter != null && setJson_badConditionsCounter !== '')
		vals['setJson_badConditionsCounter'] = setJson_badConditionsCounter;
	if(addJson_badConditionsCounter != null && addJson_badConditionsCounter !== '')
		vals['addJson_badConditionsCounter'] = addJson_badConditionsCounter;
	var removeJson_badConditionsCounter = $formValues.find('.removeJson_badConditionsCounter').val();
	if(removeJson_badConditionsCounter != null && removeJson_badConditionsCounter !== '')
		vals['removeJson_badConditionsCounter'] = removeJson_badConditionsCounter;

	var valueJson_door = $formValues.find('.valueJson_door').val();
	var removeJson_door = $formValues.find('.removeJson_door').val() === 'true';
	var setJson_door = removeJson_door ? null : $formValues.find('.setJson_door').val();
	var addJson_door = $formValues.find('.addJson_door').val();
	if(removeJson_door || setJson_door != null && setJson_door !== '')
		vals['setJson_door'] = setJson_door;
	if(addJson_door != null && addJson_door !== '')
		vals['addJson_door'] = addJson_door;
	var removeJson_door = $formValues.find('.removeJson_door').val();
	if(removeJson_door != null && removeJson_door !== '')
		vals['removeJson_door'] = removeJson_door;

	var valueJson_alarmDoor = $formValues.find('.valueJson_alarmDoor').val();
	var removeJson_alarmDoor = $formValues.find('.removeJson_alarmDoor').val() === 'true';
	var valueJson_alarmDoorSelectVal = $formValues.find('select.setJson_alarmDoor').val();
	if(valueJson_alarmDoorSelectVal != null && valueJson_alarmDoorSelectVal !== '')
		valueJson_alarmDoor = valueJson_alarmDoorSelectVal == 'true';
	var setJson_alarmDoor = removeJson_alarmDoor ? null : valueJson_alarmDoor;
	var addJson_alarmDoor = $formValues.find('.addJson_alarmDoor').prop('checked');
	if(removeJson_alarmDoor || setJson_alarmDoor != null && setJson_alarmDoor !== '')
		vals['setJson_alarmDoor'] = setJson_alarmDoor;
	if(addJson_alarmDoor != null && addJson_alarmDoor !== '')
		vals['addJson_alarmDoor'] = addJson_alarmDoor;
	var removeJson_alarmDoor = $formValues.find('.removeJson_alarmDoor').prop('checked');
	if(removeJson_alarmDoor != null && removeJson_alarmDoor !== '')
		vals['removeJson_alarmDoor'] = removeJson_alarmDoor;

	var valueJson_flood = $formValues.find('.valueJson_flood').val();
	var removeJson_flood = $formValues.find('.removeJson_flood').val() === 'true';
	var setJson_flood = removeJson_flood ? null : $formValues.find('.setJson_flood').val();
	var addJson_flood = $formValues.find('.addJson_flood').val();
	if(removeJson_flood || setJson_flood != null && setJson_flood !== '')
		vals['setJson_flood'] = setJson_flood;
	if(addJson_flood != null && addJson_flood !== '')
		vals['addJson_flood'] = addJson_flood;
	var removeJson_flood = $formValues.find('.removeJson_flood').val();
	if(removeJson_flood != null && removeJson_flood !== '')
		vals['removeJson_flood'] = removeJson_flood;

	var valueJson_alarmFlood = $formValues.find('.valueJson_alarmFlood').val();
	var removeJson_alarmFlood = $formValues.find('.removeJson_alarmFlood').val() === 'true';
	var valueJson_alarmFloodSelectVal = $formValues.find('select.setJson_alarmFlood').val();
	if(valueJson_alarmFloodSelectVal != null && valueJson_alarmFloodSelectVal !== '')
		valueJson_alarmFlood = valueJson_alarmFloodSelectVal == 'true';
	var setJson_alarmFlood = removeJson_alarmFlood ? null : valueJson_alarmFlood;
	var addJson_alarmFlood = $formValues.find('.addJson_alarmFlood').prop('checked');
	if(removeJson_alarmFlood || setJson_alarmFlood != null && setJson_alarmFlood !== '')
		vals['setJson_alarmFlood'] = setJson_alarmFlood;
	if(addJson_alarmFlood != null && addJson_alarmFlood !== '')
		vals['addJson_alarmFlood'] = addJson_alarmFlood;
	var removeJson_alarmFlood = $formValues.find('.removeJson_alarmFlood').prop('checked');
	if(removeJson_alarmFlood != null && removeJson_alarmFlood !== '')
		vals['removeJson_alarmFlood'] = removeJson_alarmFlood;

	var valueJson_lux2 = $formValues.find('.valueJson_lux2').val();
	var removeJson_lux2 = $formValues.find('.removeJson_lux2').val() === 'true';
	var setJson_lux2 = removeJson_lux2 ? null : $formValues.find('.setJson_lux2').val();
	var addJson_lux2 = $formValues.find('.addJson_lux2').val();
	if(removeJson_lux2 || setJson_lux2 != null && setJson_lux2 !== '')
		vals['setJson_lux2'] = setJson_lux2;
	if(addJson_lux2 != null && addJson_lux2 !== '')
		vals['addJson_lux2'] = addJson_lux2;
	var removeJson_lux2 = $formValues.find('.removeJson_lux2').val();
	if(removeJson_lux2 != null && removeJson_lux2 !== '')
		vals['removeJson_lux2'] = removeJson_lux2;

	var valueJson_illuminance = $formValues.find('.valueJson_illuminance').val();
	var removeJson_illuminance = $formValues.find('.removeJson_illuminance').val() === 'true';
	var setJson_illuminance = removeJson_illuminance ? null : $formValues.find('.setJson_illuminance').val();
	var addJson_illuminance = $formValues.find('.addJson_illuminance').val();
	if(removeJson_illuminance || setJson_illuminance != null && setJson_illuminance !== '')
		vals['setJson_illuminance'] = setJson_illuminance;
	if(addJson_illuminance != null && addJson_illuminance !== '')
		vals['addJson_illuminance'] = addJson_illuminance;
	var removeJson_illuminance = $formValues.find('.removeJson_illuminance').val();
	if(removeJson_illuminance != null && removeJson_illuminance !== '')
		vals['removeJson_illuminance'] = removeJson_illuminance;

	var valueJson_resistance0 = $formValues.find('.valueJson_resistance0').val();
	var removeJson_resistance0 = $formValues.find('.removeJson_resistance0').val() === 'true';
	var setJson_resistance0 = removeJson_resistance0 ? null : $formValues.find('.setJson_resistance0').val();
	var addJson_resistance0 = $formValues.find('.addJson_resistance0').val();
	if(removeJson_resistance0 || setJson_resistance0 != null && setJson_resistance0 !== '')
		vals['setJson_resistance0'] = setJson_resistance0;
	if(addJson_resistance0 != null && addJson_resistance0 !== '')
		vals['addJson_resistance0'] = addJson_resistance0;
	var removeJson_resistance0 = $formValues.find('.removeJson_resistance0').val();
	if(removeJson_resistance0 != null && removeJson_resistance0 !== '')
		vals['removeJson_resistance0'] = removeJson_resistance0;

	var valueJson_resistance1 = $formValues.find('.valueJson_resistance1').val();
	var removeJson_resistance1 = $formValues.find('.removeJson_resistance1').val() === 'true';
	var setJson_resistance1 = removeJson_resistance1 ? null : $formValues.find('.setJson_resistance1').val();
	var addJson_resistance1 = $formValues.find('.addJson_resistance1').val();
	if(removeJson_resistance1 || setJson_resistance1 != null && setJson_resistance1 !== '')
		vals['setJson_resistance1'] = setJson_resistance1;
	if(addJson_resistance1 != null && addJson_resistance1 !== '')
		vals['addJson_resistance1'] = addJson_resistance1;
	var removeJson_resistance1 = $formValues.find('.removeJson_resistance1').val();
	if(removeJson_resistance1 != null && removeJson_resistance1 !== '')
		vals['removeJson_resistance1'] = removeJson_resistance1;

	var valueJson_frequency = $formValues.find('.valueJson_frequency').val();
	var removeJson_frequency = $formValues.find('.removeJson_frequency').val() === 'true';
	var setJson_frequency = removeJson_frequency ? null : $formValues.find('.setJson_frequency').val();
	var addJson_frequency = $formValues.find('.addJson_frequency').val();
	if(removeJson_frequency || setJson_frequency != null && setJson_frequency !== '')
		vals['setJson_frequency'] = setJson_frequency;
	if(addJson_frequency != null && addJson_frequency !== '')
		vals['addJson_frequency'] = addJson_frequency;
	var removeJson_frequency = $formValues.find('.removeJson_frequency').val();
	if(removeJson_frequency != null && removeJson_frequency !== '')
		vals['removeJson_frequency'] = removeJson_frequency;

	var valueJson_devEui = $formValues.find('.valueJson_devEui').val();
	var removeJson_devEui = $formValues.find('.removeJson_devEui').val() === 'true';
	var setJson_devEui = removeJson_devEui ? null : $formValues.find('.setJson_devEui').val();
	var addJson_devEui = $formValues.find('.addJson_devEui').val();
	if(removeJson_devEui || setJson_devEui != null && setJson_devEui !== '')
		vals['setJson_devEui'] = setJson_devEui;
	if(addJson_devEui != null && addJson_devEui !== '')
		vals['addJson_devEui'] = addJson_devEui;
	var removeJson_devEui = $formValues.find('.removeJson_devEui').val();
	if(removeJson_devEui != null && removeJson_devEui !== '')
		vals['removeJson_devEui'] = removeJson_devEui;

	var valueJson_bandwidth = $formValues.find('.valueJson_bandwidth').val();
	var removeJson_bandwidth = $formValues.find('.removeJson_bandwidth').val() === 'true';
	var setJson_bandwidth = removeJson_bandwidth ? null : $formValues.find('.setJson_bandwidth').val();
	var addJson_bandwidth = $formValues.find('.addJson_bandwidth').val();
	if(removeJson_bandwidth || setJson_bandwidth != null && setJson_bandwidth !== '')
		vals['setJson_bandwidth'] = setJson_bandwidth;
	if(addJson_bandwidth != null && addJson_bandwidth !== '')
		vals['addJson_bandwidth'] = addJson_bandwidth;
	var removeJson_bandwidth = $formValues.find('.removeJson_bandwidth').val();
	if(removeJson_bandwidth != null && removeJson_bandwidth !== '')
		vals['removeJson_bandwidth'] = removeJson_bandwidth;

	var valueJson_dataRate = $formValues.find('.valueJson_dataRate').val();
	var removeJson_dataRate = $formValues.find('.removeJson_dataRate').val() === 'true';
	var setJson_dataRate = removeJson_dataRate ? null : $formValues.find('.setJson_dataRate').val();
	var addJson_dataRate = $formValues.find('.addJson_dataRate').val();
	if(removeJson_dataRate || setJson_dataRate != null && setJson_dataRate !== '')
		vals['setJson_dataRate'] = setJson_dataRate;
	if(addJson_dataRate != null && addJson_dataRate !== '')
		vals['addJson_dataRate'] = addJson_dataRate;
	var removeJson_dataRate = $formValues.find('.removeJson_dataRate').val();
	if(removeJson_dataRate != null && removeJson_dataRate !== '')
		vals['removeJson_dataRate'] = removeJson_dataRate;

	var valueJson_frameCount = $formValues.find('.valueJson_frameCount').val();
	var removeJson_frameCount = $formValues.find('.removeJson_frameCount').val() === 'true';
	var setJson_frameCount = removeJson_frameCount ? null : $formValues.find('.setJson_frameCount').val();
	var addJson_frameCount = $formValues.find('.addJson_frameCount').val();
	if(removeJson_frameCount || setJson_frameCount != null && setJson_frameCount !== '')
		vals['setJson_frameCount'] = setJson_frameCount;
	if(addJson_frameCount != null && addJson_frameCount !== '')
		vals['addJson_frameCount'] = addJson_frameCount;
	var removeJson_frameCount = $formValues.find('.removeJson_frameCount').val();
	if(removeJson_frameCount != null && removeJson_frameCount !== '')
		vals['removeJson_frameCount'] = removeJson_frameCount;

	var valueJson_maxPayload = $formValues.find('.valueJson_maxPayload').val();
	var removeJson_maxPayload = $formValues.find('.removeJson_maxPayload').val() === 'true';
	var setJson_maxPayload = removeJson_maxPayload ? null : $formValues.find('.setJson_maxPayload').val();
	var addJson_maxPayload = $formValues.find('.addJson_maxPayload').val();
	if(removeJson_maxPayload || setJson_maxPayload != null && setJson_maxPayload !== '')
		vals['setJson_maxPayload'] = setJson_maxPayload;
	if(addJson_maxPayload != null && addJson_maxPayload !== '')
		vals['addJson_maxPayload'] = addJson_maxPayload;
	var removeJson_maxPayload = $formValues.find('.removeJson_maxPayload').val();
	if(removeJson_maxPayload != null && removeJson_maxPayload !== '')
		vals['removeJson_maxPayload'] = removeJson_maxPayload;

	var valueJson_bitsPerSecond = $formValues.find('.valueJson_bitsPerSecond').val();
	var removeJson_bitsPerSecond = $formValues.find('.removeJson_bitsPerSecond').val() === 'true';
	var setJson_bitsPerSecond = removeJson_bitsPerSecond ? null : $formValues.find('.setJson_bitsPerSecond').val();
	var addJson_bitsPerSecond = $formValues.find('.addJson_bitsPerSecond').val();
	if(removeJson_bitsPerSecond || setJson_bitsPerSecond != null && setJson_bitsPerSecond !== '')
		vals['setJson_bitsPerSecond'] = setJson_bitsPerSecond;
	if(addJson_bitsPerSecond != null && addJson_bitsPerSecond !== '')
		vals['addJson_bitsPerSecond'] = addJson_bitsPerSecond;
	var removeJson_bitsPerSecond = $formValues.find('.removeJson_bitsPerSecond').val();
	if(removeJson_bitsPerSecond != null && removeJson_bitsPerSecond !== '')
		vals['removeJson_bitsPerSecond'] = removeJson_bitsPerSecond;

	var valueJson_batteryVoltage = $formValues.find('.valueJson_batteryVoltage').val();
	var removeJson_batteryVoltage = $formValues.find('.removeJson_batteryVoltage').val() === 'true';
	var setJson_batteryVoltage = removeJson_batteryVoltage ? null : $formValues.find('.setJson_batteryVoltage').val();
	var addJson_batteryVoltage = $formValues.find('.addJson_batteryVoltage').val();
	if(removeJson_batteryVoltage || setJson_batteryVoltage != null && setJson_batteryVoltage !== '')
		vals['setJson_batteryVoltage'] = setJson_batteryVoltage;
	if(addJson_batteryVoltage != null && addJson_batteryVoltage !== '')
		vals['addJson_batteryVoltage'] = addJson_batteryVoltage;
	var removeJson_batteryVoltage = $formValues.find('.removeJson_batteryVoltage').val();
	if(removeJson_batteryVoltage != null && removeJson_batteryVoltage !== '')
		vals['removeJson_batteryVoltage'] = removeJson_batteryVoltage;

	var valueJson_spreadingFactor = $formValues.find('.valueJson_spreadingFactor').val();
	var removeJson_spreadingFactor = $formValues.find('.removeJson_spreadingFactor').val() === 'true';
	var setJson_spreadingFactor = removeJson_spreadingFactor ? null : $formValues.find('.setJson_spreadingFactor').val();
	var addJson_spreadingFactor = $formValues.find('.addJson_spreadingFactor').val();
	if(removeJson_spreadingFactor || setJson_spreadingFactor != null && setJson_spreadingFactor !== '')
		vals['setJson_spreadingFactor'] = setJson_spreadingFactor;
	if(addJson_spreadingFactor != null && addJson_spreadingFactor !== '')
		vals['addJson_spreadingFactor'] = addJson_spreadingFactor;
	var removeJson_spreadingFactor = $formValues.find('.removeJson_spreadingFactor').val();
	if(removeJson_spreadingFactor != null && removeJson_spreadingFactor !== '')
		vals['removeJson_spreadingFactor'] = removeJson_spreadingFactor;

	var valueJson_dataRateAdaptive = $formValues.find('.valueJson_dataRateAdaptive').val();
	var removeJson_dataRateAdaptive = $formValues.find('.removeJson_dataRateAdaptive').val() === 'true';
	var valueJson_dataRateAdaptiveSelectVal = $formValues.find('select.setJson_dataRateAdaptive').val();
	if(valueJson_dataRateAdaptiveSelectVal != null && valueJson_dataRateAdaptiveSelectVal !== '')
		valueJson_dataRateAdaptive = valueJson_dataRateAdaptiveSelectVal == 'true';
	var setJson_dataRateAdaptive = removeJson_dataRateAdaptive ? null : valueJson_dataRateAdaptive;
	var addJson_dataRateAdaptive = $formValues.find('.addJson_dataRateAdaptive').prop('checked');
	if(removeJson_dataRateAdaptive || setJson_dataRateAdaptive != null && setJson_dataRateAdaptive !== '')
		vals['setJson_dataRateAdaptive'] = setJson_dataRateAdaptive;
	if(addJson_dataRateAdaptive != null && addJson_dataRateAdaptive !== '')
		vals['addJson_dataRateAdaptive'] = addJson_dataRateAdaptive;
	var removeJson_dataRateAdaptive = $formValues.find('.removeJson_dataRateAdaptive').prop('checked');
	if(removeJson_dataRateAdaptive != null && removeJson_dataRateAdaptive !== '')
		vals['removeJson_dataRateAdaptive'] = removeJson_dataRateAdaptive;

	var valueJson_swversion = $formValues.find('.valueJson_swversion').val();
	var removeJson_swversion = $formValues.find('.removeJson_swversion').val() === 'true';
	var setJson_swversion = removeJson_swversion ? null : $formValues.find('.setJson_swversion').val();
	var addJson_swversion = $formValues.find('.addJson_swversion').val();
	if(removeJson_swversion || setJson_swversion != null && setJson_swversion !== '')
		vals['setJson_swversion'] = setJson_swversion;
	if(addJson_swversion != null && addJson_swversion !== '')
		vals['addJson_swversion'] = addJson_swversion;
	var removeJson_swversion = $formValues.find('.removeJson_swversion').val();
	if(removeJson_swversion != null && removeJson_swversion !== '')
		vals['removeJson_swversion'] = removeJson_swversion;

	var valueJson_batteryLevel = $formValues.find('.valueJson_batteryLevel').val();
	var removeJson_batteryLevel = $formValues.find('.removeJson_batteryLevel').val() === 'true';
	var setJson_batteryLevel = removeJson_batteryLevel ? null : $formValues.find('.setJson_batteryLevel').val();
	var addJson_batteryLevel = $formValues.find('.addJson_batteryLevel').val();
	if(removeJson_batteryLevel || setJson_batteryLevel != null && setJson_batteryLevel !== '')
		vals['setJson_batteryLevel'] = setJson_batteryLevel;
	if(addJson_batteryLevel != null && addJson_batteryLevel !== '')
		vals['addJson_batteryLevel'] = addJson_batteryLevel;
	var removeJson_batteryLevel = $formValues.find('.removeJson_batteryLevel').val();
	if(removeJson_batteryLevel != null && removeJson_batteryLevel !== '')
		vals['removeJson_batteryLevel'] = removeJson_batteryLevel;

	var valueJson_startUpCount = $formValues.find('.valueJson_startUpCount').val();
	var removeJson_startUpCount = $formValues.find('.removeJson_startUpCount').val() === 'true';
	var setJson_startUpCount = removeJson_startUpCount ? null : $formValues.find('.setJson_startUpCount').val();
	var addJson_startUpCount = $formValues.find('.addJson_startUpCount').val();
	if(removeJson_startUpCount || setJson_startUpCount != null && setJson_startUpCount !== '')
		vals['setJson_startUpCount'] = setJson_startUpCount;
	if(addJson_startUpCount != null && addJson_startUpCount !== '')
		vals['addJson_startUpCount'] = addJson_startUpCount;
	var removeJson_startUpCount = $formValues.find('.removeJson_startUpCount').val();
	if(removeJson_startUpCount != null && removeJson_startUpCount !== '')
		vals['removeJson_startUpCount'] = removeJson_startUpCount;

	var valueJson_watchdogCount = $formValues.find('.valueJson_watchdogCount').val();
	var removeJson_watchdogCount = $formValues.find('.removeJson_watchdogCount').val() === 'true';
	var setJson_watchdogCount = removeJson_watchdogCount ? null : $formValues.find('.setJson_watchdogCount').val();
	var addJson_watchdogCount = $formValues.find('.addJson_watchdogCount').val();
	if(removeJson_watchdogCount || setJson_watchdogCount != null && setJson_watchdogCount !== '')
		vals['setJson_watchdogCount'] = setJson_watchdogCount;
	if(addJson_watchdogCount != null && addJson_watchdogCount !== '')
		vals['addJson_watchdogCount'] = addJson_watchdogCount;
	var removeJson_watchdogCount = $formValues.find('.removeJson_watchdogCount').val();
	if(removeJson_watchdogCount != null && removeJson_watchdogCount !== '')
		vals['removeJson_watchdogCount'] = removeJson_watchdogCount;

	var valueJson_historySequence = $formValues.find('.valueJson_historySequence').val();
	var removeJson_historySequence = $formValues.find('.removeJson_historySequence').val() === 'true';
	var setJson_historySequence = removeJson_historySequence ? null : $formValues.find('.setJson_historySequence').val();
	var addJson_historySequence = $formValues.find('.addJson_historySequence').val();
	if(removeJson_historySequence || setJson_historySequence != null && setJson_historySequence !== '')
		vals['setJson_historySequence'] = setJson_historySequence;
	if(addJson_historySequence != null && addJson_historySequence !== '')
		vals['addJson_historySequence'] = addJson_historySequence;
	var removeJson_historySequence = $formValues.find('.removeJson_historySequence').val();
	if(removeJson_historySequence != null && removeJson_historySequence !== '')
		vals['removeJson_historySequence'] = removeJson_historySequence;

	var valueJson_versionFirmware = $formValues.find('.valueJson_versionFirmware').val();
	var removeJson_versionFirmware = $formValues.find('.removeJson_versionFirmware').val() === 'true';
	var setJson_versionFirmware = removeJson_versionFirmware ? null : $formValues.find('.setJson_versionFirmware').val();
	var addJson_versionFirmware = $formValues.find('.addJson_versionFirmware').val();
	if(removeJson_versionFirmware || setJson_versionFirmware != null && setJson_versionFirmware !== '')
		vals['setJson_versionFirmware'] = setJson_versionFirmware;
	if(addJson_versionFirmware != null && addJson_versionFirmware !== '')
		vals['addJson_versionFirmware'] = addJson_versionFirmware;
	var removeJson_versionFirmware = $formValues.find('.removeJson_versionFirmware').val();
	if(removeJson_versionFirmware != null && removeJson_versionFirmware !== '')
		vals['removeJson_versionFirmware'] = removeJson_versionFirmware;

	var valueJson_stackTxFailRebootCount = $formValues.find('.valueJson_stackTxFailRebootCount').val();
	var removeJson_stackTxFailRebootCount = $formValues.find('.removeJson_stackTxFailRebootCount').val() === 'true';
	var setJson_stackTxFailRebootCount = removeJson_stackTxFailRebootCount ? null : $formValues.find('.setJson_stackTxFailRebootCount').val();
	var addJson_stackTxFailRebootCount = $formValues.find('.addJson_stackTxFailRebootCount').val();
	if(removeJson_stackTxFailRebootCount || setJson_stackTxFailRebootCount != null && setJson_stackTxFailRebootCount !== '')
		vals['setJson_stackTxFailRebootCount'] = setJson_stackTxFailRebootCount;
	if(addJson_stackTxFailRebootCount != null && addJson_stackTxFailRebootCount !== '')
		vals['addJson_stackTxFailRebootCount'] = addJson_stackTxFailRebootCount;
	var removeJson_stackTxFailRebootCount = $formValues.find('.removeJson_stackTxFailRebootCount').val();
	if(removeJson_stackTxFailRebootCount != null && removeJson_stackTxFailRebootCount !== '')
		vals['removeJson_stackTxFailRebootCount'] = removeJson_stackTxFailRebootCount;

	var valueJson_historySequencePrevious = $formValues.find('.valueJson_historySequencePrevious').val();
	var removeJson_historySequencePrevious = $formValues.find('.removeJson_historySequencePrevious').val() === 'true';
	var setJson_historySequencePrevious = removeJson_historySequencePrevious ? null : $formValues.find('.setJson_historySequencePrevious').val();
	var addJson_historySequencePrevious = $formValues.find('.addJson_historySequencePrevious').val();
	if(removeJson_historySequencePrevious || setJson_historySequencePrevious != null && setJson_historySequencePrevious !== '')
		vals['setJson_historySequencePrevious'] = setJson_historySequencePrevious;
	if(addJson_historySequencePrevious != null && addJson_historySequencePrevious !== '')
		vals['addJson_historySequencePrevious'] = addJson_historySequencePrevious;
	var removeJson_historySequencePrevious = $formValues.find('.removeJson_historySequencePrevious').val();
	if(removeJson_historySequencePrevious != null && removeJson_historySequencePrevious !== '')
		vals['removeJson_historySequencePrevious'] = removeJson_historySequencePrevious;

	var valueJson_snr = $formValues.find('.valueJson_snr').val();
	var removeJson_snr = $formValues.find('.removeJson_snr').val() === 'true';
	var setJson_snr = removeJson_snr ? null : $formValues.find('.setJson_snr').val();
	var addJson_snr = $formValues.find('.addJson_snr').val();
	if(removeJson_snr || setJson_snr != null && setJson_snr !== '')
		vals['setJson_snr'] = setJson_snr;
	if(addJson_snr != null && addJson_snr !== '')
		vals['addJson_snr'] = addJson_snr;
	var removeJson_snr = $formValues.find('.removeJson_snr').val();
	if(removeJson_snr != null && removeJson_snr !== '')
		vals['removeJson_snr'] = removeJson_snr;

	var valueJson_rssi = $formValues.find('.valueJson_rssi').val();
	var removeJson_rssi = $formValues.find('.removeJson_rssi').val() === 'true';
	var setJson_rssi = removeJson_rssi ? null : $formValues.find('.setJson_rssi').val();
	var addJson_rssi = $formValues.find('.addJson_rssi').val();
	if(removeJson_rssi || setJson_rssi != null && setJson_rssi !== '')
		vals['setJson_rssi'] = setJson_rssi;
	if(addJson_rssi != null && addJson_rssi !== '')
		vals['addJson_rssi'] = addJson_rssi;
	var removeJson_rssi = $formValues.find('.removeJson_rssi').val();
	if(removeJson_rssi != null && removeJson_rssi !== '')
		vals['removeJson_rssi'] = removeJson_rssi;

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

	var valueJson = $formValues.find('.valueJson').val();
	var removeJson = $formValues.find('.removeJson').val() === 'true';
	var setJson = removeJson ? null : $formValues.find('.setJson').val();
	var addJson = $formValues.find('.addJson').val();
	if(removeJson || setJson != null && setJson !== '')
		vals['setJson'] = setJson;
	if(addJson != null && addJson !== '')
		vals['addJson'] = addJson;
	var removeJson = $formValues.find('.removeJson').val();
	if(removeJson != null && removeJson !== '')
		vals['removeJson'] = removeJson;

	patchIotNodeVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchIotNodeFilters($formFilters) {
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

		var filterNodeName = $formFilters.find('.valueNodeName').val();
		if(filterNodeName != null && filterNodeName !== '')
			filters.push({ name: 'fq', value: 'nodeName:' + filterNodeName });

		var filterNodeType = $formFilters.find('.valueNodeType').val();
		if(filterNodeType != null && filterNodeType !== '')
			filters.push({ name: 'fq', value: 'nodeType:' + filterNodeType });

		var filterNodeId = $formFilters.find('.valueNodeId').val();
		if(filterNodeId != null && filterNodeId !== '')
			filters.push({ name: 'fq', value: 'nodeId:' + filterNodeId });

		var filterLocation = $formFilters.find('.valueLocation').val();
		if(filterLocation != null && filterLocation !== '')
			filters.push({ name: 'fq', value: 'location:' + filterLocation });

		var filterJson_moisture = $formFilters.find('.valueJson_moisture').val();
		if(filterJson_moisture != null && filterJson_moisture !== '')
			filters.push({ name: 'fq', value: 'json_moisture:' + filterJson_moisture });

		var filterJson_moisture0 = $formFilters.find('.valueJson_moisture0').val();
		if(filterJson_moisture0 != null && filterJson_moisture0 !== '')
			filters.push({ name: 'fq', value: 'json_moisture0:' + filterJson_moisture0 });

		var filterJson_moisture1 = $formFilters.find('.valueJson_moisture1').val();
		if(filterJson_moisture1 != null && filterJson_moisture1 !== '')
			filters.push({ name: 'fq', value: 'json_moisture1:' + filterJson_moisture1 });

		var filterJson_temperature = $formFilters.find('.valueJson_temperature').val();
		if(filterJson_temperature != null && filterJson_temperature !== '')
			filters.push({ name: 'fq', value: 'json_temperature:' + filterJson_temperature });

		var filterJson_temperature0 = $formFilters.find('.valueJson_temperature0').val();
		if(filterJson_temperature0 != null && filterJson_temperature0 !== '')
			filters.push({ name: 'fq', value: 'json_temperature0:' + filterJson_temperature0 });

		var filterJson_temperatureAverage = $formFilters.find('.valueJson_temperatureAverage').val();
		if(filterJson_temperatureAverage != null && filterJson_temperatureAverage !== '')
			filters.push({ name: 'fq', value: 'json_temperatureAverage:' + filterJson_temperatureAverage });

		var filterJson_badConditionsCounter = $formFilters.find('.valueJson_badConditionsCounter').val();
		if(filterJson_badConditionsCounter != null && filterJson_badConditionsCounter !== '')
			filters.push({ name: 'fq', value: 'json_badConditionsCounter:' + filterJson_badConditionsCounter });

		var filterJson_door = $formFilters.find('.valueJson_door').val();
		if(filterJson_door != null && filterJson_door !== '')
			filters.push({ name: 'fq', value: 'json_door:' + filterJson_door });

		var $filterJson_alarmDoorCheckbox = $formFilters.find('input.valueJson_alarmDoor[type = "checkbox"]');
		var $filterJson_alarmDoorSelect = $formFilters.find('select.valueJson_alarmDoor');
		var filterJson_alarmDoor = $filterJson_alarmDoorSelect.length ? $filterJson_alarmDoorSelect.val() : $filterJson_alarmDoorCheckbox.prop('checked');
		var filterJson_alarmDoorSelectVal = $formFilters.find('select.filterJson_alarmDoor').val();
		var filterJson_alarmDoor = null;
		if(filterJson_alarmDoorSelectVal !== '')
			filterJson_alarmDoor = filterJson_alarmDoorSelectVal == 'true';
		if(filterJson_alarmDoor != null && filterJson_alarmDoor === true)
			filters.push({ name: 'fq', value: 'json_alarmDoor:' + filterJson_alarmDoor });

		var filterJson_flood = $formFilters.find('.valueJson_flood').val();
		if(filterJson_flood != null && filterJson_flood !== '')
			filters.push({ name: 'fq', value: 'json_flood:' + filterJson_flood });

		var $filterJson_alarmFloodCheckbox = $formFilters.find('input.valueJson_alarmFlood[type = "checkbox"]');
		var $filterJson_alarmFloodSelect = $formFilters.find('select.valueJson_alarmFlood');
		var filterJson_alarmFlood = $filterJson_alarmFloodSelect.length ? $filterJson_alarmFloodSelect.val() : $filterJson_alarmFloodCheckbox.prop('checked');
		var filterJson_alarmFloodSelectVal = $formFilters.find('select.filterJson_alarmFlood').val();
		var filterJson_alarmFlood = null;
		if(filterJson_alarmFloodSelectVal !== '')
			filterJson_alarmFlood = filterJson_alarmFloodSelectVal == 'true';
		if(filterJson_alarmFlood != null && filterJson_alarmFlood === true)
			filters.push({ name: 'fq', value: 'json_alarmFlood:' + filterJson_alarmFlood });

		var filterJson_lux2 = $formFilters.find('.valueJson_lux2').val();
		if(filterJson_lux2 != null && filterJson_lux2 !== '')
			filters.push({ name: 'fq', value: 'json_lux2:' + filterJson_lux2 });

		var filterJson_illuminance = $formFilters.find('.valueJson_illuminance').val();
		if(filterJson_illuminance != null && filterJson_illuminance !== '')
			filters.push({ name: 'fq', value: 'json_illuminance:' + filterJson_illuminance });

		var filterJson_resistance0 = $formFilters.find('.valueJson_resistance0').val();
		if(filterJson_resistance0 != null && filterJson_resistance0 !== '')
			filters.push({ name: 'fq', value: 'json_resistance0:' + filterJson_resistance0 });

		var filterJson_resistance1 = $formFilters.find('.valueJson_resistance1').val();
		if(filterJson_resistance1 != null && filterJson_resistance1 !== '')
			filters.push({ name: 'fq', value: 'json_resistance1:' + filterJson_resistance1 });

		var filterJson_frequency = $formFilters.find('.valueJson_frequency').val();
		if(filterJson_frequency != null && filterJson_frequency !== '')
			filters.push({ name: 'fq', value: 'json_frequency:' + filterJson_frequency });

		var filterJson_devEui = $formFilters.find('.valueJson_devEui').val();
		if(filterJson_devEui != null && filterJson_devEui !== '')
			filters.push({ name: 'fq', value: 'json_devEui:' + filterJson_devEui });

		var filterJson_bandwidth = $formFilters.find('.valueJson_bandwidth').val();
		if(filterJson_bandwidth != null && filterJson_bandwidth !== '')
			filters.push({ name: 'fq', value: 'json_bandwidth:' + filterJson_bandwidth });

		var filterJson_dataRate = $formFilters.find('.valueJson_dataRate').val();
		if(filterJson_dataRate != null && filterJson_dataRate !== '')
			filters.push({ name: 'fq', value: 'json_dataRate:' + filterJson_dataRate });

		var filterJson_frameCount = $formFilters.find('.valueJson_frameCount').val();
		if(filterJson_frameCount != null && filterJson_frameCount !== '')
			filters.push({ name: 'fq', value: 'json_frameCount:' + filterJson_frameCount });

		var filterJson_maxPayload = $formFilters.find('.valueJson_maxPayload').val();
		if(filterJson_maxPayload != null && filterJson_maxPayload !== '')
			filters.push({ name: 'fq', value: 'json_maxPayload:' + filterJson_maxPayload });

		var filterJson_bitsPerSecond = $formFilters.find('.valueJson_bitsPerSecond').val();
		if(filterJson_bitsPerSecond != null && filterJson_bitsPerSecond !== '')
			filters.push({ name: 'fq', value: 'json_bitsPerSecond:' + filterJson_bitsPerSecond });

		var filterJson_batteryVoltage = $formFilters.find('.valueJson_batteryVoltage').val();
		if(filterJson_batteryVoltage != null && filterJson_batteryVoltage !== '')
			filters.push({ name: 'fq', value: 'json_batteryVoltage:' + filterJson_batteryVoltage });

		var filterJson_spreadingFactor = $formFilters.find('.valueJson_spreadingFactor').val();
		if(filterJson_spreadingFactor != null && filterJson_spreadingFactor !== '')
			filters.push({ name: 'fq', value: 'json_spreadingFactor:' + filterJson_spreadingFactor });

		var $filterJson_dataRateAdaptiveCheckbox = $formFilters.find('input.valueJson_dataRateAdaptive[type = "checkbox"]');
		var $filterJson_dataRateAdaptiveSelect = $formFilters.find('select.valueJson_dataRateAdaptive');
		var filterJson_dataRateAdaptive = $filterJson_dataRateAdaptiveSelect.length ? $filterJson_dataRateAdaptiveSelect.val() : $filterJson_dataRateAdaptiveCheckbox.prop('checked');
		var filterJson_dataRateAdaptiveSelectVal = $formFilters.find('select.filterJson_dataRateAdaptive').val();
		var filterJson_dataRateAdaptive = null;
		if(filterJson_dataRateAdaptiveSelectVal !== '')
			filterJson_dataRateAdaptive = filterJson_dataRateAdaptiveSelectVal == 'true';
		if(filterJson_dataRateAdaptive != null && filterJson_dataRateAdaptive === true)
			filters.push({ name: 'fq', value: 'json_dataRateAdaptive:' + filterJson_dataRateAdaptive });

		var filterJson_swversion = $formFilters.find('.valueJson_swversion').val();
		if(filterJson_swversion != null && filterJson_swversion !== '')
			filters.push({ name: 'fq', value: 'json_swversion:' + filterJson_swversion });

		var filterJson_batteryLevel = $formFilters.find('.valueJson_batteryLevel').val();
		if(filterJson_batteryLevel != null && filterJson_batteryLevel !== '')
			filters.push({ name: 'fq', value: 'json_batteryLevel:' + filterJson_batteryLevel });

		var filterJson_startUpCount = $formFilters.find('.valueJson_startUpCount').val();
		if(filterJson_startUpCount != null && filterJson_startUpCount !== '')
			filters.push({ name: 'fq', value: 'json_startUpCount:' + filterJson_startUpCount });

		var filterJson_watchdogCount = $formFilters.find('.valueJson_watchdogCount').val();
		if(filterJson_watchdogCount != null && filterJson_watchdogCount !== '')
			filters.push({ name: 'fq', value: 'json_watchdogCount:' + filterJson_watchdogCount });

		var filterJson_historySequence = $formFilters.find('.valueJson_historySequence').val();
		if(filterJson_historySequence != null && filterJson_historySequence !== '')
			filters.push({ name: 'fq', value: 'json_historySequence:' + filterJson_historySequence });

		var filterJson_versionFirmware = $formFilters.find('.valueJson_versionFirmware').val();
		if(filterJson_versionFirmware != null && filterJson_versionFirmware !== '')
			filters.push({ name: 'fq', value: 'json_versionFirmware:' + filterJson_versionFirmware });

		var filterJson_stackTxFailRebootCount = $formFilters.find('.valueJson_stackTxFailRebootCount').val();
		if(filterJson_stackTxFailRebootCount != null && filterJson_stackTxFailRebootCount !== '')
			filters.push({ name: 'fq', value: 'json_stackTxFailRebootCount:' + filterJson_stackTxFailRebootCount });

		var filterJson_historySequencePrevious = $formFilters.find('.valueJson_historySequencePrevious').val();
		if(filterJson_historySequencePrevious != null && filterJson_historySequencePrevious !== '')
			filters.push({ name: 'fq', value: 'json_historySequencePrevious:' + filterJson_historySequencePrevious });

		var filterJson_snr = $formFilters.find('.valueJson_snr').val();
		if(filterJson_snr != null && filterJson_snr !== '')
			filters.push({ name: 'fq', value: 'json_snr:' + filterJson_snr });

		var filterJson_rssi = $formFilters.find('.valueJson_rssi').val();
		if(filterJson_rssi != null && filterJson_rssi !== '')
			filters.push({ name: 'fq', value: 'json_rssi:' + filterJson_rssi });

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

		var filterJson = $formFilters.find('.valueJson').val();
		if(filterJson != null && filterJson !== '')
			filters.push({ name: 'fq', value: 'json:' + filterJson });
	}
	return filters;
}

function patchIotNodeVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchIotNodeVals(filters, vals, success, error);
}

function patchIotNodeVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/iot-node?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postIotNode($formValues, success, error) {
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

	var valueNodeName = $formValues.find('.valueNodeName').val();
	if(valueNodeName != null && valueNodeName !== '')
		vals['nodeName'] = valueNodeName;

	var valueNodeType = $formValues.find('.valueNodeType').val();
	if(valueNodeType != null && valueNodeType !== '')
		vals['nodeType'] = valueNodeType;

	var valueNodeId = $formValues.find('.valueNodeId').val();
	if(valueNodeId != null && valueNodeId !== '')
		vals['nodeId'] = valueNodeId;

	var valueLocation = $formValues.find('.valueLocation').val();
	if(valueLocation != null && valueLocation !== '')
		vals['location'] = valueLocation;

	var valueJson_moisture = $formValues.find('.valueJson_moisture').val();
	if(valueJson_moisture != null && valueJson_moisture !== '')
		vals['json_moisture'] = valueJson_moisture;

	var valueJson_moisture0 = $formValues.find('.valueJson_moisture0').val();
	if(valueJson_moisture0 != null && valueJson_moisture0 !== '')
		vals['json_moisture0'] = valueJson_moisture0;

	var valueJson_moisture1 = $formValues.find('.valueJson_moisture1').val();
	if(valueJson_moisture1 != null && valueJson_moisture1 !== '')
		vals['json_moisture1'] = valueJson_moisture1;

	var valueJson_temperature = $formValues.find('.valueJson_temperature').val();
	if(valueJson_temperature != null && valueJson_temperature !== '')
		vals['json_temperature'] = valueJson_temperature;

	var valueJson_temperature0 = $formValues.find('.valueJson_temperature0').val();
	if(valueJson_temperature0 != null && valueJson_temperature0 !== '')
		vals['json_temperature0'] = valueJson_temperature0;

	var valueJson_temperatureAverage = $formValues.find('.valueJson_temperatureAverage').val();
	if(valueJson_temperatureAverage != null && valueJson_temperatureAverage !== '')
		vals['json_temperatureAverage'] = valueJson_temperatureAverage;

	var valueJson_badConditionsCounter = $formValues.find('.valueJson_badConditionsCounter').val();
	if(valueJson_badConditionsCounter != null && valueJson_badConditionsCounter !== '')
		vals['json_badConditionsCounter'] = valueJson_badConditionsCounter;

	var valueJson_door = $formValues.find('.valueJson_door').val();
	if(valueJson_door != null && valueJson_door !== '')
		vals['json_door'] = valueJson_door;

	var valueJson_alarmDoor = $formValues.find('.valueJson_alarmDoor').val();
	if(valueJson_alarmDoor != null && valueJson_alarmDoor !== '')
		vals['json_alarmDoor'] = valueJson_alarmDoor == 'true';

	var valueJson_flood = $formValues.find('.valueJson_flood').val();
	if(valueJson_flood != null && valueJson_flood !== '')
		vals['json_flood'] = valueJson_flood;

	var valueJson_alarmFlood = $formValues.find('.valueJson_alarmFlood').val();
	if(valueJson_alarmFlood != null && valueJson_alarmFlood !== '')
		vals['json_alarmFlood'] = valueJson_alarmFlood == 'true';

	var valueJson_lux2 = $formValues.find('.valueJson_lux2').val();
	if(valueJson_lux2 != null && valueJson_lux2 !== '')
		vals['json_lux2'] = valueJson_lux2;

	var valueJson_illuminance = $formValues.find('.valueJson_illuminance').val();
	if(valueJson_illuminance != null && valueJson_illuminance !== '')
		vals['json_illuminance'] = valueJson_illuminance;

	var valueJson_resistance0 = $formValues.find('.valueJson_resistance0').val();
	if(valueJson_resistance0 != null && valueJson_resistance0 !== '')
		vals['json_resistance0'] = valueJson_resistance0;

	var valueJson_resistance1 = $formValues.find('.valueJson_resistance1').val();
	if(valueJson_resistance1 != null && valueJson_resistance1 !== '')
		vals['json_resistance1'] = valueJson_resistance1;

	var valueJson_frequency = $formValues.find('.valueJson_frequency').val();
	if(valueJson_frequency != null && valueJson_frequency !== '')
		vals['json_frequency'] = valueJson_frequency;

	var valueJson_devEui = $formValues.find('.valueJson_devEui').val();
	if(valueJson_devEui != null && valueJson_devEui !== '')
		vals['json_devEui'] = valueJson_devEui;

	var valueJson_bandwidth = $formValues.find('.valueJson_bandwidth').val();
	if(valueJson_bandwidth != null && valueJson_bandwidth !== '')
		vals['json_bandwidth'] = valueJson_bandwidth;

	var valueJson_dataRate = $formValues.find('.valueJson_dataRate').val();
	if(valueJson_dataRate != null && valueJson_dataRate !== '')
		vals['json_dataRate'] = valueJson_dataRate;

	var valueJson_frameCount = $formValues.find('.valueJson_frameCount').val();
	if(valueJson_frameCount != null && valueJson_frameCount !== '')
		vals['json_frameCount'] = valueJson_frameCount;

	var valueJson_maxPayload = $formValues.find('.valueJson_maxPayload').val();
	if(valueJson_maxPayload != null && valueJson_maxPayload !== '')
		vals['json_maxPayload'] = valueJson_maxPayload;

	var valueJson_bitsPerSecond = $formValues.find('.valueJson_bitsPerSecond').val();
	if(valueJson_bitsPerSecond != null && valueJson_bitsPerSecond !== '')
		vals['json_bitsPerSecond'] = valueJson_bitsPerSecond;

	var valueJson_batteryVoltage = $formValues.find('.valueJson_batteryVoltage').val();
	if(valueJson_batteryVoltage != null && valueJson_batteryVoltage !== '')
		vals['json_batteryVoltage'] = valueJson_batteryVoltage;

	var valueJson_spreadingFactor = $formValues.find('.valueJson_spreadingFactor').val();
	if(valueJson_spreadingFactor != null && valueJson_spreadingFactor !== '')
		vals['json_spreadingFactor'] = valueJson_spreadingFactor;

	var valueJson_dataRateAdaptive = $formValues.find('.valueJson_dataRateAdaptive').val();
	if(valueJson_dataRateAdaptive != null && valueJson_dataRateAdaptive !== '')
		vals['json_dataRateAdaptive'] = valueJson_dataRateAdaptive == 'true';

	var valueJson_swversion = $formValues.find('.valueJson_swversion').val();
	if(valueJson_swversion != null && valueJson_swversion !== '')
		vals['json_swversion'] = valueJson_swversion;

	var valueJson_batteryLevel = $formValues.find('.valueJson_batteryLevel').val();
	if(valueJson_batteryLevel != null && valueJson_batteryLevel !== '')
		vals['json_batteryLevel'] = valueJson_batteryLevel;

	var valueJson_startUpCount = $formValues.find('.valueJson_startUpCount').val();
	if(valueJson_startUpCount != null && valueJson_startUpCount !== '')
		vals['json_startUpCount'] = valueJson_startUpCount;

	var valueJson_watchdogCount = $formValues.find('.valueJson_watchdogCount').val();
	if(valueJson_watchdogCount != null && valueJson_watchdogCount !== '')
		vals['json_watchdogCount'] = valueJson_watchdogCount;

	var valueJson_historySequence = $formValues.find('.valueJson_historySequence').val();
	if(valueJson_historySequence != null && valueJson_historySequence !== '')
		vals['json_historySequence'] = valueJson_historySequence;

	var valueJson_versionFirmware = $formValues.find('.valueJson_versionFirmware').val();
	if(valueJson_versionFirmware != null && valueJson_versionFirmware !== '')
		vals['json_versionFirmware'] = valueJson_versionFirmware;

	var valueJson_stackTxFailRebootCount = $formValues.find('.valueJson_stackTxFailRebootCount').val();
	if(valueJson_stackTxFailRebootCount != null && valueJson_stackTxFailRebootCount !== '')
		vals['json_stackTxFailRebootCount'] = valueJson_stackTxFailRebootCount;

	var valueJson_historySequencePrevious = $formValues.find('.valueJson_historySequencePrevious').val();
	if(valueJson_historySequencePrevious != null && valueJson_historySequencePrevious !== '')
		vals['json_historySequencePrevious'] = valueJson_historySequencePrevious;

	var valueJson_snr = $formValues.find('.valueJson_snr').val();
	if(valueJson_snr != null && valueJson_snr !== '')
		vals['json_snr'] = valueJson_snr;

	var valueJson_rssi = $formValues.find('.valueJson_rssi').val();
	if(valueJson_rssi != null && valueJson_rssi !== '')
		vals['json_rssi'] = valueJson_rssi;

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

	var valueJson = $formValues.find('.valueJson').val();
	if(valueJson != null && valueJson !== '')
		vals['json'] = valueJson;

	$.ajax({
		url: '/api/iot-node'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postIotNodeVals(vals, success, error) {
	$.ajax({
		url: '/api/iot-node'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportIotNode($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportIotNodeVals(JSON.parse(json), success, error);
}

function putimportIotNodeVals(json, success, error) {
	$.ajax({
		url: '/api/iot-node-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketIotNode(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketIotNode', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#IotNodeForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-router w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify IOT nodes in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketIotNodeInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchIotNodeVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputIotNode' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputIotNode' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputIotNode' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputIotNode' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputIotNode' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputIotNode' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Deleted'));
			}
			var val = o['nodeName'];
			if(vars.includes('nodeName')) {
				$('.inputIotNode' + pk + 'NodeName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'NodeName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'NodeName'));
			}
			var val = o['nodeType'];
			if(vars.includes('nodeType')) {
				$('.inputIotNode' + pk + 'NodeType').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'NodeType').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'NodeType'));
			}
			var val = o['nodeId'];
			if(vars.includes('nodeId')) {
				$('.inputIotNode' + pk + 'NodeId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'NodeId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'NodeId'));
			}
			var val = o['location'];
			if(vars.includes('location')) {
				$('.inputIotNode' + pk + 'Location').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Location').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Location'));
			}
			var val = o['json_moisture'];
			if(vars.includes('json_moisture')) {
				$('.inputIotNode' + pk + 'Json_moisture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_moisture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_moisture'));
			}
			var val = o['json_moisture0'];
			if(vars.includes('json_moisture0')) {
				$('.inputIotNode' + pk + 'Json_moisture0').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_moisture0').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_moisture0'));
			}
			var val = o['json_moisture1'];
			if(vars.includes('json_moisture1')) {
				$('.inputIotNode' + pk + 'Json_moisture1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_moisture1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_moisture1'));
			}
			var val = o['json_temperature'];
			if(vars.includes('json_temperature')) {
				$('.inputIotNode' + pk + 'Json_temperature').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_temperature').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_temperature'));
			}
			var val = o['json_temperature0'];
			if(vars.includes('json_temperature0')) {
				$('.inputIotNode' + pk + 'Json_temperature0').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_temperature0').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_temperature0'));
			}
			var val = o['json_temperatureAverage'];
			if(vars.includes('json_temperatureAverage')) {
				$('.inputIotNode' + pk + 'Json_temperatureAverage').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_temperatureAverage').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_temperatureAverage'));
			}
			var val = o['json_badConditionsCounter'];
			if(vars.includes('json_badConditionsCounter')) {
				$('.inputIotNode' + pk + 'Json_badConditionsCounter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_badConditionsCounter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_badConditionsCounter'));
			}
			var val = o['json_door'];
			if(vars.includes('json_door')) {
				$('.inputIotNode' + pk + 'Json_door').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_door').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_door'));
			}
			var val = o['json_alarmDoor'];
			if(vars.includes('json_alarmDoor')) {
				$('.inputIotNode' + pk + 'Json_alarmDoor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_alarmDoor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_alarmDoor'));
			}
			var val = o['json_flood'];
			if(vars.includes('json_flood')) {
				$('.inputIotNode' + pk + 'Json_flood').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_flood').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_flood'));
			}
			var val = o['json_alarmFlood'];
			if(vars.includes('json_alarmFlood')) {
				$('.inputIotNode' + pk + 'Json_alarmFlood').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_alarmFlood').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_alarmFlood'));
			}
			var val = o['json_lux2'];
			if(vars.includes('json_lux2')) {
				$('.inputIotNode' + pk + 'Json_lux2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_lux2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_lux2'));
			}
			var val = o['json_illuminance'];
			if(vars.includes('json_illuminance')) {
				$('.inputIotNode' + pk + 'Json_illuminance').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_illuminance').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_illuminance'));
			}
			var val = o['json_resistance0'];
			if(vars.includes('json_resistance0')) {
				$('.inputIotNode' + pk + 'Json_resistance0').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_resistance0').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_resistance0'));
			}
			var val = o['json_resistance1'];
			if(vars.includes('json_resistance1')) {
				$('.inputIotNode' + pk + 'Json_resistance1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_resistance1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_resistance1'));
			}
			var val = o['json_frequency'];
			if(vars.includes('json_frequency')) {
				$('.inputIotNode' + pk + 'Json_frequency').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_frequency').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_frequency'));
			}
			var val = o['json_devEui'];
			if(vars.includes('json_devEui')) {
				$('.inputIotNode' + pk + 'Json_devEui').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_devEui').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_devEui'));
			}
			var val = o['json_bandwidth'];
			if(vars.includes('json_bandwidth')) {
				$('.inputIotNode' + pk + 'Json_bandwidth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_bandwidth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_bandwidth'));
			}
			var val = o['json_dataRate'];
			if(vars.includes('json_dataRate')) {
				$('.inputIotNode' + pk + 'Json_dataRate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_dataRate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_dataRate'));
			}
			var val = o['json_frameCount'];
			if(vars.includes('json_frameCount')) {
				$('.inputIotNode' + pk + 'Json_frameCount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_frameCount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_frameCount'));
			}
			var val = o['json_maxPayload'];
			if(vars.includes('json_maxPayload')) {
				$('.inputIotNode' + pk + 'Json_maxPayload').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_maxPayload').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_maxPayload'));
			}
			var val = o['json_bitsPerSecond'];
			if(vars.includes('json_bitsPerSecond')) {
				$('.inputIotNode' + pk + 'Json_bitsPerSecond').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_bitsPerSecond').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_bitsPerSecond'));
			}
			var val = o['json_batteryVoltage'];
			if(vars.includes('json_batteryVoltage')) {
				$('.inputIotNode' + pk + 'Json_batteryVoltage').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_batteryVoltage').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_batteryVoltage'));
			}
			var val = o['json_spreadingFactor'];
			if(vars.includes('json_spreadingFactor')) {
				$('.inputIotNode' + pk + 'Json_spreadingFactor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_spreadingFactor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_spreadingFactor'));
			}
			var val = o['json_dataRateAdaptive'];
			if(vars.includes('json_dataRateAdaptive')) {
				$('.inputIotNode' + pk + 'Json_dataRateAdaptive').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_dataRateAdaptive').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_dataRateAdaptive'));
			}
			var val = o['json_swversion'];
			if(vars.includes('json_swversion')) {
				$('.inputIotNode' + pk + 'Json_swversion').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_swversion').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_swversion'));
			}
			var val = o['json_batteryLevel'];
			if(vars.includes('json_batteryLevel')) {
				$('.inputIotNode' + pk + 'Json_batteryLevel').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_batteryLevel').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_batteryLevel'));
			}
			var val = o['json_startUpCount'];
			if(vars.includes('json_startUpCount')) {
				$('.inputIotNode' + pk + 'Json_startUpCount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_startUpCount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_startUpCount'));
			}
			var val = o['json_watchdogCount'];
			if(vars.includes('json_watchdogCount')) {
				$('.inputIotNode' + pk + 'Json_watchdogCount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_watchdogCount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_watchdogCount'));
			}
			var val = o['json_historySequence'];
			if(vars.includes('json_historySequence')) {
				$('.inputIotNode' + pk + 'Json_historySequence').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_historySequence').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_historySequence'));
			}
			var val = o['json_versionFirmware'];
			if(vars.includes('json_versionFirmware')) {
				$('.inputIotNode' + pk + 'Json_versionFirmware').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_versionFirmware').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_versionFirmware'));
			}
			var val = o['json_stackTxFailRebootCount'];
			if(vars.includes('json_stackTxFailRebootCount')) {
				$('.inputIotNode' + pk + 'Json_stackTxFailRebootCount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_stackTxFailRebootCount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_stackTxFailRebootCount'));
			}
			var val = o['json_historySequencePrevious'];
			if(vars.includes('json_historySequencePrevious')) {
				$('.inputIotNode' + pk + 'Json_historySequencePrevious').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_historySequencePrevious').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_historySequencePrevious'));
			}
			var val = o['json_snr'];
			if(vars.includes('json_snr')) {
				$('.inputIotNode' + pk + 'Json_snr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_snr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_snr'));
			}
			var val = o['json_rssi'];
			if(vars.includes('json_rssi')) {
				$('.inputIotNode' + pk + 'Json_rssi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json_rssi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json_rssi'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputIotNode' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputIotNode' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputIotNode' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputIotNode' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputIotNode' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputIotNode' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputIotNode' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputIotNode' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputIotNode' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputIotNode' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputIotNode' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputIotNode' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputIotNode' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputIotNode' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Id'));
			}
			var val = o['json'];
			if(vars.includes('json')) {
				$('.inputIotNode' + pk + 'Json').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varIotNode' + pk + 'Json').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputIotNode' + pk + 'Json'));
			}
		});
	}
}

function pageGraph(apiRequest) {
	var json = JSON.parse($('.pageForm .pageResponse').val());
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
			var pivot1Var = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf('_'));
			var pivot1VarFq = window.varsFq[pivot1Var] ? window.varsFq[pivot1Var] : 'classSimpleName';
			var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
			var pivot1Vals = Object.keys(pivot1Map);
			var data = [];
			var layout = {};
			if(pivot1VarFq.classSimpleName === 'Point') {
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
				trace['marker'] = { color: 'fuchsia', size: 6 };
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
				data.push(trace);
			} else if(range) {
				layout['title'] = 'IotNode';
				layout['xaxis'] = {
					title: rangeVarFq.displayName
				}
				layout['yaxis'] = {
					title: pivot1VarFq.displayName
				}
				pivot1Vals.forEach((pivot1Val) => {
					var pivot1 = pivot1Map[pivot1Val];
					var pivot1Counts = pivot1.ranges[rangeName].counts;
					var trace = {};
					trace['showlegend'] = true;
					trace['x'] = Object.keys(pivot1Counts).map(key => key);
					trace['y'] = Object.values(pivot1Counts);
					trace['mode'] = 'lines+markers';
					trace['name'] = pivot1Val;
					data.push(trace);
				});
			}
			Plotly.react('htmBodyGraphBaseModelPage', data, layout);
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
	$('#fqVehicleStep_time').val(x);
	$('#fqVehicleStep_time').change();
	searchPage();
	}, speedRate);
}
