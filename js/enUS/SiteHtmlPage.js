
// Search //

async function searchSiteHtml($formFilters, success, error) {
	var filters = searchSiteHtmlFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteHtmlVals(filters, success, error);
}

function searchSiteHtmlFilters($formFilters) {
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

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterSequenceNum = $formFilters.find('.valueSequenceNum').val();
		if(filterSequenceNum != null && filterSequenceNum !== '')
			filters.push({ name: 'fq', value: 'sequenceNum:' + filterSequenceNum });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterHtmlGroup = $formFilters.find('.valueHtmlGroup').val();
		if(filterHtmlGroup != null && filterHtmlGroup !== '')
			filters.push({ name: 'fq', value: 'htmlGroup:' + filterHtmlGroup });

		var filterEBefore = $formFilters.find('.valueEBefore').val();
		if(filterEBefore != null && filterEBefore !== '')
			filters.push({ name: 'fq', value: 'eBefore:' + filterEBefore });

		var filterEAfter = $formFilters.find('.valueEAfter').val();
		if(filterEAfter != null && filterEAfter !== '')
			filters.push({ name: 'fq', value: 'eAfter:' + filterEAfter });

		var filterTabs = $formFilters.find('.valueTabs').val();
		if(filterTabs != null && filterTabs !== '')
			filters.push({ name: 'fq', value: 'tabs:' + filterTabs });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

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

function searchSiteHtmlVals(filters, success, error) {
	$.ajax({
		url: '/api/html?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteHtmlObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-code ');
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
	searchSiteHtmlVals($formFilters, success, error);
}

// GET //

async function getSiteHtml() {
	$.ajax({
		url: '/api/html/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// POST //

async function postSiteHtml($formValues, success, error) {
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

	var valuePageId = $formValues.find('.valuePageId').val();
	if(valuePageId != null && valuePageId !== '')
		vals['pageId'] = valuePageId;

	var valueSequenceNum = $formValues.find('.valueSequenceNum').val();
	if(valueSequenceNum != null && valueSequenceNum !== '')
		vals['sequenceNum'] = valueSequenceNum;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueHtmlGroup = $formValues.find('.valueHtmlGroup').val();
	if(valueHtmlGroup != null && valueHtmlGroup !== '')
		vals['htmlGroup'] = valueHtmlGroup;

	var valueEBefore = $formValues.find('.valueEBefore').val();
	if(valueEBefore != null && valueEBefore !== '')
		vals['eBefore'] = valueEBefore;

	var valueEAfter = $formValues.find('.valueEAfter').val();
	if(valueEAfter != null && valueEAfter !== '')
		vals['eAfter'] = valueEAfter;

	var valueA = $formValues.find('.valueA').val();
	if(valueA != null && valueA !== '')
		vals['a'] = valueA;

	var valueText = $formValues.find('.valueText').val();
	if(valueText != null && valueText !== '')
		vals['text'] = valueText;

	var valueTabs = $formValues.find('.valueTabs').val();
	if(valueTabs != null && valueTabs !== '')
		vals['tabs'] = valueTabs;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	if(valueHtmlBefore != null && valueHtmlBefore !== '')
		vals['htmlBefore'] = valueHtmlBefore;

	var valueHtmlMiddle = $formValues.find('.valueHtmlMiddle').val();
	if(valueHtmlMiddle != null && valueHtmlMiddle !== '')
		vals['htmlMiddle'] = valueHtmlMiddle;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	if(valueHtmlAfter != null && valueHtmlAfter !== '')
		vals['htmlAfter'] = valueHtmlAfter;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/html'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteHtmlVals(vals, success, error) {
	$.ajax({
		url: '/api/html'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSiteHtml($formFilters, $formValues, id, success, error) {
	var filters = patchSiteHtmlFilters($formFilters);

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

	var valuePageId = $formValues.find('.valuePageId').val();
	var removePageId = $formValues.find('.removePageId').val() === 'true';
	var setPageId = removePageId ? null : $formValues.find('.setPageId').val();
	var addPageId = $formValues.find('.addPageId').val();
	if(removePageId || setPageId != null && setPageId !== '')
		vals['setPageId'] = setPageId;
	if(addPageId != null && addPageId !== '')
		vals['addPageId'] = addPageId;
	var removePageId = $formValues.find('.removePageId').val();
	if(removePageId != null && removePageId !== '')
		vals['removePageId'] = removePageId;

	var valueSequenceNum = $formValues.find('.valueSequenceNum').val();
	var removeSequenceNum = $formValues.find('.removeSequenceNum').val() === 'true';
	var setSequenceNum = removeSequenceNum ? null : $formValues.find('.setSequenceNum').val();
	var addSequenceNum = $formValues.find('.addSequenceNum').val();
	if(removeSequenceNum || setSequenceNum != null && setSequenceNum !== '')
		vals['setSequenceNum'] = setSequenceNum;
	if(addSequenceNum != null && addSequenceNum !== '')
		vals['addSequenceNum'] = addSequenceNum;
	var removeSequenceNum = $formValues.find('.removeSequenceNum').val();
	if(removeSequenceNum != null && removeSequenceNum !== '')
		vals['removeSequenceNum'] = removeSequenceNum;

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

	var valueHtmlGroup = $formValues.find('.valueHtmlGroup').val();
	var removeHtmlGroup = $formValues.find('.removeHtmlGroup').val() === 'true';
	var setHtmlGroup = removeHtmlGroup ? null : $formValues.find('.setHtmlGroup').val();
	var addHtmlGroup = $formValues.find('.addHtmlGroup').val();
	if(removeHtmlGroup || setHtmlGroup != null && setHtmlGroup !== '')
		vals['setHtmlGroup'] = setHtmlGroup;
	if(addHtmlGroup != null && addHtmlGroup !== '')
		vals['addHtmlGroup'] = addHtmlGroup;
	var removeHtmlGroup = $formValues.find('.removeHtmlGroup').val();
	if(removeHtmlGroup != null && removeHtmlGroup !== '')
		vals['removeHtmlGroup'] = removeHtmlGroup;

	var valueEBefore = $formValues.find('.valueEBefore').val();
	var removeEBefore = $formValues.find('.removeEBefore').val() === 'true';
	var setEBefore = removeEBefore ? null : $formValues.find('.setEBefore').val();
	var addEBefore = $formValues.find('.addEBefore').val();
	if(removeEBefore || setEBefore != null && setEBefore !== '')
		vals['setEBefore'] = setEBefore;
	if(addEBefore != null && addEBefore !== '')
		vals['addEBefore'] = addEBefore;
	var removeEBefore = $formValues.find('.removeEBefore').val();
	if(removeEBefore != null && removeEBefore !== '')
		vals['removeEBefore'] = removeEBefore;

	var valueEAfter = $formValues.find('.valueEAfter').val();
	var removeEAfter = $formValues.find('.removeEAfter').val() === 'true';
	var setEAfter = removeEAfter ? null : $formValues.find('.setEAfter').val();
	var addEAfter = $formValues.find('.addEAfter').val();
	if(removeEAfter || setEAfter != null && setEAfter !== '')
		vals['setEAfter'] = setEAfter;
	if(addEAfter != null && addEAfter !== '')
		vals['addEAfter'] = addEAfter;
	var removeEAfter = $formValues.find('.removeEAfter').val();
	if(removeEAfter != null && removeEAfter !== '')
		vals['removeEAfter'] = removeEAfter;

	var valueA = $formValues.find('.valueA').val();
	var removeA = $formValues.find('.removeA').val() === 'true';
	var setA = removeA ? null : $formValues.find('.setA').val();
	var addA = $formValues.find('.addA').val();
	if(removeA || setA != null && setA !== '')
		vals['setA'] = setA;
	if(addA != null && addA !== '')
		vals['addA'] = addA;
	var removeA = $formValues.find('.removeA').val();
	if(removeA != null && removeA !== '')
		vals['removeA'] = removeA;

	var valueText = $formValues.find('.valueText').val();
	var removeText = $formValues.find('.removeText').val() === 'true';
	var setText = removeText ? null : $formValues.find('.setText').val();
	var addText = $formValues.find('.addText').val();
	if(removeText || setText != null && setText !== '')
		vals['setText'] = setText;
	if(addText != null && addText !== '')
		vals['addText'] = addText;
	var removeText = $formValues.find('.removeText').val();
	if(removeText != null && removeText !== '')
		vals['removeText'] = removeText;

	var valueTabs = $formValues.find('.valueTabs').val();
	var removeTabs = $formValues.find('.removeTabs').val() === 'true';
	var setTabs = removeTabs ? null : $formValues.find('.setTabs').val();
	var addTabs = $formValues.find('.addTabs').val();
	if(removeTabs || setTabs != null && setTabs !== '')
		vals['setTabs'] = setTabs;
	if(addTabs != null && addTabs !== '')
		vals['addTabs'] = addTabs;
	var removeTabs = $formValues.find('.removeTabs').val();
	if(removeTabs != null && removeTabs !== '')
		vals['removeTabs'] = removeTabs;

	var valueHtmlBefore = $formValues.find('.valueHtmlBefore').val();
	var removeHtmlBefore = $formValues.find('.removeHtmlBefore').val() === 'true';
	var setHtmlBefore = removeHtmlBefore ? null : $formValues.find('.setHtmlBefore').val();
	var addHtmlBefore = $formValues.find('.addHtmlBefore').val();
	if(removeHtmlBefore || setHtmlBefore != null && setHtmlBefore !== '')
		vals['setHtmlBefore'] = setHtmlBefore;
	if(addHtmlBefore != null && addHtmlBefore !== '')
		vals['addHtmlBefore'] = addHtmlBefore;
	var removeHtmlBefore = $formValues.find('.removeHtmlBefore').val();
	if(removeHtmlBefore != null && removeHtmlBefore !== '')
		vals['removeHtmlBefore'] = removeHtmlBefore;

	var valueHtmlMiddle = $formValues.find('.valueHtmlMiddle').val();
	var removeHtmlMiddle = $formValues.find('.removeHtmlMiddle').val() === 'true';
	var setHtmlMiddle = removeHtmlMiddle ? null : $formValues.find('.setHtmlMiddle').val();
	var addHtmlMiddle = $formValues.find('.addHtmlMiddle').val();
	if(removeHtmlMiddle || setHtmlMiddle != null && setHtmlMiddle !== '')
		vals['setHtmlMiddle'] = setHtmlMiddle;
	if(addHtmlMiddle != null && addHtmlMiddle !== '')
		vals['addHtmlMiddle'] = addHtmlMiddle;
	var removeHtmlMiddle = $formValues.find('.removeHtmlMiddle').val();
	if(removeHtmlMiddle != null && removeHtmlMiddle !== '')
		vals['removeHtmlMiddle'] = removeHtmlMiddle;

	var valueHtmlAfter = $formValues.find('.valueHtmlAfter').val();
	var removeHtmlAfter = $formValues.find('.removeHtmlAfter').val() === 'true';
	var setHtmlAfter = removeHtmlAfter ? null : $formValues.find('.setHtmlAfter').val();
	var addHtmlAfter = $formValues.find('.addHtmlAfter').val();
	if(removeHtmlAfter || setHtmlAfter != null && setHtmlAfter !== '')
		vals['setHtmlAfter'] = setHtmlAfter;
	if(addHtmlAfter != null && addHtmlAfter !== '')
		vals['addHtmlAfter'] = addHtmlAfter;
	var removeHtmlAfter = $formValues.find('.removeHtmlAfter').val();
	if(removeHtmlAfter != null && removeHtmlAfter !== '')
		vals['removeHtmlAfter'] = removeHtmlAfter;

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

	patchSiteHtmlVals(id == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'id:' + id}], vals, success, error);
}

function patchSiteHtmlFilters($formFilters) {
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

		var filterPageId = $formFilters.find('.valuePageId').val();
		if(filterPageId != null && filterPageId !== '')
			filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

		var filterSequenceNum = $formFilters.find('.valueSequenceNum').val();
		if(filterSequenceNum != null && filterSequenceNum !== '')
			filters.push({ name: 'fq', value: 'sequenceNum:' + filterSequenceNum });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterHtmlGroup = $formFilters.find('.valueHtmlGroup').val();
		if(filterHtmlGroup != null && filterHtmlGroup !== '')
			filters.push({ name: 'fq', value: 'htmlGroup:' + filterHtmlGroup });

		var filterEBefore = $formFilters.find('.valueEBefore').val();
		if(filterEBefore != null && filterEBefore !== '')
			filters.push({ name: 'fq', value: 'eBefore:' + filterEBefore });

		var filterEAfter = $formFilters.find('.valueEAfter').val();
		if(filterEAfter != null && filterEAfter !== '')
			filters.push({ name: 'fq', value: 'eAfter:' + filterEAfter });

		var filterTabs = $formFilters.find('.valueTabs').val();
		if(filterTabs != null && filterTabs !== '')
			filters.push({ name: 'fq', value: 'tabs:' + filterTabs });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

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

function patchSiteHtmlVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteHtmlVals(filters, vals, success, error);
}

function patchSiteHtmlVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/html?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSiteHtml($formValues, id, success, error) {
	var json = $formValues.find('.PUTImport_searchList').val();
	if(json != null && json !== '')
		putimportSiteHtmlVals(JSON.parse(json), success, error);
}

function putimportSiteHtmlVals(json, success, error) {
	$.ajax({
		url: '/api/html-import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

async function websocketSiteHtml(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteHtml', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteHtmlForm :input[name=id]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-2017-navy-peony ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-code w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify HTMLs in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-2017-navy-peony ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
async function websocketSiteHtmlInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteHtmlVals([ {name: 'fq', value: 'id:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteHtml' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteHtml' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteHtml' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSiteHtml' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSiteHtml' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Deleted'));
			}
			var val = o['pageId'];
			if(vars.includes('pageId')) {
				$('.inputSiteHtml' + pk + 'PageId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'PageId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'PageId'));
			}
			var val = o['sequenceNum'];
			if(vars.includes('sequenceNum')) {
				$('.inputSiteHtml' + pk + 'SequenceNum').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'SequenceNum').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'SequenceNum'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteHtml' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'InheritPk'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteHtml' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Saves'));
			}
			var val = o['htmlGroup'];
			if(vars.includes('htmlGroup')) {
				$('.inputSiteHtml' + pk + 'HtmlGroup').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'HtmlGroup').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'HtmlGroup'));
			}
			var val = o['eBefore'];
			if(vars.includes('eBefore')) {
				$('.inputSiteHtml' + pk + 'EBefore').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'EBefore').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'EBefore'));
			}
			var val = o['eAfter'];
			if(vars.includes('eAfter')) {
				$('.inputSiteHtml' + pk + 'EAfter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'EAfter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'EAfter'));
			}
			var val = o['a'];
			if(vars.includes('a')) {
				$('.inputSiteHtml' + pk + 'A').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'A').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'A'));
			}
			var val = o['text'];
			if(vars.includes('text')) {
				$('.inputSiteHtml' + pk + 'Text').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Text').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Text'));
			}
			var val = o['tabs'];
			if(vars.includes('tabs')) {
				$('.inputSiteHtml' + pk + 'Tabs').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Tabs').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Tabs'));
			}
			var val = o['htmlBefore'];
			if(vars.includes('htmlBefore')) {
				$('.inputSiteHtml' + pk + 'HtmlBefore').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'HtmlBefore').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'HtmlBefore'));
			}
			var val = o['htmlMiddle'];
			if(vars.includes('htmlMiddle')) {
				$('.inputSiteHtml' + pk + 'HtmlMiddle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'HtmlMiddle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'HtmlMiddle'));
			}
			var val = o['htmlAfter'];
			if(vars.includes('htmlAfter')) {
				$('.inputSiteHtml' + pk + 'HtmlAfter').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'HtmlAfter').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'HtmlAfter'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteHtml' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteHtml' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteHtml' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ClassCanonicalNames'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteHtml' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSiteHtml' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSiteHtml' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSiteHtml' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSiteHtml' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSiteHtml' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'PageUrlApi'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteHtml' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteHtml' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteHtml' + pk + 'Id'));
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
				rangeVals = Object.keys(rangeCounts).map(key => key.substring(0, 10));
			}
			var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
			var pivot1VarIndexed = pivot1Name;
			if(pivot1VarIndexed.includes(','))
				pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
			var pivot1Var = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf('_'));
			var pivot1VarFq = window.varsFq[pivot1Var];
			var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
			var pivot1Vals = Object.keys(pivot1Map);
			var data = [];
			var layout = {};
			if(pivot1VarFq.classSimpleName === 'Point') {
				layout['dragmode'] = 'zoom';
				layout['mapbox'] = { style: 'open-street-map' };
				layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
				var trace = {};
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
				layout['title'] = 'SiteHtml';
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
					trace['x'] = Object.keys(pivot1Counts).map(key => key.substring(0, 10));
					trace['y'] = Object.values(pivot1Counts);
					trace['mode'] = 'lines+markers';
					trace['name'] = pivot1Val;
					data.push(trace);
				});
			}
			Plotly.newPlot('htmBodyGraphPageLayout', data, layout);
		}
	}
}
