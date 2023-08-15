
// Search //

async function searchTrafficLightStep($formFilters, success, error) {
	var filters = searchTrafficLightStepFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchTrafficLightStepVals(filters, success, error);
}

function searchTrafficLightStepFilters($formFilters) {
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

		var filterSumocfgPath = $formFilters.find('.valueSumocfgPath').val();
		if(filterSumocfgPath != null && filterSumocfgPath !== '')
			filters.push({ name: 'fq', value: 'sumocfgPath:' + filterSumocfgPath });

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

		var filterTrafficLightId = $formFilters.find('.valueTrafficLightId').val();
		if(filterTrafficLightId != null && filterTrafficLightId !== '')
			filters.push({ name: 'fq', value: 'trafficLightId:' + filterTrafficLightId });

		var filterTrafficLightType = $formFilters.find('.valueTrafficLightType').val();
		if(filterTrafficLightType != null && filterTrafficLightType !== '')
			filters.push({ name: 'fq', value: 'trafficLightType:' + filterTrafficLightType });

		var filterAngle = $formFilters.find('.valueAngle').val();
		if(filterAngle != null && filterAngle !== '')
			filters.push({ name: 'fq', value: 'angle:' + filterAngle });

		var filterState = $formFilters.find('.valueState').val();
		if(filterState != null && filterState !== '')
			filters.push({ name: 'fq', value: 'state:' + filterState });

		var filterProgramId = $formFilters.find('.valueProgramId').val();
		if(filterProgramId != null && filterProgramId !== '')
			filters.push({ name: 'fq', value: 'programId:' + filterProgramId });

		var filterPhase = $formFilters.find('.valuePhase').val();
		if(filterPhase != null && filterPhase !== '')
			filters.push({ name: 'fq', value: 'phase:' + filterPhase });

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

function searchTrafficLightStepVals(filters, success, error) {


	$.ajax({
		url: '/api/traffic-light-step?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestTrafficLightStepObjectSuggest($formFilters, $list) {
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
	searchTrafficLightStepVals($formFilters, success, error);
}

// GET //

async function getTrafficLightStep() {
	$.ajax({
		url: '/api/traffic-light-step/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// PATCH //

async function patchTrafficLightStep($formFilters, $formValues, id, success, error) {
	var filters = patchTrafficLightStepFilters($formFilters);

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

	var valueDateTime = $formValues.find('.valueDateTime').val();
	var removeDateTime = $formValues.find('.removeDateTime').val() === 'true';
	var setDateTime = removeDateTime ? null : $formValues.find('.setDateTime').val();
	var addDateTime = $formValues.find('.addDateTime').val();
	if(removeDateTime || setDateTime != null && setDateTime !== '')
		vals['setDateTime'] = setDateTime;
	if(addDateTime != null && addDateTime !== '')
		vals['addDateTime'] = addDateTime;
	var removeDateTime = $formValues.find('.removeDateTime').val();
	if(removeDateTime != null && removeDateTime !== '')
		vals['removeDateTime'] = removeDateTime;

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

	var valueTrafficLightId = $formValues.find('.valueTrafficLightId').val();
	var removeTrafficLightId = $formValues.find('.removeTrafficLightId').val() === 'true';
	var setTrafficLightId = removeTrafficLightId ? null : $formValues.find('.setTrafficLightId').val();
	var addTrafficLightId = $formValues.find('.addTrafficLightId').val();
	if(removeTrafficLightId || setTrafficLightId != null && setTrafficLightId !== '')
		vals['setTrafficLightId'] = setTrafficLightId;
	if(addTrafficLightId != null && addTrafficLightId !== '')
		vals['addTrafficLightId'] = addTrafficLightId;
	var removeTrafficLightId = $formValues.find('.removeTrafficLightId').val();
	if(removeTrafficLightId != null && removeTrafficLightId !== '')
		vals['removeTrafficLightId'] = removeTrafficLightId;

	var valueTrafficLightType = $formValues.find('.valueTrafficLightType').val();
	var removeTrafficLightType = $formValues.find('.removeTrafficLightType').val() === 'true';
	var setTrafficLightType = removeTrafficLightType ? null : $formValues.find('.setTrafficLightType').val();
	var addTrafficLightType = $formValues.find('.addTrafficLightType').val();
	if(removeTrafficLightType || setTrafficLightType != null && setTrafficLightType !== '')
		vals['setTrafficLightType'] = setTrafficLightType;
	if(addTrafficLightType != null && addTrafficLightType !== '')
		vals['addTrafficLightType'] = addTrafficLightType;
	var removeTrafficLightType = $formValues.find('.removeTrafficLightType').val();
	if(removeTrafficLightType != null && removeTrafficLightType !== '')
		vals['removeTrafficLightType'] = removeTrafficLightType;

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

	var valueState = $formValues.find('.valueState').val();
	var removeState = $formValues.find('.removeState').val() === 'true';
	var setState = removeState ? null : $formValues.find('.setState').val();
	var addState = $formValues.find('.addState').val();
	if(removeState || setState != null && setState !== '')
		vals['setState'] = setState;
	if(addState != null && addState !== '')
		vals['addState'] = addState;
	var removeState = $formValues.find('.removeState').val();
	if(removeState != null && removeState !== '')
		vals['removeState'] = removeState;

	var valueProgramId = $formValues.find('.valueProgramId').val();
	var removeProgramId = $formValues.find('.removeProgramId').val() === 'true';
	var setProgramId = removeProgramId ? null : $formValues.find('.setProgramId').val();
	var addProgramId = $formValues.find('.addProgramId').val();
	if(removeProgramId || setProgramId != null && setProgramId !== '')
		vals['setProgramId'] = setProgramId;
	if(addProgramId != null && addProgramId !== '')
		vals['addProgramId'] = addProgramId;
	var removeProgramId = $formValues.find('.removeProgramId').val();
	if(removeProgramId != null && removeProgramId !== '')
		vals['removeProgramId'] = removeProgramId;

	var valuePhase = $formValues.find('.valuePhase').val();
	var removePhase = $formValues.find('.removePhase').val() === 'true';
	var setPhase = removePhase ? null : $formValues.find('.setPhase').val();
	var addPhase = $formValues.find('.addPhase').val();
	if(removePhase || setPhase != null && setPhase !== '')
		vals['setPhase'] = setPhase;
	if(addPhase != null && addPhase !== '')
		vals['addPhase'] = addPhase;
	var removePhase = $formValues.find('.removePhase').val();
	if(removePhase != null && removePhase !== '')
		vals['removePhase'] = removePhase;

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

	patchTrafficLightStepVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchTrafficLightStepFilters($formFilters) {
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

		var filterSumocfgPath = $formFilters.find('.valueSumocfgPath').val();
		if(filterSumocfgPath != null && filterSumocfgPath !== '')
			filters.push({ name: 'fq', value: 'sumocfgPath:' + filterSumocfgPath });

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

		var filterTrafficLightId = $formFilters.find('.valueTrafficLightId').val();
		if(filterTrafficLightId != null && filterTrafficLightId !== '')
			filters.push({ name: 'fq', value: 'trafficLightId:' + filterTrafficLightId });

		var filterTrafficLightType = $formFilters.find('.valueTrafficLightType').val();
		if(filterTrafficLightType != null && filterTrafficLightType !== '')
			filters.push({ name: 'fq', value: 'trafficLightType:' + filterTrafficLightType });

		var filterAngle = $formFilters.find('.valueAngle').val();
		if(filterAngle != null && filterAngle !== '')
			filters.push({ name: 'fq', value: 'angle:' + filterAngle });

		var filterState = $formFilters.find('.valueState').val();
		if(filterState != null && filterState !== '')
			filters.push({ name: 'fq', value: 'state:' + filterState });

		var filterProgramId = $formFilters.find('.valueProgramId').val();
		if(filterProgramId != null && filterProgramId !== '')
			filters.push({ name: 'fq', value: 'programId:' + filterProgramId });

		var filterPhase = $formFilters.find('.valuePhase').val();
		if(filterPhase != null && filterPhase !== '')
			filters.push({ name: 'fq', value: 'phase:' + filterPhase });

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

function patchTrafficLightStepVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchTrafficLightStepVals(filters, vals, success, error);
}

function patchTrafficLightStepVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/traffic-light-step?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postTrafficLightStep($formValues, success, error) {
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

	var valueSumocfgPath = $formValues.find('.valueSumocfgPath').val();
	if(valueSumocfgPath != null && valueSumocfgPath !== '')
		vals['sumocfgPath'] = valueSumocfgPath;

	var valueTime = $formValues.find('.valueTime').val();
	if(valueTime != null && valueTime !== '')
		vals['time'] = valueTime;

	var valueDateTime = $formValues.find('.valueDateTime').val();
	if(valueDateTime != null && valueDateTime !== '')
		vals['dateTime'] = valueDateTime;

	var valueStep = $formValues.find('.valueStep').val();
	if(valueStep != null && valueStep !== '')
		vals['step'] = valueStep == 'true';

	var valueLocation = $formValues.find('.valueLocation').val();
	if(valueLocation != null && valueLocation !== '')
		vals['location'] = valueLocation;

	var valueColor = $formValues.find('.valueColor').val();
	if(valueColor != null && valueColor !== '')
		vals['color'] = valueColor;

	var valueTrafficLightId = $formValues.find('.valueTrafficLightId').val();
	if(valueTrafficLightId != null && valueTrafficLightId !== '')
		vals['trafficLightId'] = valueTrafficLightId;

	var valueTrafficLightType = $formValues.find('.valueTrafficLightType').val();
	if(valueTrafficLightType != null && valueTrafficLightType !== '')
		vals['trafficLightType'] = valueTrafficLightType;

	var valueAngle = $formValues.find('.valueAngle').val();
	if(valueAngle != null && valueAngle !== '')
		vals['angle'] = valueAngle;

	var valueState = $formValues.find('.valueState').val();
	if(valueState != null && valueState !== '')
		vals['state'] = valueState;

	var valueProgramId = $formValues.find('.valueProgramId').val();
	if(valueProgramId != null && valueProgramId !== '')
		vals['programId'] = valueProgramId;

	var valuePhase = $formValues.find('.valuePhase').val();
	if(valuePhase != null && valuePhase !== '')
		vals['phase'] = valuePhase;

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

	var valueTimeStepId = $formValues.find('.valueTimeStepId').val();
	if(valueTimeStepId != null && valueTimeStepId !== '')
		vals['timeStepId'] = valueTimeStepId;

	var valueX = $formValues.find('.valueX').val();
	if(valueX != null && valueX !== '')
		vals['x'] = valueX;

	var valueY = $formValues.find('.valueY').val();
	if(valueY != null && valueY !== '')
		vals['y'] = valueY;

	$.ajax({
		url: '/api/traffic-light-step'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postTrafficLightStepVals(vals, success, error) {
	$.ajax({
		url: '/api/traffic-light-step'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportTrafficLightStep($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportTrafficLightStepVals(JSON.parse(json), success, error);
}

function putimportTrafficLightStepVals(json, success, error) {
	$.ajax({
		url: '/api/traffic-light-step-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketTrafficLightStep(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketTrafficLightStep', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#TrafficLightStepForm :input[name=id]').val();
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
			var $headerSpan = $('<span>').attr('class', '').text('modify traffic light steps in ' + json.timeRemaining);
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
async function websocketTrafficLightStepInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchTrafficLightStepVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(o != null) {
				var val = o['created'];
				if(vars.includes('created')) {
					$('.inputTrafficLightStep' + pk + 'Created').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Created').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['modified'];
				if(vars.includes('modified')) {
					$('.inputTrafficLightStep' + pk + 'Modified').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Modified').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['objectId'];
				if(vars.includes('objectId')) {
					$('.inputTrafficLightStep' + pk + 'ObjectId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ObjectId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['archived'];
				if(vars.includes('archived')) {
					$('.inputTrafficLightStep' + pk + 'Archived').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Archived').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['deleted'];
				if(vars.includes('deleted')) {
					$('.inputTrafficLightStep' + pk + 'Deleted').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Deleted').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['simulationName'];
				if(vars.includes('simulationName')) {
					$('.inputTrafficLightStep' + pk + 'SimulationName').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'SimulationName').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['sumocfgPath'];
				if(vars.includes('sumocfgPath')) {
					$('.inputTrafficLightStep' + pk + 'SumocfgPath').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'SumocfgPath').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['time'];
				if(vars.includes('time')) {
					$('.inputTrafficLightStep' + pk + 'Time').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Time').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['dateTime'];
				if(vars.includes('dateTime')) {
					$('.inputTrafficLightStep' + pk + 'DateTime').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'DateTime').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['step'];
				if(vars.includes('step')) {
					$('.inputTrafficLightStep' + pk + 'Step').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Step').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['location'];
				if(vars.includes('location')) {
					$('.inputTrafficLightStep' + pk + 'Location').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Location').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['color'];
				if(vars.includes('color')) {
					$('.inputTrafficLightStep' + pk + 'Color').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Color').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['trafficLightId'];
				if(vars.includes('trafficLightId')) {
					$('.inputTrafficLightStep' + pk + 'TrafficLightId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'TrafficLightId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['trafficLightType'];
				if(vars.includes('trafficLightType')) {
					$('.inputTrafficLightStep' + pk + 'TrafficLightType').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'TrafficLightType').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['angle'];
				if(vars.includes('angle')) {
					$('.inputTrafficLightStep' + pk + 'Angle').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Angle').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['state'];
				if(vars.includes('state')) {
					$('.inputTrafficLightStep' + pk + 'State').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'State').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['programId'];
				if(vars.includes('programId')) {
					$('.inputTrafficLightStep' + pk + 'ProgramId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ProgramId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['phase'];
				if(vars.includes('phase')) {
					$('.inputTrafficLightStep' + pk + 'Phase').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Phase').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['inheritPk'];
				if(vars.includes('inheritPk')) {
					$('.inputTrafficLightStep' + pk + 'InheritPk').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'InheritPk').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['classCanonicalName'];
				if(vars.includes('classCanonicalName')) {
					$('.inputTrafficLightStep' + pk + 'ClassCanonicalName').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ClassCanonicalName').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['classSimpleName'];
				if(vars.includes('classSimpleName')) {
					$('.inputTrafficLightStep' + pk + 'ClassSimpleName').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ClassSimpleName').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['classCanonicalNames'];
				if(vars.includes('classCanonicalNames')) {
					$('.inputTrafficLightStep' + pk + 'ClassCanonicalNames').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ClassCanonicalNames').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['sessionId'];
				if(vars.includes('sessionId')) {
					$('.inputTrafficLightStep' + pk + 'SessionId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'SessionId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['userKey'];
				if(vars.includes('userKey')) {
					$('.inputTrafficLightStep' + pk + 'UserKey').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'UserKey').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['saves'];
				if(vars.includes('saves')) {
					$('.inputTrafficLightStep' + pk + 'Saves').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Saves').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['objectTitle'];
				if(vars.includes('objectTitle')) {
					$('.inputTrafficLightStep' + pk + 'ObjectTitle').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ObjectTitle').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['objectSuggest'];
				if(vars.includes('objectSuggest')) {
					$('.inputTrafficLightStep' + pk + 'ObjectSuggest').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ObjectSuggest').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['objectText'];
				if(vars.includes('objectText')) {
					$('.inputTrafficLightStep' + pk + 'ObjectText').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'ObjectText').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['pageUrlId'];
				if(vars.includes('pageUrlId')) {
					$('.inputTrafficLightStep' + pk + 'PageUrlId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'PageUrlId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['pageUrlPk'];
				if(vars.includes('pageUrlPk')) {
					$('.inputTrafficLightStep' + pk + 'PageUrlPk').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'PageUrlPk').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['pageUrlApi'];
				if(vars.includes('pageUrlApi')) {
					$('.inputTrafficLightStep' + pk + 'PageUrlApi').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'PageUrlApi').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['id'];
				if(vars.includes('id')) {
					$('.inputTrafficLightStep' + pk + 'Id').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Id').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['timeStepId'];
				if(vars.includes('timeStepId')) {
					$('.inputTrafficLightStep' + pk + 'TimeStepId').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'TimeStepId').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['x'];
				if(vars.includes('x')) {
					$('.inputTrafficLightStep' + pk + 'X').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'X').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
				var val = o['y'];
				if(vars.includes('y')) {
					$('.inputTrafficLightStep' + pk + 'Y').each(function() {
						if(val !== $(this).val())
							$(this).val(val);
							addGlow($(this));
					});
					$('.varTrafficLightStep' + pk + 'Y').each(function() {
						if(val !== $(this).text())
							$(this).text(val);
							addGlow($(this));
					});
				}
			} else {
				window.location.href = '/traffic-light-step';
			}
		});
	}
}

function pageGraphTrafficLightStep(apiRequest) {
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
					layout['title'] = 'traffic light steps';
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
				Plotly.react('htmBodyGraphMapResultPage', data, layout);
			}
		}
	}
}

function animateStats() {
	$('#pageSearchVal-fqTrafficLightStep_time').text('');
	searchPage('TrafficLightStep', function() {
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
			$('#fqTrafficLightStep_time').val(x);
			$('#fqTrafficLightStep_time').change();
			searchPage('TrafficLightStep');
		}, speedRate);
	});
}
