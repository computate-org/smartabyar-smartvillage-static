
// Search //

async function searchSystemEvent($formFilters, success, error) {
	var filters = searchSystemEventFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSystemEventVals(filters, success, error);
}

function searchSystemEventFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

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

		var filterType = $formFilters.find('.valueType').val();
		if(filterType != null && filterType !== '')
			filters.push({ name: 'fq', value: 'type:' + filterType });

		var filterCompleted = $formFilters.find('.valueCompleted').val();
		if(filterCompleted != null && filterCompleted !== '')
			filters.push({ name: 'fq', value: 'completed:' + filterCompleted });

		var filterPageImageUri = $formFilters.find('.valuePageImageUri').val();
		if(filterPageImageUri != null && filterPageImageUri !== '')
			filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

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

function searchSystemEventVals(filters, success, error) {

	$.ajax({
		url: '/api/system-event?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSystemEventObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-square-terminal ');
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
	searchSystemEventVals($formFilters, success, error);
}

// GET //

async function getSystemEvent() {
	$.ajax({
		url: '/api/system-event/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// POST //

async function postSystemEvent($formValues, success, error) {
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

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valueType = $formValues.find('.valueType').val();
	if(valueType != null && valueType !== '')
		vals['type'] = valueType;

	var valueMessage = $formValues.find('.valueMessage').val();
	if(valueMessage != null && valueMessage !== '')
		vals['message'] = valueMessage;

	var valueStatus = $formValues.find('.valueStatus').val();
	if(valueStatus != null && valueStatus !== '')
		vals['status'] = valueStatus;

	var valueCompleted = $formValues.find('.valueCompleted').val();
	if(valueCompleted != null && valueCompleted !== '')
		vals['completed'] = valueCompleted;

	var valuePageImageUri = $formValues.find('.valuePageImageUri').val();
	if(valuePageImageUri != null && valuePageImageUri !== '')
		vals['pageImageUri'] = valuePageImageUri;

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

	var valueObjectText = $formValues.find('.valueObjectText').val();
	if(valueObjectText != null && valueObjectText !== '')
		vals['objectText'] = valueObjectText;

	$.ajax({
		url: '/api/system-event'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSystemEventVals(vals, success, error) {
	$.ajax({
		url: '/api/system-event'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSystemEvent($formFilters, $formValues, id, success, error) {
	var filters = patchSystemEventFilters($formFilters);

	var vals = {};

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

	var valueType = $formValues.find('.valueType').val();
	var removeType = $formValues.find('.removeType').val() === 'true';
	var setType = removeType ? null : $formValues.find('.setType').val();
	var addType = $formValues.find('.addType').val();
	if(removeType || setType != null && setType !== '')
		vals['setType'] = setType;
	if(addType != null && addType !== '')
		vals['addType'] = addType;
	var removeType = $formValues.find('.removeType').val();
	if(removeType != null && removeType !== '')
		vals['removeType'] = removeType;

	var valueMessage = $formValues.find('.valueMessage').val();
	var removeMessage = $formValues.find('.removeMessage').val() === 'true';
	var setMessage = removeMessage ? null : $formValues.find('.setMessage').val();
	var addMessage = $formValues.find('.addMessage').val();
	if(removeMessage || setMessage != null && setMessage !== '')
		vals['setMessage'] = setMessage;
	if(addMessage != null && addMessage !== '')
		vals['addMessage'] = addMessage;
	var removeMessage = $formValues.find('.removeMessage').val();
	if(removeMessage != null && removeMessage !== '')
		vals['removeMessage'] = removeMessage;

	var valueStatus = $formValues.find('.valueStatus').val();
	var removeStatus = $formValues.find('.removeStatus').val() === 'true';
	var setStatus = removeStatus ? null : $formValues.find('.setStatus').val();
	var addStatus = $formValues.find('.addStatus').val();
	if(removeStatus || setStatus != null && setStatus !== '')
		vals['setStatus'] = setStatus;
	if(addStatus != null && addStatus !== '')
		vals['addStatus'] = addStatus;
	var removeStatus = $formValues.find('.removeStatus').val();
	if(removeStatus != null && removeStatus !== '')
		vals['removeStatus'] = removeStatus;

	var valueCompleted = $formValues.find('.valueCompleted').val();
	var removeCompleted = $formValues.find('.removeCompleted').val() === 'true';
	var setCompleted = removeCompleted ? null : $formValues.find('.setCompleted').val();
	var addCompleted = $formValues.find('.addCompleted').val();
	if(removeCompleted || setCompleted != null && setCompleted !== '')
		vals['setCompleted'] = setCompleted;
	if(addCompleted != null && addCompleted !== '')
		vals['addCompleted'] = addCompleted;
	var removeCompleted = $formValues.find('.removeCompleted').val();
	if(removeCompleted != null && removeCompleted !== '')
		vals['removeCompleted'] = removeCompleted;

	var valuePageImageUri = $formValues.find('.valuePageImageUri').val();
	var removePageImageUri = $formValues.find('.removePageImageUri').val() === 'true';
	var setPageImageUri = removePageImageUri ? null : $formValues.find('.setPageImageUri').val();
	var addPageImageUri = $formValues.find('.addPageImageUri').val();
	if(removePageImageUri || setPageImageUri != null && setPageImageUri !== '')
		vals['setPageImageUri'] = setPageImageUri;
	if(addPageImageUri != null && addPageImageUri !== '')
		vals['addPageImageUri'] = addPageImageUri;
	var removePageImageUri = $formValues.find('.removePageImageUri').val();
	if(removePageImageUri != null && removePageImageUri !== '')
		vals['removePageImageUri'] = removePageImageUri;

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

	var valueObjectText = $formValues.find('.valueObjectText').val();
	var removeObjectText = $formValues.find('.removeObjectText').val() === 'true';
	var setObjectText = removeObjectText ? null : $formValues.find('.setObjectText').val();
	var addObjectText = $formValues.find('.addObjectText').val();
	if(removeObjectText || setObjectText != null && setObjectText !== '')
		vals['setObjectText'] = setObjectText;
	if(addObjectText != null && addObjectText !== '')
		vals['addObjectText'] = addObjectText;
	var removeObjectText = $formValues.find('.removeObjectText').val();
	if(removeObjectText != null && removeObjectText !== '')
		vals['removeObjectText'] = removeObjectText;

	patchSystemEventVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchSystemEventFilters($formFilters) {
	var filters = [];
	if($formFilters) {
		filters.push({ name: 'softCommit', value: 'true' });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

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

		var filterType = $formFilters.find('.valueType').val();
		if(filterType != null && filterType !== '')
			filters.push({ name: 'fq', value: 'type:' + filterType });

		var filterCompleted = $formFilters.find('.valueCompleted').val();
		if(filterCompleted != null && filterCompleted !== '')
			filters.push({ name: 'fq', value: 'completed:' + filterCompleted });

		var filterPageImageUri = $formFilters.find('.valuePageImageUri').val();
		if(filterPageImageUri != null && filterPageImageUri !== '')
			filters.push({ name: 'fq', value: 'pageImageUri:' + filterPageImageUri });

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

function patchSystemEventVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSystemEventVals(filters, vals, success, error);
}

function patchSystemEventVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/system-event?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSystemEvent($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSystemEventVals(JSON.parse(json), success, error);
}

function putimportSystemEventVals(json, success, error) {
	$.ajax({
		url: '/api/system-event-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSystemEvent(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSystemEvent', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SystemEventForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-square-terminal w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify system events in ' + json.timeRemaining);
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
async function websocketSystemEventInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSystemEventVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSystemEvent' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Modified'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSystemEvent' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Created'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSystemEvent' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSystemEvent' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSystemEvent' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Deleted'));
			}
			var val = o['type'];
			if(vars.includes('type')) {
				$('.inputSystemEvent' + pk + 'Type').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Type').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Type'));
			}
			var val = o['message'];
			if(vars.includes('message')) {
				$('.inputSystemEvent' + pk + 'Message').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Message').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Message'));
			}
			var val = o['status'];
			if(vars.includes('status')) {
				$('.inputSystemEvent' + pk + 'Status').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Status').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Status'));
			}
			var val = o['completed'];
			if(vars.includes('completed')) {
				$('.inputSystemEvent' + pk + 'Completed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Completed').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Completed'));
			}
			var val = o['pageImageUri'];
			if(vars.includes('pageImageUri')) {
				$('.inputSystemEvent' + pk + 'PageImageUri').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'PageImageUri').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'PageImageUri'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSystemEvent' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'InheritPk'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSystemEvent' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSystemEvent' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSystemEvent' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSystemEvent' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'SessionId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSystemEvent' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSystemEvent' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSystemEvent' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSystemEvent' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSystemEvent' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSystemEvent' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSystemEvent' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSystemEvent' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSystemEvent' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSystemEvent' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).val(val);
				});
				addGlow($('.inputSystemEvent' + pk + 'Id'));
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
					layout['title'] = 'SystemEvent';
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
				Plotly.react('htmBodyGraphPageLayout', data, layout);
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
	$('#fqSystemEvent_time').val(x);
	$('#fqSystemEvent_time').change();
	searchPage();
	}, speedRate);
}
