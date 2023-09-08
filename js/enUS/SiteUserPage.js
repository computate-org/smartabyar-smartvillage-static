
// Search //

async function searchSiteUser($formFilters, success, error) {
	var filters = searchSiteUserFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteUserVals(filters, success, error);
}

function searchSiteUserFilters($formFilters) {
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

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

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

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

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
	}
	return filters;
}

function searchSiteUserVals(filters, success, error) {

	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteUserObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-user-cog ');
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
	searchSiteUserVals($formFilters, success, error);
}

// PATCH //

async function patchSiteUser($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteUserFilters($formFilters);

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

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	var removeSeeArchived = $formValues.find('.removeSeeArchived').val() === 'true';
	var valueSeeArchivedSelectVal = $formValues.find('select.setSeeArchived').val();
	if(valueSeeArchivedSelectVal != null && valueSeeArchivedSelectVal !== '')
		valueSeeArchived = valueSeeArchivedSelectVal == 'true';
	var setSeeArchived = removeSeeArchived ? null : valueSeeArchived;
	var addSeeArchived = $formValues.find('.addSeeArchived').prop('checked');
	if(removeSeeArchived || setSeeArchived != null && setSeeArchived !== '')
		vals['setSeeArchived'] = setSeeArchived;
	if(addSeeArchived != null && addSeeArchived !== '')
		vals['addSeeArchived'] = addSeeArchived;
	var removeSeeArchived = $formValues.find('.removeSeeArchived').prop('checked');
	if(removeSeeArchived != null && removeSeeArchived !== '')
		vals['removeSeeArchived'] = removeSeeArchived;

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').val() === 'true';
	var valueSeeDeletedSelectVal = $formValues.find('select.setSeeDeleted').val();
	if(valueSeeDeletedSelectVal != null && valueSeeDeletedSelectVal !== '')
		valueSeeDeleted = valueSeeDeletedSelectVal == 'true';
	var setSeeDeleted = removeSeeDeleted ? null : valueSeeDeleted;
	var addSeeDeleted = $formValues.find('.addSeeDeleted').prop('checked');
	if(removeSeeDeleted || setSeeDeleted != null && setSeeDeleted !== '')
		vals['setSeeDeleted'] = setSeeDeleted;
	if(addSeeDeleted != null && addSeeDeleted !== '')
		vals['addSeeDeleted'] = addSeeDeleted;
	var removeSeeDeleted = $formValues.find('.removeSeeDeleted').prop('checked');
	if(removeSeeDeleted != null && removeSeeDeleted !== '')
		vals['removeSeeDeleted'] = removeSeeDeleted;

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

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserName = $formValues.find('.valueUserName').val();
	var removeUserName = $formValues.find('.removeUserName').val() === 'true';
	var setUserName = removeUserName ? null : $formValues.find('.setUserName').val();
	var addUserName = $formValues.find('.addUserName').val();
	if(removeUserName || setUserName != null && setUserName !== '')
		vals['setUserName'] = setUserName;
	if(addUserName != null && addUserName !== '')
		vals['addUserName'] = addUserName;
	var removeUserName = $formValues.find('.removeUserName').val();
	if(removeUserName != null && removeUserName !== '')
		vals['removeUserName'] = removeUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	var removeUserEmail = $formValues.find('.removeUserEmail').val() === 'true';
	var setUserEmail = removeUserEmail ? null : $formValues.find('.setUserEmail').val();
	var addUserEmail = $formValues.find('.addUserEmail').val();
	if(removeUserEmail || setUserEmail != null && setUserEmail !== '')
		vals['setUserEmail'] = setUserEmail;
	if(addUserEmail != null && addUserEmail !== '')
		vals['addUserEmail'] = addUserEmail;
	var removeUserEmail = $formValues.find('.removeUserEmail').val();
	if(removeUserEmail != null && removeUserEmail !== '')
		vals['removeUserEmail'] = removeUserEmail;

	var valueUserFirstName = $formValues.find('.valueUserFirstName').val();
	var removeUserFirstName = $formValues.find('.removeUserFirstName').val() === 'true';
	var setUserFirstName = removeUserFirstName ? null : $formValues.find('.setUserFirstName').val();
	var addUserFirstName = $formValues.find('.addUserFirstName').val();
	if(removeUserFirstName || setUserFirstName != null && setUserFirstName !== '')
		vals['setUserFirstName'] = setUserFirstName;
	if(addUserFirstName != null && addUserFirstName !== '')
		vals['addUserFirstName'] = addUserFirstName;
	var removeUserFirstName = $formValues.find('.removeUserFirstName').val();
	if(removeUserFirstName != null && removeUserFirstName !== '')
		vals['removeUserFirstName'] = removeUserFirstName;

	var valueUserLastName = $formValues.find('.valueUserLastName').val();
	var removeUserLastName = $formValues.find('.removeUserLastName').val() === 'true';
	var setUserLastName = removeUserLastName ? null : $formValues.find('.setUserLastName').val();
	var addUserLastName = $formValues.find('.addUserLastName').val();
	if(removeUserLastName || setUserLastName != null && setUserLastName !== '')
		vals['setUserLastName'] = setUserLastName;
	if(addUserLastName != null && addUserLastName !== '')
		vals['addUserLastName'] = addUserLastName;
	var removeUserLastName = $formValues.find('.removeUserLastName').val();
	if(removeUserLastName != null && removeUserLastName !== '')
		vals['removeUserLastName'] = removeUserLastName;

	var valueUserFullName = $formValues.find('.valueUserFullName').val();
	var removeUserFullName = $formValues.find('.removeUserFullName').val() === 'true';
	var setUserFullName = removeUserFullName ? null : $formValues.find('.setUserFullName').val();
	var addUserFullName = $formValues.find('.addUserFullName').val();
	if(removeUserFullName || setUserFullName != null && setUserFullName !== '')
		vals['setUserFullName'] = setUserFullName;
	if(addUserFullName != null && addUserFullName !== '')
		vals['addUserFullName'] = addUserFullName;
	var removeUserFullName = $formValues.find('.removeUserFullName').val();
	if(removeUserFullName != null && removeUserFullName !== '')
		vals['removeUserFullName'] = removeUserFullName;

	patchSiteUserVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteUserFilters($formFilters) {
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

		var $filterSeeArchivedCheckbox = $formFilters.find('input.valueSeeArchived[type = "checkbox"]');
		var $filterSeeArchivedSelect = $formFilters.find('select.valueSeeArchived');
		var filterSeeArchived = $filterSeeArchivedSelect.length ? $filterSeeArchivedSelect.val() : $filterSeeArchivedCheckbox.prop('checked');
		var filterSeeArchivedSelectVal = $formFilters.find('select.filterSeeArchived').val();
		var filterSeeArchived = null;
		if(filterSeeArchivedSelectVal !== '')
			filterSeeArchived = filterSeeArchivedSelectVal == 'true';
		if(filterSeeArchived != null && filterSeeArchived === true)
			filters.push({ name: 'fq', value: 'seeArchived:' + filterSeeArchived });

		var $filterSeeDeletedCheckbox = $formFilters.find('input.valueSeeDeleted[type = "checkbox"]');
		var $filterSeeDeletedSelect = $formFilters.find('select.valueSeeDeleted');
		var filterSeeDeleted = $filterSeeDeletedSelect.length ? $filterSeeDeletedSelect.val() : $filterSeeDeletedCheckbox.prop('checked');
		var filterSeeDeletedSelectVal = $formFilters.find('select.filterSeeDeleted').val();
		var filterSeeDeleted = null;
		if(filterSeeDeletedSelectVal !== '')
			filterSeeDeleted = filterSeeDeletedSelectVal == 'true';
		if(filterSeeDeleted != null && filterSeeDeleted === true)
			filters.push({ name: 'fq', value: 'seeDeleted:' + filterSeeDeleted });

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

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

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
	}
	return filters;
}

function patchSiteUserVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteUserVals(filters, vals, success, error);
}

function patchSiteUserVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/user?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// POST //

async function postSiteUser($formValues, success, error) {
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

	var valueSeeArchived = $formValues.find('.valueSeeArchived').val();
	if(valueSeeArchived != null && valueSeeArchived !== '')
		vals['seeArchived'] = valueSeeArchived == 'true';

	var valueSeeDeleted = $formValues.find('.valueSeeDeleted').val();
	if(valueSeeDeleted != null && valueSeeDeleted !== '')
		vals['seeDeleted'] = valueSeeDeleted == 'true';

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

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserName = $formValues.find('.valueUserName').val();
	if(valueUserName != null && valueUserName !== '')
		vals['userName'] = valueUserName;

	var valueUserEmail = $formValues.find('.valueUserEmail').val();
	if(valueUserEmail != null && valueUserEmail !== '')
		vals['userEmail'] = valueUserEmail;

	var valueUserFirstName = $formValues.find('.valueUserFirstName').val();
	if(valueUserFirstName != null && valueUserFirstName !== '')
		vals['userFirstName'] = valueUserFirstName;

	var valueUserLastName = $formValues.find('.valueUserLastName').val();
	if(valueUserLastName != null && valueUserLastName !== '')
		vals['userLastName'] = valueUserLastName;

	var valueUserFullName = $formValues.find('.valueUserFullName').val();
	if(valueUserFullName != null && valueUserFullName !== '')
		vals['userFullName'] = valueUserFullName;

	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteUserVals(vals, success, error) {
	$.ajax({
		url: '/api/user'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSiteUser($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSiteUserVals(JSON.parse(json), success, error);
}

function putimportSiteUserVals(json, success, error) {
	$.ajax({
		url: '/api/user-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSiteUser(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteUserForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-user-cog w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify site users in ' + json.timeRemaining);
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
async function websocketSiteUserInner(apiRequest) {
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
				var inputSeeArchived = null;
				var inputSeeDeleted = null;
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
				var inputUserKeys = null;
				var inputUserId = null;
				var inputUserName = null;
				var inputUserEmail = null;
				var inputUserFirstName = null;
				var inputUserLastName = null;
				var inputUserFullName = null;

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
				if(vars.includes('seeArchived'))
					inputSeeArchived = $response.find('#Page_seeArchived');
				if(vars.includes('seeDeleted'))
					inputSeeDeleted = $response.find('#Page_seeDeleted');
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
				if(vars.includes('userKeys'))
					inputUserKeys = $response.find('#Page_userKeys');
				if(vars.includes('userId'))
					inputUserId = $response.find('#Page_userId');
				if(vars.includes('userName'))
					inputUserName = $response.find('#Page_userName');
				if(vars.includes('userEmail'))
					inputUserEmail = $response.find('#Page_userEmail');
				if(vars.includes('userFirstName'))
					inputUserFirstName = $response.find('#Page_userFirstName');
				if(vars.includes('userLastName'))
					inputUserLastName = $response.find('#Page_userLastName');
				if(vars.includes('userFullName'))
					inputUserFullName = $response.find('#Page_userFullName');

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

				if(inputSeeArchived) {
					inputSeeArchived.replaceAll('#Page_seeArchived');
					addGlow($('#Page_seeArchived'));
				}

				if(inputSeeDeleted) {
					inputSeeDeleted.replaceAll('#Page_seeDeleted');
					addGlow($('#Page_seeDeleted'));
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

				if(inputUserKeys) {
					inputUserKeys.replaceAll('#Page_userKeys');
					addGlow($('#Page_userKeys'));
				}

				if(inputUserId) {
					inputUserId.replaceAll('#Page_userId');
					addGlow($('#Page_userId'));
				}

				if(inputUserName) {
					inputUserName.replaceAll('#Page_userName');
					addGlow($('#Page_userName'));
				}

				if(inputUserEmail) {
					inputUserEmail.replaceAll('#Page_userEmail');
					addGlow($('#Page_userEmail'));
				}

				if(inputUserFirstName) {
					inputUserFirstName.replaceAll('#Page_userFirstName');
					addGlow($('#Page_userFirstName'));
				}

				if(inputUserLastName) {
					inputUserLastName.replaceAll('#Page_userLastName');
					addGlow($('#Page_userLastName'));
				}

				if(inputUserFullName) {
					inputUserFullName.replaceAll('#Page_userFullName');
					addGlow($('#Page_userFullName'));
				}
		});
	}
}

function pageGraphSiteUser(apiRequest) {
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
					layout['title'] = 'site users';
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
	$('#pageSearchVal-fqSiteUser_time').text('');
	searchPage('SiteUser', function() {
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
			$('#fqSiteUser_time').val(x);
			$('#fqSiteUser_time').change();
			searchPage('SiteUser');
		}, speedRate);
	});
}
