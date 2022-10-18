
// Search //

async function searchVehicleStep($formFilters, success, error) {
	var filters = searchVehicleStepFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchVehicleStepVals(filters, success, error);
}

function searchVehicleStepFilters($formFilters) {
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

		var filterVehicleId = $formFilters.find('.valueVehicleId').val();
		if(filterVehicleId != null && filterVehicleId !== '')
			filters.push({ name: 'fq', value: 'vehicleId:' + filterVehicleId });

		var filterVehicleType = $formFilters.find('.valueVehicleType').val();
		if(filterVehicleType != null && filterVehicleType !== '')
			filters.push({ name: 'fq', value: 'vehicleType:' + filterVehicleType });

		var filterAngle = $formFilters.find('.valueAngle').val();
		if(filterAngle != null && filterAngle !== '')
			filters.push({ name: 'fq', value: 'angle:' + filterAngle });

		var filterSpeed = $formFilters.find('.valueSpeed').val();
		if(filterSpeed != null && filterSpeed !== '')
			filters.push({ name: 'fq', value: 'speed:' + filterSpeed });

		var filterPos = $formFilters.find('.valuePos').val();
		if(filterPos != null && filterPos !== '')
			filters.push({ name: 'fq', value: 'pos:' + filterPos });

		var filterSlope = $formFilters.find('.valueSlope').val();
		if(filterSlope != null && filterSlope !== '')
			filters.push({ name: 'fq', value: 'slope:' + filterSlope });

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

function searchVehicleStepVals(filters, success, error) {

	$.ajax({
		url: '/api/vehicle-step?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestVehicleStepObjectSuggest($formFilters, $list) {
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
	searchVehicleStepVals($formFilters, success, error);
}

// GET //

async function getVehicleStep() {
	$.ajax({
		url: '/api/vehicle-step/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// PATCH //

async function patchVehicleStep($formFilters, $formValues, id, success, error) {
	var filters = patchVehicleStepFilters($formFilters);

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

	var valueSimulationKey = $formValues.find('.valueSimulationKey').val();
	var removeSimulationKey = $formValues.find('.removeSimulationKey').val() === 'true';
	var setSimulationKey = removeSimulationKey ? null : $formValues.find('.setSimulationKey').val();
	var addSimulationKey = $formValues.find('.addSimulationKey').val();
	if(removeSimulationKey || setSimulationKey != null && setSimulationKey !== '')
		vals['setSimulationKey'] = setSimulationKey;
	if(addSimulationKey != null && addSimulationKey !== '')
		vals['addSimulationKey'] = addSimulationKey;
	var removeSimulationKey = $formValues.find('.removeSimulationKey').val();
	if(removeSimulationKey != null && removeSimulationKey !== '')
		vals['removeSimulationKey'] = removeSimulationKey;

	var valueSumocfgPath = $formValues.find('.valueSumocfgPath').val();
	var removeSumocfgPath = $formValues.find('.removeSumocfgPath').val() === 'true';
	var setSumocfgPath = removeSumocfgPath ? null : $formValues.find('.setSumocfgPath').val();
	var addSumocfgPath = $formValues.find('.addSumocfgPath').val();
	if(removeSumocfgPath || setSumocfgPath != null && setSumocfgPath !== '')
		vals['setSumocfgPath'] = setSumocfgPath;
	if(addSumocfgPath != null && addSumocfgPath !== '')
		vals['addSumocfgPath'] = addSumocfgPath;
	var removeSumocfgPath = $formValues.find('.removeSumocfgPath').val();
	if(removeSumocfgPath != null && removeSumocfgPath !== '')
		vals['removeSumocfgPath'] = removeSumocfgPath;

	var valueTimeStepId = $formValues.find('.valueTimeStepId').val();
	var removeTimeStepId = $formValues.find('.removeTimeStepId').val() === 'true';
	var setTimeStepId = removeTimeStepId ? null : $formValues.find('.setTimeStepId').val();
	var addTimeStepId = $formValues.find('.addTimeStepId').val();
	if(removeTimeStepId || setTimeStepId != null && setTimeStepId !== '')
		vals['setTimeStepId'] = setTimeStepId;
	if(addTimeStepId != null && addTimeStepId !== '')
		vals['addTimeStepId'] = addTimeStepId;
	var removeTimeStepId = $formValues.find('.removeTimeStepId').val();
	if(removeTimeStepId != null && removeTimeStepId !== '')
		vals['removeTimeStepId'] = removeTimeStepId;

	var valueTime = $formValues.find('.valueTime').val();
	var removeTime = $formValues.find('.removeTime').val() === 'true';
	var setTime = removeTime ? null : $formValues.find('.setTime').val();
	var addTime = $formValues.find('.addTime').val();
	if(removeTime || setTime != null && setTime !== '')
		vals['setTime'] = setTime;
	if(addTime != null && addTime !== '')
		vals['addTime'] = addTime;
	var removeTime = $formValues.find('.removeTime').val();
	if(removeTime != null && removeTime !== '')
		vals['removeTime'] = removeTime;

	var valueStep = $formValues.find('.valueStep').val();
	var removeStep = $formValues.find('.removeStep').val() === 'true';
	var valueStepSelectVal = $formValues.find('select.setStep').val();
	if(valueStepSelectVal != null && valueStepSelectVal !== '')
		valueStep = valueStepSelectVal == 'true';
	var setStep = removeStep ? null : valueStep;
	var addStep = $formValues.find('.addStep').prop('checked');
	if(removeStep || setStep != null && setStep !== '')
		vals['setStep'] = setStep;
	if(addStep != null && addStep !== '')
		vals['addStep'] = addStep;
	var removeStep = $formValues.find('.removeStep').prop('checked');
	if(removeStep != null && removeStep !== '')
		vals['removeStep'] = removeStep;

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

	var valueColor = $formValues.find('.valueColor').val();
	var removeColor = $formValues.find('.removeColor').val() === 'true';
	var setColor = removeColor ? null : $formValues.find('.setColor').val();
	var addColor = $formValues.find('.addColor').val();
	if(removeColor || setColor != null && setColor !== '')
		vals['setColor'] = setColor;
	if(addColor != null && addColor !== '')
		vals['addColor'] = addColor;
	var removeColor = $formValues.find('.removeColor').val();
	if(removeColor != null && removeColor !== '')
		vals['removeColor'] = removeColor;

	var valueVehicleId = $formValues.find('.valueVehicleId').val();
	var removeVehicleId = $formValues.find('.removeVehicleId').val() === 'true';
	var setVehicleId = removeVehicleId ? null : $formValues.find('.setVehicleId').val();
	var addVehicleId = $formValues.find('.addVehicleId').val();
	if(removeVehicleId || setVehicleId != null && setVehicleId !== '')
		vals['setVehicleId'] = setVehicleId;
	if(addVehicleId != null && addVehicleId !== '')
		vals['addVehicleId'] = addVehicleId;
	var removeVehicleId = $formValues.find('.removeVehicleId').val();
	if(removeVehicleId != null && removeVehicleId !== '')
		vals['removeVehicleId'] = removeVehicleId;

	var valueVehicleType = $formValues.find('.valueVehicleType').val();
	var removeVehicleType = $formValues.find('.removeVehicleType').val() === 'true';
	var setVehicleType = removeVehicleType ? null : $formValues.find('.setVehicleType').val();
	var addVehicleType = $formValues.find('.addVehicleType').val();
	if(removeVehicleType || setVehicleType != null && setVehicleType !== '')
		vals['setVehicleType'] = setVehicleType;
	if(addVehicleType != null && addVehicleType !== '')
		vals['addVehicleType'] = addVehicleType;
	var removeVehicleType = $formValues.find('.removeVehicleType').val();
	if(removeVehicleType != null && removeVehicleType !== '')
		vals['removeVehicleType'] = removeVehicleType;

	var valueAngle = $formValues.find('.valueAngle').val();
	var removeAngle = $formValues.find('.removeAngle').val() === 'true';
	var setAngle = removeAngle ? null : $formValues.find('.setAngle').val();
	var addAngle = $formValues.find('.addAngle').val();
	if(removeAngle || setAngle != null && setAngle !== '')
		vals['setAngle'] = setAngle;
	if(addAngle != null && addAngle !== '')
		vals['addAngle'] = addAngle;
	var removeAngle = $formValues.find('.removeAngle').val();
	if(removeAngle != null && removeAngle !== '')
		vals['removeAngle'] = removeAngle;

	var valueSpeed = $formValues.find('.valueSpeed').val();
	var removeSpeed = $formValues.find('.removeSpeed').val() === 'true';
	var setSpeed = removeSpeed ? null : $formValues.find('.setSpeed').val();
	var addSpeed = $formValues.find('.addSpeed').val();
	if(removeSpeed || setSpeed != null && setSpeed !== '')
		vals['setSpeed'] = setSpeed;
	if(addSpeed != null && addSpeed !== '')
		vals['addSpeed'] = addSpeed;
	var removeSpeed = $formValues.find('.removeSpeed').val();
	if(removeSpeed != null && removeSpeed !== '')
		vals['removeSpeed'] = removeSpeed;

	var valuePos = $formValues.find('.valuePos').val();
	var removePos = $formValues.find('.removePos').val() === 'true';
	var setPos = removePos ? null : $formValues.find('.setPos').val();
	var addPos = $formValues.find('.addPos').val();
	if(removePos || setPos != null && setPos !== '')
		vals['setPos'] = setPos;
	if(addPos != null && addPos !== '')
		vals['addPos'] = addPos;
	var removePos = $formValues.find('.removePos').val();
	if(removePos != null && removePos !== '')
		vals['removePos'] = removePos;

	var valueSlope = $formValues.find('.valueSlope').val();
	var removeSlope = $formValues.find('.removeSlope').val() === 'true';
	var setSlope = removeSlope ? null : $formValues.find('.setSlope').val();
	var addSlope = $formValues.find('.addSlope').val();
	if(removeSlope || setSlope != null && setSlope !== '')
		vals['setSlope'] = setSlope;
	if(addSlope != null && addSlope !== '')
		vals['addSlope'] = addSlope;
	var removeSlope = $formValues.find('.removeSlope').val();
	if(removeSlope != null && removeSlope !== '')
		vals['removeSlope'] = removeSlope;

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

	var valueId = $formValues.find('.valueId').val();
	var removeId = $formValues.find('.removeId').val() === 'true';
	var setId = removeId ? null : $formValues.find('.setId').val();
	var addId = $formValues.find('.addId').val();
	if(removeId || setId != null && setId !== '')
		vals['setId'] = setId;
	if(addId != null && addId !== '')
		vals['addId'] = addId;
	var removeId = $formValues.find('.removeId').val();
	if(removeId != null && removeId !== '')
		vals['removeId'] = removeId;

	var valueX = $formValues.find('.valueX').val();
	var removeX = $formValues.find('.removeX').val() === 'true';
	var setX = removeX ? null : $formValues.find('.setX').val();
	var addX = $formValues.find('.addX').val();
	if(removeX || setX != null && setX !== '')
		vals['setX'] = setX;
	if(addX != null && addX !== '')
		vals['addX'] = addX;
	var removeX = $formValues.find('.removeX').val();
	if(removeX != null && removeX !== '')
		vals['removeX'] = removeX;

	var valueY = $formValues.find('.valueY').val();
	var removeY = $formValues.find('.removeY').val() === 'true';
	var setY = removeY ? null : $formValues.find('.setY').val();
	var addY = $formValues.find('.addY').val();
	if(removeY || setY != null && setY !== '')
		vals['setY'] = setY;
	if(addY != null && addY !== '')
		vals['addY'] = addY;
	var removeY = $formValues.find('.removeY').val();
	if(removeY != null && removeY !== '')
		vals['removeY'] = removeY;

	patchVehicleStepVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchVehicleStepFilters($formFilters) {
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

		var filterVehicleId = $formFilters.find('.valueVehicleId').val();
		if(filterVehicleId != null && filterVehicleId !== '')
			filters.push({ name: 'fq', value: 'vehicleId:' + filterVehicleId });

		var filterVehicleType = $formFilters.find('.valueVehicleType').val();
		if(filterVehicleType != null && filterVehicleType !== '')
			filters.push({ name: 'fq', value: 'vehicleType:' + filterVehicleType });

		var filterAngle = $formFilters.find('.valueAngle').val();
		if(filterAngle != null && filterAngle !== '')
			filters.push({ name: 'fq', value: 'angle:' + filterAngle });

		var filterSpeed = $formFilters.find('.valueSpeed').val();
		if(filterSpeed != null && filterSpeed !== '')
			filters.push({ name: 'fq', value: 'speed:' + filterSpeed });

		var filterPos = $formFilters.find('.valuePos').val();
		if(filterPos != null && filterPos !== '')
			filters.push({ name: 'fq', value: 'pos:' + filterPos });

		var filterSlope = $formFilters.find('.valueSlope').val();
		if(filterSlope != null && filterSlope !== '')
			filters.push({ name: 'fq', value: 'slope:' + filterSlope });

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

function patchVehicleStepVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchVehicleStepVals(filters, vals, success, error);
}

function patchVehicleStepVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/vehicle-step?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postVehicleStep($formValues, success, error) {
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

	var valueSimulationName = $formValues.find('.valueSimulationName').val();
	if(valueSimulationName != null && valueSimulationName !== '')
		vals['simulationName'] = valueSimulationName;

	var valueSimulationKey = $formValues.find('.valueSimulationKey').val();
	if(valueSimulationKey != null && valueSimulationKey !== '')
		vals['simulationKey'] = valueSimulationKey;

	var valueSumocfgPath = $formValues.find('.valueSumocfgPath').val();
	if(valueSumocfgPath != null && valueSumocfgPath !== '')
		vals['sumocfgPath'] = valueSumocfgPath;

	var valueTimeStepId = $formValues.find('.valueTimeStepId').val();
	if(valueTimeStepId != null && valueTimeStepId !== '')
		vals['timeStepId'] = valueTimeStepId;

	var valueTime = $formValues.find('.valueTime').val();
	if(valueTime != null && valueTime !== '')
		vals['time'] = valueTime;

	var valueStep = $formValues.find('.valueStep').val();
	if(valueStep != null && valueStep !== '')
		vals['step'] = valueStep == 'true';

	var valueLocation = $formValues.find('.valueLocation').val();
	if(valueLocation != null && valueLocation !== '')
		vals['location'] = valueLocation;

	var valueColor = $formValues.find('.valueColor').val();
	if(valueColor != null && valueColor !== '')
		vals['color'] = valueColor;

	var valueVehicleId = $formValues.find('.valueVehicleId').val();
	if(valueVehicleId != null && valueVehicleId !== '')
		vals['vehicleId'] = valueVehicleId;

	var valueVehicleType = $formValues.find('.valueVehicleType').val();
	if(valueVehicleType != null && valueVehicleType !== '')
		vals['vehicleType'] = valueVehicleType;

	var valueAngle = $formValues.find('.valueAngle').val();
	if(valueAngle != null && valueAngle !== '')
		vals['angle'] = valueAngle;

	var valueSpeed = $formValues.find('.valueSpeed').val();
	if(valueSpeed != null && valueSpeed !== '')
		vals['speed'] = valueSpeed;

	var valuePos = $formValues.find('.valuePos').val();
	if(valuePos != null && valuePos !== '')
		vals['pos'] = valuePos;

	var valueSlope = $formValues.find('.valueSlope').val();
	if(valueSlope != null && valueSlope !== '')
		vals['slope'] = valueSlope;

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

	var valueId = $formValues.find('.valueId').val();
	if(valueId != null && valueId !== '')
		vals['id'] = valueId;

	var valueX = $formValues.find('.valueX').val();
	if(valueX != null && valueX !== '')
		vals['x'] = valueX;

	var valueY = $formValues.find('.valueY').val();
	if(valueY != null && valueY !== '')
		vals['y'] = valueY;

	$.ajax({
		url: '/api/vehicle-step'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postVehicleStepVals(vals, success, error) {
	$.ajax({
		url: '/api/vehicle-step'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportVehicleStep($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportVehicleStepVals(JSON.parse(json), success, error);
}

function putimportVehicleStepVals(json, success, error) {
	$.ajax({
		url: '/api/vehicle-step-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketVehicleStep(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketVehicleStep', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#VehicleStepForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-map-location-dot w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify vehicle steps in ' + json.timeRemaining);
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
async function websocketVehicleStepInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchVehicleStepVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputVehicleStep' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputVehicleStep' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputVehicleStep' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputVehicleStep' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputVehicleStep' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Deleted'));
			}
			var val = o['simulationName'];
			if(vars.includes('simulationName')) {
				$('.inputVehicleStep' + pk + 'SimulationName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'SimulationName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'SimulationName'));
			}
			var val = o['simulationKey'];
			if(vars.includes('simulationKey')) {
				$('.inputVehicleStep' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'SimulationKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'SimulationKey'));
			}
			var val = o['sumocfgPath'];
			if(vars.includes('sumocfgPath')) {
				$('.inputVehicleStep' + pk + 'SumocfgPath').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'SumocfgPath').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'SumocfgPath'));
			}
			var val = o['timeStepId'];
			if(vars.includes('timeStepId')) {
				$('.inputVehicleStep' + pk + 'TimeStepId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'TimeStepId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'TimeStepId'));
			}
			var val = o['time'];
			if(vars.includes('time')) {
				$('.inputVehicleStep' + pk + 'Time').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Time').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Time'));
			}
			var val = o['step'];
			if(vars.includes('step')) {
				$('.inputVehicleStep' + pk + 'Step').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Step').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Step'));
			}
			var val = o['location'];
			if(vars.includes('location')) {
				$('.inputVehicleStep' + pk + 'Location').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Location').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Location'));
			}
			var val = o['color'];
			if(vars.includes('color')) {
				$('.inputVehicleStep' + pk + 'Color').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Color').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Color'));
			}
			var val = o['vehicleId'];
			if(vars.includes('vehicleId')) {
				$('.inputVehicleStep' + pk + 'VehicleId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'VehicleId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'VehicleId'));
			}
			var val = o['vehicleType'];
			if(vars.includes('vehicleType')) {
				$('.inputVehicleStep' + pk + 'VehicleType').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'VehicleType').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'VehicleType'));
			}
			var val = o['angle'];
			if(vars.includes('angle')) {
				$('.inputVehicleStep' + pk + 'Angle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Angle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Angle'));
			}
			var val = o['speed'];
			if(vars.includes('speed')) {
				$('.inputVehicleStep' + pk + 'Speed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Speed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Speed'));
			}
			var val = o['pos'];
			if(vars.includes('pos')) {
				$('.inputVehicleStep' + pk + 'Pos').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Pos').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Pos'));
			}
			var val = o['slope'];
			if(vars.includes('slope')) {
				$('.inputVehicleStep' + pk + 'Slope').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Slope').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Slope'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputVehicleStep' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputVehicleStep' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputVehicleStep' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputVehicleStep' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputVehicleStep' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputVehicleStep' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputVehicleStep' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputVehicleStep' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputVehicleStep' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputVehicleStep' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputVehicleStep' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputVehicleStep' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputVehicleStep' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputVehicleStep' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Id'));
			}
			var val = o['x'];
			if(vars.includes('x')) {
				$('.inputVehicleStep' + pk + 'X').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'X').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'X'));
			}
			var val = o['y'];
			if(vars.includes('y')) {
				$('.inputVehicleStep' + pk + 'Y').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varVehicleStep' + pk + 'Y').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputVehicleStep' + pk + 'Y'));
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
					layout['title'] = 'VehicleStep';
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
						trace['name'] = 'VehicleStep';
						var ys = [];
						trace['x'] = Object.keys(pivot1Counts).map(key => key);
						pivot1Vals.forEach((pivot1Val) => {
							ys.push(parseFloat(pivot1Val));
						});
						trace['y'] = ys;
						data.push(trace);
					}
				}
				Plotly.react('htmBodyGraphMapResultPage', data, layout);
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
	$('#fqVehicleStep_time').val(x);
	$('#fqVehicleStep_time').change();
	searchPage();
	}, speedRate);
}
